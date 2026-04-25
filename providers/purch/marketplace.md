---
name: marketplace
title: "Purch"
description: "Search and purchase products from Amazon and Shopify through AI agents. Supports product discovery, price and review comparison, shopping automation, Purch Vault skills, knowledge bases, personas, and agent-assisted ecommerce checkout flows."
use_case: "Use for product search, Amazon and Shopify shopping, comparing prices and reviews, purchase initiation, ecommerce automation, product recommendations, agent shopping workflows, buyer research, marketplace browsing, and Purch Vault skills or personas."
category: productivity
service_url: https://api.purch.xyz
endpoints:
  - method: POST
    path: "search"
    resource: products
    description: "Search product listings across Amazon and Shopify by keyword, returning titles, prices, ratings, images, and availability for comparison"
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
