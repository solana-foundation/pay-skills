---
name: public-data
title: "Public Data API"
description: "Pay-per-call public data over x402 on Solana: company job openings from ATS boards, SEC EDGAR full-text search, domain RDAP/DNS, NHTSA VIN decode and recalls, CMS NPI Registry, MET Norway weather. $0.01 USDC per call, no API keys."
use_case: "Use for checking which companies are hiring and for what roles, SEC filings mentioning a phrase, domain registrar/expiry/DNS lookups, US VIN decoding and recall checks, US healthcare providers by specialty and location, and weather forecasts."
category: data
service_url: https://x402-data-api-x6da.onrender.com
openapi:
  path: openapi.json
---

Six GET routes, each $0.01 USDC on Solana mainnet (x402 v2, exact scheme, PayAI facilitator pays the fee).
Data only from official public sources; weather is MET Norway (CC BY 4.0, attribution included in responses).

## Spend-aware usage

- Batch in one call: `/v1/vin` and `/v1/domains` take up to 50 comma-separated items, `/v1/jobs` up to 20 companies,
  `/v1/weather` up to 10 locations, so one payment covers many lookups.
- Use `max_results` on `/v1/jobs`, `/v1/sec/search` and `/v1/npi` to keep responses small.
- The free `/openapi.json` and `/docs` describe every parameter; read them before paying.
