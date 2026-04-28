---
name: pricing
title: "Crush Rewards"
description: "Track competitive retail pricing across Amazon, Walmart, Costco, Home Depot, Nordstrom, IKEA, and other US/Canadian retailers. Returns live prices, availability, deal alerts, brand positioning, inflation trends, and price-drop signals."
use_case: "Use for comparing prices across major US and Canadian retailers, monitoring deal alerts, tracking price drops, checking product availability, analyzing brand positioning, competitive pricing research, ecommerce intelligence, and shopping recommendations."
category: data
service_url: https://api.crushrewards.dev
openapi_url: https://api.crushrewards.dev/openapi.json
endpoints:
  - method: GET
    path: "v1/shopper/best-price"
    resource: shopper
    description: "Find the lowest current price for a product across Amazon, Walmart, Costco, Home Depot, Nordstrom, and IKEA"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/shopper/price-history"
    resource: shopper
    description: "Retrieve historical price points for a product over time across tracked retailers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/shopper/deal-finder"
    resource: shopper
    description: "Find currently discounted products in a category, ranked by savings percentage and absolute discount"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/shopper/price-drop-alert"
    resource: shopper
    description: "Check whether a product has had a recent price drop and return the magnitude and timing"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/marketing/competitive-landscape"
    resource: marketing
    description: "List all products and current pricing in a category for competitive landscape analysis"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/marketing/brand-tracker"
    resource: marketing
    description: "Track a brand's pricing and presence over time across retailers and product categories"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/marketing/share-of-shelf"
    resource: marketing
    description: "Compute brand market share within a category by SKU count and price-weighted share"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/analyst/inflation"
    resource: analyst
    description: "Track price inflation trends in a category over a date range with retailer breakdown"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: GET
    path: "v1/analyst/price-dispersion"
    resource: analyst
    description: "Analyze price spread across retailers within a product category, returning min/median/max"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: GET
    path: "v1/analyst/category-summary"
    resource: analyst
    description: "Summary statistics for a product category including average prices, deal density, and brand counts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
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
