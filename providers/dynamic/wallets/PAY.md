---
name: wallets
title: "Dynamic Wallets API"
description: "Server-side MPC wallet provisioning for AI agents. Create embedded wallets for users by email or ID, obtain a signing JWT for SDK operations, and verify API key scope — no private key exposure."
use_case: "Use for provisioning server-side MPC wallets for agents or users, obtaining a WaaS JWT for Node SDK signing operations, and verifying an API key is correctly scoped before making wallet calls."
category: identity
service_url: https://app.dynamicauth.com/api/v0
openapi:
  path: openapi.json
---

Dynamic's Wallets API provisions server-controlled MPC (Multi-Party Computation)
wallets for AI agents and backend services. Private keys are never stored or
exposed — signing is completed via a distributed MPC ceremony.

**Auth:** All endpoints require `Authorization: Bearer dyn_<token>`. API tokens
are available at https://app.dynamic.xyz/dashboard/developer/api.

**Base URL:** `https://app.dynamicauth.com/api/v0`

## Endpoints

**`POST .../waas/verifyApiKey`** — Confirm the API token is valid and scoped to
this environment. Call once at startup before any wallet or signing calls.

**`POST .../waas/create`** — Provision an MPC wallet for a user identified by
`identifier` (email or userId) and `type` (`"email"` or `"userId"`). Creates a
new user automatically if the email doesn't match an existing one. Supports EVM
and SOL chains. Returns 200 if the wallet already exists, 201 if newly created.

**`POST .../waas/authenticate`** — Exchange the API token for a short-lived JWT
used by the Node SDK for signing operations (returned as `encodedJwts.jwt`).

## Transaction signing

Any Dynamic SDK can sign transactions — Node, React, React Native, Flutter, Swift,
Kotlin, Python, Rust, Unity, and more. See [docs.dynamic.xyz](https://docs.dynamic.xyz)
for your platform. Node SDK example:

```typescript
import { DynamicSvmWalletClient, decodeBase58, addSignatureToTransaction } from '@dynamic-labs-wallet/node-svm';
import { VersionedTransaction, Connection, PublicKey } from '@solana/web3.js';

const client = new DynamicSvmWalletClient({ environmentId });
await client.authenticateApiToken(apiToken);

const vtx = VersionedTransaction.deserialize(Buffer.from(serializedTx, 'base64'));
const sigBase58 = await client.signTransaction({ senderAddress, transaction: vtx });
const signedVtx = addSignatureToTransaction({
  transaction: vtx,
  signature: decodeBase58(sigBase58),
  signerPublicKey: new PublicKey(senderAddress),
});
const txid = await connection.sendRawTransaction(signedVtx.serialize());
```

For EVM, use `DynamicEvmWalletClient.getWalletClient()` which returns a viem
`WalletClient` with `sendTransaction`.

## Spend-aware usage

- Call `waas/verifyApiKey` once at startup — lightweight token scope check.
- `waas/create` is idempotent: returns the existing wallet (200) if already provisioned.
- Cache wallet IDs — provisioning is one-time per user.
