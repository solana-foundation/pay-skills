---
name: geo
title: "2s Geo"
description: "Geographic and environmental data: forward/reverse geocoding, IP geolocation, elevation, timezones, points of interest, parks; weather forecasts and history, climate stations, tide and river gauges, earthquakes, and energy/solar resources."
use_case: "Use for geocoding addresses, resolving coordinates to places, and fetching weather, climate, tide, earthquake, or timezone data for a location."
category: maps
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
