---
name: storefront-data
title: "HMS Storefront Data"
description: "Pay-per-call verified daily car-rental rates per class for Columbus, Ohio (Enterprise/Hertz booking sessions, private verified sheet of record) and an HOS-aware truck sleep-stop corridor dataset, returned as JSON over x402."
use_case: "Use for car-rental ground-truth pricing for travel and shopping agents: today's per-class daily rates at Columbus CMH with per-class verified_at timestamps to check data age before citing; free /v1/coverage shows record counts per dataset before paying."
category: data
service_url: https://storefront-data-hms.ares-hms.workers.dev
version: 1.0.0
openapi:
  path: openapi.json
---

HMS Storefront Data serves browser-verified car-rental rates as JSON over x402
pay-per-call. Each record is a car-rental class (Economy, Compact, Intermediate,
Full Size, SUV, Luxury) with a current daily rate extracted from a live
Enterprise or Hertz booking session at John Glenn Columbus Intl Airport (CMH),
plus the exact source URL, vendor name, and UTC `verified_at` timestamp of the
scrape. Rates come from a private verified Google Sheet refreshed daily by the
browser-verification lane; the worker reads it with OAuth server-to-server.

A second dataset, truck sleep stops (HOS-aware, 72ft-trailer-filtered overnight
stops along I-70/I-71 Columbus corridors with Jason's Law scarcity scoring), is
declared in this listing at its launch price but currently serves a free
honest-zero response until its first real records land — paid pricing
auto-activates only when `real_records >= 1`, and the free `/v1/coverage`
endpoint shows the live numbers so no agent ever pays for empty data.

## Endpoints and pricing

Paid (fixed price per call; challenge returned as HTTP 402):

| Endpoint | Price (USD) |
|---|---|
| `GET /v1/rental/rates?city=Columbus` | $0.03 |
| `GET /v1/truck/sleep-stops?from=&to=&hos_hours=` | $0.05 (serves free until ≥ 1 real record; currently an honest empty `stops: []` with the stable `stop_schema`) |

Free, no payment required: `GET /health`, `GET /v1/coverage`, `GET /openapi.json`,
`GET /icon.png`.

## Payment

x402 v2, scheme `exact`, fixed USD prices settled in USDC on Base
(`eip155:8453`, USDC `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`, permit2
assetTransferMethod), verified and settled by the Coinbase CDP facilitator
(`https://api.cdp.coinbase.com/platform/v2/x402`); settlement address
`0xc30B886C0dba8781263794b58Da45E5ea39eAFE5`.

An unpaid GET on the rental route returns HTTP 402 with a base64 JSON challenge
in the `PAYMENT-REQUIRED` header — top-level `x402Version: 2`, `accepts[]`
amount `30000` (atomic USDC for $0.03), `resource` description, and the x402
**bazaar** discovery extension (input query schema + JSON output example) at
the top level of the challenge; replaying with the `x-payment` header returns
200 JSON plus a `PAYMENT-RESPONSE` settle receipt.

Payment compatibility note for reviewers: this worker settles on Base USDC
today (single `accepts[]` variant). No Solana-mainnet or other-chain accepts
variant is advertised yet; adding them later is possible without changing
pricing. The free routes (`/health`, `/v1/coverage`, `/openapi.json`) need no
wallet.

## Spend-aware usage

- Check the free `/v1/coverage` endpoint first: `rental_rates.real_records`
  and `status` show whether the city you need is covered before paying.
- The rates payload includes per-record `verified_at` — treat the freshest
  timestamp as the data age; the lane re-verifies daily.
- `city` today covers `Columbus` only (404 with `covered_cities` otherwise);
  no spend is charged for uncovered cities.
- Rate limit is 20 requests/min/IP — pace paid calls.
