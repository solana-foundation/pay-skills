---
name: china-social-data
title: "AutoTasker Hub — China Social Data"
description: "Real-time trending data from 9 Chinese public boards (Weibo hot search, Zhihu, Douban books, Bilibili, Tieba, Baidu hot search and more), cross-board keyword search with board filter, and a $0.002 single-headline micro tier. USDC on Base per call."
use_case: "Use when an agent needs Chinese social media trending snapshots, keyword search across boards, or a single top headline for Chinese content monitoring, market sentiment, or news tracking."
category: data
service_url: https://treaty-formed-disabilities-release.trycloudflare.com/api/x402
openapi:
  path: openapi.json
---

AutoTasker Hub is a per-call x402 API serving real-time Chinese social media trending data. No account, no API key — just USDC on Base (eip155:8453).

## Endpoints

- **GET /api/x402/hotlist** — $0.05 — Snapshot of 9 Chinese public boards. Each row: platform, title, heat value, rank, source link. Query params: board, limit. Free sample: ?limit=5.
- **GET /api/x402/search** — $0.05 — Cross-board keyword search. Query params: q (required), board (filter by weiboHot|zhihu|douban|bilibili|tieba), limit.
- **GET /api/x402/headline** — $0.002 — Single top trending headline right now. Micro tier for agent impulse queries.
- **GET /api/x402/daily_report** — $0.25 — 24h trending digest with sentiment and momentum scoring.
- **GET /api/x402/probe** — $0.50 — Live capability probe: tools up, current prices, treasury, uptime.

## Spend-aware usage

- Start with **headline** ($0.002) to check if a topic is trending before buying a full hotlist.
- Use **search** with limit=5 and the board filter for targeted lookups; reserve **hotlist** for broad scans.
- **daily_report** replaces 5+ individual hotlist calls for a one-shot digest.
- Free sample: https://treaty-formed-disabilities-release.trycloudflare.com/api/x402/sample?limit=5 — no payment needed.
- Discovery: https://treaty-formed-disabilities-release.trycloudflare.com/.well-known/x402 · MCP: https://treaty-formed-disabilities-release.trycloudflare.com/.well-known/mcp · Docs: https://treaty-formed-disabilities-release.trycloudflare.com/llms.txt

## Payment

USDC on Base mainnet (eip155:8453), per-call x402 v2.
Facilitator: AgentPay (https://x402-agent-pay.com) — settles to dedicated treasury 0xb9A9.
Gasless for the agent (EIP-3009 transferWithAuthorization). Failed requests are never charged.

### Solana payment support

Solana mainnet USDC/USDT support is in progress. The current payment path uses the
AgentPay facilitator on Base (EIP-3009, gasless). x402.rs official facilitator
(https://facilitator.x402.rs) supports Solana mainnet (solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1)
and is planned as a secondary facilitator for multi-chain buyers. The OpenAPI document
declares the Base USDC option as the primary payment method.
