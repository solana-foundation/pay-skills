---
name: apeguard
title: "ApeGuard — Solana Token Risk Scanner"
description: "Real-time Solana memecoin risk intelligence. Scan any token for rug pull risks, whale activity, and buy signals. 7-factor analysis with verdict scoring."
use_case: "Use for Solana token due diligence, rug pull detection, whale tracking, and buy/sell signal generation before trading memecoins."
category: finance
service_url: https://api.pura2.ninja
version: v1
openapi:
  path: openapi.json
---

# ApeGuard — Solana Token Risk Intelligence

ApeGuard analyzes Solana tokens in real-time using multiple data sources:
- **RugCheck API** — contract safety, mint/freeze authority, holder distribution, liquidity locks
- **DEXScreener** — live market data, volume, pair analysis, boost status
- **OKX API** — market trades, candle data, whale transaction records
- **Jupiter** — route availability, price impact, swap feasibility

## Endpoints

| Endpoint | Price | Description |
|----------|-------|-------------|
| `POST /api/scan` | $0.005 | Full token risk scan — 7-factor analysis, verdict, narrative |
| `POST /api/whale` | $0.003 | Whale activity analysis — accumulation/selling signals |
| `GET /api/feed` | $0.001 | Live token feed — 25 tokens with market data |

## Scan Output

- **Risk Score**: 0-100 (higher = safer)
- **Verdict**: CLEAN / WATCH / RISKY / DANGER
- **7 Factors**: Contract Safety, Bundle Risk, Holder Distribution, Liquidity Quality, Volume Quality, Candle Momentum, Dev Wallet Behavior
- **Red/Green Flags**: Critical issues and positive signals
- **Narrative**: Human-readable risk summary in English

## Spend-aware usage

- Scan tokens before trading — one scan per token address is sufficient
- Use `/api/feed` to discover tokens, then scan specific ones of interest
- Whale analysis is most useful for tokens with >$10K liquidity
