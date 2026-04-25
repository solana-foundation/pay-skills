---
name: marketplace
title: "Purch"
description: "Search and purchase products from Amazon and Shopify stores via AI agents, with access to skills, knowledge bases, and agent personas in Purch Vault"
use_case: "Use when an AI agent needs to search product catalogs across Amazon and Shopify, compare prices and reviews, or initiate purchases on behalf of a user for e-commerce automation"
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
