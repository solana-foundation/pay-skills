---
name: markets
title: "Tetrac Market Data"
description: "Real-time and historical crypto market data from Tetrac. Tickers, funding rates, open interest, listings, news, calendar, swap volume, USGS earthquake alerts, and a multi-timeframe technical scanner across major centralized and decentralized exchanges."
use_case: "Use for live market structure data, screening perps for funding/OI shifts, detecting new listings, monitoring cross-exchange volume, and running technical scans without exchange API keys."
category: finance
service_url: https://www.tetrac.xyz
version: v1
openapi:
  path: openapi.json
---

Tetrac exposes a unified, read-only market-data layer across centralized and
decentralized exchanges. Endpoints are pay-per-request via x402 on Solana
mainnet, settled in USDC — no API key, no signup, no exchange account. Every
endpoint is $0.05 per call except `markets/ttc-scanner-cache`, which is $0.50
because one call returns the full-market signal snapshot rather than one symbol.

Trading, account reads and withdrawals are not part of this skill; they live in
the separate `tetrac/exchange` skill, which needs the user's exchange credentials.

## Spend-aware usage

- Prefer `markets/hybrid-tickers` with a `minimumVolume` filter over scanning every
  exchange separately — one paid call returns the cross-venue view.
- Use `markets/funding-rates` and `markets/open-interest` together for a single
  perp-structure read; their cadences are aligned.
- For repeated technical analysis on one symbol, cache the `markets/ttc-scanner`
  response for the timeframe's bar duration (e.g. 1h scan, reuse for an hour).
- Call `markets/ttc-scanner-cache` with `?full=1` to receive the signals. Without
  it the call costs the same $0.50 but returns only the snapshot's timestamps
  (`generatedAt`, `staleAtMs`). Check `staleAtMs` in the response before acting
  on the signals.
- Reach for `markets/ttc-scanner-cache` only when you need signals across the
  whole market at once; scanning a handful of symbols is cheaper via
  `markets/ttc-scanner` ($0.05 each).
- The `markets/news` and `markets/calendar` endpoints change slowly; one call
  per minute is plenty for most agent loops.
