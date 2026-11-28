---
name: web-data
title: "OpenData Best"
description: "Pay-per-row web data gateway for 99 public sites and 172 endpoints, returning hotel and travel prices, marketplace products and sellers, map places, job postings, property listings, food delivery menus, and reviews as structured JSON rows."
use_case: "Use for live price checks, product and seller lookups on Amazon, eBay, Shopee or Walmart, hotel and flight fares, local business places, job and property listings, restaurant menus, event tickets, and review collection when an agent needs fresh rows."
category: data
service_url: https://x402.opendata.best
openapi:
  path: openapi.json
---

OpenData Best runs collectors for 99 public websites (travel, marketplaces,
real estate, jobs, food delivery, events, local services, and developer
sites) behind one x402 gateway. Each site exposes one or more synchronous
endpoints at `POST /s/<site>/v1/<endpoint>` that take a JSON body and return
structured rows, for example:

- `POST /s/booking-com/v1/search` - hotels, room offers, prices, and ratings for a destination and dates.
- `POST /s/amazon-com/v1/products` - product listings with price, rating, and seller fields.
- `POST /s/google-maps-scraper/v1/search` - places with address, phone, rating, and opening hours.
- `POST /s/indeed-com/v1/search` - job postings with title, company, location, and salary when shown.

All 172 paid endpoints and their request schemas are in the committed
`openapi.json`; the live spec at `https://x402.opendata.best/openapi.json`
has the full parameter notes. Every site also has a free `GET /s/<site>/v1/health`.
The same endpoints are available as tools over stateless MCP at
`POST https://x402.opendata.best/mcp`.

## Payment

- An unpaid request returns `402` with an x402 v2 challenge. The `accepts`
  array includes `exact` on Solana mainnet USDC, plus Base, Polygon,
  Arbitrum, and other EVM USDC options.
- Pricing is per delivered row. Each endpoint has a fixed USDC unit price
  and its own row limits, both shown in its OpenAPI description and request
  schema: most endpoints default to 5 rows (maximum 10) or 10 rows (maximum
  20). On EVM the `upto` scheme charges only the rows delivered.
- Empty results (404), invalid input (422), upstream failures (502), and
  timeouts (504) are not charged.

## Spend-aware usage

- Set `maxResults` to the smallest number of rows that answers the task,
  within the endpoint's declared `minimum` and `maximum`; every endpoint
  accepts it and the quote scales with it.
- Leave optional enrichment flags (`enrichDetails`, `includeReviews`,
  `scrapeDetails`) off unless the task needs those fields.
- Prefer detail URLs or IDs you already have over a new broad search.
- Calls are synchronous and can take up to about 85 seconds on slow sites.
