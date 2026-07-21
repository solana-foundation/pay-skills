---
name: au-address
title: "MilyPay AU Address"
description: "MilyPay Australian address API over G-NAF (16.9M addresses): validate, search/autocomplete, and geocode Australian postal addresses. Returns canonical form, GNAF PID, and coordinates as JSON over x402."
use_case: "Use for Australian address validation, G-NAF geocoding, address autocomplete, canonical address cleanup, and property-location resolution for agents operating in Australia."
category: maps
service_url: https://api.milypay.xyz
version: v1
openapi:
  path: openapi.json
---

MilyPay G-NAF address validation, search, and geocoding. © Geoscape Australia open G-NAF licence. Per-call lookups only.

Pay per call via x402 on Solana. Accepts **USDC**, **USDT**, and **AUDD**.

## Spend-aware usage

- Prefer `/au-address/validate` when you have a full address string.
- Use `/au-address/search` for autocomplete; take the top hit, then validate once.
- Use `/au-address/geocode` only when coordinates alone are needed.

Docs: https://milypay.xyz/agents.md · Demo: https://milypay.xyz/demo · Brand: **MilyPay** (Milysec)
