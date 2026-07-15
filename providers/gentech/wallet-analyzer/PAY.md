---
name: wallet-analyzer
title: "Wallet Analytics — AI Smart Money Tracking"
description: "AI-powered wallet analytics with smart money tracking. Analyzes transaction history, P&L, portfolio composition, top trader identification, and behavioral pattern recognition."
use_case: "Use when an agent needs to analyze a wallet's trading history, track smart money movements, calculate wallet P&L, identify top traders, or profile wallet behavior patterns."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: ../openapi.json
pricing:
  per_request: 0.001
---


# GenTech Labs — Wallet Analytics — AI Smart Money Tracking

AI-powered wallet analytics with smart money tracking. Analyzes transaction history, P&L, portfolio composition, top trader identification, and behavioral pattern recognition.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.

## Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/wallet/analyze` | Wallet Analytics — AI Smart Money Tracking — primary endpoint |
