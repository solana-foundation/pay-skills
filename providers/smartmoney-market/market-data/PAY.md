---
name: market-data
title: "smartmoney.market"
description: "Smart money market data API for curated 13-F fund positioning, selected issuer-side Form 4 insider activity, and House PTR trading signals with JSON endpoints for agents."
use_case: "Use for hedge fund 13-F tracking, fund holdings research, stock-level smart money positioning, insider Form 4 activity, House PTR trades, and finance signal discovery."
category: finance
service_url: https://pay.smartmoney.market
version: v1
openapi:
  path: openapi.json
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
