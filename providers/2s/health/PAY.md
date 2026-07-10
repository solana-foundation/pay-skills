---
name: health
title: "2s Health"
description: "Healthcare reference data: ICD-10 and RxNorm code verification, Medicare provider + Open Payments, hospital quality, NPI provider profiles, clinical-trial search, and USDA/Open Food Facts nutrition."
use_case: "Use for verifying ICD-10 and drug codes, looking up providers and hospitals, searching clinical trials, and fetching nutrition facts."
category: data
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
