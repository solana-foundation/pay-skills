---
name: pricing
title: "Crush Rewards"
description: "Real-time competitive pricing intelligence across Amazon, Walmart, Best Buy, and Target with deal alerts, brand tracking, and market analytics"
use_case: "Use when you need to compare product prices across major US retailers, track deal alerts and price drops, monitor brand positioning, or analyze competitive pricing trends for e-commerce research"
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
