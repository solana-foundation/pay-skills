---
name: x402watch
title: "x402watch"
description: "Wash-filtered intelligence layer for the x402 ecosystem. Indexes 36k+ services across Base, Solana, Polygon, and Arbitrum with 8-label buyer detection (organic_user, suspected_wash, self_test, developer, ai_agent, analytics_bot, exchange_user, verifier). Free public dashboard, daily CC0 datasets, and a remote MCP server. Pay-per-call with x402 micropayments on Base and Solana."
use_case: "Use for x402 ecosystem analytics, wash detection on a specific buyer wallet, per-service buyer breakdown, full transaction history of a service, category-level time series, evaluating x402 endpoints before agents pay, and operator audit of their own paid endpoints."
category: data
service_url: https://api.x402.printmoneylab.com
openapi:
  url: https://api.x402.printmoneylab.com/openapi.json
---

x402watch is the analytics layer for the x402 ecosystem itself. While other
services on x402 sell domain data, x402watch sells intelligence about the data
flows: who is paying which service, what fraction of the volume is wash, what
categories are growing, which buyers are organic vs synthetic.

Five paid endpoints, x402 micropayments on Base and Solana:

- `wash-detail` ($0.005) — top 50 buyers per service with full label classification, confidence scores, and signal-by-signal breakdown
- `buyer profile` ($0.005) — single buyer wallet's 8-label classification with confidence, all services used, and transaction patterns
- `transactions` ($0.01) — raw 30-day transaction history per service, paginated
- `full-history` ($0.02) — 365-day daily volume time series per category
- `wash/check` ($0.05) — real-time wash analysis on any wallet address with full signal breakdown

Free public endpoints (categories, services search, trends, wash report) are
unlimited at 60 req/hour with no API key. Methodology and code are open: Apache
2.0 (code), CC0 (daily datasets at github.com/printmoneylab/x402watch-data).
Remote MCP server with 5 read-only tools at api.x402.printmoneylab.com/mcp.
Live in production since May 2026.

## Spend-aware usage

- Use the free `categories` and `services` endpoints to discover and filter
  before paying. The paid endpoints are for deep dives, not exploration.
- For "is this wallet wash" style requests, prefer a single `wash/check` call
  ($0.05) over multiple `buyer profile` lookups ($0.005 each). The check
  endpoint returns full signal breakdown in one response.
- For service traffic audits, start with `wash-detail` ($0.005) — top buyers
  plus cohort summary. Only fall back to raw `transactions` ($0.01) if you
  need per-call detail.
- For category-level trends, call `full-history` ($0.02) once for the full
  365-day window per category. Do not loop daily.
- For x402 ecosystem evaluation before paying any service, use the free
  `wash-report` endpoint first to see the aggregate wash percentage by
  category. Only pay for `wash/check` if a specific wallet needs verification.
- Five-tool MCP server is read-only and free for tool listing/discovery — use
  it from Claude Desktop, Cursor, or other MCP clients to explore the
  ecosystem before deciding which paid endpoints to call.
