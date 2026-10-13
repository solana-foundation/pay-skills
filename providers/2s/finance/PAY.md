---
name: finance
title: "2s Finance"
description: "Financial and economic data endpoints: SEC EDGAR filings, insider + 13F holdings, stock quotes, FX rates, crypto market/chain data, FRED macro series (CPI, yield curve, recession), Treasury, BLS, and World Bank indicators."
use_case: "Use for company financials and SEC filings, stock/FX/crypto quotes, inflation and CPI lookups, yield-curve and macro-indicator data, and economic time series."
category: finance
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
