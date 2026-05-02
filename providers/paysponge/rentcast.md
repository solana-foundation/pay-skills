---
name: rentcast
title: "RentCast API"
description: "Search US property records, sale listings, rental listings, market stats, rent estimates, and value estimates with geographic filters, structured housing attributes, listing detail lookups, and comparable-property data for real-estate workflows."
use_case: "Use for US real-estate search, rental comps, home value estimates, rent estimates, ZIP-level market analysis, sale and rental listing lookup, property detail enrichment, investor research, and housing data workflows that need structured filters."
category: data
service_url: https://rentcast.x402.paysponge.com
openapi:
  url: https://rentcast.x402.paysponge.com/openapi.json
---

RentCast real-estate data endpoints exposed through PaySponge with x402
payments.

This provider covers US property records, sale and rental listings, ZIP-level
market statistics, automated value estimates, and long-term rent estimates.
Search routes support address lookup, city and ZIP filters, latitude/longitude
plus radius search, property type, beds, baths, square footage, lot size, year
built, pricing, listing status, pagination, and optional total-count headers.

All published endpoints in the current spec are paid `GET` routes at $0.01 per
request and accept x402 USDC on Solana mainnet, Base, and Avalanche.

## Spend-aware usage

- Use the most specific geography available. Prefer exact address or ZIP before
  broad city searches so the first paid query is usable.
- Add bedrooms, bathrooms, property type, price, radius, or status filters
  before paying for listings search. Do not default to a wide open query.
- Use the `/{id}` detail routes only after a prior search or record lookup has
  already identified the exact listing or property id.
- Use `avm/value` and `avm/rent/long-term` when the task needs an estimate plus
  comparables. Use the raw listings or property search endpoints when the user
  asked for records rather than a modeled estimate.
- Keep `limit` small during exploration and request total counts only when the
  user actually needs pagination math or market-size reporting.
