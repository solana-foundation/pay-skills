---
name: market-data
title: "smartmoney.market"
description: "Smart money market data API for curated 13-F fund positioning, selected issuer-side Form 4 insider activity, and House PTR trading signals with JSON endpoints for agents."
use_case: "Use for hedge fund 13-F tracking, fund holdings research, stock-level smart money positioning, insider Form 4 activity, House PTR trades, and finance signal discovery."
category: finance
service_url: https://pay.smartmoney.market
version: v1
endpoints:
  - method: GET
    path: api
    resource: discovery
    description: "List public smartmoney.market API routes, access classes, and endpoint descriptions for agent discovery."

  - method: GET
    path: llms.txt
    resource: discovery
    description: "Return plain-text agent instructions, coverage notes, endpoint guidance, and access details."

  - method: GET
    path: api/health
    resource: health
    description: "Check smartmoney.market gateway and upstream FastAPI health status."

  - method: GET
    path: api/insider-tracked-stocks
    resource: coverage
    description: "List stock tickers and company names selected for issuer-side Form 4 insider tracking."

  - method: GET
    path: api/fund-universe
    resource: coverage
    description: "List curated fund display names, slugs, and official names for coverage discovery."

  - method: GET
    path: api/funds
    resource: funds
    description: "Retrieve premium all-funds overview with manager, AUM, latest quarter, top holdings, and quarter-over-quarter movement."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.10

  - method: GET
    path: api/fund/{slug}/snapshot
    resource: fund
    description: "Retrieve snapshot holdings for a specific fund with position weights, values, and history."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01

  - method: GET
    path: api/fund/{slug}/changes
    resource: fund
    description: "Retrieve quarter-over-quarter changes for a specific fund, including new buys, exits, increases, and decreases."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01

  - method: GET
    path: api/ticker/{symbol}
    resource: ticker
    description: "Retrieve compact ticker summary with smart-money data, coverage flags, and available drilldown links."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01

  - method: GET
    path: api/ticker/{symbol}/funds
    resource: ticker
    description: "Retrieve detailed fund-by-fund 13-F holdings breakdown for a ticker."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02

  - method: GET
    path: api/ticker/{symbol}/funds-updates
    resource: ticker
    description: "Retrieve fund-side Form 4 Smart Money Updates for a ticker during the current quarter."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01

  - method: GET
    path: api/ticker/{symbol}/insider
    resource: ticker
    description: "Retrieve aggregated issuer-side insider Form 4 activity for a ticker when it is insider-tracked."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01

  - method: GET
    path: api/ticker/{symbol}/insider-details
    resource: ticker
    description: "Retrieve raw issuer-side Form 4 transaction rows for an insider-tracked ticker."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01

  - method: GET
    path: api/ticker/{symbol}/congress
    resource: ticker
    description: "Retrieve ticker-level House PTR activity when stock-backed congressional trades are available."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01

  - method: GET
    path: api/insiders
    resource: insider
    description: "Retrieve global issuer-side insider activity across selected insider-tracked stocks. Supports fixed cached windows days=7, days=30, or days=90; view; and limit."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05

  - method: GET
    path: api/congress
    resource: congress
    description: "Retrieve global House PTR activity for stock-backed congressional trades."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

smartmoney.market provides agent-ready JSON access to a curated smart-money
signal layer: quarterly 13-F fund positioning, fund-level quarter-over-quarter
changes, selected issuer-side Form 4 insider activity, and House PTR trading
activity where available.

The gateway exposes free coverage-discovery endpoints and metered research
endpoints. The free fund and insider coverage endpoints are intentionally
limited to names, slugs, tickers, and company names. Use metered endpoints when
the task needs processed holdings, AUM, fund movement, insider transactions, or
Congress trade rows.

Coverage is curated rather than exhaustive. The fund universe focuses on
high-signal investment managers selected for performance, popularity, and niche
themes. Insider activity is tracked for a selected stock universe. Congress
activity currently covers House PTR filings where stock-backed trades are
available.

## Identifier formats

- Fund endpoints use `{slug}` values from `GET /api/fund-universe`, such as `duquesne`.
- Ticker endpoints use plain stock ticker symbols, such as `NVDA`, `AAPL`, or `BRK.B`. Symbols are case-insensitive. Do not include exchange prefixes such as `NASDAQ:NVDA`.
- Use `GET /api/insider-tracked-stocks` before insider endpoints to confirm whether issuer-side Form 4 data is available for a ticker.

## Spend-aware usage

- Start with `GET /api` to inspect the public route map and avoid guessing
  endpoint names.
- Use free `GET /api/fund-universe` to find fund slugs before paying for
  `GET /api/fund/{slug}/snapshot` or `GET /api/fund/{slug}/changes`.
- Use free `GET /api/insider-tracked-stocks` before paying for insider-specific
  endpoints; only tracked tickers have meaningful issuer-side Form 4 results.
- Use `GET /api/insiders` for global insider activity only with fixed cached
  windows `days=7`, `days=30`, or `days=90`; unsupported windows return an
  error after payment.
- Use `GET /api/ticker/{symbol}` first for a compact stock overview and
  coverage flags. Follow links only when the user needs the underlying detail.
- Use `GET /api/funds` only when the task needs the premium all-funds overview;
  it is priced higher because it returns processed all-funds intelligence.
- Keep `limit` parameters small where supported, especially on raw transaction
  endpoints such as insider details and Congress rows.
