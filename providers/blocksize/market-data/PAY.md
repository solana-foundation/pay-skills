---
name: market-data
title: "Blocksize Market Data"
description: "Agent-native institutional crypto, FX, and metals market data with x402-paid per-call endpoints and free discovery."
use_case: "Use when an AI agent needs live market prices, VWAP, bid/ask snapshots, FX, metals, or compact data for financial workflows without creating an API account."
category: finance
service_url: https://mcp.blocksize.info
openapi:
  path: openapi.json
---

Blocksize Market Data gives agents accountless access to live financial market
data through free discovery endpoints and x402-paid HTTP calls.

Use it for market-aware agent workflows that need crypto VWAP, crypto bid/ask,
FX, metals, or small batches of structured financial data. Search the free
instrument endpoints before paying for live data. Prefer a narrow lookup such as
one VWAP pair, one bid/ask symbol, one FX pair, or one metals ticker before
making batch calls.

## Spend-aware usage

- Search available instruments before making a paid market-data request.
- Prefer one-symbol calls for exploratory tasks.
- Use `/v1/batch` only when the user needs several prices in the same workflow.
- Reuse returned symbols exactly instead of guessing unsupported pair formats.
- Avoid polling unless the user has explicitly approved repeated paid calls.
