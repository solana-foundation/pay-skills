---
name: products
title: "Tollkit Product Data"
description: "Structured product data from a product page URL: name, brand, SKU, price, currency, availability, images and variants as schema.org JSON, with each field marked as merchant-declared or inferred. One page or up to five per call."
use_case: "Use for price checks on a product URL, comparing the same item across stores, stock and availability checks, price tracking, catalog ingestion, and getting product images or variant lists from a store page."
category: shopping
service_url: https://extract.tollkit.dev
openapi:
  path: openapi.json
---

Give a product page URL and get the product's fields as schema.org/Product
JSON. The page is rendered in a real browser, and the store's own JSON-LD is
read before anything is inferred from the page text. Each response lists which
fields matched merchant-published data (`provenance.declared`) and which were
read off the page (`provenance.inferred`). Paid per call over x402 in USDC on
Solana or Base. No account or API key. A failed extraction is not charged.

| Endpoint | Body | Price |
|---|---|---|
| `POST /extract` | `{"url", "allow_redirect"?}` | $0.01 |
| `POST /extract/batch` | `{"urls": [up to 5], "allow_redirect"?}` | $0.04 |
| `GET /preview` | none | free (fixed sample page) |
| `GET /check?url=` | none | free (inspect any x402 endpoint's live price and payee) |
| `GET /find?q=` | none | free (search the public x402 index) |

The same tools are available as a remote MCP server at https://api.tollkit.dev/mcp.

## Spend-aware usage

- Call `GET /preview` first to see the exact response shape at no cost.
- For 2-5 products, `/extract/batch` costs $0.04 instead of up to $0.05 for separate calls.
- A URL that redirects to a different page (for example a category listing) is refused at no charge; pass `allow_redirect: true` only if you want whatever the URL resolves to.
- Repeat calls for the same URL within 300 seconds are served from the recent render and marked `cached: true`.
