---
name: netflix
title: "Netflix Gift Cards (RelAI)"
description: "Buy Netflix gift cards with USDC on Solana via x402 micropayments. Netflix digital gift card. Redemption codes emailed instantly; $20–$100 denominations; gas-free."
use_case: "Use for buying Netflix gift cards, gifting Netflix credit, sending Netflix gift cards by email, and agent-initiated Netflix gift card purchases paid in USDC on Solana."
category: shopping
service_url: https://netflix.x402.fi
openapi:
  path: openapi.json
---
Netflix gift cards for AI agents, paid with USDC on Solana via x402. Browse
denominations on the free `/store/catalog/netflix` endpoint, then buy with a
single paid `POST /store/buy/netflix-<amount>`. Available denominations:
$20, $50, $60, $100. The redemption code is emailed to `recipient_email` instantly.
Payment is gas-free — RelAI sponsors the Solana transaction fee.

Each purchase takes `recipient_email` (required), `country_code` (ISO code from
the endpoint's enum), and an optional `sender_name`.

## Spend-aware usage

- These endpoints place real, non-refundable gift card orders. Confirm the brand,
  exact denomination, recipient email, and country with the user before paying.
- Use the free `/store/catalog/netflix` endpoint to discover valid denominations
  and the supported country first — do not call a paid `buy` endpoint to probe.
- Pick the single denomination that matches the user's intended amount; never call
  multiple `buy` endpoints to compare.
