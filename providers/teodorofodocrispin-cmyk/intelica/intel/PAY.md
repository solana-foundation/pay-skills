---
name: intelica
title: "Intelica — Competitive Intelligence API"
description: "Competitive intelligence API for autonomous AI agents. Analyzes any company or market and returns structured JSON with IMI score (0.0-1.0 structural moat), go/no-go decision (enter/avoid/monitor/acquire/partner), competitor mapping, and execution plan. Pay-per-call via x402 on Solana mainnet ($0.05 USDC standard / $1.00 USDC elite modes). No accounts, no API keys, no subscriptions."
use_case: "Use for market entry decisions, startup idea validation, competitive landscape mapping, venture screening before investment, regulatory compliance assessment for new markets, and sales battlecard generation. Returns structured decisions that agents can act on autonomously — enter a market, avoid a competitor, monitor IMI changes via Pulse alerts."
category: ai
service_url: https://api.intelica.dev
openapi:
  path: openapi.json
---

Competitive intelligence API built natively for autonomous AI agents. Payments on Solana mainnet via x402 — no subscriptions, no accounts, no API keys required.

The core endpoint is `POST /intel`, which accepts a company or market description and returns a structured analysis:

- `decision_recommendation.action` — `enter` / `avoid` / `monitor` / `acquire` / `partner`
- `decision_recommendation.confidence_score` — 0.0-1.0 (data richness signal)
- `intelica_moat_index` — structural moat strength scored against 3,600+ companies in the Competitive Graph
- `detected_competitors` — mapped from real verified sources
- `execution_plan` — week 1 actions, budget guidance by phase, non-obvious insight

Two pricing tiers:

- `POST /intel` (standard modes: competitive, fundraising, partnership, acquisition, market_entry, crypto_protocol) — **$0.05 USDC**
- `POST /intel` (elite modes: venture_screening, market_entry_execution, regulatory_compliance, risk_assessment, sales_enablement) — **$1.00 USDC**
- `POST /batch` — up to 10 companies in parallel — **$0.20 USDC**
- `GET /graph/market-share/{sector}` — FREE sector saturation report

The API implements x402 v2. On the first request it returns a `PAYMENT-REQUIRED` header (base64-encoded payload) with the Solana mainnet payment details. The agent pays on-chain and retries with the payment proof in the `X-PAYMENT` header.

## Auto-monitoring with Pulse

Pass `auto_execute: true` and `webhook_url` to automatically subscribe to IMI change alerts at $0.01 USDC/alert when `action=monitor`. The agent receives a webhook when the competitive landscape shifts.

## Spend-aware usage

- Use `GET /graph/market-share/{sector}` (FREE) before `/intel` to assess sector saturation and identify which companies to analyze
- Use `/batch` ($0.20) instead of 4+ individual `/intel` calls ($0.20+) when analyzing multiple companies
- Standard mode ($0.05) is sufficient for go/no-go decisions; use elite modes ($1.00) only when you need detailed GTM roadmaps or regulatory compliance analysis
- The `confidence_score` field indicates data richness — scores below 0.50 suggest limited public data on the target
