---
name: china-social-data
title: "AutoTasker Hub — China Social Data"
description: "Real-time trending data from Chinese public boards (Weibo hot search, Zhihu, Douban, Bilibili, Tieba, Baidu and more), cross-board keyword search with board filter, and a $0.002 single-headline micro tier. USDC on Base mainnet per call."
use_case: "Use when an agent needs Chinese social media trending snapshots, keyword search across boards, or a single top headline for Chinese content monitoring, market sentiment, or news tracking."
category: data
service_url: https://autotasker.highkingflower.com/api/x402
openapi:
  path: openapi.json
---

AutoTasker Hub is a per-call x402 API serving real-time Chinese social media trending data.
No account, no API key — just USDC on Base mainnet (eip155:8453).

## Endpoints

- **GET /api/x402/hotlist** — $0.05 — Snapshot of Chinese public boards. Query params: board, limit. Free sample: ?limit=5.
- **GET /api/x402/search** — $0.05 — Cross-board keyword search. Query params: q (required), board (filter by weiboHot|zhihu|douban|bilibili|tieba), limit.
- **GET /api/x402/headline** — $0.002 — Single top trending headline right now. Micro tier.
- **GET /api/x402/daily_report** — $0.25 — 24h trending digest with sentiment and momentum.
- **GET /api/x402/probe** — $0.50 — Live capability/treasury probe.

## Spend-aware usage

- Start with headline ($0.002) to check if a topic is trending before buying a full hotlist.
- Use search with limit=5 and the board filter for targeted lookups.
- daily_report replaces 5+ individual hotlist calls for a one-shot digest.
- Free sample: https://autotasker.highkingflower.com/api/x402/sample?limit=5
- Discovery: https://autotasker.highkingflower.com/.well-known/x402.json | MCP: https://autotasker.highkingflower.com/mcp | Docs: https://autotasker.highkingflower.com/llms.txt
- Settlement proof: https://autotasker.highkingflower.com/api/x402/proof

## Payment

USDC on Base mainnet (eip155:8453), x402 exact scheme.
Facilitator: PayAI (https://facilitator.payai.network) — settles to treasury 0xb9A9E6d9C4Ad1635aA685bba2e235A515A94773C.
Gasless for the agent (EIP-3009). Failed requests are not charged.

### Solana payment support

Solana mainnet USDC settlement is **planned, not live yet**. Today only Base mainnet (eip155:8453) settles.
When Solana settlement ships, this provider page and openapi.json (x-payment-networks) will be updated in a follow-up PR.
