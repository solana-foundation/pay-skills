---
name: korean-stock-intelligence
title: "DeepSearch Korean Stock Intelligence"
description: "Real-time Korean stock market intelligence via x402. Returns company fundamentals (market cap, PER, PBR, ROE, revenue, operating profit), news-driven issue analysis with sentiment scoring, and investment risk assessment from regulatory filings. Covers all KRX-listed companies."
use_case: "Use for Korean stock research, investment due diligence, portfolio monitoring, and financial Q&A. Call get_company_pack for valuation and financials, get_issue_pack to understand current news sentiment, and get_risk_pack before recommending or analyzing a Korean stock."
category: finance
service_url: https://x402.deepsearch.com
openapi:
  path: openapi.json
---

Real-time Korean stock market intelligence for AI agents. Pay-per-query via USDC on Base Mainnet.

Covers all KRX-listed companies. Ticker format: 6-digit code (e.g. 005930 for Samsung Electronics).

## Endpoints

### GET /v1/context/company/{ticker} — $0.05 USDC
Company fundamentals snapshot:
- Market cap, stock price, 52-week range
- PER, PBR, ROE, EPS, dividend yield
- Revenue, operating profit, net income, debt ratio
- Sector, industry, company summary

### GET /v1/context/issue/{ticker} — $0.10 USDC
News-driven issue intelligence (last 30 days):
- Ranked issues with headline and summary
- Sentiment: positive / negative / neutral
- Relevance score (0–1) and publication date

### GET /v1/context/risk/{ticker} — $0.15 USDC
Investment risk assessment (last 60 days):
- Overall risk level: high / medium / low
- Risk items by category: financial, legal, operational, market, ESG
- Mitigating factors

## Common tickers

| Ticker | Company |
|--------|---------|
| 005930 | Samsung Electronics |
| 000660 | SK Hynix |
| 035420 | NAVER |
| 005380 | Hyundai Motor |
| 051910 | LG Chem |
| 035720 | Kakao |

## Spend-aware usage

- Call `company` first for any financial overview question — it's the cheapest ($0.05) and covers most valuation queries.
- Call `issue` when the user asks "what's happening with X" or wants current news context. Do not call it just for historical background.
- Call `risk` only when the user explicitly asks about risks, red flags, or downside scenarios — or before making an investment recommendation.
- Do not call all three endpoints unless all three types of data are needed for the task.
