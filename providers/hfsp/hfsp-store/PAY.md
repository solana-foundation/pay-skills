---
name: hfsp-store
title: "HFSP Store"
description: "Buy gift cards, mobile top-ups, and eSIMs from 10,500+ brands in 180+ countries. Pay USDC on Solana. No account required. Powered by Cryptorefills."
use_case: "Use for purchasing gift cards (Amazon, Google Play, Steam, iTunes, etc.), mobile top-ups, and eSIM data plans with Solana USDC. Browse brands by country, get a live price quote, then pay and receive the code instantly."
category: shopping
service_url: https://store.hfsp.cloud
openapi:
  path: openapi.json
---

Pay-per-purchase gift cards, mobile top-ups, and eSIMs for AI agents. One POST
returns a voucher code or top-up confirmation — no accounts, no API keys.

Payment is Solana mainnet USDC via the x402 protocol. The store returns a 402
with the exact USDC amount (Cryptorefills base price + 2.5% commission). Send
the payment, retry with `X-Solana-Tx: <confirmed-signature>`, receive the code.

## Flow

```
GET /api/brands?country_code=us
→ 200  [{ "brand_name": "Amazon.com", ... }, ...]

GET /api/catalog?country_code=us&brand_name=Amazon.com
→ 200  [{ "product_id": "...", "price_usdc": 10.25, ... }, ...]

POST /api/orders
{ "email": "agent@example.com", "items": [{ "product_id": "..." }] }

→ 402  { pay: { amount: 10512820, amountUsd: "10.51", payTo: "FEuTe..." } }
→ (send USDC on Solana mainnet)
→ POST /api/orders  X-Solana-Tx: <signature>
→ 200  { data: { order_id: "...", deliveries: [{ voucher_code: "XXXX-YYYY" }] } }
```

For async orders, poll `GET /api/orders/{id}` until `status: completed`.

## Catalog coverage

- **Gift cards:** Amazon, Google Play, Steam, iTunes, Netflix, Xbox, PlayStation, and thousands more
- **Mobile top-ups:** Prepaid recharges in 180+ countries
- **eSIMs:** Data plans for travel

## Payment details

- **Network:** Solana mainnet (`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`)
- **Asset:** USDC (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`, 6 decimals)
- **Recipient:** `FEuTewmn9RdwexQnhvkCq7VaXfpnQL9qsYrTrCgTtk5e`
- **Header:** `X-Solana-Tx: <confirmed transaction signature>`

## Spend-aware usage

- Call `GET /api/brands` first to confirm brand availability in the target country before placing an order.
- Call `GET /api/catalog` to get the exact `product_id` and see if the product has a fixed price or accepts a `product_value` range.
- The 402 response includes `pay.amountUsd` — confirm this matches expectations before sending USDC.
- Each transaction signature is single-use; a replay returns 402 immediately.
- For range products (mobile top-ups), pass `product_value` in the order body.
- If `status: processing` is returned, poll `GET /api/orders/{id}` — most orders complete within 30 seconds.
