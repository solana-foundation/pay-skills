---
name: influencer-search
title: "Social Intel"
description: "Find Instagram influencers across 33M+ profiles by niche, country, city, follower count, and gender. Returns username, bio, follower count, engagement metrics, business contact email (~50% coverage), and creator categories for marketing discovery."
use_case: "Use for Instagram influencer discovery, creator search, niche keyword matching, audience demographics, engagement rate filtering, follower count ranges, geographic targeting, campaign planning, brand partnerships, and marketing lead lists."
category: data
service_url: https://api.socialintel.dev
openapi:
  url: https://api.socialintel.dev/openapi.json
---

Instagram influencer discovery across 33M+ profiles. Search by keyword,
category, country, city, follower range, gender, and `has_email` (returns only
profiles with public business email).

Pricing is dynamic on `v1/search` based on `limit`: $0.50 for ≤20 results,
$0.80 for 50, $1.30 for 100. The free `v1/search/free` returns up to 3 results
with no payment (5 req/hr limit) — useful for preview and demos.

x402 payment with USDC accepted on Solana mainnet, Base, Polygon, and Arbitrum.

## Spend-aware usage

- If the user only needs a quick preview, use `v1/search/free` first; it returns
  up to 3 results without payment but is rate-limited.
- For paid search, choose the smallest `limit` that answers the task. Do not
  default to 100 results for discovery questions.
- If the user gives an exact Instagram username, use `v1/user/{username}` rather
  than a broader paid search.
- Add filters such as country, city, follower range, category, gender, or
  `has_email` before paying so the first result set is usable.
