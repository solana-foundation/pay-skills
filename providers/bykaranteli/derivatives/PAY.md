---
name: derivatives
title: "ByKaranteli Derivatives Data"
description: "Crypto derivatives market structure from a continuous recorder: multi-exchange liquidation maps with modeled clusters and real forceOrder levels, Deribit options premium flow with big prints, and VPIN order-flow toxicity history."
use_case: "Use for liquidation levels and magnets around a perp price, options tape history and large premium prints, or order-flow toxicity before sizing a position. Also use when a live snapshot is not enough and the task needs recorded history."
category: finance
service_url: https://bykaranteli.com
openapi:
  path: openapi.json
---

Derivatives market structure recorded around the clock and sold per call. Three
paid endpoints, all `GET`, all answering `402` with an x402 v2 challenge:

| Endpoint | Price | Returns |
|---|---|---|
| `/api/x402/liqmap-levels` | $0.005 | Liquidation map for one Binance USDT-M perp: modeled leverage clusters plus real `forceOrder` levels aggregated across Binance, Bybit, OKX, Gate, HTX and Hyperliquid, top magnets, funding, OI and orderbook context. |
| `/api/x402/options-flow` | $0.005 | Deribit BTC or ETH options tape: daily premium-flow history plus the full big-print list. |
| `/api/x402/flow-vpin` | $0.002 | VPIN order-flow toxicity for BTC, ETH and SOL: 90-day daily track plus the last 500 volume buckets. |

Payment: USDC on **Solana mainnet** (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`)
or on Base mainnet, same amount either way, settled through the PayAI
facilitator. No account, no signup, no API key. `GET /api/x402` is free and
returns the machine-readable catalog of prices and rails.

Every paid endpoint has a free counterpart under `/api/public/*` that carries
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
