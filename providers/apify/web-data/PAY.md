---
name: web-data
title: "Apify"
description: "Apify Actors for web scraping, crawling, and browser automation, returning search results, product listings, social profiles, map places, reviews, job postings, structured datasets, and rendered page content from public websites."
use_case: "Use for web scraping, crawling, and structured data extraction (Google Maps places, Instagram profiles, Amazon listings, Google search results, reviews, job boards, site-to-markdown crawls) when an agent needs many calls under one prepaid budget."
category: data
service_url: https://agi.apify.com
openapi:
  path: openapi.json
---

Apify hosts thousands of ready-to-run cloud programs called Actors. Most take
JSON input and return a dataset: search results, product listings, social media
profiles, map places, reviews, job postings, or the rendered content of a URL.
Actors handle the parts of collecting data from websites that an agent should
not have to solve, including browser rendering, proxy rotation, retries, pagination, and
anti-bot handling.

`agi.apify.com` sells access to that catalog as a prepaid credential. An agent
pays once on Solana, receives a spend-capped Apify API token, and then calls
`https://api.apify.com` or `https://mcp.apify.com` with
`Authorization: Bearer <token>` until the balance runs out. No Apify account or
signup needed.

## Payment flow

1. `POST /protocols/x402/prepaid-tokens` with `{"amount":"<usd>","currency":"usd"}`
   and no payment credential. The response is `402` with the challenge in both
   the `payment-required` response header (base64 JSON) and the body. The
   `accepts` array advertises `exact` on Solana USDC, Solana USDT, and Base
   USDC.
2. Sign the chosen requirement and retry the same request with the credential
   in the `payment-signature` header (base64 JSON). These are the x402 v2
   header names; clients that only send the v1 `X-PAYMENT` header will not
   work.
3. `201` returns `{"token": "...", "remainingBalanceUsd": ..., "expiresAt": "..."}`.
4. Call Apify with the token. `agi.apify.com` is off the request path from here
   on; every Actor run, API call, and MCP tool call meters against the token's
   balance.
5. `GET /prepaid-tokens/balance` with the same bearer token returns the
   remaining balance and expiry.

MPP works the same way on `POST /protocols/mpp/prepaid-tokens`: the credential
travels in `Authorization: Payment <proof>` and challenges arrive in
`WWW-Authenticate` headers. That rail settles a `charge` on Tempo (chain ID
4217) or Solana, in USDC or USDT, and its challenges expire after five minutes.

## Spend-aware usage

- Size one token to the whole job. There is no top-up: `POST /prepaid-tokens/top-up`
  returns `501`, so an exhausted token means buying another one.
- The minimum purchase is $1. Amounts are buyer-chosen in USD with at most two
  decimal places, and the challenge quotes the same amount on every rail.
- Unused balance is not refundable and the prepaid account is deleted after its
  TTL, currently 14 days. Buy for near-term work rather than banking credit.
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

The two paid endpoints sell a credential: a prepaid Apify API token. The committed OpenAPI
document describes `agi.apify.com` only, which is the surface that returns the
402 challenges and mints the token.

The endpoints that return the data are `https://api.apify.com` (documented at
https://docs.apify.com/api/v2) and `https://mcp.apify.com`. Both authenticate
with the minted token and are deliberately outside this spec, because neither
is payment-gated on its own: they are bearer-authenticated and metered against
the prepaid balance. This mirrors `venice/ai`, where `POST /x402/top-up` is the
paid endpoint and the inference routes consume the resulting balance, and
`dtelecom/voice`, where the only paid endpoints are credit purchases.
