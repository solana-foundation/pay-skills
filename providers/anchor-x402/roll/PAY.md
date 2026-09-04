---
name: roll
title: "anchor-x402: verifiable signed RNG"
description: "Cryptographically-random integer(s) over a caller-chosen range, signed by the anchor-x402 treasury key. Drop-in VRF for game studios, raffles, DAO voter selection, and NFT minting tie-breaks, with optional pre-commitment bound into the signed payload."
use_case: "Use when an agent or app needs random outcomes that can be third-party verified after the fact: loot drops, raffles, on-chain games, DAO voter sampling, NFT trait reveals, A/B bucket assignment, or tournament seeding."
category: security
service_url: https://api.anchor-x402.com
openapi:
  path: openapi.json
---

`POST /v1/roll` — pay $0.001 USDC, supply `{ low, high, count, label?, commitment? }`. The server:

1. Generates `count` integers in `[low, high]` (inclusive) from a CSPRNG.
2. Hashes the request inputs as `input_hash = sha256(low|high|count|label|commitment)`.
3. Hashes the result as `result_hash = sha256(JSON-encoded result array)`.
4. Builds the domain-separated message:
   ```
   anchor-x402/roll/v1
   input=<input_hash>
   result=<result_hash>
   ```
5. Signs the message with the treasury EOA (`eip191`) and returns
   `{ range, count, label, commitment, result, input_hash, result_hash,
   signature, signer, scheme, domain }`.

Re-verification is offline and free: recompute `input_hash` + `result_hash`
client-side, rebuild the message, and `ecrecover` the signature against the
public treasury address. If the recovered signer matches, the roll is
authentic and unaltered.

## Spend-aware usage

- **$0.001 is cheaper than running your own VRF.** No oracle integration,
  no chain-specific VRF subscription, no per-request gas. One HTTP call
  with USDC out-of-band.
- **Pre-commitment closes the front-running window.** Supply a 32-byte
  `commitment` hash with the request — the server includes it in the
  signed payload so anyone can verify the inputs were committed *before*
  the result was known. Useful for raffles where the winner shouldn't be
  predictable from the request itself.
- **Use `label` to bind a roll to its context.** E.g.
  `label: "treasure_drop_42_block_24013500"` ties the signed payload to
  a specific event — a verifier later can reject any roll whose label
  doesn't match the expected context.
- **Batched rolls are cheaper per-number.** `count: 100` returns 100
  signed integers for the same $0.001 as `count: 1`. Use it for bulk
  raffle draws, multi-NFT trait reveals, tournament bracket seeding.
- **The signer is a single well-known address** (`signer` in the response).
  Pin it in your verifier — don't trust signatures from unknown signers,
  even with a valid signature scheme.
- **Combine with `decision-attest` ($0.01) for chain-anchored proof.**
  `roll` gives you a signature; `decision-attest` anchors the resulting
  Merkle root on Base + Solana mainnet for on-chain verifiability. Use
  `roll` alone for app-level verification; pair them when the audit
  trail needs to outlive your servers.

This is the second non-LLM, non-data offering in the anchor-x402 family
after `decision-attest`. Both share the same signing primitive — a
domain-separated EIP-191 message over input/result hashes — applied to
different problems: `decision-attest` certifies a *given* decision and
inputs/outputs from outside; `roll` *generates* the result itself and
signs it inline.
