---
name: data
title: "Tollkit Data"
description: "Public data lookups: SEC company profiles, filings and financials, company due diligence, 7-day weather forecasts with US alerts, FAA airport delays, US address geocoding, IP geolocation, ECB exchange rates, and x402 market statistics."
use_case: "Use for company research from SEC filings, revenue and margin checks, weather by coordinates or US address, delay checks at US airports, geocoding US addresses, IP location lookups, currency conversion, and x402 seller rankings."
category: data
service_url: https://data.tollkit.dev
openapi:
  path: openapi.json
---

Tollkit Data answers common factual lookups from public sources: SEC EDGAR,
the National Weather Service and MET Norway, the FAA, the US Census geocoder,
DB-IP (CC BY 4.0) and the European Central Bank. Every endpoint is a POST with
a JSON body and is paid per call over x402 in USDC on Solana or Base. No
account or API key. A failed call is not charged.

| Endpoint | Body | Price |
|---|---|---|
| `POST /sec/company` | `{"ticker" or "cik", "form"?, "limit"?}` | $0.002 |
| `POST /sec/financials` | `{"ticker" or "cik"}` | $0.004 |
| `POST /data/company` | `{"ticker" or "cik"}` | $0.006 |
| `POST /data/diligence` | `{"ticker" or "cik"}` | $0.03 |
| `POST /weather` | `{"lat", "lon"}` or `{"address"}` | $0.002 |
| `POST /airport/status` | `{"airport"?}` | $0.003 |
| `POST /geocode` | `{"address"}` | $0.002 |
| `POST /ip` | `{"ip"}` | $0.002 |
| `POST /fx` | `{"from", "to", "amount"?, "date"?}` | $0.002 |
| `POST /market/seller` | `{"host"}` | $0.02 |
| `POST /market/best` | `{"task"}` | $0.01 |
| `POST /market/dataset` | `{}` | $0.10 |

The same tools are available as a remote MCP server at https://api.tollkit.dev/mcp.

## Spend-aware usage

- For one company, `/data/company` returns profile, filings and key financials in one call; use `/data/diligence` only when you need ratios and 8-K summaries.
- `/airport/status` without an `airport` lists every US airport with delays in a single call.
- `/geocode` and address-based `/weather` cover US street addresses only; pass `lat`/`lon` for places outside the US.
- An unknown company on `/data/company` is not charged.
- Send an `Idempotency-Key` header when retrying: a repeat within 10 minutes returns the paid answer again without a second charge.
