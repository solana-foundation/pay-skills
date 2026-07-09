---
name: market-pulse
title: "Market Pulse"
description: "Pay-per-call market intelligence for AI agents — stock quotes, gold futures, US indices, and commodity prices in real-time via yfinance. Pay USDC per request with x402, no subscription."
use_case: "Use for live market data: SPY price quote, gold futures (GC=F), S&P 500 (^GSPC), NASDAQ, Dow, VIX, 10Y Treasury Yield, crude oil (CL=F), silver, and detailed stock data with PE ratio, market cap, 52-week range, and earnings dates."
category: finance
service_url: https://bestt.up.railway.app
openapi:
  path: openapi.json
---

# Market Pulse

Real-time market data API for AI agents and developers. No API key, no subscription — just pay USDC per request via the x402 protocol.

## Endpoints

| Endpoint | Price | Description |
|----------|-------|-------------|
| `GET /api/market/quote?symbol=SPY` | $0.03 | Current price + change for any stock, ETF, future, or index |
| `GET /api/market/gold` | $0.03 | Gold futures price + GLD ETF reference |
| `GET /api/market/indices` | $0.05 | S&P 500, NASDAQ, Dow, Russell 2000, VIX, 10Y Yield |
| `GET /api/market/commodities` | $0.05 | Gold, silver, crude oil, natural gas, copper, platinum, palladium |
| `GET /api/market/stock?ticker=AAPL` | $0.05 | Detailed stock: PE, market cap, 52w range, earnings date |
| `GET /api/market/summary` | $0.10 | Full macro: indices + gold + all commodities |

## Data Sources

Powered by yfinance (Yahoo Finance) — live prices for US equities, ETFs, futures, and indices.

## Payment

All paid endpoints return `402 Payment Required` with an x402 payment challenge. USDC accepted on **Base Sepolia** (eip155:84532) and **Solana Devnet** (solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1). See https://x402.org for client SDKs.
