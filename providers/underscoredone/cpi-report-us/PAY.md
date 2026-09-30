---
name: cpi-report-us
title: "US CPI Report"
description: "Official United States inflation figures from the BLS Consumer Price Index: latest reading, a specific past month, or a month range, with headline and core rates plus a plain-English summary."
use_case: "Use when you need authoritative US inflation numbers (headline or core CPI) for a date or range — for economic analysis, indexing, or reporting — instead of relying on model memory."
category: finance
service_url: https://cpi-report-us.underscoredone.com
openapi:
  path: openapi.json
---

Official United States inflation figures from the BLS Consumer Price Index: latest reading, a specific past month, or a month range, with headline and core rates plus a plain-English summary. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Request a whole month range in one call rather than one call per month.
- CPI is published monthly — cache a reading until the next BLS release.
