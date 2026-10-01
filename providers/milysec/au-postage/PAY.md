---
name: au-postage
title: "Milypay AU Postage"
description: "Milypay Australia Post postage rates API: domestic and international parcel service options and prices between postcodes via the AusPost PAC. JSON over x402 on Solana for agents."
use_case: "Use for Australia Post shipping quotes, domestic postcode-to-postcode parcel rates, international postage by country code, and agent logistics pricing in Australia."
category: shopping
service_url: https://api.milypay.xyz
version: v1
openapi:
  path: openapi.json
---

Milypay Australia Post PAC rates. Domestic: `from`, `to`, `weight`. International: `country`, `weight`.

Pay per call via x402 on Solana. Accepts **USDC**, **USDT**, and **AUDD**.

## Spend-aware usage

- Quote once per lane (from/to/weight); reuse within the cart.
- Prefer domestic postcodes when both ends are Australian.

Docs: https://milypay.xyz/agents.md · Demo: https://milypay.xyz/demo · Brand: **Milypay** (Milysec)
