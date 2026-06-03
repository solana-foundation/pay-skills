---
name: data
title: "Birdeye Data"
description: "Pay-per-request DeFi market data, token analytics, and wallet intelligence across Solana and 15+ chains. Covers token prices, OHLCV charts, holder distribution, smart money flows, meme signals, trade history, and security scores without API keys."
use_case: "Use for fetching token prices, OHLCV charts, holder distribution, top trader rankings, smart money flows, token security assessments, meme token signals, new token listings, and trade history on Solana and multi-chain DeFi."
category: finance
service_url: https://public-api.birdeye.so
openapi:
  path: openapi.json
---

Birdeye DeFi market data, token analytics, and wallet intelligence via x402 payments. Covers 47 endpoints across price feeds, OHLCV charts, holder analytics, smart money flows, meme token signals, trade history, and token security — all without API keys.

Pricing is variable and charged in compute units (CUs); most single-token lookups cost $0.001–$0.01 per request. WebSocket streams require a standard Birdeye API key and are not available via x402.

x402 USDC payment accepted on Solana mainnet.

## Spend-aware usage

- Use `/x402/defi/price` for the cheapest single-token price lookup when that is all that is needed.
- Use `/x402/defi/token_overview` for a full token snapshot (price, volume, liquidity, metadata, security) in one call instead of chaining multiple endpoints.
- Use `/x402/defi/v3/token/meta-data/single` when only name, symbol, and decimals are needed — cheaper than the full overview.
- Use `/x402/defi/v3/search` to resolve an unknown token name or symbol to a mint address before calling single-token endpoints.
- Use `/x402/defi/v3/price/stats/single` to get 1h/4h/24h/7d price changes in one call instead of querying historical price separately.
- Prefer list and trending endpoints (`/x402/defi/token_trending`, `/x402/defi/v2/tokens/new_listing`) for discovery; switch to direct address lookups once the mint is known.
