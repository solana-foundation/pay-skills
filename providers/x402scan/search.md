---
name: search
title: "x402scan"
description: "Full-text search engine and comprehensive registry of indexed x402-compatible payment endpoints across chains, tags, and categories"
use_case: "Use when you need to discover x402-compatible paid APIs by chain, category, tag, or keyword — ideal for finding new services, checking endpoint availability, or exploring the x402 ecosystem"
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
