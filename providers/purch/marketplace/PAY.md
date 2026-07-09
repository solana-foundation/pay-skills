---
name: marketplace
title: "Purch"
description: "Search and buy products from Amazon and Shopify with USDC on Solana. Includes an AI shopping assistant, dynamic-priced product purchase flow, and Purch Vault for digital goods (skills, knowledge, personas) with downloadable artifacts."
use_case: "Use for product search, Amazon and Shopify shopping, AI shopping assistance, price and review comparison, product purchase and checkout with shipping address, and buying or downloading Purch Vault digital items like skills, knowledge bases, and personas."
category: shopping
service_url: https://api.purch.xyz
openapi:
  path: openapi.json
---

E-commerce API for AI agents. Two product surfaces share one checkout flow: a
unified Amazon+Shopify catalog, and Purch Vault, a marketplace for
agent-consumable digital goods (skills, knowledge bases, personas) with
post-purchase artifact download. All paid endpoints accept Solana USDC via
x402; the charged amount equals the cart total (product price + shipping +
tax for physical items, item price for vault items).

Search returns titles, prices, ratings, image URLs, vendors, and product URLs
mixed across Amazon and Shopify. The `x402/shop` endpoint takes a
natural-language `message` and returns curated recommendations in the same
shape as `x402/search`. Vault search filters by category, product type, and
price range, and is cursor-paginated; product search is page-based (`page` +
`hasMore`).

Identifiers: Amazon products use `asin` (e.g. `B0CXYZ1234`) or `productUrl`;
Shopify products use `productUrl` plus `variantId`; vault items use `slug`.

Note: the public OpenAPI spec advertises `apiKey+paid` auth, but the live 402
challenge accepts pure x402 payment with no API key. Verified end-to-end on
Solana mainnet.

## Spend-aware usage

- Resolve products through `x402/search` or `x402/shop` before any buy call.
  Purchase endpoints are not safe for price discovery — they charge the cart
  total on success.
- Pass exact identifiers to buy endpoints (`asin` / `productUrl` /
  `variantId` / `slug`) — don't re-search what a prior call already returned.
- For natural-language requests, prefer one well-formed `x402/shop` call over
  iterative refinements; the assistant batches across both marketplaces.
- Use the smallest result count that answers the task. Paginate via `cursor`
  on `x402/vault/search` and via `page` + `hasMore` on `x402/search` rather
  than over-requesting.
- Always confirm before `x402/buy` or `x402/vault/buy`: exact item + variant,
  shipping destination, and total expected cost.
