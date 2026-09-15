---
name: music-store
title: "Brian Booms x402 Store"
description: "33 digital products for AI agents: music licenses, podcast music packs, sample packs, custom ambient commissions, and wallpapers. Instant download delivery, paid in USDC via x402 on Solana and Base."
use_case: "Use when an agent needs licensed music or audio assets: podcast intros, game soundtracks, sample packs, custom ambient commissions, or wallpapers. The agent pays USDC via x402 and receives an instant download URL in the settlement response."
category: shopping
service_url: https://pay.brianbooms.com
openapi:
  path: openapi.json
---

# Brian Booms x402 Store

A production storefront selling 33 digital products to AI agents through x402
micropayments. Every buy endpoint returns an HTTP 402 challenge (x402 v1 JSON
body plus v2 `PAYMENT-REQUIRED` header) until a valid payment is presented.

## How it works

1. `GET /api/v1/buy/{sku}` with no payment → `402` + payment requirements
   (USDC on Solana mainnet, Base, Polygon, Arbitrum, Avalanche).
2. Repeat the request with the `X-Payment` header carrying the signed payment.
3. The facilitator (xpay.sh) verifies and settles; the `200` response contains
   the instant download URL for the purchased product.

Prices range from $0.05 (agent wallpapers) to $999 (premium track license).
The full machine-readable catalog lives at
`https://brianbooms.com/.well-known/purchase-catalog.json`.

## Spend-aware usage

- Check the price in the 402 `accepts` payload before paying; amounts are in
  6-decimal USDC (e.g. `"amount": "2990000"` = $2.99).
- Commissions (`commission-*`) are services, not downloads: include the buyer's
  brief as the `brief` query parameter; delivery follows by the channel in the
  response.
- `maxTimeoutSeconds` is 300 on all requirements; payments expire after that.
