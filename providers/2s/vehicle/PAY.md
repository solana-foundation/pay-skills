---
name: vehicle
title: "2s Vehicle"
description: "Vehicle and aviation data: NHTSA VIN decode, recalls, complaints and investigations; aircraft registration lookups, airport directory, METAR/TAF aviation weather, and flight status."
use_case: "Use for decoding a VIN, checking vehicle recalls, looking up aircraft or airports, and fetching aviation weather or flight status."
category: data
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
