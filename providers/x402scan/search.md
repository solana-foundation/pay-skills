---
name: search
title: "x402scan"
description: "Search an indexed registry of x402-compatible paid API endpoints by chain, tag, keyword, category, service, and pricing metadata. Helps agents discover payment-enabled APIs, inspect endpoint availability, and explore the x402 ecosystem."
use_case: "Use for discovering x402 paid APIs, searching by chain or category, checking endpoint pricing, finding new payment-enabled services, exploring the x402 ecosystem, registry lookup, API discovery, and comparing available paid endpoints."
category: search
service_url: https://x402scan.com
endpoints:
  - method: POST
    path: "search"
    resource: registry
    description: "Search the x402 endpoint registry by blockchain chain, tag, keyword, or category to discover available paid APIs and their pricing details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
---

Registry and search engine for x402-compatible payment endpoints.
Query by chain, tag, or keyword to discover paid APIs.
