---
name: market-regime
title: "Regime Card"
description: "US market regime and risk-on / risk-off readings: a live score from 0 to 100, one of five regimes from Risk-Off to Risk-On, a stress gate for credit, volatility and rates, and stock and crypto returns by market regime as historical odds."
use_case: "Use when an agent needs a market conditions, market sentiment or market risk check, a macro signal or risk check before a trade, a market stress check, or the returns by market regime of one stock or crypto symbol: any US stock, plus the covered crypto list."
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

Paid routes cost $0.01 to $0.05 per call in USDC, paid over x402 on Base,
Polygon or Solana: $0.01 for the live reading, the stress gate and a lookup,
$0.03 for the brief, $0.05 for crypto. A call that cannot be answered is not
charged: a payment settles only after the answer is built.

| Route | Price | Returns |
|---|---|---|
| `GET /v1/sample` | Free | The newest settled reading: the score, the regime, the eight cross-asset category labels, and the paid routes with their prices. |
| `GET /v1/live` | $0.01 | The live reading (score and regime) beside the last settled close. |
| `GET /v1/stress` | $0.01 | Is it time to reduce risk or hedge? Credit, volatility and rate stress in one call. The stress gate: the overall state (Calm, Elevated or Stressed), how many of its three components are confirmed (N of 3), and the state of each component (Credit, Volatility, Rates: Clear or Confirmed). The levels behind the states stay private. |
| `POST /v1/lookup` | $0.01 | For one stock or crypto symbol per call (any US stock, plus the covered crypto list), its typical return and how often it rose over 1 to 12 months when the period started in the current regime. A stock also carries its regime sensitivity versus the S&P 500 and, where it has a page on regimecard.com, up to 5 peer symbols. A symbol with no price data is answered free as not covered. |
| `GET /v1/crypto` | $0.05 | The current crypto market regime and each covered coin's typical return and how often it rose over 1, 2 and 3 months when the period started in this regime, as historical odds. |
| `GET /v1/brief` | $0.03 | The live reading, the stress gate, and the scorecard row for the regime of the last settled close: what the S&P 500 did in the 5 and 20 trading days after past readings in that regime. |

`POST /v1/lookup` takes a JSON body with one symbol, like `{"symbol":"NVDA"}`.
One symbol per call: more than one is a free 400, and a symbol with no price
data is answered free as `{"symbol", "covered": false}`. The other routes take
no input.

Every paid response also carries `related`, the other paid routes with their
prices, and `research`, a link to a published study when one is about the
current regime.

## Spend-aware usage

- Call `/v1/sample` first. It is free and shows the response shape, the latest
  settled reading and the paid routes with their prices.
- `/v1/brief` ($0.03) returns the live reading, the stress gate and the
  scorecard row together. A caller that needs only the reading and the stress
  gate pays less with `/v1/live` and `/v1/stress` ($0.02 for both). Either one
  alone is $0.01.
- `/v1/crypto` ($0.05) returns every covered coin, over 1, 2 and 3 months. A
  caller that needs four coins or fewer pays less with one `/v1/lookup` per
  coin ($0.01 each, over 1 to 12 months).
- `/v1/live`, `/v1/stress` and `/v1/brief`: the reading and the stress gate
  are recomputed hourly during the US session (10:00 AM to 4:00 PM ET), and one
  settled reading is published per US trading day at 4:30 PM ET. Do not poll.
  Check `status`, `asOf` and `updatedAt`: a response marked `settled` is final
  for its session, and these three routes return it until the next US session.
- `/v1/brief`: the scorecard row follows the last settled close (the `settled`
  field), so it changes once per US trading day even while the live reading
  moves.
- `/v1/crypto`: the regime is the last settled close (`asOf`), but the coin
  figures are recomputed once a day, every day, weekends included. Check
  `dataAsOf`, the newest day of coin prices in the figures, before asking
  again. A `settled` status here does not mean the coin figures are unchanged
  until the next US trading day.
- `/v1/lookup`: one symbol per call, $0.01 each. Stock and ETF figures update
  after each US close and coin figures once a day. The result carries its own
  `asOf`, the session of that symbol's newest price. Check it, not the
  top-level `asOf`, which is the session of the regime.
- A stock's `peers` are symbols only. Each peer is its own `/v1/lookup` call
  at $0.01, so look one up only when its figures are needed.
- A result marked `"page": false` is a US stock served on demand: it has no
  `url` and no `peers`.
