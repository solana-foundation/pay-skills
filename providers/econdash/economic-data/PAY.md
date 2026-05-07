---
name: economic-data
title: "EconDash"
description: "Pay-per-call macroeconomic data API with 753 indicators across 298 countries. Returns indicator metadata, time series, country profiles, and category lists for economic research and dashboards."
use_case: "Use for GDP, inflation, employment, trade balance, interest rates, and other macroeconomic time series lookups. Use for country economic profiles, indicator discovery by category, and global economic statistics retrieval."
category: finance
service_url: https://econdash.org/api/v1/m2m
version: v1
openapi:
  path: openapi.json
---

EconDash provides pay-per-call access to 753 macroeconomic indicators
covering 298 countries and regions. Data includes GDP, inflation (CPI/PPI),
employment, trade balances, interest rates, industrial production, and more.

All endpoints return HTTP 402 Payment Required with x402 and MPP challenges.
Payment is accepted via USDC on Solana mainnet (MPP Solana) at $0.02 per
request.

## Spend-aware usage

- Prefer `/timeseries/{code}?country={iso3}` for targeted data retrieval
  instead of fetching all countries at once.
- Use `/indicators` and `/categories` once per session to discover available
  data, then reuse indicator codes across calls.
- Use `/indicators/{code}` to check metadata (description, unit, frequency,
  source) before fetching full time series.
- Use `/countries/{iso3}` when you need a complete economic profile for a
  single country in one call.
- Batch related questions into a single session; avoid probing the same
  indicator or country repeatedly.
