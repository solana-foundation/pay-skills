---
name: merchandise
title: "StableMerch"
description: "Order custom printed merchandise from images or generated artwork via micropayments. Supports standard shirts, heavyweight shirts, mugs, multiple sizes and colors, uploaded image assets, worldwide shipping, and no traditional ecommerce checkout."
category: shopping
use_case: "Use for creating and shipping custom shirts or mugs, turning AI-generated art into physical merchandise, ordering branded swag, fulfillment for user-provided images, gifts, prototypes, creator products, and agent-initiated print-on-demand workflows."
service_url: https://stablemerch.dev
openapi:
  path: openapi.json
---

Custom merchandise via micropayments. Shirts (standard and heavyweight) and
mugs printed with AI-generated or user-provided images, shipped to any address.

## Spend-aware usage

- These endpoints place real merchandise orders. Confirm product type, size,
  color, quantity, artwork URL or prompt, shipping address, and total expected
  price before paying.
- Do not use order endpoints for design previews. Generate or upload artwork
  elsewhere first, then place one final merchandise order.
- If the user is comparing options, summarize prices from metadata and ask them
  to pick before calling a paid order endpoint.
