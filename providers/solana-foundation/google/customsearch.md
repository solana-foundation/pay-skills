---
category: search
description: Programmable web search across custom search engines.
endpoints:
- description: Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
  method: GET
  path: customsearch/v1
  pricing:
    dimensions:
    - direction: usage
      scale: 1000
      tiers:
      - price_usd: 0
        up_to: 100
      - price_usd: 5
      unit: requests
  resource: cse
- description: Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses
  method: GET
  path: customsearch/v1/siterestrict
  resource: cse.siterestrict
name: customsearch
service_url: https://production-pay-google-customsearch-123883807128.us-central1.run.app
sandbox_service_url: https://sandbox-pay-google-customsearch-123883807128.us-central1.run.app
title: Custom Search JSON API
version: v1
---
