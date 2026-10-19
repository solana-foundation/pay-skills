---
name: history
title: "pumpdata.fun"
description: "pump.fun history API: market-cap base rates, wallet records with SOL in and out, launch and deployer records, named similar launches, and replayed backtests with fills and fees, from every pump.fun trade, ever."
use_case: "Use for pump.fun memecoin base rates, survivorship-bias checks, wallet labels (bot, winner, supply seller, new), deployer and bundle history for a mint, and backtesting picks on graduated pump.fun coins at the PumpSwap pool with dead coins counted."
category: finance
service_url: https://pumpdata.fun
openapi:
  path: openapi.json
---

pumpdata.fun answers questions about pump.fun bonding-curve and PumpSwap history,
read from the chain's own ledger with failed trades kept, since pump.fun's first
day. Every answer carries `X-Data-From`
(where the data begins) and `X-Data-As-Of` (the build it comes from). A window
that ends before the data begins (`X-Data-From`) answers 404; a window inside
the data with nothing in it is a charged 200. Not affiliated with pump.fun.

Six paid calls, priced per call in USDC on Solana mainnet over x402 (scheme
`exact`). No account and no key: an unpaid call answers 402 with the offer; pay
it and retry. The same calls are MCP tools at `POST https://pumpdata.fun/mcp`
(Streamable HTTP). Plain-text docs: https://pumpdata.fun/llms.txt.

| Call | Price | Returns |
|---|---|---|
| `GET /baserate?band=&from=&to=&venue=` | $0.005 | Coins that first traded inside a market-cap band in the window, how many reached 2x, 5x, 10x and 20x within 3 h, and the median peak |
| `POST /wallets` | $0.01 | Up to 50 addresses: class by rule (winner, bot, supply_seller, new, none), SOL put in and taken out, coins traded, first seen |
| `GET /launch/{mint}` | $0.005 | The deployer's record, the bundle at creation, insider supply, curve progress, and how launches that looked the same at the same age went over the next day |
| `GET /deployer/{address}` | $0.005 | A deployer's record with no coin needed: launches, graduations, best run, last launch; over the last 90 days how many of its launches doubled, did 10x, held at 2x a day later or died; its newest launches; and the base rate for its next launch from deployers with the same record |
| `GET /similar/{mint}` | $0.005 | The launches most like this one at five minutes, named by mint, with how each went over the next 24 h and why it is similar |
| `POST /replay` | $2 | A queued backtest of your picks on graduated coins, filled at the pool, with fees, fixed costs and bankroll, dead coins counted. Poll `GET /replay/{id}` (free) |

## Spend-aware usage

- Use `/baserate` before acting on a winners-only claim. One call covers a
  whole window of up to 31 days; split a longer window rather than calling per
  day.
- `band` edges snap to 5k, 10k, 15k, 20k, 28k, 40k, 60k, 100k, 250k and 1000k
  (USD). Ask for the band you mean once; the answer says the band it used.
- Batch wallets: one `/wallets` call takes up to 50 addresses for $0.01. Pass
  `mint` when the question is about the buyers of one coin.
- `/deployer` needs only a wallet address, so it is the call to make before a coin exists (or before buying from a
  deployer you have an address for); `/launch` covers the same deployer from a mint, with the bundle and insiders.
- `/replay` costs $2 a run. Send the whole pick list in one run (up to 500
  picks today, on coins that reached the pool), then poll
  `GET /replay/{id}`, which is free. A run that fails is rerun free on the
  same id.
- A window ending less than 3 h before the data's as-of (X-Data-As-Of) is
  cut there, because each crossing needs its 3 h after.
