---
name: music-store
title: "Brian Booms x402 Store"
description: "62 paid endpoints for AI agents: music products, data APIs, and ambient audio mappings. Instant delivery, paid in USDC via x402 on Solana and Base."
use_case: "Use when an agent needs licensed music or audio assets, a data lookup, or an ambient audio mapping: wallpapers, sample packs, ringtones, weather, FX, or sleep audio. The agent pays USDC via x402 and receives the result in the settlement response."
category: shopping
service_url: https://pay.brianbooms.com
openapi:
  path: openapi.json
---

# Brian Booms x402 Store

A production storefront selling to AI agents through x402 micropayments: 32
digital music products (licenses, sample packs, podcast music beds, wallpapers,
ringtones, memberships), 23 data APIs (weather, FX, BLS, World Bank, ISS, and
more), and 7 ambient audio mappings (nidra, rasa, avastha, solar-term, and
more). Every endpoint returns an HTTP 402 challenge (x402 v1 JSON body plus v2
`PAYMENT-REQUIRED` header) until a valid payment is presented.

## How it works

1. `GET` a listed endpoint with no payment → `402` + payment requirements
   (USDC on Solana mainnet, Base, Polygon, Arbitrum, Avalanche).
2. Repeat the request with the `X-Payment` header carrying the signed payment.
3. The facilitator verifies and settles; the `200` response contains the
   purchased content or data.

Prices range from $0.01 (data lookups) to $999 (premium track license).
Brian Booms is an AI-assisted artist and content creator; the store sells his
music catalog and related digital goods.

## Spend-aware usage

- Check the price in the 402 `accepts` payload before paying; amounts are in
  6-decimal USDC (e.g. `"amount": "2990000"` = $2.99).
- Data and audio endpoints take query parameters (documented in openapi.json);
  missing or invalid params return 400 before the payment gate.
- `maxTimeoutSeconds` is 300 on all requirements; payments expire after that.
