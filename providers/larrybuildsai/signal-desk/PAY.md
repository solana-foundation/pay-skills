---
name: signal-desk
title: "Signal Desk by LarryBuildsAI"
description: "Low-cost agent spend-routing preflights, public lead briefs, DeFi token-risk snapshots, and market-tool comparisons before larger paid API or MCP tool chains."
use_case: "Use before an agent buys model, search, enrichment, or market-data calls when it needs a bounded buy, skip, stop, or ask-for-proof recommendation."
category: data
service_url: https://proofbeforepay.vercel.app
version: v1
openapi:
  path: openapi.json
---

Signal Desk provides small buyer-side decisions before an autonomous agent
commits to a larger paid tool chain. It can quote a route, create a public-data
lead brief, score caller-supplied or public DeFi market signals, and compare
marketplace tool options.

The production API accepts Solana mainnet USDC and Base mainnet USDC. Public MCP
discovery is available at `https://proofbeforepay.vercel.app/signal-desk/mcp`.

## Spend-aware usage

- Start with the $0.03 route quote before buying multiple model or web-tool calls.
- A public lead brief costs $0.03; buy it only when one bounded public URL or domain brief is sufficient.
- Use the $0.01 token-risk snapshot only for a specific token and chain.
- A market-tool comparison costs $0.03; reuse public lead briefs and comparison receipts instead of repeating the same request.
- Treat results as planning inputs; do not route spending beyond the caller's declared budget.

## Safety and claim boundaries

- Signal Desk is advisory and does not execute purchases, trades, outreach, or wallet actions.
- It uses public or caller-supplied information and returns bounded recommendations.
- Results do not prove settlement, guaranteed savings, completeness, compliance, adoption, or revenue.
