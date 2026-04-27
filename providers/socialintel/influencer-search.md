---
name: influencer-search
title: "Social Intel"
description: "Find Instagram influencers across 33M+ profiles by niche, country, city, follower count, and gender. Returns username, bio, follower count, engagement metrics, business contact email (~50% coverage), and creator categories for marketing discovery."
use_case: "Use for Instagram influencer discovery, creator search, niche keyword matching, audience demographics, engagement rate filtering, follower count ranges, geographic targeting, campaign planning, brand partnerships, and marketing lead lists."
category: data
service_url: https://api.socialintel.dev
openapi_url: https://api.socialintel.dev/openapi.json
endpoints:
  - method: GET
    path: "v1/search"
    resource: influencers
    description: "Search Instagram influencers by keyword, country, city, category, gender, follower range, and email presence"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.50
  - method: GET
    path: "v1/search/free"
    resource: influencers
    description: "Free preview of the influencer search returning up to 3 results, rate-limited to 5 requests per hour"
  - method: GET
    path: "v1/user/{username}"
    resource: influencers
    description: "Look up a single Instagram profile by username and return its full profile and contact data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Instagram influencer discovery across 33M+ profiles. Search by keyword,
category, country, city, follower range, gender, and `has_email` (returns only
profiles with public business email).

Pricing is dynamic on `v1/search` based on `limit`: $0.50 for ≤20 results,
$0.80 for 50, $1.30 for 100. The free `v1/search/free` returns up to 3 results
with no payment (5 req/hr limit) — useful for preview and demos.

x402 payment with USDC accepted on Solana mainnet, Base, Polygon, and Arbitrum.
