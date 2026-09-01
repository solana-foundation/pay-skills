---
name: derivatives
title: "ByKaranteli Derivatives Data"
description: "Crypto derivatives market structure from a continuous recorder: multi-exchange liquidation maps and raw liquidation events, funding and open-interest history, Deribit options tape and open interest, DVOL, CFTC COT, Coinbase premium and VPIN."
use_case: "Use for liquidation levels around a perp price, funding or open-interest history, options tape and positioning, COT or Coinbase premium series, execution slippage, or order-flow toxicity when the task needs recorded history, not a live snapshot."
category: finance
service_url: https://bykaranteli.com
openapi:
  path: openapi.json
---

Derivatives market structure recorded around the clock and sold per call.
Thirteen paid endpoints, all `GET`, all answering `402` with an x402 v2
challenge:

| Endpoint | Price | Returns |
|---|---|---|
| `/api/x402/liqmap-levels` | $0.005 | Liquidation map for one Binance USDT-M perp: modeled leverage clusters plus real `forceOrder` levels aggregated across Binance, Bybit, OKX, Gate, HTX and Hyperliquid, top magnets, funding, OI and orderbook context. |
| `/api/x402/liquidations-raw` | $0.010 | Individual liquidation events recorded from our own Binance, Bybit and OKX sockets: side, price, quantity, notional, venue and millisecond timestamp. |
| `/api/x402/funding-history` | $0.005 | Settled funding rate history per symbol and venue, the series behind carry and basis work. |
| `/api/x402/oi-history` | $0.005 | Five-minute open-interest history for the major perpetuals, in base units and USD, normalised across symbols. |
| `/api/x402/options-flow` | $0.005 | Deribit BTC or ETH options tape: daily premium-flow history plus the full big-print list. |
| `/api/x402/options-oi-history` | $0.005 | Daily listed options open interest per instrument: strike, expiry, type, OI, mark IV, underlying price and traded notional. |
| `/api/x402/dvol-history` | $0.002 | Daily BTC and ETH implied-volatility index history back to 2021. |
| `/api/x402/flow-vpin` | $0.002 | VPIN order-flow toxicity for BTC, ETH and SOL: 90-day daily track plus the last 500 volume buckets. |
| `/api/x402/spot-microstructure` | $0.010 | Minute bars with the taker-buy versus total quote-volume split, pre-joined across venues and kept beyond exchange retention. |
| `/api/x402/slippage-history` | $0.002 | Hourly recorded execution-slippage ladders per symbol: what a given order size would have cost against the live book. |
| `/api/x402/premium-history` | $0.005 | Daily Coinbase premium history: Coinbase versus offshore price spread, with both leg prices. |
| `/api/x402/cot-history` | $0.005 | Weekly CFTC Commitments of Traders history for CME crypto futures, per trader category, plus open interest per report. |
| `/api/x402/listings-history` | $0.002 | Perpetual listing and delisting events across six exchanges, with first-seen, last-seen and delisted timestamps. |

Payment: USDC on **Solana mainnet** (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`)
or on Base mainnet, same amount either way, settled through the Coinbase CDP
facilitator. No account, no signup, no API key. `GET /api/x402` is free and
returns the machine-readable catalog of prices and rails.

Most paid endpoints have a free counterpart under `/api/public/*` that carries
the live snapshot. What is sold here is depth and history, not the current
value.

## Spend-aware usage

- Check the free snapshot first. `/api/public/flow` already answers "how toxic
  is flow right now"; pay for `/api/x402/flow-vpin` only when the task needs the
  90-day track or the bucket series behind it.
- `/api/public/options-flow` covers the last 24h of Deribit premium flow for
  free. Reach for the paid endpoint when the question is about history or about
  the full big-print list.
- One symbol per liquidation-map call. `symbol=BTCUSDT` is the default; pass
  `exchange=` to narrow to a single venue instead of paying twice to compare.
- Liquidation maps move with price, not with the clock. Re-fetching the same
  symbol inside a few minutes usually buys the same clusters again.
- `flow-vpin` returns BTC, ETH and SOL in one response. Do not call it once per
  symbol.
- The history endpoints take a date or lookback range. Ask for the widest range
  the task needs in one call rather than paging day by day.
- `cot-history` is weekly and `dvol-history`, `premium-history` and
  `listings-history` are daily. Re-fetching them intraday buys the same rows.
