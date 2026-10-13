---
name: gov
title: "2s Gov"
description: "US government and public-records data: Congress bills/votes/trades, FEC campaign finance, federal regulations, OpenFDA, OSHA/MSHA, USAspending, Census demographics, federal jobs, and NYC property records."
use_case: "Use for Congressional bills, votes and stock trades, FEC campaign finance, federal regulations and recalls, Census demographics, and property records."
category: data
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
