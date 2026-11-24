---
name: market-regime
title: "Regime Card"
description: "US market regime and risk-on / risk-off readings: a live reading from 0 to 100, five regimes, a stress gate, stock and crypto returns by market regime for one symbol or a portfolio, sectors by regime, the S&P 500 scorecard and post-earnings drift."
use_case: "Use when an agent needs a market regime, market sentiment or market risk check, a stress check before a trade, sector rotation context, S&P 500 base rates by regime, a stock lookup or portfolio check by market regime, or a post-earnings drift scan."
category: finance
service_url: https://agent.regimecard.com
openapi:
  path: openapi.json
---

Regime Card tells an agent whether the US market is risk-on or risk-off right
now: one reading from 0 (most risk-off) to 100 (most risk-on), returned as
`percentile`, and one of five market regimes, from Risk-Off to Risk-On.

Every route returns JSON. Every response says which trading session it
describes (`asOf`) and whether it is `live` or `settled`. No account and no API
key. Regime Card describes market conditions. It makes no recommendation and no
forecast. For informational purposes only. Not investment advice.

## Routes

Paid routes cost $0.002 to $0.05 per call in USDC, paid over x402 on Base,
Polygon or Solana: $0.002 for the conditions gate, $0.01 for the live
reading, the stress gate, a lookup, crypto and the scorecard, $0.02 for the
post-earnings drift tracker, $0.03 for the brief and for one sector, $0.05 for
every sector. The batch lookup is priced per covered symbol, and its 402
states the exact total for the request before any payment. A call that cannot
be answered is not charged: a payment settles only after the answer is built.

| Route | Price | Returns |
|---|---|---|
| `GET /v1/sample` | Free | The newest settled reading: the percentile, the regime, the eight cross-asset category labels, and the paid routes with their prices. |
| `GET /v1/live` | $0.01 | The live reading (percentile and regime) beside the last settled close. |
| `GET /v1/stress` | $0.01 | Is market stress calm, elevated or stressed right now? The stress gate: the overall state (Calm, Elevated or Stressed), how many of its three components are confirmed (N of 3), and the state of each component (Credit, Volatility, Rates: Clear or Confirmed). The levels behind the states stay private. |
| `POST /v1/lookup` | $0.01 | For one stock or crypto symbol per call (any US stock, plus the covered crypto list), its typical return and how often it rose over 1 to 12 months when the period started in the current regime. A stock also carries its regime sensitivity versus the S&P 500 and, where it has a page on regimecard.com, up to 5 peer symbols. A symbol with no price data is answered free as not covered. |
| `GET /v1/lookup` | $0.01 | The same lookup with the symbol in the query: `/v1/lookup?symbol=NVDA`. The same answer, price and payment as the POST. |
| `POST /v1/batch` | $0.01 per covered symbol | A batch lookup: for up to 100 stock or crypto symbols in one request and one payment, each served symbol's lookup result. It serves the stocks with Regime Card pages and the covered crypto list. A symbol it does not serve is listed and not charged; any other US stock is checked one at a time with `/v1/lookup`. |
| `GET /v1/crypto` | $0.01 | The current crypto market regime and each covered coin's typical return and how often it rose over 1, 2 and 3 months when the period started in this regime, as historical odds. |
| `GET /v1/brief` | $0.03 | The live reading, the stress gate, and the scorecard row for the regime of the last settled close: what the S&P 500 did in the 5 and 20 trading days after past readings in that regime. |
| `GET /v1/sectors` | $0.05 ($0.03 for one sector) | Which sectors and stocks have done best and worst in markets like today's? The ten sectors of the regimecard.com stocks page, ranked by the median typical return of their covered stocks over 1, 2 or 3 months from the current settled regime, each with its five highest and five lowest ranked stocks (typical return, how often it rose, how much history). With one sector named, every covered stock in it, ranked. It covers the stocks with Regime Card pages; any other US stock is checked one at a time with `/v1/lookup`. |
| `GET /v1/scorecard` | $0.01 | What has the S&P 500 done after past readings in this regime? The scorecard row regimecard.com publishes on its history page for the regime of the last settled close: the S&P 500's typical return, how often it rose and a bad outcome as a downside measure, over the 5 and 20 trading days after past readings in that regime. Any of the five regimes can be asked for by key. |
| `GET /v1/pead` | $0.02 | Which stocks are drifting after earnings right now? The post-earnings drift (PEAD) tracker: large US stocks that reported earnings in about the last two weeks, in the tracker's own order, each with its report date, its earnings surprise, its first-session reaction and its price drift since the report. |
| `GET /v1/gate` | $0.002 | What are US market conditions right now, in one small call? The current Regime Card regime (Risk-On to Risk-Off) and the stress gate's overall state (Calm, Elevated or Stressed) with how many of its three components are confirmed (N of 3). Conditions only: no percentile, no per-component detail, no history. |

`POST /v1/lookup` takes a JSON body with one symbol, like `{"symbol":"NVDA"}`.
One symbol per call: more than one is a free 400, and a symbol with no price
data is answered free as `{"symbol", "covered": false}`. `GET /v1/lookup` takes
the same symbol as a query parameter, `symbol`; two different symbols in the
query are a free 400. A share class is written with a dash or a dot: `BRK.B`
is `BRK-B`. `POST /v1/batch` takes a JSON body with a list, like
`{"symbols":["NVDA","BTC"]}`. Its limit is 100 entries as sent, each a
non-empty string of at most 40 characters, and a list outside that is a free
400. A symbol sent twice is served and charged once. `GET /v1/sectors` takes
two optional query
parameters: `sector`, one sector's id (for example `technology`), and
`horizon`, `1m`, `2m` or `3m` (3m without it). `GET /v1/scorecard` takes one:
`regime`, one of `risk_off`, `mildly_off`, `neutral`, `mildly_on` and
`risk_on`. A value either route does not take is a free 400 that lists the
values it takes. The other routes take no input.

In `/v1/sectors`, a stock with too little history at the horizon has no figure
and no rank and is listed after the ranked stocks. A sector's figure is the
median of its covered stocks that have enough history; with fewer than three it
has none and the sector is listed last.

Every paid response also carries `related`, the other paid routes with their
prices, and, except on `/v1/gate`, `research`, a link to a published study
when one is about the current regime.

Every paid response and `/v1/sample` also carry `record`, two links on
regimecard.com (`/verify` and `/api/ledger`) and one sentence: "Each settled
regime reading is added to a public, hash-linked record the day it is
published; a correction is a new entry, never an edit." It covers that
reading (the percentile and the regime label) and nothing else: not the stress
gate, stock or coin figures, the scorecard, the post-earnings drift tracker, or
a live intraday reading.

## Spend-aware usage

- Call `/v1/sample` first. It is free and shows the response shape, the latest
  settled reading and the paid routes with their prices.
- `/v1/brief` ($0.03) returns the live reading, the stress gate and the
  scorecard row together. That is what `/v1/live`, `/v1/stress` and
  `/v1/scorecard` cost as separate calls ($0.03 for all three). A caller that
  needs only the reading and the stress gate pays less with `/v1/live` and
  `/v1/stress` ($0.02 for both). Each one alone is $0.01.
- `/v1/crypto` ($0.01) returns every covered coin, over 1, 2 and 3 months. That
  is no more than one `/v1/lookup` per coin ($0.01 each, over 1 to 12 months),
  so a caller that needs any coin pays no more for all of them.
- `/v1/sectors` ($0.05) returns every sector, each with its five highest and
  five lowest covered stocks. A caller that needs one sector pays less with one
  `/v1/sectors?sector=<id>` per sector ($0.03 each, every covered stock in it).
- `/v1/live`, `/v1/stress` and `/v1/brief`: the reading and the stress gate
  update about once an hour while the US market is open, the first a little
  after 10 AM ET, and one settled reading is published per US trading day at
  4:30 PM ET. Each response carries `nextUpdateAt`, the expected time of its
  next update (UTC; an expectation, not a promise). Ask again then, not on a
  timer. `status` says which it is: the reading is `live` from the day's
  first update until it settles and `settled` at all other times; the stress
  gate is `settled` outside market hours.
- `/v1/brief`: the scorecard row follows the last settled close (the `settled`
  field), so it changes once per US trading day even while the live reading
  moves.
- `/v1/gate`: the regime and the stress gate each update about once an hour
  while the US market is open, the first a little after 10 AM ET. The
  top-level `asOf` and `status` are the regime's; the stress gate carries its
  own (`stress.asOf` and `stress.status`), which can be an earlier session.
  `nextUpdateAt` is one time for both: when one hourly update is due to both,
  the time both are expected to be in; otherwise, whichever comes first. Ask
  again then.
- `/v1/crypto`: the regime is the last settled close (`asOf`), but the coin
  figures are recomputed once a day, every day, weekends included. Check
  `dataAsOf`, the newest day of coin prices in the figures, before asking
  again. A `settled` status here does not mean the coin figures are unchanged
  until the next US trading day.
- `/v1/lookup`: one symbol per call, $0.01 each. Stock and ETF figures update
  after each US close and coin figures once a day. The result carries its own
  `asOf`, the session of that symbol's newest price. Check it, not the
  top-level `asOf`, which is the session of the regime.
- `/v1/batch`: the unpaid answer for a request carries `quote`: the symbols
  asked, the symbols charged, the price per covered symbol and the total, with
  the symbols it will not serve in three lists. `notCovered`: it cannot be
  served at all (a stock whose price series stopped, a coin written in its
  exchange form, an entry that is not a symbol). `unavailable`: covered, with
  no figures right now. `lookupOnly`: a stock outside the ones with Regime Card
  pages, which the batch does not compute and `/v1/lookup` serves, one symbol
  per call. Only served symbols are charged, the total quoted is the total
  settled, and the paid response repeats the count and the total in `charged`.
  A request with no symbol it can serve is answered free, with the three lists
  and an empty `results`.
- A stock's `peers` are symbols only. Each peer is its own `/v1/lookup` call
  at $0.01, so look one up only when its figures are needed.
- A result marked `"page": false` is a US stock served on demand by
  `/v1/lookup`: it has no `url` and no `peers`. `/v1/batch` returns no such
  result.
- `/v1/sectors`: settled figures, updated after each US close. Check
  `dataAsOf`, the newest day of stock prices in the figures, before asking
  again.
- `/v1/scorecard`: the row follows the last settled close, whose date is
  `asOf`, so it changes at most once per US trading day.
- `/v1/pead`: the tracker is rescanned each morning before the US open, and
  prices refresh a few stocks at a time, in rotation, while the US market is
  open. `status` is `live` only while the US stock market is open (market
  holidays and half days counted) and the newest price in the list is at most
  20 minutes old; at any other time it is `settled`. `updatedAt` is the later
  of the scan's completion and the newest price, and each stock carries
  `pricedAt`, when its own price was last refreshed, which can be well before
  `updatedAt`. `stale` is true until the current session's rescan has
  completed. Check `updatedAt` before asking again. It lists what happened
  after each report and says nothing about what comes next.
