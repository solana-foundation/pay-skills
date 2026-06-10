---
name: market-data
title: "Blocksize Market Data"
description: "Agent-native institutional crypto, FX, and metals market data through listed x402-paid per-call routes."
use_case: "Use when an AI agent needs live market prices, VWAP, bid/ask snapshots, FX, or metals from the listed paid sample routes without creating an API account."
category: finance
service_url: https://mcp.blocksize.info
openapi:
  path: openapi.json
---

Blocksize Market Data gives agents accountless access to live financial market
data through x402-paid HTTP calls.

Use it for market-aware agent workflows that need crypto VWAP, crypto bid/ask,
FX, or metals from the routes listed in the OpenAPI sidecar. Prefer a narrow
lookup such as one VWAP pair, one bid/ask symbol, one FX pair, or one metals
ticker.

## Spend-aware usage

- Prefer one-symbol calls for exploratory tasks.
- Use the listed route examples exactly as shown in the OpenAPI sidecar.
- Avoid polling unless the user has explicitly approved repeated paid calls.
