---
name: travel
title: "BRIJ Flight API"
description: "Live flight search and escrow-backed booking on Solana. Search real-time availability across global airlines, lock in fares via on-chain USDC escrow, submit passenger details to complete the booking, and request refunds, gated by x402 per-call payments."
use_case: "Use for live flight search, airfare availability checks, booking a flight via on-chain USDC escrow, submitting passenger booking details, checking booking order status, or requesting a flight refund on behalf of a user."
category: shopping
service_url: https://travel.brij.fi
openapi:
  path: openapi.json
---

Pay-per-call flight search and booking backed by Solana USDC escrow. The API
covers the full booking lifecycle: search availability, lock in a fare as an
on-chain intent, submit passenger details to book, and check order status.

All paid endpoints return HTTP 402 before payment. `POST /air/search` accepts
either a valid x402 payment or a BRIJ-sponsored preview signature. Intent
creation and booking are x402-only.

The escrow is all-or-nothing: if the airline's price changes between search and
capture, the full USDC amount is refunded automatically.

## Spend-aware usage

- Run `/air/search` once per user query. Results include offer IDs valid for a
  short window — pass the offer ID directly to `POST /air/intents` rather than
  re-searching.
- `POST /air/intents` initializes an on-chain escrow immediately. Only create
  an intent when the user is ready to book; don't create exploratory intents.
- `GET /air/intents/{id}` is free — poll it instead of re-calling paid endpoints
  to track booking status.
- Booking goes through `POST /air/book` with the `intent_id` and passenger
  details in the request body; the resource URL is static.
- Once the intent reaches `booked` status, retrieve the airline PNR via
  `GET /air/orders/{order_id}`; the `order_id` is returned in the
  `POST /air/book` response as `booking.order_id`.
- Refund requests go to `POST /air/refund-requests` with the `intent_id` and a
  `reason` in the request body, plus the `X-Customer-Support-Code` and
  `X-Passenger-Family-Name` headers; they are reviewed manually and don't
  re-trigger a search. Persist the `customer_support_code` returned by
  `POST /air/intents` — it cannot be re-read later.
