---
name: influencer-search
title: "Social Intel"
description: "Find Instagram influencers using keyword, category, audience demographics, engagement metrics, follower counts, location filters, and creator profile data. Built for marketing discovery, campaign planning, audience fit analysis, and creator research."
use_case: "Use for Instagram influencer discovery, creator search, niche keyword matching, audience demographics, engagement rate filtering, follower count ranges, geographic targeting, campaign planning, brand partnerships, and marketing lead lists."
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
