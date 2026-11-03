---
name: travel
title: "BRIJ Flight API"
description: "Live flight and train search with escrow-backed booking on Solana, plus escrow-backed purchase of products on supported merchant sites. On-chain USDC escrow, x402 per-call payments, automatic repricing refunds, manual-review refund requests."
use_case: "Use for flight search and booking, train or long-distance bus search and booking, buying a product from a supported merchant's website via USDC escrow, checking booking or order status, or requesting a refund on behalf of a user."
category: shopping
service_url: https://travel.brij.fi
openapi:
  path: openapi.json
---

Pay-per-call travel and purchase API backed by Solana USDC escrow. Three
families share one lifecycle (quote or search, lock an on-chain intent, pay
the escrow, poll the order): `/air/*` for flights, `/rail/*` for trains and
long-distance buses, and `/shop/*` for buying one product on a supported
merchant's website.

All paid endpoints return HTTP 402 before payment. `POST /air/search` accepts
either a valid x402 payment or a BRIJ-sponsored preview signature. Intent
creation and booking are x402-only.

The escrow is all-or-nothing: if the supplier's price changes between quote
and capture, the full USDC amount is refunded automatically.

## Spend-aware usage

- A booking's total spend is the escrow amount plus the per-call fees; when
  quoting a price to the user, quote the escrow amount (`total_amount`) and
  say the call fees are separate.
- Run `/air/search` once per user query. Results include offer IDs valid for a
  short window — pass the offer ID directly to `POST /air/intents` rather than
  re-searching. A full response can exceed 300 KB: send
  `cheapest_per_itinerary=true` with a `limit` (plus `sort` and filters like
  `max_stops` or `departure_after`/`departure_before`) to get a few-KB view,
  then drill into finalists with `POST /air/offer-details`.
- To revalidate a single offer (fresh price/expiry) or price paid ancillaries
  such as extra bags, use `POST /air/offer-details` with the `offer_id` — it's
  cheaper and quota-friendlier than re-searching. A stale offer returns 404
  without settling the payment.
- `POST /air/intents` initializes an on-chain escrow immediately. Only create
  an intent when the user is ready to book; don't create exploratory intents.
- `GET /air/intents/{id}` is free — poll it instead of re-calling paid endpoints
  to track booking status.
- Booking goes through `POST /air/book` with the `intent_id` and passenger
  details in the request body; the resource URL is static.
- Once the intent reaches `booked` status, retrieve the airline PNR via
  `GET /air/orders/{order_id}` (a token 0.01 USDC, gated by the
  `X-Customer-Support-Code` header; refusals are never charged); the
  `order_id` is returned in the `POST /air/book` response as
  `booking.order_id`.
- Rail and shop reads run a real browser session at the merchant, so they cost
  more: `POST /rail/search` and the quotes (`POST /rail/quote`,
  `POST /shop/quote`) are 0.25 USDC each. Quote only when the user has picked
  a journey or product; a quote's `offer_id` lives ~20 minutes
  (`expires_at`), then re-quote.
- A shop quote takes the product page URL plus the shipping ZIP and reads the
  merchant's own checkout, so `total_amount` is the exact all-in price
  (shipping and sales tax included) — never add margins on top of it.
- `POST /rail/buy` and `POST /shop/buy` pay the intent's escrow amount;
  order status then comes from `POST /rail/orders` / `POST /shop/orders`
  (0.01 USDC, `X-Customer-Support-Code` header): purchasing → ordered →
  confirmed, plus shipped with `tracking_number` for shop orders.
- Refund requests go to the family's `refund-requests` endpoint with the
  `intent_id` and a `reason` in the request body, plus the
  `X-Customer-Support-Code` and `X-Passenger-Family-Name` headers (the lead
  passenger's — or parcel recipient's — family name); they are reviewed
  manually and don't re-trigger a search. Persist the `customer_support_code`
  returned at intent creation — it cannot be re-read later.
