---
name: rugproof
title: "rugproofx402"
description: "Pay-per-call Solana pump.fun bundle / sniper / funder-cluster scoring for AI agents. Returns scorecard with verdict, flags, per-wallet drill-down, funder clusters. Helius-only forensics, no third-party API resale."
use_case: "Use to pre-screen a Solana pump.fun mint before an agent executes a buy. Returns CLEAN / SKIP / UNKNOWN verdict plus BUNDLE / SNIPER / BUNDLE-FRESH flags so the agent can skip coordinated rug-class supply."
category: security
service_url: https://rugproofx402.vercel.app
openapi:
  url: https://rugproofx402.vercel.app/openapi.json
---

Pre-trade safety check for Solana pump.fun tokens. Given a mint address,
returns a structured scorecard derived from on-chain holder enumeration and
genesis-funder walks via Helius RPC. Pre-graduation tokens only. Helius-only
derivation — no Birdeye, GMGN, or Nansen API resale.

## What it returns

- `verdict` — `CLEAN`, `SKIP`, or `UNKNOWN`
- `flags` — subset of `["SNIPER", "BUNDLE", "BUNDLE-FRESH"]`
  - `SNIPER` — single wallet holds ≥ 4% of supply
  - `BUNDLE` — top funder cluster (FRESH wallets sharing one funder) ≥ 5% combined
  - `BUNDLE-FRESH` — top-20 holders are all freshly-funded wallets
- `top_cluster_pct`, `n_established`, `n_fresh`, `total_pct`
- Per-wallet drill-down: holder pct, FRESH/ESTABLISHED, funder address (with CEX/DEX labels)
- `top5_snapshot` — top 5 wallets with amounts

## Scope and limits

- Pre-graduation pump.fun mints only. Post-graduation consolidation rugs are NOT detected.
- Top-20 holders only (Solana `getTokenLargestAccounts` cap).
- Underlying forensics field-tested across hundreds of pump.fun graduations but not infallible — combine with other signals.

## Spend-aware usage

- Call `/score/{mint}` once per mint at decision time, not on a polling loop. The scorecard is a snapshot of holder state — repeated calls on the same mint within seconds return effectively the same answer.
- Skip the call for mints already classified by prior calls; cache results per `(mint, blockheight)` on the agent side if the same mint is in a buy queue more than once.
- Treat `CLEAN` as "no detected bundle pattern" — not as a positive endorsement of the token. Combine with the agent's own risk policy.
- Skip on `verdict == "SKIP"` or any flag in `BUNDLE` / `BUNDLE-FRESH`. `SNIPER` alone is a concentration warning, not a rug class — could be MM, treasury, or exchange.

## Pricing

- `GET /score/{mint}` — $0.05 USDC on Solana mainnet via PayAI facilitator (gasless for buyers — PayAI sponsors gas).
