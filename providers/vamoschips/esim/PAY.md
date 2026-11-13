---
name: esim
title: "CHIPS eSIM"
description: "Prepaid travel data eSIMs for 240+ countries and regions, bought and delivered over x402. Pay in USDC on Solana or Base, no account or KYC, and receive the eSIM activation code (LPA) to install on a phone."
use_case: "Use when a user needs mobile data abroad: pick a destination and data plan, buy a travel eSIM with USDC, and hand the user the activation code or QR to install on an eSIM-capable, unlocked phone."
category: shopping
service_url: https://vamoschips.com
openapi:
  path: openapi.json
---

Travel data eSIMs (data only: no phone number, calls or SMS) sold by CHIPS.

## Spend-aware usage

- List plans first with `GET /api/v1/destinations/{slug}/plans` (for example
  `mx-country` for Mexico) and confirm the plan, data amount and validity with
  the user before paying. Prices range from about 0.60 to 100 USD.
- `POST /api/v1/x402/orders` with an `Idempotency-Key` header (32-128 chars)
  and `{"quote":{"planSlug":"<slug>"},"acceptTerms":true}`. The binding price
  is the one in the 402 answer. Reuse the same key when retrying so one
  purchase is never paid twice.
- Solana settles in seconds; Base delivers after its block finalizes (about 20
  minutes). Poll `GET /api/v1/x402/orders/{publicId}` with the delivery grant
  as a Bearer token instead of ordering again.
- `POST /api/v1/x402/orders/{publicId}/install` reveals the activation code.
  Reveals are limited, so fetch it once and give it to the user.
