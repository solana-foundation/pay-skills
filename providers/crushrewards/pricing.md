---
name: pricing
title: "Crush Rewards"
description: "Real-time competitive pricing data across Amazon, Walmart, Best Buy, and Target"
category: data
service_url: https://api.crushrewards.dev
endpoints:
  - method: POST
    path: "deals"
    resource: pricing
    description: "Get real-time deal alerts and competitive pricing data"
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
    description: "Track brand pricing and market positioning across retailers"
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
