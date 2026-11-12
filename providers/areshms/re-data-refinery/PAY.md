---
name: re-data-refinery
title: "RE Data Refinery"
description: "Pay-per-call Ohio real estate investor data for agents: scored property listings, foreclosure, tax-sale, auction and preforeclosure leads, price and tax history, school ratings, and cash-buyer lists returned as JSON."
use_case: "Use for Ohio wholesaling and investing research: foreclosure or tax-sale lead lists by city, scored on-market listings, flip and wholesale scores per property, price or tax history, school ratings, and cash-buyer prospecting by ZIP or parcel."
category: data
service_url: https://re-data-refinery.ares-hms.workers.dev
version: 1.0.0
openapi:
  path: openapi.json
---

RE Data Refinery serves Ohio residential real estate investor data as JSON over
x402 pay-per-call. Coverage spans 18 Ohio cities (Columbus, Cleveland,
Cincinnati, Toledo, Dayton, Akron, Canton, Youngstown and more) for listings and
foreclosure-family leads, plus 19 counties for preforeclosure records. Data is
public-record based: preforeclosure listings enriched with estimated market
value, rent estimates and lead scores; cash-buyer intelligence from county
deed records. Dataset record counts are published live at the free `/coverage`
endpoint so agents can verify coverage before paying.

## Endpoints and pricing

Paid (fixed price per call; challenge returned as HTTP 402):

| Endpoint | Price (USD) |
|---|---|
| `GET /search?q=<city/zip>&limit=` | $0.05 |
| `GET /properties?city=` | $0.03 |
| `GET /properties/{zpid}` | $0.03 |
| `GET /properties/{zpid}/price-history` | $0.02 |
| `GET /properties/{zpid}/tax-history` | $0.02 |
| `GET /properties/{zpid}/schools` | $0.02 |
| `GET /foreclosures?city=` | $0.05 |
| `GET /tax-sales?city=` | $0.05 |
| `GET /auctions?city=` | $0.05 |
| `GET /preforeclosures?county=` | $0.05 |
| `GET /cash-buyers?zip=` | $0.50 (ZIP rollup) |
| `GET /cash-buyers?parcel=` | $2.50 (parcel deed evidence) |

Free, no payment required: `GET /health`, `GET /coverage`, `GET /v1/coverage`,
`GET /credits`, `GET /llms.txt`, `GET /`, and `GET /openapi.json`.

## Payment

x402 v2, scheme `exact`, fixed USD prices settled in USDC on Base (network
`eip155:8453`, USDC `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`, permit2
assetTransferMethod) with the Coinbase CDP facilitator
(`https://api.cdp.coinbase.com/platform/v2/x402`). An unpaid GET returns HTTP
402 with a base64 JSON challenge in the `PAYMENT-REQUIRED` header, including
the `accepts[]` terms and the x402 bazaar discovery extension; replaying with
the `x-payment` header returns 200 JSON plus a `PAYMENT-RESPONSE` settle
receipt. Payments settle on Base only today — Solana mainnet is not currently
accepted.

## Spend-aware usage

- Check the free `/coverage` endpoint first to confirm the city, county or
  dataset you need has records before paying.
- Resolve a zpid with one `/properties?city=` call, then pull only the
  `/properties/{zpid}` detail or single `/price-history`, `/tax-history`,
  `/schools` slices that the task actually needs.
- Prefer `/search?q=<city>&limit=N` with the smallest useful limit (1–40)
  over broad list calls.
- Lead endpoints accept `city`, `county`, `zip`, status and `min_emv` filters;
  filter narrowly instead of paging through full datasets.
- Rate limit is 20 requests/min/IP — pace paid calls.
