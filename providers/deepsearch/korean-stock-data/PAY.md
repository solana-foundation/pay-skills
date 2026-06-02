---
name: korean-stock-data
subdomain: korean-stock-data
title: KRX Korean Stock & Crypto Data
description: "Up to 10 years of financials and 3 years of daily prices for all 2,000+ KRX-listed stocks. Crypto prices with kimchi premium. No subscription."
category: data
version: 1.0.0
use_case: "Fetch historical financials, daily stock price history, news, dividends, and investment risk data for all KOSPI/KOSDAQ listed companies via pay-per-query micropayments."
service_url: https://x402.deepsearch.com

routing:
  type: proxy
  upstream: https://x402.deepsearch.com
  auth_header: Authorization
  auth_bearer: ${PAY_SH_BEARER_TOKEN}

operator:
  network: mainnet
  currencies:
    usdc:
      - 0.005
      - 0.01
      - 0.015
      - 0.025

endpoints:
  - method: GET
    path: /v1/context/company/{ticker}
    description: Company fundamentals — market cap, PER/PBR/ROE, revenue, operating profit, net income, debt ratio, latest price.
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/financials/{ticker}
    description: Latest quarterly financial statements — revenue, gross profit, operating profit, net income, assets, equity.
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/financials/{ticker}/2y
    description: 2-year quarterly financial history (8 quarters) — ideal for YoY comparisons.
    pricing:
      metered:
        currency: usdc
        price: 0.01
        dimensions: [requests]

  - method: GET
    path: /v1/context/financials/{ticker}/5y
    description: 5-year quarterly financial history (20 quarters) — medium-term profitability and business cycle analysis.
    pricing:
      metered:
        currency: usdc
        price: 0.015
        dimensions: [requests]

  - method: GET
    path: /v1/context/financials/{ticker}/all
    description: Full financial history back to 2018 (33+ quarters) — long-term CAGR and multi-year cycle research.
    pricing:
      metered:
        currency: usdc
        price: 0.025
        dimensions: [requests]

  - method: GET
    path: /v1/context/stock/{ticker}/1m
    description: 1-month daily stock price history (~22 trading days) — close, change %, market cap, period high/low/return.
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/stock/{ticker}/3m
    description: 3-month daily stock price history (~65 trading days) — quarterly trend analysis.
    pricing:
      metered:
        currency: usdc
        price: 0.01
        dimensions: [requests]

  - method: GET
    path: /v1/context/stock/{ticker}/1y
    description: 1-year daily stock price history (~252 trading days) — annual trend, 52-week high/low, YTD return.
    pricing:
      metered:
        currency: usdc
        price: 0.015
        dimensions: [requests]

  - method: GET
    path: /v1/context/stock/{ticker}/3y
    description: 3-year daily stock price history (~780 trading days) — long-term trend, multi-year comparisons, backtests.
    pricing:
      metered:
        currency: usdc
        price: 0.025
        dimensions: [requests]

  - method: GET
    path: /v1/context/news/{ticker}
    description: 30-day news articles with per-company sentiment (positive/negative/neutral).
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/issue/{ticker}
    description: AI-analyzed top news-driven issues from last 30 days — headline, sentiment label, relevance score.
    pricing:
      metered:
        currency: usdc
        price: 0.025
        dimensions: [requests]

  - method: GET
    path: /v1/context/risk/{ticker}
    description: Investment risk assessment (high/medium/low) from 60 days of news and filings — risk items by category.
    pricing:
      metered:
        currency: usdc
        price: 0.025
        dimensions: [requests]

  - method: GET
    path: /v1/context/dividend/{ticker}
    description: Dividend schedule — ex-dividend date, payment date, dividend amount (KRW).
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/crypto/market
    description: Global crypto market overview — market cap (USD+KRW), BTC dominance, top gainers/losers on Korean exchanges.
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/crypto/{symbol}
    description: Crypto price with kimchi premium — current price (KRW), change rate, daily high/low, volume. BTC, ETH, XRP, SOL, DOGE, etc.
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/crypto/{symbol}/news
    description: Latest crypto news articles — title, press, published date, URL.
    pricing:
      metered:
        currency: usdc
        price: 0.005
        dimensions: [requests]

  - method: GET
    path: /v1/context/crypto/{symbol}/briefing
    description: AI-generated crypto news briefings — key insights and market context from recent news.
    pricing:
      metered:
        currency: usdc
        price: 0.01
        dimensions: [requests]

notes:
  tags:
    - korean-stocks
    - KRX
    - KOSPI
    - KOSDAQ
    - historical-data
    - financials
    - stock-price
    - crypto
    - kimchi-premium
    - finance
    - investment
---

# KRX Korean Stock & Crypto Data

Historical and current data for all 2,000+ Korean Exchange (KRX) listed companies, plus crypto prices with kimchi premium — via pay-per-query micropayments.

## Why KRX data is hard to get

Most free data sources cover only a few months. Bloomberg and Refinitiv charge thousands per year. This API provides **up to 10 years of quarterly financials** and **3 years of daily price history** for every KOSPI/KOSDAQ listed company starting at $0.005 per query — no subscription, no API key.

## Ticker lookup

Accepts **6-digit KRX ticker code** OR **company name** in English or Korean:
- `005930` = Samsung Electronics (삼성전자)
- `samsung` = Samsung Electronics
- `삼성전자` = Samsung Electronics
- `000660` = SK Hynix (SK하이닉스)

## Hot stocks

- **Samsung Electronics (005930)** — semiconductor leader, HBM memory, smartphones
- **SK Hynix (000660)** — world's #2 memory maker, key HBM3E supplier for AI GPUs

## Crypto

Korean exchange prices with kimchi premium (KRW price vs global USD price gap).
Supports BTC, ETH, XRP, SOL, DOGE, and 100+ other coins.

## Facilitator

This service runs a self-hosted Solana x402 facilitator at:
- `GET https://x402.deepsearch.com/facilitator/supported`
- `POST https://x402.deepsearch.com/facilitator/verify`
- `POST https://x402.deepsearch.com/facilitator/settle`

Fee payer: `H7BZiiWCE88c1HSSWY2MkJawof6CDaYM5jHqQuucb34Z`  
Receive wallet: `ByECY6H4tQ7SkYNnVATYiuzJNUsgjwsDRVswNDCNJMND`
