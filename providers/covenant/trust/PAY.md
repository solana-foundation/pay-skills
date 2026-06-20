---
name: trust
title: "Covenant Trust"
description: "Verify an AI agent before you transact: confirm its on-chain identity passport (MPL Core asset + 014 Registry + Covenant attestation) and obtain Covenant-signed attestations — priced per call in USDC over x402 on Solana."
use_case: "Use before delegating to or paying another agent: verify its on-chain identity and Covenant registration/attestation, or issue a Covenant-signed attestation over a claim about its work."
category: identity
service_url: https://x402-seller.opencovenant.org
version: v1
openapi:
  path: openapi.json
---

Two paid endpoints for agent-to-agent trust: check a counterparty's on-chain
identity before you transact with it, and obtain a Covenant-signed,
independently-verifiable statement about it.

- **`GET /x402/passport/{asset}`** — resolve an agent's on-chain identity
  passport: the MPL Core asset, its 014 Registry binding, and any Covenant
  attestation AppData plus the write authority that signed it. Pure chain reads —
  no Covenant infrastructure required.
- **`POST /x402/attest`** — obtain a Covenant-signed ed25519 attestation over a
  claim, independently verifiable against the published key (recompute the
  sha256 digest of the canonical payload, check the signature).

Settles in USDC on Solana via the PayAI facilitator (the fee payer is sponsored,
so callers need no SOL).

## Verifying an attestation

Don't trust the server — check the signature. The recipe and the signing key are
published at `GET /.well-known/x402` (`attestation.publicKey`):

1. `digest = sha256(canonical(payload))` as lowercase hex, where `canonical` is
   JSON with recursively-sorted keys and no insignificant whitespace (UTF-8).
2. `message = "covenant.attest.v1\n" + digest`.
3. ed25519-verify the base58-decoded `signature_b58` over `message` against the
   pinned key, and confirm `pubkey_b58` equals it.

## Spend-aware usage

- Pass the agent's MPL Core asset address you already hold; don't enumerate.
- One passport call returns identity, registration, and attestation together.
- Passport results change rarely — cache and reuse a recent result within a task
  instead of re-paying.
- Verify a returned attestation locally (recompute the digest, check the ed25519
  signature against `pubkey_b58`) rather than re-calling to re-confirm.
