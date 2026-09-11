---
name: au-company
title: "Milypay AU Company"
description: "Milypay ASIC company register API: look up Australian companies by ACN or name across 3.9M records. Returns status, type, class, registration dates, and former names as JSON over x402 on Solana."
use_case: "Use for ASIC company lookup by ACN, company name search, former-name resolution, registration status checks, and Australian corporate identity workflows for agents."
category: identity
service_url: https://api.milypay.xyz
version: v1
openapi:
  path: openapi.json
---

Milypay ASIC company register endpoints (data.gov.au). ~3.9M companies.

Pay per call via x402 on Solana. Accepts **USDC**, **USDT**, and **AUDD**.

## Spend-aware usage

- Prefer `/au-company/acn/{acn}` when the ACN is known.
- Use name search once to resolve ACN, then exact lookups.
- Do not paginate blindly — take the top match and verify by ACN.

Docs: https://milypay.xyz/agents.md · Demo: https://milypay.xyz/demo · Brand: **Milypay** (Milysec)
