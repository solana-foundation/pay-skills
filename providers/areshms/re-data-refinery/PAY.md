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

x402 v2, scheme `exact`, fixed USD prices settled in USDC. The 402
`PAYMENT-REQUIRED` challenge carries multiple `accepts[]` variants — any one of
them pays the call, all verified and settled by the same Coinbase CDP
facilitator (`https://api.cdp.coinbase.com/platform/v2/x402`):

| # | Network | USDC asset | Settlement address |
|---|---|---|---|
| 1 | Base `eip155:8453` | `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` (permit2) | `0xc30B886C0dba8781263794b58Da45E5ea39eAFE5` |
| 2 | Solana mainnet `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` | `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v` | `56Awqf3eSSX7Li3fgL1XKUsJcxtkW2E2JD3r5FLd3c8Q` |
| 3 | Polygon `eip155:137` | `0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359` | `0xc30B886C0dba8781263794b58Da45E5ea39eAFE5` |
| 4 | Arbitrum One `eip155:42161` | `0xaf88d065e77c8cC2239327C5EDb3A432268e5831` | `0xc30B886C0dba8781263794b58Da45E5ea39eAFE5` |
| 5 | Monad `eip155:143` | `0x754704Bc059F8C67012fEd69BC8A327a5aafb603` | `0xc30B886C0dba8781263794b58Da45E5ea39eAFE5` |
| 6 | World Chain `eip155:480` | `0x79A02482A880bCe3F13E09da970dC34dB4cD24D1` | `0xc30B886C0dba8781263794b58Da45E5ea39eAFE5` |

The Solana entry includes `extra.feePayer` (the CDP facilitator's Solana fee
payer) and `extra.transactionVersions`, mirroring what the x402 Solana server
SDK emits and what CDP's facilitator `/supported` kinds advertise. Testnet
kinds the facilitator also supports (Base Sepolia, World Sepolia, Solana
devnet) are deliberately not advertised — this is a mainnet service.

Wallet disclosure: the merchant EVM receiving address is unchanged
(`0xc30B886C0dba8781263794b58Da45E5ea39eAFE5`, used by every `eip155:*`
variant). Settlement on Solana goes to a new, HMS-controlled receiver
`56Awqf3eSSX7Li3fgL1XKUsJcxtkW2E2JD3r5FLd3c8Q` — its private key is held
out-of-band and never appears in this repository or any chat log. Note: Solana
`exact` transfers target the receiver's USDC associated token account, which
the x402 flow cannot create; that account is being funded, and until it exists
Solana-mainnet payments may verify as invalid while the other five variants
settle normally. Free lane diagnostics: `GET /payment-networks`.

An unpaid GET returns HTTP 402 with a base64 JSON challenge in the
`PAYMENT-REQUIRED` header, including the `accepts[]` terms and the x402 bazaar
discovery extension; replaying with the `x-payment` header returns 200 JSON
plus a `PAYMENT-RESPONSE` settle receipt.

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
