---
name: market-intelligence
title: "Market Intelligence API"
description: "Market intelligence for AI agents across crypto, US and European stocks, rates, FX and macro: on-chain order flow, a one-call trading decision, opportunity scans, perps, smart money, SEC and ESEF filings, European short interest and policy news."
use_case: "Use when an agent must decide on a crypto asset or a US or European stock: one decision with evidence and a trade plan, opportunity scans, pre-trade checks, fundamentals, insider and short positions, rates, FX and policy news."
category: finance
service_url: https://api.marketintelligenceapi.com
version: v1
openapi:
  path: openapi.json
---

Market Intelligence API turns executed swaps on public DEX pools (Base, Ethereum,
Arbitrum, Optimism, Polygon, Robinhood Chain and Solana) into trading signals for
crypto assets and 24/7 tokenized US stocks and ETFs, and combines them with perp
positioning (GMX v2, gTrade, Hyperliquid), smart-money wallets, SEC and ESEF filings,
European short-selling disclosures, central-bank statistics and policy news. The
aggressor side of every swap is exact, and arbitrage, sandwich (MEV) and two-sided bot
trades are excluded from buy pressure.

Every paid route costs a fixed price per call ($0.001 to $3), paid with x402 in USDC on
Base, Polygon, Arbitrum, World Chain or Solana, or in EURC on Base or World Chain. A call
is charged only when it succeeds: no data for the query (404) and invalid requests (400)
are free.

## Where to start

- `GET /api/v1/decision/{symbol}` ($1): one action (STRONG_BUY to STRONG_SELL) with conviction, evidence per pillar (order flow, technicals, smart money, fundamentals, insiders, perp positioning, market risk, news), conflicting signals, a volatility-sized trade plan and the status and freshness of every data module. Without a symbol: the market-wide stance. `POST /api/v1/decision/batch` ($3) ranks up to 5 symbols; `/api/v1/decision/track-record` (free) shows the decisions' live hit rates.
- `GET /api/v1/intelligence/snapshot/{symbol}` ($0.001): price, change, buy pressure, signal and confidence of one asset.
- `GET /api/v1/intelligence/opportunities?objective=unusual_buying` ($0.03): ranked symbols for a goal (unusual_buying, unusual_selling, breakout, breakdown, crowded_positioning, smart_money_accumulation, smart_money_distribution) with supporting and conflicting evidence, risk factors and the signal's live hit rate. Also POST with a JSON body.
- `GET /api/v1/intelligence/pre-trade?symbol=ETHUSD&side=buy` ($0.005): FAVORABLE / CAUTION / UNFAVORABLE verdict with the checks behind it.
- `GET /api/v1/report/{symbol}` ($0.03): everything about one symbol in one call.
- `GET /api/v1/markets/risk` ($0.003), `/funding-rates` ($0.001), `/stablecoin-flows`, `/technical/{symbol}`, `/gas`: market dashboards.
- `GET /api/v1/eu/short-positions` ($0.01), `/eu/fundamentals/{company}`, `/eu/rates`, `/eu/fx`, `/eu/macro`: European short interest (AMF), ESEF fundamentals, ECB curves and FX, Eurostat macro.
- `GET /api/v1/news/policy?topic=tariffs` ($0.005): US policy headlines and Federal Register documents tagged with topics and exposed symbols.

## Identifiers

Symbols are plain tickers: crypto as `ETHUSD`, `BTCUSD`; tokenized stocks and ETFs as
`NVDA`, `TSLA`, `SPY`; perp-only markets as `XAUUSD`, `WTIUSD`. European issuers by ISIN
(`FR0000131906`) or name. The free `/coverage` route lists which sources cover each
symbol. Windows are `1m`, `5m` or `15m`.

## Free

`/api/v1/preview` (15-minute delayed candles), `/track-record` (live hit rate of the
signals), `/api/v1/decision/track-record`, `/coverage`, `/status`, `/llms.txt`,
`/openapi.json`. MCP server at `/mcp` (official MCP Registry:
com.marketintelligenceapi.api/market-intelligence).

Informational market data, not investment advice.
