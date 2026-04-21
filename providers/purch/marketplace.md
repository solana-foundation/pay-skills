---
name: marketplace
title: "Purch"
description: "Search and buy products from Amazon and Shopify via AI agents"
category: productivity
service_url: https://api.purch.xyz
endpoints:
  - method: POST
    path: "search"
    resource: products
    description: "Search products across Amazon and Shopify"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

E-commerce API for AI agents. Search and purchase products from Amazon
and Shopify. Also access skills, knowledge, and personas in Purch Vault.
Solana USDC only.
