---
name: web-data
title: "Apify"
description: "Apify Actors for web scraping, crawling, and browser automation, returning search results, product listings, social profiles, map places, reviews, job postings, structured datasets, and rendered page content from public websites."
use_case: "Use for web scraping, crawling, and structured data extraction (Google Maps places, Instagram profiles, Amazon listings, Google search results, reviews, job boards, site-to-markdown crawls) under one prepaid budget or per run."
category: data
service_url: https://agi.apify.com
openapi:
  path: openapi.json
---

Apify hosts thousands of ready-to-run cloud programs called Actors. Most take
JSON input and return a dataset: search results, product listings, social media
profiles, map places, reviews, job postings, or the rendered content of a URL.
Actors handle the parts of collecting data from websites that an agent should
not have to solve, including browser rendering, proxy rotation, retries,
pagination, and anti-bot handling.

`agi.apify.com` sells access to that catalog without an Apify account. There are
two ways to pay:

| | Prepaid token | Pay per run |
|---|---|---|
| Endpoint | `POST /protocols/x402/prepaid-tokens`, `POST /protocols/mpp/prepaid-tokens` | `POST /api-proxy/actors/{actorId}/runs` |
| Protocol | x402 `exact`, or MPP `charge` | x402 `batch-settlement` escrow |
| Chains | Solana (USDC, USDT), Base (USDC, x402 only), Tempo (MPP) | Base USDC only |
| You get | A spend-capped Apify API token | A receipt, then the run's dataset |
| Minimum | $1 | $1 escrow ceiling, billed for actual use (at least $0.001) |

Only the prepaid-token endpoints accept Solana payments, so they are what this
listing's Solana gate verifies.

## Prepaid token (Solana)

1. `POST /protocols/x402/prepaid-tokens` with `{"amount":"<usd>","currency":"usd"}`
   (or `?amount=<usd>&currency=usd`) and no payment credential. The response is
   `402` with the challenge in the `payment-required` response header (base64
   JSON) and in the body. The `accepts` array advertises `exact` on Solana USDC,
   Solana USDT, and Base USDC.
2. Sign the chosen requirement and retry the same request with the credential
   in the `payment-signature` header (base64 JSON). These are the x402 v2
   header names; clients that only send the v1 `X-PAYMENT` header will not work.
3. `201` returns `{"token": "...", "remainingBalanceUsd": ..., "expiresAt": "..."}`.
4. Call Apify with the token: `Authorization: Bearer <token>` against
   `https://api.apify.com` or `https://mcp.apify.com`. `agi.apify.com` is off
   the request path from here on; every Actor run, API call, and MCP tool call
   meters against the token's balance.
5. `GET /prepaid-tokens/balance` with the same bearer token returns the
   remaining balance and expiry.

MPP works the same way on `POST /protocols/mpp/prepaid-tokens`: the credential
travels in `Authorization: Payment <proof>` and challenges arrive in
`WWW-Authenticate` headers. That rail settles a `charge` on Tempo or Solana, in
USDC or USDT.

## Pay per run (Base only)

For one Actor run without a token, `POST /api-proxy/actors/{actorId}/runs?amount=<usd>&currency=usd`
with the Actor's JSON input as the body. The first request answers `402` with an
x402 `batch-settlement` challenge on Base USDC. `amount` is an escrow ceiling,
not the expected cost: the run is billed for actual usage, and unused balance
stays in the payment channel and is refunded after 24 hours idle. A valid
voucher or deposit returns `{"receipt":"..."}`.

Poll `GET /api-proxy/runs/{receipt}`: `202` means the run is still going, `200`
returns the Actor's dataset. That read is single-use and revokes further access.
A channel that is already busy answers `409`.

This rail is not Solana-compatible, so the catalog's Solana gate does not
verify it. It is listed because the service serves it from the same OpenAPI
document.

## Spend-aware usage

- Size one token to the whole job. There is no top-up endpoint, so an exhausted
  token means buying another one.
- The minimum purchase is $1. Amounts are buyer-chosen in USD with at most two
  decimal places, and the challenge quotes the same amount on every rail.
- Unused token balance is not refundable and the prepaid account is deleted
  after its TTL, currently 14 days. Buy for near-term work rather than banking
  credit.
- Pick a purpose-built Actor over a general-purpose crawler. A Google Maps
  Actor costs less for map places than crawling and parsing the pages yourself.
- Actor pricing varies per Actor and is published on its Apify Store page.
  Check it before a large run, and cap `maxItems` or an equivalent input limit
  so a broad crawl cannot drain the balance.
- Read `GET /prepaid-tokens/balance` instead of re-deriving spend from run
  results.
- Reuse dataset IDs. A finished Actor run keeps its dataset, so reading the
  results again is far cheaper than re-running the Actor.

## What this listing does and does not cover

The committed OpenAPI document is what `https://agi.apify.com/openapi.json`
serves, pretty-printed with `jq .` and otherwise unmodified. It describes
`agi.apify.com` only: the free `GET /protocols`, the two prepaid-token
purchases that return the 402 challenges and mint the token, the Base-only
pay-per-run pair, and the token balance read.

The endpoints that return the data for a prepaid token are `https://api.apify.com`
(documented at https://docs.apify.com/api/v2) and `https://mcp.apify.com`. Both
authenticate with the minted token and are deliberately outside this spec,
because neither is payment-gated on its own: they are bearer-authenticated and
metered against the prepaid balance. This mirrors `venice/ai`, where
`POST /x402/top-up` is the paid endpoint and the inference routes consume the
resulting balance, and `dtelecom/voice`, where the only paid endpoints are
credit purchases.
