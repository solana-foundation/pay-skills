---
name: influencer-search
title: "Social Intel"
description: "Instagram influencer search by keyword, category, demographics, and location"
category: data
service_url: https://api.socialintel.dev
endpoints:
  - method: POST
    path: "search"
    resource: influencers
    description: "Search Instagram influencers by keyword, category, demographics, and location"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.10
---

Instagram influencer discovery API. Search by keyword, category, demographics,
and location. Dynamic pricing: $0.10 (20 results) to $0.26 (100 results).
