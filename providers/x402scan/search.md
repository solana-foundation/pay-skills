---
name: search
title: "x402scan"
description: "Full-text search and registry of indexed x402 payment endpoints"
category: search
service_url: https://x402scan.com
endpoints:
  - method: POST
    path: "search"
    resource: registry
    description: "Search indexed x402 endpoints by chain, tag, or keyword"
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
