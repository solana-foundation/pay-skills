---
name: wallet-screen
title: "anchor-x402: wallet screening"
description: "Sanctions + AML screening for any EVM or Solana wallet address. Returns sanctions match (boolean), specific OFAC SDN programs flagged (Tornado Cash, Lazarus Group, Hydra Market, Garantex, Blender.io etc.), inferred chain, and a low/medium/high risk verdict — for $0.001 USDC per call."
use_case: "Use for AML pre-flight checks before any treasury transfer, KYC onboarding, vendor diligence, payroll wallet verification, marketplace counterparty checks, payment processor compliance, or any agent workflow that needs cheap, fast sanctions clearance."
category: security
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`GET /v1/screen?wallet=<address>` — pay $0.001 USDC, get a sanctions
verdict back. Address shape detection is automatic: `0x` + 40 hex →
EVM, base58 (32-44 chars) → Solana. The verdict carries
`sanctions_match` (boolean), `sanctioned_lists` (which programs flagged
the address — e.g. `["OFAC SDN", "Tornado Cash"]`), `risk_level`
(`low`/`medium`/`high`), and a human-readable `notes` field.

The active corpus covers OFAC SDN crypto entries: Tornado Cash, Lazarus
Group (DPRK), Hydra Market, Garantex, Blender.io, and other publicly
documented sanctions targets. Refreshed on schedule from public sources.

## Spend-aware usage

- Cache the verdict client-side for at least 24h on a low-risk match.
  The OFAC list is amended ~monthly; a 24h cache is well within the
  freshness window agents need for pre-transaction checks.
- When screening many addresses in a workflow (e.g. a vendor list),
  call sequentially rather than parallel — the response is small and
  the per-call cost is already minimal.
- For institutional-grade coverage (proprietary sanctions lists,
  Chainalysis-grade enrichment, behavioral scoring), use this as a
  first-pass filter and pair with a premium service for residual
  coverage.
- Use the same call to assert a wallet is *clean* before proceeding —
  `sanctions_match: false` + `risk_level: low` is the affirmative
  AML clearance you can store with the transaction record.
