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
service_url: https://customsearch.googleapis.com/
title: Custom Search JSON API
version: v1
---
