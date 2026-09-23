---
name: tape
title: "loophole tape"
description: "pump.fun token risk checks (creator exits, bundle dumps, drains, holder concentration, calibrated rug and graduation probabilities), launch/rug/graduation feeds, wallet and creator cards, daily parquet datasets, and Robinhood Chain Pons V2 launch data."
use_case: "Use when screening a new pump.fun token before a trade, monitoring a watchlist of fresh mints for rugs, polling new launches, checking a creator's or wallet's history, or reading Robinhood Chain Pons V2 launches and bonding-curve state."
category: finance
service_url: https://api.loopholetape.com
version: 0.6.1
openapi:
  path: openapi.json
---

loophole tape serves pump.fun and PumpSwap risk data computed from its own
independent capture of pump.fun program events (feed at most 5 seconds behind
the chain; every response carries `meta.is_stale` and the feed lag), plus
Robinhood Chain (chain 4663) Pons V2 launch data from the sequencer feed. It
is not resold third-party data. Paid routes are x402 v2 `exact` and accept
USDC on Solana mainnet (PayAI facilitator) or USDC on Base.

Paid routes and prices (per successful call):

- `GET /v1/check/mint/{mint}` $0.005: compact risk check for one mint:
  `status`, `findings[]` (`creator_sold`, `bundle_dumped`, `curve_drained`,
  `pool_drained`, `curve_closed_low`, `migrate_below_grad`, each with
  `first_seen_at` and evidence), concentration, buyer flow, curve state and
  `probabilities` (`rug_within_300s` for mints younger than 30 s,
  `true_graduation` at any age).
- `GET /v1/check/watchlist?mints=a,b,c` $0.01 for up to five mints.
- `GET /v1/mint/{mint}` $0.025: full mint card.
- `GET /v1/launches/since?since=<unix>` $0.001 per poll: cursor-based delta of
  new launches with probabilities. `GET /v1/launches/recent` $0.01,
  `GET /v1/rugs/recent` $0.02, `GET /v1/graduations/recent` $0.02.
- `GET /v1/creator/{address}` $0.02, `GET /v1/wallet/{address}` $0.02.
- `GET /v1/rhc/launches/recent` $0.01, `GET /v1/rhc/curve/{address}` $0.02:
  Robinhood Chain Pons V2 launches and curve cards on the exact curve model
  (creator tax and fee on both legs).
- `GET /v1/datasets/pumpfun_launches/{YYYY-MM-DD}` $5.00: one day of pump.fun
  launches as parquet.
- `GET /v1/keys/trial` $0.10 and `GET /v1/keys/new` $2.00: prepaid credit;
  afterwards an `X-API-Key: lt_...` header pays any paid route.

Free routes: `GET /v1/radar` (live watchlist of covered mints with the highest
rug and graduation probabilities), `GET /v1/check/coverage?mints=...`,
`GET /v1/check/watch?mints=...&cursor=...`, `GET /v1/calibration` (validation
tables and caveats), `GET /v1/track-record` (daily forward scorecard),
`GET /v1/market/regime`, `GET /v1/rhc/regime`, samples under `/v1/sample/*`
and `/v1/rhc/sample/launches`, `GET /v1/datasets`, `GET /v1/labels`.

Probabilities are statistical estimates validated out of time (tables at
`/v1/calibration`), not guarantees and not financial advice. The forward track
record at `/v1/track-record` is public; read it before relying on the rug
number. Basic mint-authority and holder flags are available free elsewhere;
use this API for the event-level exit evidence and the calibrated numbers.

## Spend-aware usage

- Call free `GET /v1/check/coverage?mints=...` first; uncovered or invalid
  mints are refused before payment and never charged, so skip them.
- Use free `GET /v1/radar` to find candidate mints instead of paying for
  launch lists.
- Monitor with free `GET /v1/check/watch` (every 15 s or slower) and pay for a
  new check only when `data.has_new_events` is true; the same cursor on the
  paid route returns an unpaid `no_new_events` when nothing changed.
- Batch up to five mints in `/v1/check/watchlist` ($0.01) instead of five
  single checks ($0.025).
- For a launch stream, poll `/v1/launches/since` with the returned cursor
  ($0.001 per poll) rather than repeated `/v1/launches/recent` calls.
- An exact retry of the same paid request within 10 minutes replays the paid
  result without a second charge.
- Check the response shape on the free samples before paying for full cards.
