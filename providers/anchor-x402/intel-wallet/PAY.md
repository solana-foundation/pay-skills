---
name: intel-wallet
title: "anchor-x402: wallet intelligence bundle"
description: "ONE call returns a unified intelligence bundle for any EVM or Solana wallet — native balances on Base + Ethereum mainnet, USDC balances, tx count, has-history flag, reverse ENS / SNS, and sanctions verdict — fetched in parallel for $0.005 USDC. Replaces 8-10 separate RPC + API hits."
use_case: "Use for agent pre-transaction due diligence, KYC enrichment, vendor onboarding, payment-routing UX, treasury counterparty checks, payroll wallet verification, marketplace listing diligence, or any workflow where an agent needs a one-shot risk + balance picture before deciding to transact."
category: data
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`GET /v1/intel/wallet?wallet=<address>` — pay $0.005 USDC, get back a
single best-effort intelligence bundle stitched together from 6-8 free
public sources fetched in parallel. The value prop for agents: **one
HTTP round-trip replaces an 8-10-call orchestration** across multiple
RPCs and naming systems, with consistent error handling and a 60s
in-process cache.

The address shape is auto-inferred:

- `0x` + 40 hex → EVM. Returns native ETH on Base, native ETH on
  Ethereum mainnet, USDC on Base, Base nonce/tx-count, has-history flag,
  and a forward-verified reverse ENS lookup.
- base58 (32-44 chars) → Solana. Returns native SOL, summed SPL USDC
  across all token accounts owned by the wallet, has-history flag, and
  a best-effort reverse SNS lookup via Bonfida.

Every response — EVM or Solana — also carries the sanctions verdict
from the same OFAC SDN corpus that powers `/v1/screen` (Tornado Cash,
Lazarus Group, Hydra Market, Garantex, Blender.io, and more).

Per-source failures degrade gracefully: a slot returns `null` and a
typed entry lands in `errors[]` — the bundle never fails as a whole.
Inspect `errors` to see which sources timed out without losing the
sources that succeeded.

## Response shape

```json
{
  "wallet": "0x…",
  "chain_inferred": "ethereum" | "solana" | "unknown",
  "balances": {
    "base_eth": "0.0123",
    "eth_eth": "0.0042",
    "base_usdc": "1503.27",
    "sol": null,
    "solana_usdc": null
  },
  "activity": { "base_tx_count": 42, "has_history": true },
  "identity": { "ens_name": "vendor.eth", "sns_name": null },
  "sanctions": { "sanctions_match": false, "risk_level": "low", "…": "…" },
  "errors": [],
  "fetched_at": 1746820000,
  "cache_age_seconds": 0
}
```

## Spend-aware usage

- One `intel-wallet` call replaces, at minimum, 8 separate API hits:
  2x EVM `eth_getBalance`, 1x ERC-20 `balanceOf`, 2x `eth_getTransactionCount`,
  1x reverse-ENS, 1x sanctions screen, 1x Solana `getBalance` /
  `getTokenAccountsByOwner` / `getSignaturesForAddress` triple.
  At $0.005 the per-source price is well under a tenth of a cent.
- Results are cached in-process for 60 seconds keyed by raw address.
  Repeat lookups within that window are served instantly with
  `cache_age_seconds` populated — but the price is the same per call,
  so layer your own client cache for tight agent loops.
- For institutional payouts, pair with `/v1/screen` only if you need a
  sanctions-only call with a different cost profile — `intel-wallet`
  already includes the same sanctions verdict.
- Use `errors[]` to decide whether to retry: an empty list means every
  source resolved cleanly; a populated list with `source: "ens_name"`
  alone is usually safe to ignore for payment routing.
- For "is this wallet active?" questions, prefer `activity.has_history`
  + `activity.base_tx_count` over re-deriving from balances — a
  high-USDC wallet with `base_tx_count: 0` is a freshly-funded address
  and may warrant elevated diligence.
