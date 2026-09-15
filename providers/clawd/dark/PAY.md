---
name: dark
title: "ClawdDarkPrivateX402"
description: "Privacy-first x402 payments on Solana via Dark-DeFi shielded infrastructure. Extends the standard x402 scheme with a 'dark-shielded' variant: USDC routed through Zcash Sapling shielded notes, AI inference executed inside SGX/SEV TEE enclaves attested on-chain via SAS — no payment graph, no prompt leakage."
use_case: "Use for private AI inference where prompts must not appear on-chain, confidential agent-to-agent payments that break the sender-receiver payment graph, shielded USDC transfers using Zcash Sapling diversified addresses, TEE-attested completions with client-side encrypted messages, and compliance workflows requiring selective disclosure via viewing keys."
category: security
service_url: https://x402.wtf/dark
openapi:
  path: openapi.json
---

ClawdDarkPrivateX402 extends the standard [x402 protocol](https://www.x402.org) with a
`dark-shielded` payment scheme built on the [Dark DeFi](https://github.com/x402agent/dark-defi)
protocol. While standard x402 pays via a transparent Solana SPL transfer (visible on-chain),
dark-shielded routes payments through Zcash Sapling-derived shielded notes — breaking the
payment graph between the caller's wallet and the API operator.

AI inference is further hardened by running inside SGX/SEV trusted execution environments
attested on-chain via the **Solana Attestation Service (SAS)**. Messages are encrypted
client-side using the enclave's X25519 public key; they never appear in plaintext on any
network hop or in the operator's logs.

**On-chain program:** Dark Protocol Anchor program at
`4753b1cCrPzwr7taWWD8yrcM8dc98fTR7wCFdv1TsAbg` (Solana mainnet)

**NPM SDK:** `@openclawdsol/dark-protocol-sdk`

## Privacy model

| Layer | Standard x402 | Dark-Shielded x402 |
|---|---|---|
| Payment | Transparent SPL transfer — payer + payTo visible on-chain | Shielded note — only commitment on-chain; payer/payTo unlinkable |
| Recipient address | Operator's real wallet address | One-time diversified Sapling address (fresh per request) |
| Inference prompt | Sent in plaintext HTTP body | ChaCha20-Poly1305 encrypted to TEE pubkey |
| Inference response | Returned in plaintext | Encrypted to caller's ephemeral key inside TEE |
| Operator visibility | Sees payer address + request | Sees nothing — note detected via scanning key only |
| Auditability | Full ledger trail | Selective: share viewing key with auditor only |

## Payment flow

```
1. GET /tee/pubkey
   → X25519 enclave key + SAS attestation

2. POST /shielded/challenge  { resource: "/tee/inference" }
   → 402 + dark-shielded PaymentRequired
     payTo = one-time diversified Sapling address
     ephemeral_key = ECDH ephemeral for note encryption

3. Client deposits shielded USDC note to payTo address
   (using @openclawdsol/dark-protocol-sdk ShieldedWallet)
   → note commitment added to on-chain Merkle tree

4. POST /shielded/settle  { nullifier, commitment, merkle_path, proof, ... }
   → ZK ownership proof verified on Dark Protocol program
   → nullifier marked spent (prevents double-spend)
   → access_token returned (scoped to resource + nonce)

5. POST /tee/inference  X-Dark-Access: <access_token>
   { model: "...", encrypted_messages: [...] }
   → enclave decrypts, infers, re-encrypts completion
   → caller decrypts with their ephemeral key
```

## SDK quickstart

```ts
import { ShieldedWallet, SaplingUtils } from "@openclawdsol/dark-protocol-sdk";

// Generate shielded payer identity
const { wallet } = await SaplingUtils.generateWallet();
const sw = await ShieldedWallet.create({ network: "mainnet" });

// Deposit USDC into shielded pool
await sw.deposit({ amount: 1_000_000n, memo: "x402 dark payment" });

// Pay a dark-shielded x402 challenge
const proof = await sw.buildSpendingProof({
  amount: 10_000n,            // $0.01 USDC in base units
  challenge: darkChallenge,   // from POST /shielded/challenge
});

// Settle → get access token
const { access_token } = await fetch("https://x402.wtf/dark/shielded/settle", {
  method: "POST",
  body: JSON.stringify(proof),
}).then(r => r.json());

// Encrypted inference — prompt never leaves plaintext
const teeKey = await fetch("https://x402.wtf/dark/tee/pubkey").then(r => r.json());
const encryptedMessages = await encryptMessages(messages, teeKey.pubkey);

const { encrypted_content } = await fetch("https://x402.wtf/dark/tee/inference", {
  method: "POST",
  headers: { "X-Dark-Access": access_token },
  body: JSON.stringify({ model: "claude-sonnet-4-6", encrypted_messages }),
}).then(r => r.json());

const completion = await decryptCompletion(encrypted_content, myEphemeralKey);
```

## Spend-aware usage

- Fetch `GET /tee/pubkey` once per session — the enclave key rotates daily. Cache it
  for the session duration (`valid_until`) rather than fetching per request.
- Use `POST /shielded/verify` before `POST /shielded/settle` when testing proof
  construction — verify is free and does not mark the nullifier spent.
- Batch multiple inference calls under a single shielded note by depositing enough
  USDC to cover the session; the note is split via partial spending proofs.
- Set `diversifier_index` on your Sapling wallet to generate unlinkable change addresses
  for each session — even the operator's viewing key cannot link sessions.
- For selective auditability (e.g. compliance, tax), share only the incoming viewing key
  for the relevant account index — it reveals received amounts but not the payer identity.
- The `attestation` field on `/tee/pubkey` and `/tee/inference` responses can be verified
  against the SAS program on-chain — do this before trusting the enclave key in sensitive flows.
