---
name: wallets
title: "Dynamic Wallets API"
description: "Server-side MPC wallet provisioning and signing for AI agents. Create embedded wallets by email or user ID, obtain a signing JWT, verify API key scope, and sign messages with delegated server-side key access — no private key exposure."
use_case: "Use for provisioning server-side MPC wallets for agents or users, obtaining a WaaS JWT for SDK operations, verifying an API key is correctly scoped before making wallet calls, and signing messages server-side without exposing private keys."
category: identity
service_url: https://app.dynamicauth.com/api/v0
openapi:
  path: openapi.json
---

Dynamic's Wallets API provides server-controlled MPC (Multi-Party Computation)
wallets for AI agents and backend services. Private keys are never stored or
exposed — signing is completed via a distributed MPC ceremony between the server
and Dynamic's infrastructure.

**Auth:** All endpoints require `Authorization: Bearer dyn_<token>`. API tokens
are available at https://app.dynamic.xyz/dashboard/developer/api. Store as
`DYNAMIC_AUTH_TOKEN` — never hardcode.

**Base URL:** `https://app.dynamicauth.com/api/v0`

## Key capabilities

**`POST .../waas/verifyApiKey`** — Confirm your API token is valid and scoped to
this environment before making wallet or signing calls. Call once at startup.

**`POST .../waas/create`** — Provision an MPC wallet for a user identified by
`email` or `userId`. If the email doesn't match an existing user, a new user is
created automatically. Supports EVM and SOL chains. Returns the user object with
the new wallet attached; returns 200 (not 201) if the wallet already exists.

**`POST .../waas/authenticate`** — Exchange the API token for a short-lived JWT
(`encodedJwts.jwt`) scoped to WaaS SDK operations. Required before using the
Node SDK (`@dynamic-labs-wallet/node-evm`, `@dynamic-labs-wallet/node-svm`).

**`POST .../waas/{walletId}/delegatedAccess/signMessage`** — Sign a message
(EIP-191 / personal_sign format) using the server's key share of an MPC wallet.
Returns an MPC room ID; the signing ceremony completes asynchronously. This
endpoint signs **messages only** — for transaction signing use the Node SDK's
`signTransaction()` method.

## Signing transactions (Node SDK)

Transaction signing requires the Node SDK to complete the MPC ceremony:

```typescript
import { DynamicSvmWalletClient, decodeBase58, addSignatureToTransaction } from '@dynamic-labs-wallet/node-svm';
import { VersionedTransaction, Connection, PublicKey } from '@solana/web3.js';

const client = new DynamicSvmWalletClient({ environmentId });
await client.authenticateApiToken(apiToken); // uses waas/authenticate internally

// signTransaction() returns a base58 Ed25519 signature (88 chars, 64 bytes)
// — NOT the full signed transaction. Decode and attach before broadcasting.
const sigBase58 = await client.signTransaction({ senderAddress, transaction: vtx });
const sigBytes = decodeBase58(sigBase58);
const signedVtx = addSignatureToTransaction({
  transaction: vtx, signature: sigBytes, signerPublicKey: new PublicKey(senderAddress),
});
const txid = await connection.sendRawTransaction(signedVtx.serialize(), { skipPreflight: true });
```

For EVM, use `DynamicEvmWalletClient.getWalletClient()` which returns a viem
`WalletClient` with `sendTransaction` — no manual signature handling needed.

## Spend-aware usage

- Call `waas/verifyApiKey` once at startup — it's a lightweight no-op check that
  confirms token scope before any wallet or signing calls.
- Cache the checkout ID and wallet IDs across calls — provisioning is one-time.
- `waas/create` is idempotent: calling it for an existing user returns 200 with
  the existing wallet, not a duplicate.
