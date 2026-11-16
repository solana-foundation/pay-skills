---
name: china-social-data
title: "AutoTasker Hub — China Social Data"
description: "Real-time trending data from 9 Chinese public boards (Weibo hot search, Zhihu, Douban books, Bilibili, Tieba, Baidu hot search and more), cross-board keyword search, and a $0.002 single-headline micro tier. USDC on Base per call."
use_case: "Use when an agent needs Chinese social media trending snapshots, keyword search across boards, or a single top headline for Chinese content monitoring, market sentiment, or news tracking."
category: data
service_url: https://treaty-formed-disabilities-release.trycloudflare.com/api/x402
openapi:
  path: openapi.json
---

AutoTasker Hub is a per-call x402 API serving real-time Chinese social media trending data. No account, no API key — just USDC on Base (eip155:8453).

## Endpoints

- **GET /api/x402/hotlist** — $0.05 — Snapshot of 9 Chinese public boards (Weibo hot search, Zhihu, Douban books Top250, Bilibili, Tieba, Baidu hot search and more). Each row: platform, title, heat value, rank, source link. Free sample: `?limit=5`.
- **GET /api/x402/search** — $0.05 — Cross-board keyword search. Query params: `q` (required), `board`, `limit`.
- **GET /api/x402/headline** — $0.002 — Single top trending headline right now. Micro tier for agent impulse queries.
- **GET /api/x402/daily_report** — $0.25 — 24h trending digest with sentiment and momentum scoring.
- **GET /api/x402/probe** — $0.50 — Live capability probe: tools up, current prices, treasury, uptime.

## Spend-aware usage

- Start with **headline** ($0.002) to check if a topic is trending before buying a full hotlist.
- Use **search** with `limit=5` for targeted lookups; reserve **hotlist** for broad scans.
- **daily_report** replaces 5+ individual hotlist calls for a one-shot digest.
- Free sample: `https://treaty-formed-disabilities-release.trycloudflare.com/api/x402/sample?limit=5` — no payment needed.
- Discovery: `https://treaty-formed-disabilities-release.trycloudflare.com/.well-known/x402` · MCP: `https://treaty-formed-disabilities-release.trycloudflare.com/.well-known/mcp` · Docs: `https://treaty-formed-disabilities-release.trycloudflare.com/llms.txt`

## Payment

USDC on Base mainnet (eip155:8453), per-call x402 v2, facilitator: AgentPay (https://x402-agent-pay.com). Gasless for the agent (EIP-3009 transferWithAuthorization). Failed requests are never charged — settlement only after a successful upstream response.
