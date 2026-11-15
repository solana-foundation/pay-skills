---
name: market-regime
title: "Regime Card"
description: "US market regime and risk-on / risk-off readings: a live score from 0 to 100, one of five regimes from Risk-Off to Risk-On, a stress gate for credit, volatility and rates, and stock and crypto returns by market regime as historical odds."
use_case: "Use when an agent needs a market conditions, market sentiment or market risk check, a macro signal or risk check before a trade, a market stress check, or stock and crypto returns by market regime for a watchlist or portfolio."
category: finance
service_url: https://agent.regimecard.com
openapi:
  path: openapi.json
---

Regime Card tells an agent whether the US market is risk-on or risk-off right
now: one score from 0 (most risk-off) to 100 (most risk-on) and one of five
market regimes, from Risk-Off to Risk-On.

Every route returns JSON. Every response says which trading session it
describes (`asOf`) and whether it is `live` or `settled`. No account and no API
key. Regime Card describes market conditions. It makes no recommendation and no
forecast. For informational purposes only. Not investment advice.

## Routes

Each paid route costs $0.01 per call in USDC, paid over x402 on Base, Polygon
or Solana. A call that cannot be answered is not charged: a payment settles
only after the answer is built.

| Route | Price | Returns |
|---|---|---|
| `GET /v1/sample` | Free | The newest settled reading: the score, the regime, the eight cross-asset category labels, and the paid routes with their prices. |
| `GET /v1/live` | $0.01 | The live reading (score and regime) beside the last settled close. |
| `GET /v1/stress` | $0.01 | The stress gate: Calm, Elevated or Stressed, how many of its three components are confirmed (N of 3), and each component (Credit, Volatility, Rates) as Clear or Confirmed. |
| `POST /v1/lookup` | $0.01 | For up to 20 stock or crypto symbols, each one's typical return and how often it rose over 1 to 12 months when the period started in the current regime, as historical odds. A symbol outside coverage comes back as not covered, never as an error. |
| `GET /v1/crypto` | $0.01 | The current crypto market regime and each covered coin's typical return and how often it rose over 1, 2 and 3 months when the period started in this regime, as historical odds. |
| `GET /v1/brief` | $0.01 | The live reading, the stress gate, and the scorecard row for the current regime: what the S&P 500 did in the 5 and 20 trading days after past readings in this regime. |

`POST /v1/lookup` takes a JSON body like `{"symbols":["NVDA","BTC"]}`. The
other routes take no input.

## Spend-aware usage

- Call `/v1/sample` first. It is free and shows the response shape, the latest
  settled reading and the paid routes with their prices.
- `/v1/brief` answers the regime, the stress gate and the scorecard in one
  call. Prefer it over separate calls to `/v1/live` and `/v1/stress`.
- Readings settle once a day after the US close (4:30 PM ET). The live reading
  and the stress gate are recomputed hourly during the US session (10:00 AM to
  4:00 PM ET). Do not poll: a second call within the same hour, or after the
  settle, returns the same reading.
- Send every symbol of a watchlist in one `/v1/lookup` call (up to 20) instead
  of one call per symbol.
- Check `status` and `asOf` in a response before asking again: a `settled`
  response does not change until the next US trading day.
