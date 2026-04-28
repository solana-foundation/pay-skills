---
name: marketplace
title: "Purch"
description: "Search and buy products from Amazon and Shopify with USDC on Solana. Includes an AI shopping assistant, dynamic-priced product purchase flow, and Purch Vault for digital goods (skills, knowledge, personas) with downloadable artifacts."
use_case: "Use for product search, Amazon and Shopify shopping, AI shopping assistance, price and review comparison, agent-initiated purchases with shipping address, and buying or downloading Purch Vault digital items like skills, knowledge bases, and personas."
category: productivity
service_url: https://api.purch.xyz
openapi_url: https://api.purch.xyz/openapi.json
endpoints:
  - method: GET
    path: "x402/search"
    resource: products
    description: "Search products on Amazon and Shopify by keyword with optional price, brand, and pagination filters"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "x402/shop"
    resource: products
    description: "Send a natural-language shopping request and get curated product recommendations across retailers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.10
  - method: POST
    path: "x402/buy"
    resource: products
    description: "Purchase a product by ASIN or product URL with shipping address and email; price is dynamic and equals product total"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "x402/vault/search"
    resource: vault
    description: "Search Purch Vault for digital items including skills, knowledge bases, and agent personas by keyword"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "x402/vault/buy"
    resource: vault
    description: "Buy a vault item by slug; price is dynamic and equals the listed item price in USDC"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "x402/vault/download/{purchaseId}"
    resource: vault
    description: "Download a previously purchased vault item using the purchase ID returned from x402/vault/buy"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

E-commerce API for AI agents. Search and buy from Amazon and Shopify, or trade
digital goods through Purch Vault. All endpoints accept Solana USDC via x402.

Search returns titles, prices, ratings, image URLs, vendors, and product URLs
mixed across Amazon and Shopify. The `x402/shop` endpoint takes a
natural-language `message` and returns curated recommendations. Purchases use
dynamic pricing — the paid amount equals the product total (including shipping
and tax).

Identifiers: Amazon products use `asin` (e.g. `B0CXYZ1234`) or `productUrl`;
Shopify products use `productUrl` plus `variantId`; vault items use `slug`.

Note: the public OpenAPI spec advertises `apiKey+paid` auth, but the live 402
challenge accepts pure x402 payment with no API key. Verified end-to-end on
Solana mainnet.

## Spend-aware usage

- Search or use `x402/shop` for recommendations before any purchase. A purchase
  endpoint must only be called after the user confirms the exact item, variant,
  shipping destination, and total expected cost.
- Use exact identifiers when available: `asin` or `productUrl` for Amazon,
  `productUrl` plus `variantId` for Shopify, and `slug` for vault items.
- Do not call purchase endpoints for price discovery. Use search results first,
  then ask the user to pick one item.
