---
name: merchandise
title: "StableMerch"
description: "Order custom printed merchandise from images or generated artwork via micropayments. Supports standard shirts, heavyweight shirts, mugs, multiple sizes and colors, uploaded image assets, worldwide shipping, and no traditional ecommerce checkout."
category: productivity
use_case: "Use for creating and shipping custom shirts or mugs, turning AI-generated art into physical merchandise, ordering branded swag, fulfillment for user-provided images, gifts, prototypes, creator products, and agent-initiated print-on-demand workflows."
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
    description: "Order a custom printed mug from an uploaded image or generated artwork, shipped to the recipient address"
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
