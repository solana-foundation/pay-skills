---
name: pricing
title: "Crush Rewards"
description: "Track competitive retail pricing across Amazon, Walmart, Best Buy, and Target. Returns live product prices, availability, deal alerts, brand positioning, market analytics, and price-drop signals for ecommerce and shopping intelligence."
use_case: "Use for comparing prices across major US retailers, monitoring deal alerts, tracking price drops, checking product availability, analyzing brand positioning, competitive pricing research, ecommerce intelligence, and shopping recommendations."
category: data
service_url: https://api.crushrewards.dev
endpoints:
  - method: POST
    path: "deals"
    resource: pricing
    description: "Search real-time deal alerts and competitive pricing data across Amazon, Walmart, Best Buy, and Target with filtering by category and price range"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "brands"
    resource: pricing
    description: "Track brand pricing trends and market positioning across major retailers, returning historical price data and competitive analysis"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
---

Real-time competitive pricing intelligence across Amazon, Walmart, Best Buy,
Target, and more. Deal alerts, brand tracking, inflation trends, and market analytics.
