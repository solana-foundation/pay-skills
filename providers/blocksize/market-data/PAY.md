---
name: market-data
title: "Blocksize Market Data"
description: "Live crypto, equity, FX, and metals market data for agents with starter credits, x402 per-call access, timestamps, provenance, and audit receipts."
use_case: "Use when an AI agent needs live prices, VWAP, bid/ask, FX, metals, or auditable market-data receipts without creating an API account."
category: finance
service_url: https://mcp.blocksize.info
openapi:
  path: openapi.json
---

Blocksize Market Data gives agents accountless access to live financial market
data through free discovery endpoints, an eligible 50-credit starter allowance,
and x402-paid HTTP calls.

Use it for market-aware agent workflows that need crypto VWAP, crypto bid/ask,
equity tickers, FX, metals, or small batches of structured financial data. Search the free
instrument endpoints before paying for live data. Prefer a narrow lookup such as
one VWAP pair, one bid/ask symbol, one FX pair, or one metals ticker before
making batch calls.

Responses preserve source timestamps and provider context, and premium workflows
can generate provenance records and audit-grade price receipts. RWA discovery and
quality evidence is available as a monitored research surface; no RWA feed is
represented as production-promoted until its explicit quality gates pass.

## Spend-aware usage

- Search available instruments before making a paid market-data request.
- Prefer one-symbol calls for exploratory tasks.
- Use `/v1/batch` only when the user needs several prices in the same workflow.
- Reuse returned symbols exactly instead of guessing unsupported pair formats.
- Avoid polling unless the user has explicitly approved repeated paid calls.
