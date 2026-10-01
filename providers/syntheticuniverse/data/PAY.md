---
name: data
title: "Synthetic Universe Data APIs"
description: "Pay-per-call data APIs for AI agents via x402 — 29 endpoints at $0.01 USDC: EVM gas prices, fiat FX, pre-flight checks, weather + US alerts, crypto prices + OHLCV, webpage summaries, RSS, DNS, geocoding. No API keys, no accounts."
use_case: "Use when an agent needs fresh external data it can't get from context: gas prices before transacting, FX conversion, endpoint health checks, weather, crypto prices, webpage summaries, DNS, or local time. $0.01 USDC per call via x402."
category: data
service_url: https://pay.brianbooms.com
openapi:
  path: openapi.json
---

Synthetic Universe Data APIs — 29 pay-per-call data endpoints for AI agents, settled via x402 in USDC. GET the endpoint, receive an HTTP 402 challenge, pay $0.01 USDC, resubmit — the data returns automatically after settlement. No API keys, no accounts, no subscriptions.

x402 USDC payment accepted on Solana mainnet (also Base, Polygon, Arbitrum, Avalanche).

## Spend-aware usage

- Use `/api/v1/data/gas-price?network=<chain>` for a live gas quote before any EVM transaction — cheaper than a failed or overpriced transaction.
- Use `/api/v1/data/preflight?domain=<domain>` for endpoint alive + DNS + TLS cert expiry in one $0.01 call instead of three separate checks.
- Use `/api/v1/data/summarize?url=<url>` for key points of a page without fetching and parsing it yourself.
- Use `/api/v1/data/fx-convert?from=USD&to=EUR&amount=100` for any-base fiat conversion (ECB reference rates) — no base-currency lock.
- Use `/api/v1/data/weather-alerts?lat=<lat>&lon=<lon>` for active US weather alerts (National Weather Service, public domain).
- Use `/api/v1/data/crypto-ohlcv?coin=bitcoin&days=30` for OHLCV candles before any trading decision.
- All endpoints are deterministic and stateless; responses are cached briefly (30–60s) so repeated calls for the same data stay cheap and fast.

Operated by Synthetic Universe LLC.
