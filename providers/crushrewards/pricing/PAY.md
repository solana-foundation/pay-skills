---
name: pricing
title: "Crush Rewards"
description: "Track competitive retail pricing across Amazon, Walmart, Costco, Home Depot, Nordstrom, IKEA, and other US/Canadian retailers. Returns live prices, availability, deal alerts, brand positioning, inflation trends, and price-drop signals."
use_case: "Use for comparing prices across major US and Canadian retailers, monitoring deal alerts, tracking price drops, checking product availability, analyzing brand positioning, competitive pricing research, ecommerce intelligence, and shopping recommendations."
category: shopping
service_url: https://api.crushrewards.dev
openapi:
  url: https://api.crushrewards.dev/openapi.json
---

Real-time competitive pricing intelligence across Amazon, Walmart, Best Buy,
Target, Costco, Home Depot, Nordstrom, and IKEA in US and Canada.

All endpoints are GET requests that take a `q` (free-text query) or `category`
parameter. Optional `country` defaults to `us`; pass `ca` for Canada.

x402 and MPP payment accepted in USDC on Base or Solana mainnet (and MPP via
Tempo). Shopper and marketing endpoints are $0.01; analyst endpoints are $0.02.

## Spend-aware usage

- For one product, use `v1/shopper/best-price` first. It already compares the
  tracked retailers, so do not call one endpoint per store.
- For category browsing, use `deal-finder` for discounted products and
  `category-summary` only when the user asks for aggregate category stats.
- Analyst endpoints cost more. Use `inflation`, `price-dispersion`, or
  `category-summary` only when the answer requires trend or market analysis.
- Put the product name/model and country in the first request. A precise `q` or
  `category` avoids follow-up calls caused by ambiguous results.
