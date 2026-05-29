---
name: api
title: "CoinStats"
description: "Pay-per-request crypto market data, wallet balances, DeFi positions, news, insights, and portfolio analytics — 33 endpoints across 20,000+ coins and 70+ blockchains"
use_case: "Use when an agent needs live cryptocurrency prices, wallet balances, DeFi protocol positions, portfolio tracking, crypto news, or market sentiment indicators"
category: finance
service_url: https://x402.coinstats.app
openapi:
  path: openapi.json
---

CoinStats provides comprehensive cryptocurrency data through 33 pay-per-request endpoints. The API covers live market data for 20,000+ coins, on-chain wallet tracking across 70+ blockchains, DeFi protocol positions, crypto news aggregation, and portfolio analytics.

All endpoints accept USDC micropayments on Base via x402. After the first payment a JWT cookie is issued (1-hour TTL) so subsequent calls in the same session skip the payment flow.

## Data domains

- **Market data** — live prices, charts, global market cap, exchange tickers for 20,000+ cryptocurrencies
- **Wallet tracking** — balances, transactions, DeFi positions, and portfolio charts for any address across 70+ blockchains
- **News** — aggregated crypto news from 100+ sources with sentiment and topic filtering
- **Insights** — Fear & Greed Index, BTC dominance, rainbow charts
- **Portfolio** — read-only access to CoinStats user portfolios via shareToken (no account required)

## Spend-aware usage

- Start with `/coins` to discover coin IDs, then call `/coins/{coinId}` for details rather than paginating through the full list.
- For wallet data, call `/wallet/blockchains` ($0.001) first to get supported chain names, then use `/wallet/balance` ($0.004) for a single chain or `/wallet/balances` ($0.004) for multi-chain aggregation. `/wallet/transactions` costs $0.003 and `/wallet/chart`/`/wallet/charts` cost $0.004 each.
- `/wallet/defi` ($0.04) and `/portfolio/defi` ($0.04) are the most expensive endpoints — only call when DeFi positions are specifically needed.
- `/portfolio/snapshot/items` ($0.05) returns historical snapshots — use `/portfolio/coins` ($0.001) for current holdings instead.
- Use `/markets` ($0.001) for a quick global summary before drilling into per-coin data.
- News endpoints are all $0.001 — prefer `/news/type/{type}` with a sentiment filter (handpicked, trending, latest, bullish, bearish) over the unfiltered `/news` feed to reduce response size.
- Portfolio endpoints require a `sharetoken` header from a CoinStats Degen-plan user who has shared their portfolio.
- After the first paid request, the server issues a JWT cookie (1-hour TTL) that skips re-payment on subsequent calls. This only works if your HTTP client persists cookies across requests — most agent SDKs are stateless by default, so expect per-request charges unless you explicitly enable cookie handling.
