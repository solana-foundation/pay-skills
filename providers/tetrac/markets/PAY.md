---
name: markets
title: "Tetrac Market Data"
description: "Real-time and historical crypto market data from Tetrac. Tickers, funding rates, open interest, listings, news, calendar, swap volume, market quakes, and a multi-timeframe technical scanner across major centralized and decentralized exchanges."
use_case: "Use to fetch live market structure data, screen perps for funding/OI shifts, detect new listings, monitor cross-exchange volume, and run technical scans without managing exchange API keys."
category: finance
service_url: https://www.tetrac.xyz
version: v1
openapi:
  path: openapi.json
---

Tetrac exposes a unified market-data layer across centralized and decentralized
exchanges. Endpoints are pay-per-request via x402 on Solana mainnet, settled in
USDC — no API key, no signup. Every endpoint is $0.05 per call except
`markets/ttc-scanner-cache`, which is $0.50 because a single call returns the
full-market signal snapshot rather than one symbol.

## Spend-aware usage

- Prefer `markets/hybrid-tickers` with a `minimumVolume` filter over scanning every
  exchange separately — one paid call returns the cross-venue view.
- Use `markets/funding-rates` and `markets/open-interest` together for a single
  perp-structure read; their cadences are aligned.
- For repeated technical analysis on one symbol, cache the `markets/ttc-scanner`
  response for the timeframe's bar duration (e.g. 1h scan, reuse for an hour).
- Reach for `markets/ttc-scanner-cache` ($0.50) only when you need signals across
  the whole market at once; scanning a handful of symbols is cheaper via
  `markets/ttc-scanner` ($0.05 each).
- The `markets/news` and `markets/calendar` endpoints change slowly; one call
  per minute is plenty for most agent loops.
