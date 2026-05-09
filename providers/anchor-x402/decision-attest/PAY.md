---
name: decision-attest
title: "anchor-x402: decision attestation"
description: "Verify a wallet signature over (input_hash, output_hash, decision) with domain separation, then dual-chain anchor the resulting Merkle root on Base and Solana mainnet. Returns the verified signer plus on-chain proof URLs — $0.01 USDC per call. Two schemes: EVM personal_sign (eip191) or Solana Ed25519."
use_case: "Use when an AI agent's decision needs a cryptographic, auditable receipt — autonomous trade approvals, AI-assisted contract decisions, automated KYC verdicts, model-output attestation for liability records, multi-agent consensus signing, or any workflow where the agent's recommendation needs to be cryptographically bound to the human-or-agent signer who approved it."
category: security
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`POST /v1/attest` — pay $0.01 USDC, supply `input_hash`,
`output_hash`, `decision`, `signature`, and `scheme`. The server:

1. Reconstructs the domain-separated message:
   ```
   anchor-x402/attest/v1
   input=<input_hash>
   output=<output_hash>
   decision=<decision>
   ```
2. Verifies the signature against the recovered (eip191) or supplied
   (ed25519) signer.
3. Computes the Merkle root: SHA-256 of the message above.
4. Anchors it on **both** Base mainnet (calldata) and Solana mainnet
   (Memo program) in parallel.
5. Returns `merkle_root`, `signer_verified`, `signer`, `base.tx`,
   `solana.tx`, `decision`, `signed_at`.

The domain separation prevents cross-app replay — a signature over
`anchor-x402/attest/v1\n…` cannot be reused as an EVM transaction, a
Counsel officer signature, or any other app's signed payload. The
on-chain anchor binds the signed decision to a specific block on two
independent L1s.

## Spend-aware usage

- Hash inputs and outputs client-side; submit only 64-char hex hashes.
  The server doesn't need (and can't see) the raw payload — the only
  thing crossing the wire is the digest.
- The 3-tuple (input_hash, output_hash, decision) IS the receipt's
  identity. Store it client-side and you can re-derive the merkle_root
  any time without paying again.
- For batched decisions, build a Merkle tree client-side and submit a
  single attestation over the root — one paid call, many decisions
  covered.
- The signature scheme determines wallet UX: `eip191` works with
  any EVM wallet's personal_sign (Metamask, hardware), `ed25519` works
  with Phantom and other Solana wallets.
- Re-verifying an attestation later is **free** — pull the on-chain
  tx via the explorer URL, decode the calldata / memo, and re-compute
  the Merkle root client-side. No second paid call needed.
