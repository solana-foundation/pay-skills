---
name: terminal
title: "Terminal"
description: "Real-time crypto news and market data from Terminal — curated posts from hundreds of on-chain and off-chain sources, global market metrics, and BTC/ETH/SOL derivatives data including funding rates, long/short ratios, and liquidations."
use_case: "Use for fetching the latest crypto news by topic or keyword, monitoring global market conditions (BTC/ETH dominance, total market cap, 24h volume), and querying BTC/ETH/SOL perpetual futures data such as funding rates, long/short ratios, and 24h liquidations."
category: finance
service_url: https://terminalverse.com
openapi:
  path: openapi.json
---

Terminal is a real-time crypto intelligence feed aggregating news and market
data from hundreds of sources. These x402-paywalled endpoints expose curated
news posts, global market metrics, and derivatives data — all settling in
**USDC** on **Base mainnet** to the Terminal treasury. Pricing is per-request:

- `GET /api/posts` — $0.001 — fetch the latest crypto news posts (50 per page)
  or search by keyword with `?q=<query>` (up to 100 results). Supports
  `?offset=<n>` for pagination.
- `GET /api/market-metrics` — $0.001 — global crypto market data: BTC and ETH
  dominance percentages, total market cap, and 24h trading volume. Cached for
  5 minutes.
- `GET /api/derivatives` — $0.001 — BTC, ETH, and SOL perpetual futures data:
  funding rates, long/short ratios, and 24h liquidation totals (longs and
  shorts). Cached for 60 seconds.

## Spend-aware usage

- Use `?q=<keyword>` on `/api/posts` to filter by topic rather than fetching
  all posts and filtering client-side.
- Cache `/api/market-metrics` responses locally — data updates every 5 minutes,
  so re-fetching per render wastes spend.
- Cache `/api/derivatives` for at least 60 seconds — data refreshes on that
  cadence server-side.
- Use `/api/market-metrics` for aggregate market conditions before deciding
  whether to drill into `/api/derivatives` for asset-specific data.
