---
name: au-business
title: "Milypay AU Business"
description: "Milypay Australian business identity API: ABN and ACN lookup plus name search from the ABR (ATO). Returns entity name, status, type, GST, and location as JSON for agent KYB over x402 on Solana."
use_case: "Use for Australian ABN lookup, ACN lookup, business name search, entity verification, GST status checks, and agent KYB against the Australian Business Register."
category: identity
service_url: https://api.milypay.xyz
version: v1
openapi:
  path: openapi.json
---

Milypay Australian business identity endpoints. Source: Australian Business Register (ATO).

Pay per call via x402 on Solana. Accepts **USDC**, **USDT**, and **AUDD**.
No API keys. Demo (free, rate-limited): https://milypay.xyz/demo

## Spend-aware usage

- Prefer `/au-business/abn/{abn}` when the ABN is known — cheapest exact lookup.
- Use `/au-business/acn/{acn}` only when you have an ACN, not an ABN.
- Use `/au-business/search?name=` once to resolve a name to an ABN, then switch to exact ABN lookups.
- Cache ABN results for the task; do not re-query the same ABN in a loop.

Docs: https://milypay.xyz/agents.md · Demo: https://milypay.xyz/demo · Brand: **Milypay** (Milysec)
