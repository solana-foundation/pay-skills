---
name: merchandise
title: "StableMerch"
description: "Order custom-printed shirts and mugs from AI-generated images, shipped worldwide"
category: productivity
service_url: https://stablemerch.dev
endpoints:
  - method: POST
    path: "api/shirt"
    resource: products
    description: "Order a custom shirt from your image (S–4XL, Black or White)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 20.00
  - method: POST
    path: "api/heavyweight-shirt"
    resource: products
    description: "Order a heavyweight custom shirt (Shaka Wear 7.5oz, 22 colors, S–7XL)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 25.00
  - method: POST
    path: "api/mug"
    resource: products
    description: "Order a custom mug from your image"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 15.00
---

Custom merchandise via micropayments. Shirts (standard and heavyweight) and
mugs printed with AI-generated or user-provided images, shipped to any address.
