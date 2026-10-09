---
name: market-intelligence
title: "Market Intelligence API"
description: "Market intelligence for AI agents across crypto, US and European stocks, rates and macro: token safety checks, on-chain order flow, a one-call trading decision, DeFi yields, prediction-market odds, perps, smart money, SEC filings and news."
use_case: "Use when an agent must decide on a crypto asset, a token contract or a US or European stock: token safety verdicts, a decision with evidence and a trade plan, opportunity scans, fundamentals, insider trades, DeFi yields, Fed rate odds and news."
category: finance
service_url: https://api.marketintelligenceapi.com
version: v1
openapi:
  path: openapi.json
---

Market Intelligence API turns executed swaps on public DEX pools (Base, Ethereum,
Arbitrum, Optimism, Polygon, Robinhood Chain and Solana) into trading signals for
crypto assets and 24/7 tokenized US stocks and ETFs, and combines them with token
contract checks, perp positioning (GMX v2, gTrade, Hyperliquid), smart-money wallets,
DeFi lending markets, prediction markets, SEC and ESEF filings, European short-selling
disclosures, central-bank statistics and policy news. The aggressor side of every swap
is exact, and arbitrage, sandwich (MEV) and two-sided bot trades are excluded from buy
pressure.

Every paid route costs a fixed price per call ($0.001 to $3), paid with x402 in USDC on
Solana, Base, Polygon, Arbitrum or World Chain, or in EURC on Base or World Chain. A call
is charged only when it succeeds: no data for the query (404) and invalid requests (400)
are free. Prepaid credit packs (`/api/v1/credits`) cover clients that cannot sign a
payment per call.

## Where to start

- `GET /api/v1/intelligence/token-verdict/{address}?chain=base` ($0.01): is this token safe to buy? LOW_RISK / CAUTION / HIGH_RISK with a 0-100 score, one plain sentence, can it be sold (simulated sale), buy tax, liquidity, owner control and the top risks. Base, Ethereum, Arbitrum, Optimism, Polygon or Solana. The full audit is `/token-risk/{address}` ($0.02).
- `GET /api/v1/decision/{symbol}` ($1): one action (STRONG_BUY to STRONG_SELL) with conviction, evidence per pillar (order flow, technicals, smart money, fundamentals, insiders, perp positioning, market risk, news), a volatility-sized trade plan and the freshness of every data module. `/api/v1/decision/lite/{symbol}` ($0.05) is the short form; `/api/v1/decision/track-record` (free) shows the live hit rates.
- `GET /api/v1/intelligence/snapshot/{symbol}` ($0.001): price, change, buy pressure, signal and confidence of one asset.
- `GET /api/v1/intelligence/opportunities?objective=unusual_buying` ($0.03): ranked symbols for a goal with supporting and conflicting evidence and the signal's live hit rate.
- `GET /api/v1/intelligence/token-traders/{address}?chain=base` ($0.01): who bought and who sold a token in the last hour, per wallet, with smart-money labels.
- `GET /api/v1/markets/yields?asset=USDC` ($0.002): supply and borrow APY of every Aave v3, Spark and Compound v3 market, read on chain every 10 minutes.
- `GET /api/v1/markets/prediction-markets` and `/api/v1/rates/fed-rate-odds` ($0.005): market-implied odds from Hyperliquid prediction markets, including the next FOMC decision.
- `GET /api/v1/fundamentals/{symbol}` and `/api/v1/insiders/{symbol}` ($0.005): SEC XBRL fundamentals and Form 4 insider trades; `/api/v1/sec/filings` ($0.005): the latest 8-K material events.
- `GET /api/v1/markets/risk`, `/funding-rates`, `/funding-carry`, `/stablecoins`, `/technical/{symbol}`, `/gas`: market dashboards.
- `GET /api/v1/eu/short-positions`, `/eu/fundamentals/{company}`, `/eu/rates`, `/eu/fx`, `/eu/macro`: European short interest (AMF), ESEF fundamentals, ECB curves and FX, Eurostat macro.
- `GET /api/v1/calendar` ($0.005): upcoming CPI, jobs, PCE, GDP, FOMC and ECB releases in UTC.

## Identifiers

Symbols are plain tickers: crypto as `ETHUSD`, `BTCUSD`; tokenized stocks and ETFs as
`NVDA`, `TSLA`, `SPY`; perp-only markets as `XAUUSD`, `WTIUSD`. Tokens by contract address
with `chain=` (the chain the token lives on, not the payment network). European issuers by
ISIN (`FR0000131906`) or name. The free `/coverage` route lists which sources cover each
symbol. Windows are `1m`, `5m` or `15m`.

## Spend-aware usage

- Start with the cheap single-asset routes (`snapshot` $0.001, `token-verdict` $0.01) before the $1 decision.
- A 404 means no data for that query and is not charged: check `/coverage` (free) for covered symbols.

## Free

`/api/v1/preview` (15-minute delayed candles), `/track-record` (live hit rate of the
signals), `/api/v1/decision/track-record`, `/coverage`, `/status`, `/llms.txt`,
`/openapi.json`, `/api/v1/feedback`. MCP server at `/mcp` (official MCP Registry:
com.marketintelligenceapi.api/market-intelligence).

Informational market data, not investment advice.
