---
name: market-data
title: "Curade"
description: "Pay-per-call prediction-market and crypto funding snapshots: volume-ranked Polymarket odds, cross-venue disagreement checks, attested market packages, and Hyperliquid perp funding."
use_case: "Use when an agent needs current Polymarket odds for a trading decision, compares Polymarket against other prediction venues, fetches a verified market package, or checks Hyperliquid funding rates before a perp trade."
category: finance
service_url: https://api.curade.xyz
version: v1
openapi:
  path: openapi.json
---

Curade is a pay-per-call market data API for AI agents. Every paid route is
x402: an unauthenticated call returns HTTP 402 with a payment challenge
(USDC on Base, scheme "exact"); pay it and retry the identical request with
the X-PAYMENT header. No account or API key.

What the four paid endpoints return:

- `GET /v1/polymarket/odds` ($0.005): the latest Polymarket snapshot,
  volume-ranked, filterable by market question substring (`q`) and row limit.
- `GET /v1/polymarket/disagreement` ($0.02): markets where prediction venues
  disagree most, ranked for cross-venue comparison.
- `GET /v1/polymarket/package` ($2.00 one-time purchase): the full attested
  package for one market.
- `GET /v1/funding/current` ($0.001): the latest Hyperliquid perp funding
  snapshot, up to 100 coins ranked by open interest, updated hourly.

All outputs are derived snapshots; Polymarket data is attributed to
source: Polymarket. `GET /health` is free. Agent docs:
https://api.curade.xyz/llms.txt

## Spend-aware usage

- Prefer `limit` values that answer the task; odds caps at 200 rows.
- Use `q` to filter odds to the market you actually need instead of paging.
- The $0.001 funding endpoint is the cheapest way to test the payment flow.
- Reuse snapshots within an hour for funding data; it updates hourly.
