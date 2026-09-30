---
name: derivatives
title: "ByKaranteli Derivatives Data"
description: "Crypto derivatives market structure from a continuous recorder: liquidation maps and raw liquidation events, funding, open-interest and positioning history, options tape and open interest, order book depth, Hyperliquid whale events, CFTC COT and VPIN."
use_case: "Use for liquidation levels around a perp price, funding, open-interest or positioning history, options tape and open interest, order book depth, whale or leverage-tier changes, or order-flow toxicity when the task needs recorded history."
category: finance
service_url: https://bykaranteli.com
openapi:
  path: openapi.json
---

Derivatives market structure recorded around the clock and sold per call.
Every paid endpoint is `GET` and answers `402` with an x402 v2 challenge. The
query parameters each one honours (symbol, exchange, from, to, limit and a few
route-specific ones) are in `openapi.json` next to this file, and the free
`GET /api/x402` returns the same catalog with prices and parameters.

| Endpoint | Price | Returns |
|---|---|---|
| `/api/x402/liqmap-levels` | $0.10 | Liquidation map for one Binance USDT-M perp: modeled leverage clusters plus real `forceOrder` levels across Binance, Bybit, OKX, Gate, HTX and Hyperliquid, top magnets, funding, OI and orderbook context. |
| `/api/x402/liquidations-raw` | $0.10 | Individual liquidation events from our own sockets on Binance, Bybit, OKX, Gate, HTX, dYdX and Aster: side, price, quantity, notional, venue and millisecond timestamp. |
| `/api/x402/funding-history` | $0.10 | Settled funding rates per venue and settlement, the series behind carry and basis work. |
| `/api/x402/oi-history` | $0.10 | Five-minute open interest for the major perpetuals in base units and USD. |
| `/api/x402/positioning-history` | $0.10 | Hourly long/short account and position ratios and taker buy/sell ratios for the 30 most traded perps. |
| `/api/x402/options-flow` | $0.10 | BTC or ETH options tape from Deribit and OKX: daily premium-flow history plus the full big-print list. |
| `/api/x402/options-oi-history` | $0.10 | Daily listed options open interest per instrument: strike, expiry, type, OI, mark IV, underlying price and traded notional. |
| `/api/x402/orderbook-history` | $0.10 | Five-minute spot order book depth per venue for ten majors, binned into 0.1% buckets within 20% of mid. |
| `/api/x402/spot-microstructure` | $0.10 | Minute bars with the taker buy versus total quote volume split, pre-joined across venues. |
| `/api/x402/flow-vpin` | $0.10 | VPIN order-flow toxicity for BTC, ETH and SOL: 90-day daily track plus the last 500 volume buckets. |
| `/api/x402/whale-trades-raw` | $0.10 | Every $1M+ aggressive print from our own trade sockets, kept 90 days. |
| `/api/x402/hl-whale-events` | $0.10 | Position changes of the 300 largest Hyperliquid accounts: opened, closed, increased, reduced, flipped. |
| `/api/x402/leverage-tiers-history` | $0.10 | Every recorded version of each perpetual's leverage ladder per venue, so leverage cuts can be dated. |
| `/api/x402/networks-history` | $0.10 | Every recorded version of each venue's deposit and withdrawal network rows, so suspensions can be dated. |
| `/api/x402/venue-markets-history` | $0.10 | Ten-minute price, 24h volume, open interest and funding snapshots per venue and symbol. |
| `/api/x402/jupiter-history` | $0.10 | Hourly Jupiter Perps history per market and metric, including on-chain long and short open interest. |
| `/api/x402/rsi-history` | $0.10 | Hourly RSI(14) history for Binance USDT perpetuals on eight intervals. |
| `/api/x402/tradfi-oi-history` | $0.10 | Five-minute open interest for the top 40 Binance TradFi perpetuals. |
| `/api/x402/tradfi-funding-history` | $0.10 | Settled funding rates for the top 40 Binance TradFi perpetuals. |
| `/api/x402/turkey-premium-history` | $0.10 | Minute history of the Turkey premium index built from Turkish spot venues, with optional per-venue book rows. |
| `/api/x402/cot-history` | $0.10 | Weekly CFTC Commitments of Traders history for crypto futures, including the dealer books. |
| `/api/x402/indicators-events` | $0.10 | Every Bitcoin cycle indicator crossing since 2012 with the forward 7 to 365-day returns that followed. |
| `/api/x402/liquidation-leaderboard-history` | $0.10 | Per-day ranking of the largest single liquidation prints across nine venues: up to 100 ranks per finalized UTC day with symbol, venue, side and notional. |
| `/api/x402/insurance-fund-history` | $0.10 | Hourly insurance fund readings per pool on ten venues: balance, USD value and the contracts each pool covers. |
| `/api/x402/tokenized-stocks-history` | $0.10 | Hourly readings per tokenized stock wrapper from nine issuers: price, reference, premium, liquidity and 24h volume with chain, issuer and day filters. |
| `/api/x402/bulk-liquidations` | $15 | One-hour download links for monthly gzip CSV files of every recorded liquidation event. |
| `/api/x402/bulk-derivatives` | $10 | One-hour download links for monthly files of open interest, funding settlements and venue snapshots. |
| `/api/x402/bulk-flow` | $10 | One-hour download links for monthly files of whale prints, Hyperliquid whale events, positioning and RSI. |

Payment: USDC on **Solana mainnet** (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`)
or on Base mainnet, same amount either way, settled through the Coinbase CDP
facilitator. No account, no signup and no API key for the paid routes. A
failed response settles nothing.

Most paid endpoints have a free counterpart under `/api/public/*` that carries
the live snapshot. Programs read those with a free account key
(https://bykaranteli.com/dashboard/api); the paid routes need none. What is
sold here is depth and history, not the current value.

## Spend-aware usage

- Check the free snapshot first. `/api/public/flow` already answers "how toxic
  is flow right now"; pay for `/api/x402/flow-vpin` only when the task needs the
  90-day track or the bucket series behind it.
- `/api/public/options-flow` covers the last 24h of Deribit and OKX premium
  flow for free. Reach for the paid endpoint when the question is about history
  or about the full big-print list.
- One symbol per liquidation-map call. `symbol=BTC` is the default; pass
  `exchange=` to read a single venue's model instead of paying twice to compare.
- Liquidation maps move with price, not with the clock. Re-fetching the same
  symbol inside a few minutes usually buys the same clusters again.
- `flow-vpin` returns BTC, ETH and SOL in one response. Do not call it once per
  symbol.
- The history endpoints take `from`, `to` and `limit` (the maximum rows per
  call are in each route's `limit` parameter). Ask for the widest range the
  task needs in one call rather than paging day by day.
- For whole months of rows, one bulk call ($10 to $15) returns download links
  for every monthly file instead of paging a per-call route through millions
  of rows.
- `cot-history` is weekly and `indicators-events` only changes when a band is
  crossed. Re-fetching them intraday buys the same rows.
