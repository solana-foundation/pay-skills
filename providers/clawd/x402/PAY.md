---
name: x402
title: "Clawd Browser Paid API"
description: "AI agent sessions, Solana DeFi intelligence, and paid data APIs via x402 on Solana mainnet. Private Claude operator sessions, bundled DeFi agent chats, wallet intelligence, realtime stock data, and Pump.fun analytics."
use_case: "Use for premium Claude-powered AI agent sessions, Solana wallet intelligence briefs, realtime stock fundamentals, Pump.fun launch intelligence with AI analysis, and cached Solana DEX market snapshots."
category: ai_ml
service_url: https://x402.wtf
openapi:
  url: https://x402.wtf/api/x402/openapi.json
---

Clawd Browser paid API endpoints via x402 USDC payments on Solana mainnet. Seven paid lanes cover private operator AI sessions, bundled DeFi agent chats, wallet intelligence, stock data, and Pump.fun analytics. DexScreener and catalog endpoints are free.

x402 USDC payment accepted on Solana mainnet. Payment recipient: `EFH1ouVP6ikYgyHm9zaLXSPHJDXsfVcaVLFPjtzw6BbF`.

## Endpoint pricing

| Endpoint | Price | Description |
|---|---|---|
| `POST /api/x402/clawd` | $1.50 USDC | Private Clawd operator session (SSE stream) |
| `POST /api/x402/agent/chat` | $0.69420 USDC | Premium agent chat (SSE stream) |
| `POST /api/x402/agents/chat` | $0.25 USDC | Bundled Solana/DeFi agent chat |
| `POST /api/store/agents/wallet-brief` | $0.10 USDC | Solana wallet intelligence brief |
| `POST /api/x402/stocks/data` | $0.15 USDC | Realtime stock data proxy |
| `POST /api/x402/backroom-pump/data` | $4.20 USDC | Backroom Pump.fun intelligence |
| `POST /api/x402/backroom-pump/analyze` | $4.20 USDC | AI analysis over Pump.fun data |

## Spend-aware usage

- Call `/api/x402/catalog` (free) first to get live product IDs, prices, and protocol support.
- Use `/api/store/agents/wallet-brief` ($0.10) for lowest-cost agentic calls when only wallet intelligence is needed.
- Use `/api/x402/stocks/data` ($0.15) for a single Financial Datasets endpoint proxy call.
- Use `/api/x402/agents/chat` ($0.25) to route to a specific bundled Solana, DeFi, trading, or payment agent by `agentId`.
- Use `/api/x402/agent/chat` ($0.69420) for private premium chat sessions with higher compute allocation.
- Use `/api/x402/clawd` ($1.50) for autonomous multi-step operator-grade task execution.
- Use `/api/x402/backroom-pump/data` or `/api/x402/backroom-pump/analyze` ($4.20) for premium Pump.fun token intelligence.
- All `/api/dexscreener/*` and `/api/dex/token-data` endpoints are free — use for Solana market context without payment.
