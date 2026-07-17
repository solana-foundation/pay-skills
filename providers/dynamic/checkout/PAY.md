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
`POST /environments/{environmentId}/checkouts` is available. Without it you get
`400 "Checkouts are not enabled for this environment"`.

**Auth — critical distinction:**
- Admin endpoints (`/environments/{environmentId}/...`) → `Authorization: Bearer dyn_<token>`
- SDK endpoints (`/sdk/{environmentId}/...`) → `x-dynamic-checkout-session-token: <token>` only.
  Sending Bearer on SDK endpoints returns 401.
  **Exception:** `POST /sdk/{environmentId}/checkouts/{checkoutId}/transactions` (step 2) is
  intentionally unauthenticated — it issues the session token. All subsequent SDK calls require it.

API keys: https://app.dynamic.xyz/dashboard/developer/api. Store as env vars — never hardcode.

**Supported chains:** EVM (all major networks), Solana (`101`), Bitcoin (`1`), Sui (`501`).

**Native token addresses by chain:**
- EVM: `0x0000000000000000000000000000000000000000` or `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`
- Solana: `11111111111111111111111111111111` (System Program) or `So11111111111111111111111111111111111111112` (wSOL)
- Bitcoin: `11111111111111111111111111111111` or `bitcoin`
- Sui: `0x2::sui::SUI`

## Payment mode vs Deposit mode

The checkout supports two modes set in step 1. The 9 steps are identical — only the
amount semantics differ:

| | `mode: "payment"` | `mode: "deposit"` |
|---|---|---|
| Who fixes the amount | Receiver (merchant) | Sender (user) |
| `amount` in step 2 | What the receiver collects | What the sender wants to send |
| `toAmount` in quote | Equals the fixed receiver amount | What lands after swap + fees |
| `fromAmount` in quote | What sender must pay (incl. fees) | What sender's wallet is charged |
| Use for | Invoices, e-commerce, paid APIs | Funding flows, on-ramps, top-ups |

## Payment flow (9 steps)

1. `POST /environments/{environmentId}/checkouts` — Create a reusable checkout config with
   `mode`, `settlementConfig` (token + chain to receive), and `destinationConfig` (wallet
   address to deliver to). Cache the `id` — reuse for every payment to the same destination.
   Strategy: `cheapest` (lowest cost), `fastest` (fewest steps), `preferred_order` (first
   available settlement in listed order).

2. `POST /sdk/{environmentId}/checkouts/{checkoutId}/transactions` — Open a transaction for
   a USD amount. Returns `transactionId` and a one-time `sessionToken` (`dct_...`) — store
   both immediately; the session token cannot be retrieved again.

3. `POST /sdk/{environmentId}/transactions/{transactionId}/source` — Attach the source
   wallet (`fromAddress`, `fromChainId`, `fromChainName`). Risk screening runs async.
   Returns `403` if the source is blocked by sanctions — cancel and use a different wallet.

4. `GET /sdk/{environmentId}/transactions/{transactionId}` — Poll every 2–3s until
   `riskState` is `"cleared"` or `"not_required"`. Do not request a quote until cleared.
   `riskState` starts as `"unknown"`, transitions to `"cleared"` / `"not_required"` / `"blocked"`.

5. `POST /sdk/{environmentId}/transactions/{transactionId}/quote` — Fetch a swap quote.
   Pass `fromTokenAddress` and optionally `slippage` (decimal, e.g. `0.005` = 0.5%).
   Quote expires in **60 seconds** — call prepare before expiry or re-quote.
   - **Payment mode:** `toAmount` = receiver's fixed amount; `fromAmount` = what sender pays
   - **Deposit mode:** `fromAmount` = sender's charge; `toAmount` = what lands at destination

6. `POST /sdk/{environmentId}/transactions/{transactionId}/prepare` — Lock the quote; returns
   `quote.signingPayload`. Call immediately before signing — locking starts the expiry clock.
   Payload shape depends on chain: `evmTransaction` (EVM), `evmApproval` (ERC-20 approval),
   `serializedTransaction` (SOL/SUI, base64), `psbt` (BTC, base64 unsigned PSBT).
   If `evmApproval` is present, send the approval transaction first, then the main tx.

7. Sign and broadcast on-chain — see **Signing** section below.

8. `POST /sdk/{environmentId}/transactions/{transactionId}/broadcast` — Record the txHash.
   Point of no return: after this the transaction cannot be cancelled.

9. Poll `GET .../transactions/{transactionId}` every 3–4s until `settlementState === "completed"`.
   Settlement progression: `none` → `routing` → `bridging` → `swapping` → `settling` → `completed`.
   Same-chain same-token payments jump directly to `completed`.
   Or subscribe via webhooks (see **Webhooks** section).

Cancel any time before step 8 (states: `initiated`, `source_attached`, `quoted`, `signing`):
`POST /sdk/{environmentId}/transactions/{transactionId}/cancel`

Manage checkout configs: `GET`, `PATCH`, `DELETE` on `/environments/{environmentId}/checkouts/{checkoutId}`.

## Signing and broadcasting

Any Dynamic SDK can handle signing — Node, React, React Native, Flutter, Swift, Kotlin,
Python, Rust, Unity, and more. See [docs.dynamic.xyz](https://docs.dynamic.xyz) for your
platform. The examples below use the Node SDK for server-side agents.

**EVM (Base, Ethereum, Polygon, Arbitrum…):**
```typescript
import { DynamicEvmWalletClient } from '@dynamic-labs-wallet/node-evm';
const client = new DynamicEvmWalletClient({ environmentId });
await client.authenticateApiToken(apiToken);
const walletClient = await client.getWalletClient({ accountAddress, chainId: 8453, rpcUrl });

// If evmApproval is present, send it first and wait for confirmation
if (payload.evmApproval) {
  const ah = await walletClient.writeContract({
    address: payload.evmApproval.tokenAddress,
    abi: [{ name:'approve', type:'function', inputs:[{type:'address'},{type:'uint256'}], outputs:[{type:'bool'}] }],
    functionName: 'approve',
    args: [payload.evmApproval.spenderAddress, BigInt(payload.evmApproval.amount)],
  });
  await viemPublic.waitForTransactionReceipt({ hash: ah });
  // Re-prepare to get a fresh signing payload after the approval wait
}

const txHash = await walletClient.sendTransaction({
  to: payload.evmTransaction.to,
  data: payload.evmTransaction.data,
  value: BigInt(payload.evmTransaction.value || '0'),
  gas: BigInt(payload.evmTransaction.gasLimit),
  chainId: 8453,
});
// Note: viem receipt.status is 'success'/'reverted' (string, not '0x1')
```

**Solana:**
```typescript
import { DynamicSvmWalletClient, decodeBase58, addSignatureToTransaction } from '@dynamic-labs-wallet/node-svm';
import { VersionedTransaction, Connection, PublicKey } from '@solana/web3.js';

const client = new DynamicSvmWalletClient({ environmentId });
await client.authenticateApiToken(apiToken);

// Decode the base64 payload into a VersionedTransaction
const vtx = VersionedTransaction.deserialize(Buffer.from(payload.serializedTransaction, 'base64'));

// Sign — returns the Ed25519 signature as a base58 string
const sigBase58 = await client.signTransaction({ senderAddress, transaction: vtx });

// Attach the signature to the transaction and broadcast
const signedVtx = addSignatureToTransaction({
  transaction: vtx,
  signature: decodeBase58(sigBase58),
  signerPublicKey: new PublicKey(senderAddress),
});
const sig = await connection.sendRawTransaction(signedVtx.serialize(), { skipPreflight: true });
await connection.confirmTransaction(sig, 'confirmed');
```

**ERC-20 approval timing:** Pre-approve `maxUint256` for the spender before calling
`prepare`, then re-prepare after confirmation — the quote can expire during the approval
confirmation wait.

## Webhooks

Subscribe to settlement events instead of polling:

```json
POST /environments/{environmentId}/webhooks
Authorization: Bearer dyn_...

{
  "url": "https://your-api.example.com/webhooks/checkout",
  "events": [
    "execution.state.broadcasted",
    "execution.state.source_confirmed",
    "settlement.state.completed",
    "execution.state.failed",
    "settlement.state.failed"
  ],
  "isEnabled": true
}
```

| Event | Action |
|---|---|
| `settlement.state.completed` | Funds delivered — fulfill the order / credit the account |
| `settlement.state.failed` | Settlement failed — inspect `data.failure` |
| `execution.state.failed` | Execution failed — inspect `data.failure` |
| `execution.state.source_confirmed` | Source transaction confirmed on-chain (cross-chain still settling) |

## Solana routing notes

- **Same-chain SOL→USDC** commonly routes via Titan (Pyth oracle–dependent). Usually works
  fine; can fail with `PythOracleOutdated` (error 13014) if oracle prices are stale. If this
  happens, adjust `slippage` to try an alternative route.
- **Cross-chain SOL→USDC on Base** routes via MayanFinance FastMCTP — zero fees, no oracle
  dependency. Recommended for agents settling into EVM chains.
- Use Helius or another high-quality Solana RPC for better landing and less simulation noise.
- `skipPreflight: true` is recommended to avoid simulation-only oracle failures.

## Balance API

`GET /sdk/{environmentId}/chains/{chainName}/balances` — pass `includeNative=true` for
native token balance (omitted by default). For Solana, `networkId` is required:
`101` = Mainnet Beta, `102` = Testnet, `103` = Devnet.

```
GET /sdk/{env}/chains/EVM/balances?accountAddress=0x...&networkId=8453&includeNative=true
GET /sdk/{env}/chains/SOL/balances?accountAddress=<addr>&networkId=101&includeNative=true
```

The indexer can lag 60–90s after a deposit.

## Spend-aware usage

- Cache `checkoutId` — reusable for all payments to the same destination + token.
- Quotes expire in 60s. Authenticate the SDK before `prepare` to minimize the signing gap.
- Only call `prepare` when ready to sign immediately — it locks the quote.
- Call `cancel` if anything fails after `prepare` to release the locked state.
- Check `fees.totalFeeUsd` before proceeding — bridge fees can exceed small payment amounts.
- Settle to Base USDC when possible — deepest liquidity, lowest fees.
- Poll risk state every 2–3s with a 30s timeout; most wallets clear instantly.
