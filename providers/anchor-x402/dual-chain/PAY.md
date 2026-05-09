---
name: dual-chain
title: "anchor-x402"
description: "Anchor any 32-byte hash to Base mainnet (as EIP-1559 calldata) AND Solana mainnet (via the Memo program) in a single $0.005 USDC call. Returns both tx hashes plus block-explorer URLs as cryptographic proof of when a specific value existed. Pure infrastructure — no opinions about content."
use_case: "Use for DAO vote receipts, AI decision attestations, contract notarization, scientific data integrity, audit trails, on-chain proof of provenance, generic cross-chain timestamping, hash commitment schemes, or any workflow that needs tamper-evident proof anchored on two independent L1s."
category: security
service_url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com
openapi:
  url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com/openapi.json
---

`anchor-x402` is the simplest primitive in the agentic API economy: a single
HTTP POST that writes a 32-byte hash to **both** Base mainnet (as EIP-1559
calldata) and Solana mainnet (via the Memo program), in parallel, for $0.005
USDC.

The response carries `merkle_root` (the hash you anchored), `base.tx` /
`base.explorer_url`, `solana.tx` / `solana.explorer_url`, and `anchored_at`
(Unix epoch). Forging an anchor requires reorging two L1s with different
consensus algorithms.

You can submit a pre-computed hash (`{ "hash": "<64-hex>" }`) or arbitrary
JSON (`{ "data": {...} }`) — in the JSON case the server canonicalizes with
sorted keys + compact separators and SHA-256s. Either way you get a
deterministic, reproducible 64-char hex root.

## Spend-aware usage

- Hash-once, reference-many: anchor a single Merkle root over many leaves
  rather than one anchor per leaf. Build the root client-side, anchor once.
- Free verification: the response gives you Base + Solana tx URLs. Re-checking
  whether a hash is anchored later doesn't require another paid call —
  just look up the tx in any block explorer.
- For non-time-critical batches, group items into a single Merkle root before
  anchoring. The server doesn't store anything, so client-side batching is
  the right pattern.
- The `note` field is returned in the response but is **not** written
  on-chain. Don't put anything you need verifiable there.
- If only Base is required (e.g. you don't care about Solana redundancy),
  call once and ignore `solana` in the response — the cost is the same; you
  just get extra proof at no extra charge.
