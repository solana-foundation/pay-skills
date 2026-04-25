---
name: influencer-search
title: "Social Intel"
description: "Instagram influencer discovery API with search by keyword, category, audience demographics, engagement metrics, and geographic location filters"
use_case: "Use when you need to find Instagram influencers matching specific criteria such as niche keywords, audience demographics, engagement rates, follower counts, or geographic location for marketing campaigns"
category: data
service_url: https://api.socialintel.dev
endpoints:
  - method: POST
    path: "search"
    resource: influencers
    description: "Search and discover Instagram influencers by keyword, category, audience demographics, engagement rate, follower count, and geographic location with paginated results"
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
