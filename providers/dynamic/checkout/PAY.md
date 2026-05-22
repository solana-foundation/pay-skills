---
name: checkout
title: "Dynamic"
description: "Cross-chain payment routing for AI agents. Accepts any token on any chain (ETH, SOL, MATIC, USDC, and 50+ more) and settles to a target token/chain via automatic swap and bridge across EVM networks, Solana, Polygon, Arbitrum, and more."
use_case: "Use for cross-chain token swaps to resolve x402 or MPP paywalls; to check agent wallet balances across chains; to bridge any token to USDC on Base/Ethereum; to fund agent MPC wallets via Dynamic's swap and settlement engine."
category: finance
service_url: https://app.dynamicauth.com/api/v0
openapi:
  path: openapi.json
---

Dynamic's Checkout API lets AI agents pay for services using any token on any chain.
It handles cross-chain routing automatically: if a merchant requires USDC on Base but
the agent holds ETH on Ethereum, Dynamic swaps and bridges in one atomic flow. No
manual bridging, no token pre-selection.

**Feature flag:** Checkout must be enabled per-environment by Dynamic support before
the `POST /environments/{environmentId}/checkouts` endpoint becomes available. Without
it you get `400 "Checkouts are not enabled for this environment"`.

**Auth — critical distinction:**
- Admin endpoints (`/environments/{environmentId}/...`) → `Authorization: Bearer dyn_<token>`
- SDK endpoints (`/sdk/{environmentId}/...`) → `x-dynamic-checkout-session-token: <token>` only.
  Do NOT send a Bearer header on SDK endpoints — it returns 401.

API keys and environment IDs: https://app.dynamic.xyz/dashboard/developer/api.
Store as env vars (`DYNAMIC_AUTH_TOKEN`, `DYNAMIC_ENVIRONMENT_ID`) — never hardcode.

**Supported source chains and tokens:**
- EVM: ETH, USDC, MATIC, BNB, ARB, OP, AVAX, and any ERC-20
- Solana: SOL, USDC, and SPL tokens
- Chains: Ethereum, Base, Polygon, Arbitrum, Optimism, Avalanche, BNB Chain, Solana, Sui, Tron

**Settlement:** Any source → USDC/USDT on any supported chain, delivered to a
destination address. Strategy options: `cheapest`, `fastest`, `preferred_order`.

**Supported chains:** EVM (all major networks), Solana (`101`), Bitcoin (`1`), Sui (`501`).

**Native token addresses:**
- EVM: `0x0000000000000000000000000000000000000000` or `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`
- Solana: `11111111111111111111111111111111` (System Program) or `So11111111111111111111111111111111111111112` (wSOL)
- Bitcoin: `11111111111111111111111111111111` or `bitcoin`
- Sui: `0x2::sui::SUI`

## Payment flow

1. `POST /environments/{environmentId}/checkouts` — Create a reusable checkout config.
   Cache the `id` — reuse it for every payment to the same destination.
2. `POST /sdk/{environmentId}/checkouts/{checkoutId}/transactions` — Open a transaction
   for a USD amount. Returns `transactionId` and `sessionToken` (one-time, store it).
3. `POST /sdk/{environmentId}/transactions/{transactionId}/source` — Attach the agent's
   source wallet. Risk screening runs asynchronously; poll step 4.
4. `GET /sdk/{environmentId}/transactions/{transactionId}` — Poll `riskState` until
   `cleared` or `not_required` before requesting a quote.
5. `POST /sdk/{environmentId}/transactions/{transactionId}/quote` — Fetch a swap quote.
   Pass `fromTokenAddress` (use `0x000...0` for EVM native, `11111111111111111111111111111111`
   for native SOL). Quote expires in ~60s.
6. `POST /sdk/{environmentId}/transactions/{transactionId}/prepare` — Lock the quote;
   returns the signing payload. Call immediately before signing.
7. Sign and broadcast on-chain (see Signing section below).
8. `POST /sdk/{environmentId}/transactions/{transactionId}/broadcast` — Record the txHash.
9. `GET /sdk/{environmentId}/transactions/{transactionId}` — Poll until
   `settlementState === "completed"`. Settlement progresses: `none` → `routing`
   → `bridging` → `swapping` → `settling` → `completed`. Same-chain same-token
   payments jump directly to `completed`.

Manage existing checkout configs with `GET`, `PATCH`, `DELETE` on
`/environments/{environmentId}/checkouts/{checkoutId}`.

## Signing and broadcasting

`/prepare` returns the payload but does not sign or broadcast. Use the Dynamic Node SDK:

**EVM (Base, Ethereum, Polygon, Arbitrum…):**
```typescript
import { DynamicEvmWalletClient } from '@dynamic-labs-wallet/node-evm';
const client = new DynamicEvmWalletClient({ environmentId });
await client.authenticateApiToken(apiToken);
const walletClient = await client.getWalletClient({ accountAddress, chainId: 8453, rpcUrl });
// payload.evmTransaction contains { to, data, value, gasLimit, gasPrice }
const txHash = await walletClient.sendTransaction({
  to: payload.evmTransaction.to,
  data: payload.evmTransaction.data,
  value: BigInt(payload.evmTransaction.value || '0'),
  gas: BigInt(payload.evmTransaction.gasLimit),
  chainId: 8453,
});
```

**Solana — IMPORTANT: signTransaction() returns only the signature, not the full tx:**
```typescript
import { DynamicSvmWalletClient, decodeBase58, addSignatureToTransaction } from '@dynamic-labs-wallet/node-svm';
import { VersionedTransaction, Connection, PublicKey } from '@solana/web3.js';

const client = new DynamicSvmWalletClient({ environmentId });
await client.authenticateApiToken(apiToken);

// 1. Decode base64 serializedTransaction → VersionedTransaction
const vtx = VersionedTransaction.deserialize(
  Buffer.from(payload.serializedTransaction, 'base64')
);

// 2. MPC sign — returns base58 signature string (64 bytes), NOT the full signed tx
const signedRaw = await client.signTransaction({ senderAddress, transaction: vtx });

// 3. Decode signature and add it back to the transaction
const sigBytes = decodeBase58(signedRaw);
const signedVtx = addSignatureToTransaction({
  transaction: vtx,
  signature: sigBytes,
  signerPublicKey: new PublicKey(senderAddress),
});

// 4. Broadcast (skipPreflight avoids false simulation failures from stale oracles)
const connection = new Connection(rpcUrl, 'confirmed');
const sig = await connection.sendRawTransaction(signedVtx.serialize(), { skipPreflight: true });
await connection.confirmTransaction(sig, 'confirmed');
```

**Do NOT** use the SDK's `sendTransaction()` helper with the output of `signTransaction()` —
it does `Buffer.from(str)` which interprets the base58 string as UTF-8 bytes, producing
garbled bytes and a "failed to deserialize VersionedTransaction" RPC error.

After broadcasting, call step 8: `POST .../broadcast  →  { txHash: sig }`

## Solana routing notes

The Checkout API routes SOL→USDC through available DEXes via LI.FI. Two important patterns:

- **Same-chain SOL→USDC** commonly routes via Titan. Titan usually works fine but can
  fail with `PythOracleOutdated` (error 13014) if oracle prices are stale at broadcast
  time. If you hit this, adjust `slippage` in the quote request to try an alternative
  route. Use `skipPreflight: true` when broadcasting to bypass simulation-only failures.

- **Cross-chain SOL→USDC on Base** routes via MayanFinance FastMCTP — zero fees and no
  oracle dependency. Recommended for agents settling into EVM chains.

Use Helius (or another high-quality Solana RPC) rather than the public endpoint for
better transaction landing and less simulation noise.

## Balance API

`GET /sdk/{environmentId}/chains/{chainName}/balances` returns ERC-20/SPL token
balances. Pass `includeNative=true` to also get the native token balance
(ETH, SOL, etc.) — it is omitted by default.

Solana network IDs: `101` = Mainnet Beta, `102` = Testnet, `103` = Devnet.

```
# EVM (Base)
GET /sdk/{env}/chains/EVM/balances?accountAddress=0x...&networkId=8453&includeNative=true

# Solana mainnet
GET /sdk/{env}/chains/SOL/balances?accountAddress=<addr>&networkId=101&includeNative=true
```

The indexer can lag 60–90s after a deposit. If a balance check returns 0
immediately after funding, wait a moment and retry.

## Simulation endpoints

Before signing (optional but recommended):
- `POST /sdk/{environmentId}/evm/simulateTransaction` — dry-run EVM tx, get revert reason
- `POST /sdk/{environmentId}/solana/simulateTransaction` — dry-run Solana tx, get program logs

Note: Solana simulation can fail with `PythOracleOutdated` even when the tx will succeed
on validators. Use `skipPreflight: true` when broadcasting to bypass this.

## Spend-aware usage

- Cache `checkoutId` from step 1 — reusable for all payments to the same destination.
- Pass `networkId=<chainId>` to the balances endpoint to avoid fetching all chains.
- Quotes expire in ~60s. Authenticate the SDK before `prepare` to minimize the gap.
- Only call `prepare` when ready to sign immediately — it locks the quote and starts
  the expiry clock on the MPC signing window.
- Call `POST .../cancel` if anything fails after `prepare` to release the locked state.
- For amounts < $1 USD, check `fees.totalFeeUsd` in the quote — bridge overhead can
  exceed the payment amount at small sizes.
- Settle to Base USDC when possible — it has the most liquidity and lowest fees.
