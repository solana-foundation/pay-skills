---
name: markets
title: "Tetrac Market Data"
description: "Real-time and historical crypto market data from TTC Box. Tickers, funding rates, open interest, listings, news, calendar, swap volume, market quakes, and a multi-timeframe technical scanner across major centralized and decentralized exchanges."
use_case: "Use to fetch live market structure data, screen perps for funding/OI shifts, detect new listings, monitor cross-exchange volume, and run technical scans without managing exchange API keys."
category: finance
service_url: https://ttc.box
version: v1
openapi:
  url: https://ttc.box/openapi.json
---

TTC Box exposes a unified market-data layer across centralized and decentralized
exchanges. Endpoints are pay-per-request via x402 — pay $0.05 USDC on Solana
mainnet per call, no API key, no signup.

## Spend-aware usage

- Prefer `markets/hybrid-tickers` with a `minimumVolume` filter over scanning every
  exchange separately — one paid call returns the cross-venue view.
- Use `markets/funding-rates` and `markets/open-interest` together for a single
  perp-structure read; their cadences are aligned.
- For repeated technical analysis on one symbol, cache the `markets/ttc-scanner`
  response for the timeframe's bar duration (e.g. 1h scan → reuse for an hour).
- The `markets/news` and `markets/calendar` endpoints change slowly; one call
  per minute is plenty for most agent loops.
