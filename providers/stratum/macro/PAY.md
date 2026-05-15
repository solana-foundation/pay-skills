---
name: macro
title: "Stratum Macro Data"
description: "Pay-per-query macroeconomic data: FRED, BLS, BEA, and derived indicators. USDC on Solana mainnet. No account setup — agents pay and retrieve in one round trip."
use_case: "When agents need macroeconomic indicators — GDP, CPI, unemployment, interest rates, or yield curves — for reasoning, forecasting, or portfolio decisions."
category: data
service_url: https://web-production-60258.up.railway.app
openapi:
  url: https://web-production-60258.up.railway.app/openapi.json
---

Stratum is an agent-native data brokerage. It wraps the Federal Reserve (FRED),
Bureau of Labor Statistics (BLS), and Bureau of Economic Analysis (BEA) behind a
single x402-gated API. Agents send an HTTP request, receive a 402 challenge with a
Solana USDC payment option, pay on-chain, and replay the request with a payment
receipt — all without human account registration.

**Data available:**

- `/macro/snapshot` — current snapshot of key macro indicators (Fed Funds, CPI,
  unemployment, GDP, yield curve)
- `/macro/series` — full time-series data for any FRED/BLS/BEA series by name or ID
- `/macro/derived` — calculated indicators (real GDP growth rate, yield curve spread,
  Taylor Rule estimate)
- `/macro/releases` — upcoming scheduled data releases (next N days)
- `/macro/delta` — period-over-period change for any indicator

All data is sourced directly from US government APIs and cached at the edge for
sub-second retrieval. Prices are in USDC on Solana mainnet.

## Spend-aware usage

- Call `/macro/series` (no params) first — it returns the full list of available
  series at no charge, so agents can confirm a series exists before paying.
- Use `/macro/snapshot` ($0.01) for a broad overview rather than querying individual
  series separately; it batches the most-requested indicators in one call.
- Use `/macro/releases` ($0.002) to time requests around scheduled releases — data
  changes only on publication days for most series.
- Use `/macro/delta` ($0.005) instead of fetching full history when the agent only
  needs directional change (e.g., "did unemployment rise last month?").
- Cache responses locally for the series `observationEnd` period — FRED data does
  not change between publication dates.
