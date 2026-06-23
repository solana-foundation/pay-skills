---
name: shopping
title: "CryptoRefills"
description: "Buy gift cards, mobile top-ups, eSIM data, and prepaid vouchers across 180 countries with USDC on Solana. 10,001+ brands (Amazon, Apple, Google Play, Steam, mobile carriers) returning brand metadata, denomination ranges, USDC quotes, voucher codes."
use_case: "Use for buying gift cards, mobile airtime top-ups, eSIM data, prepaid vouchers, and agent-initiated digital purchases delivered as redemption codes; also for brand discovery, country catalog browse, and quoting USDC prices for chosen denominations."
category: shopping
service_url: https://solana.x402.cryptorefills.com
openapi:
  path: openapi.json
---

CryptoRefills exposes its 10,001+ brand catalog (Amazon, Apple, Google Play,
Steam, mobile carriers, utilities) through an x402 v2 two-phase checkout on
Solana mainnet. Default and only rail on this host is USDC SPL on Solana —
the bare `x402.cryptorefills.com` host serves a multi-rail variant if a Base
EVM client is needed.

## Identifiers

- `country_code` — lowercase ISO 3166-1 alpha-2 (`us`, `it`, `de`, …).
- `brand_name` — exact string from `/v1/brands` (e.g. `"Amazon.com"`, `"Steam"`).
- `product_id` — UUID from `/v1/catalog`. Pass into `/v1/price` and `/v1/orders`.
- `is_range` — when `true`, the agent must supply `product_value` (USD/EUR/etc.
  amount). When `false`, `product_value` is ignored.
- `beneficiary_account` — email or phone (mobile top-ups) the voucher delivers to.

## Two-phase order flow

1. `POST /v1/orders` with no payment header → `402 Payment Required`. The
   `PAYMENT-REQUIRED` response header is base64url-encoded x402 v2 JSON
   carrying the per-order Solana `payTo`, the SPL USDC mint, the atomic
   `maxAmountRequired`, and the CDP `feePayer`. The `X-Session-Id` response
   header MUST be echoed on the resubmit.
2. Build an SPL Transfer instruction to the ATA derived from
   `(owner=payTo, mint=asset)` for `maxAmountRequired` units. Partially-sign
   the versioned transaction with the agent's wallet — CDP countersigns as
   `feePayer` and broadcasts.
3. Re-`POST /v1/orders` with `PAYMENT-SIGNATURE` and `X-Session-Id` →
   `200 OK` with the order receipt. Poll `GET /v1/orders/{order_id}` until
   `status="completed"`; voucher codes appear inside `deliveries[]`.

## Spend-aware usage

- For range products (`is_range=true` — gift cards, top-ups with a chosen
  amount), always call `GET /v1/price` with the chosen `product_value` BEFORE
  posting an order. `/v1/price` is free and returns the binding USDC quote.
  Do not call `POST /v1/orders` to discover prices — orders are the only
  paid endpoint.
- For fixed products, the catalog `price_usdc` is indicative. The
  authoritative figure remains `maxAmountRequired` in the 402 envelope at
  order time, so quote-then-pay is still the right pattern when the user is
  near a price boundary.
- Reuse `product_id` across `/v1/catalog` → `/v1/price` → `/v1/orders`. Never
  re-search a known product.
- Confirm `product_id`, `product_value`, `beneficiary_account`, and the
  total USDC quote with the user before committing to a paid order. Order
  settlement is non-reversible.
- Order creation requires a real upstream product in stock; the gateway
  surfaces upstream rejections (e.g. `OUT_OF_STOCK`) as 502 — re-quote with
  `/v1/catalog` if a previously-known `product_id` starts erroring.
