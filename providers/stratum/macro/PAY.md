---
name: macro
title: "Stratum — Agent-Native Data Brokerage"
description: "Pay-per-query access to economics, legal, biomedical, and real estate data. USDC on Base or Solana mainnet; pathUSD on Tempo. No account setup — agents pay and retrieve in one round trip."
use_case: "When agents need macroeconomic indicators, SEC filings, patent searches, clinical trial data, or drug safety reports for reasoning, forecasting, compliance checks, or investment decisions."
category: data
service_url: https://web-production-60258.up.railway.app
openapi:
  url: https://web-production-60258.up.railway.app/openapi.json
---

Stratum is an agent-native data brokerage wrapping US government APIs and professional research
databases behind a single payment-gated HTTP interface. Agents send a request, receive a 402
challenge, pay on-chain, and replay — no registration, no API keys, no OAuth flows.

## Payment rails

Every endpoint emits a dual-challenge 402 so agents see all available payment options from a
single unauthenticated request.

| Rail | Token | Network | Chain ID |
|------|-------|---------|----------|
| x402 | USDC | Base mainnet | eip155:8453 |
| x402 | USDC | Solana mainnet | — |
| MPP | pathUSD | Tempo mainnet | eip155:4217 |

**Validation order:** x402 is evaluated first (EVM Base, then Solana). If the request carries a
valid x402 `X-PAYMENT` receipt, the MPP gate is bypassed. MPP (`Authorization: Payment …`) is
only evaluated when no x402 receipt is present.

## Endpoints

### Macroeconomics — all live

Source: Federal Reserve (FRED), Bureau of Labor Statistics (BLS), Bureau of Economic Analysis
(BEA), US Treasury.

| Endpoint | Price | Description |
|----------|-------|-------------|
| `GET /macro/snapshot` | $0.010 | 13 key indicators in one call: GDP, CPI, Core CPI, Core PCE, unemployment, nonfarm payrolls, Fed Funds, 2Y/10Y yields, yield curve spread, 10Y TIPS real yield, M2 |
| `GET /macro/series` | $0.005 | Historical time-series for any of 43 FRED/BLS/BEA series by name or FRED ID. Omit both params to list all available series **at no charge**. |
| `GET /macro/derived` | $0.010 | Computed indicators: 10Y real yield, 10Y breakeven inflation, 10Y-2Y yield curve spread, real GDP growth rate, average hourly earnings |
| `GET /macro/releases` | $0.002 | Economic data releases published in the last 30 days — use to time queries around publication dates |
| `GET /macro/delta` | $0.005 | Period-over-period % change across 8 key indicators (default) or a single series with `?series=` |

### Legal and regulatory — partially live

Price: $0.010 per query. Pass `?type=` to select data type and `?query=` as a company name,
filing type, patent number, or entity name.

| Type (`?type=`) | Status | Source |
|-----------------|--------|--------|
| `sec_filings` | ✅ Live | SEC EDGAR |
| `regulatory_actions` | ✅ Live | FDA OpenFDA |
| `patents` | ✅ Live | Lens.org (USPTO / EPO / WIPO) |
| `case_filings` | 🔜 Coming soon | PACER |
| `court_docket` | 🔜 Coming soon | PACER |
| `compliance_check` | 🔜 Coming soon | — |

Coming-soon types return a `status: "coming_soon"` field and a representative response shape.
The endpoint is live and accepting payment — live data will replace the stub when the pipeline
is ready.

### Biomedical and pharma — partially live

Price: $0.010 per query. Pass `?type=` to select data type and `?query=` as a drug name,
company, condition, trial ID, or therapeutic area.

| Type (`?type=`) | Status | Source |
|-----------------|--------|--------|
| `clinical_trials` | ✅ Live | ClinicalTrials.gov |
| `drug_approvals` | ✅ Live | FDA Drugs@FDA |
| `adverse_events` | ✅ Live | FDA FAERS |
| `pipeline` | 🔜 Coming soon | Evaluate Pharma |
| `patent_expiry` | 🔜 Coming soon | FDA Orange Book |
| `market_size` | 🔜 Coming soon | GlobalData |

Coming-soon types return `status: "coming_soon"` and a representative data shape.

### Real estate — coming soon

`GET /real-estate` — $0.010 per query.

All types (`comps`, `valuation`, `rental_rates`, `market_trends`, `permits`, `demographics`,
`zoning`, `investment`, `distressed`) are in development. Every type returns a
`status: "coming_soon"` field and a representative response shape that mirrors the live schema.

Pass `?type=` and `?location=` (address, zip, or city/state).

### Insurance — coming soon

`GET /insurance` — $0.010 per query.

All types (`rates`, `claims`, `loss_ratios`, `catastrophe`, `reinsurance`, `fraud_indicators`)
are in development. Every type returns a `status: "coming_soon"` field and a representative
response shape.

Pass `?type=` and optionally `?query=` (carrier name, state, line of business, or claim ID).

## Spend-aware usage

- Call `GET /macro/series` with no parameters — it returns all 43 available series at no charge,
  so agents can verify a series name or ID before paying for historical data.
- Use `/macro/snapshot` ($0.010) for a broad overview rather than querying individual series;
  it batches the 13 most-requested indicators in a single call.
- Use `/macro/releases` ($0.002) to check which datasets have fresh data before querying —
  FRED data only changes on scheduled publication days.
- Use `/macro/delta` ($0.005) instead of fetching full history when the agent only needs
  directional change (e.g., "did unemployment rise last month?").
- Cache responses locally until the series `observationEnd` date — data does not change between
  publication dates.
- For coming-soon endpoints: the request will be charged. Agents should check the `status` field
  in the response before processing; `"coming_soon"` indicates the data shape is representative,
  not live.
