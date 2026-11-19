---
name: glyphcall
title: "Glyphcall — pay-per-call agent data tools"
description: "One API for 650+ pay-per-call tools: EU company and VAT checks, sanctions screening, e-invoice validation, speech to text, web and PDF extraction, token prices and chain reads. Paid per successful call in Solana USDC over x402."
use_case: "Use for company and VAT verification, sanctions screening, XRechnung/ZUGFeRD checks, link safety, web page and PDF extraction, transcription, crypto prices and on-chain reads when an agent needs data without accounts or subscriptions."
category: data
service_url: https://api.glyphcall.com
openapi:
  path: openapi.json
---

Glyphcall exposes hundreds of small GET tools behind one origin. Each call is priced
individually (most $0.01, some $0.002), failed calls are not charged, and the first calls are free.
Payments settle in USDC on Solana over x402; Base, Polygon and Arbitrum and MPP on Tempo are also
supported by the same origin.

The catalog is discoverable at `https://api.glyphcall.com/openapi.json` and over MCP at
`https://api.glyphcall.com/mcp/compact` (three meta-tools reach the whole catalog).

## Spend-aware usage

- Prefer the narrow single-purpose endpoint over a larger pack when only one fact is needed.
- Use `/price/crypto?symbol=…` instead of fetching a full market feed for one price.
- `/extract?url=…` is $0.002; use it rather than a general-purpose scraping call chain.
- A 4xx or 5xx is never charged, so retrying a malformed request costs nothing.
