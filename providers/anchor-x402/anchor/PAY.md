---
name: anchor
title: "anchor-x402: hash anchoring + signed attestations"
description: "Dual-chain cryptographic hash anchoring on Base + Solana mainnet in parallel, plus signed decision attestations that verify a wallet signature over (input_hash, output_hash, decision) and anchor the Merkle root."
use_case: "Use for cryptographic timestamping, dual-chain hash anchoring of agent outputs, signed decision attestations for AI audit trails, on-chain receipts for regulated workflows, and sealed prediction commitments."
category: storage
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

Two on-chain anchoring endpoints on Base + Solana mainnet. Pay-per-call USDC via x402 v2.

- `POST /v1/anchor { hash | data, note? }` — $0.005 — Anchor any 32-byte hash to Base mainnet (EIP-1559 calldata) and Solana mainnet (Memo program) in a single call. Returns both transaction hashes plus block-explorer URLs. Supply `hash` directly (64 hex chars, no 0x prefix) or `data` for arbitrary JSON which is canonicalized + SHA-256'd server-side.
- `POST /v1/attest { input_hash, output_hash, decision, scheme, signature, signer_pubkey? }` — $0.010 — Verify a wallet signature over (input_hash, output_hash, decision) with domain separation, then dual-chain anchor the Merkle root on Base + Solana. Returns verified signer plus on-chain proof URLs. Schemes: `eip191` (EVM personal_sign) or `ed25519` (Solana).

## Spend-aware usage

- Use `anchor` ($0.005) when you only need a timestamp proof for one hash.
- Use `attest` ($0.010) when you need verified-signer + dual-chain anchor in one shot — typical for AI agent decision audit trails where a wallet must sign off on a (input → output → decision) tuple.
- On-chain bytes are independent of anchor-x402: anyone can verify a receipt by reading Base + Solana directly. No need to contact us for verification.
- The dual-chain design means forging a receipt requires either breaking SHA-256 OR reorging both L1s at the same moment — neither is realistic on mainnet.
- For sealed predictions / "I called it" use cases: anchor the prediction hash now, reveal the cleartext later. The on-chain timestamp is independent proof you knew at that time.
