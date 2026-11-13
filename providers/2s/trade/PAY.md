---
name: trade
title: "2s Trade"
description: "Trade and B2B document data: Harmonized Tariff Schedule (HTS) duty lookups, UN/LOCODE port and location codes, and ANSI X12 EDI parsing plus 997 functional-acknowledgment generation."
use_case: "Use for tariff/HTS duty rates, UN/LOCODE port codes, and parsing or acknowledging EDI X12 documents (850, 810, 856, 997)."
category: data
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
