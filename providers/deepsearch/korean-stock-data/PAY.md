---
name: korean-stock-data
title: "DeepSearch Korean Stock & Crypto"
description: "Historical and real-time data for all 2,000+ KRX-listed companies — up to 10 years of quarterly financials, 3 years of daily prices, news with sentiment, AI issue analysis, investment risk, dividends, and crypto prices with kimchi premium."
use_case: "Use for fetching Korean stock fundamentals, multi-year financial history, daily price history for backtesting, news sentiment, AI-powered issue and risk analysis for investment research, dividend schedules, and Korean crypto exchange prices with kimchi premium data."
category: finance
service_url: https://x402.deepsearch.com
openapi:
  path: openapi.json
---

Korean Exchange (KRX) stock and crypto data via x402 pay-per-query micropayments.
Covers all 2,000+ KOSPI/KOSDAQ listed companies. No subscription, no API key.

Ticker accepts a **6-digit KRX code** or **company name** in English or Korean:
`005930`, `samsung`, `삼성전자` all resolve to Samsung Electronics.

## Spend-aware usage

- Call `/v1/context/company/{ticker}` first for a quick valuation overview
  (market cap, PER/PBR/ROE, latest price) before reaching for deeper endpoints.
- Use `/v1/context/financials/{ticker}` for the latest quarter only. Reach for
  `/2y`, `/5y`, or `/all` only when trend analysis or multi-year CAGR is needed.
- Use `/v1/context/stock/{ticker}/1m` for recent price momentum. Only request
  `/1y` or `/3y` when the user explicitly asks for long-term charts or backtests.
- `/v1/context/issue/{ticker}` and `/v1/context/risk/{ticker}` are the most
  expensive endpoints ($0.025); call them only when the user asks about current
  news impact or investment risk, not for routine lookups.
- For crypto, call `/v1/context/crypto/market` once to get the global overview,
  then `/v1/context/crypto/{symbol}` for a specific coin. The kimchi premium
  field shows the Korean exchange premium vs global price.
