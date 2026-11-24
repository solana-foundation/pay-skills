---
name: pumpfun-replay
title: "Replay for pump.fun bots"
description: "Replays a pump.fun trading bot's past picks against the trades that really happened on Solana and returns each pick's real result in SOL with every fee, the orders that would have failed, and the paper result beside it."
use_case: "Use to backtest a pump.fun trading bot with honest fills: check a picks document, replay its first pick for free, then replay up to 50 picks in one paid call."
category: finance
service_url: https://replay.loopholetape.com
openapi:
  path: openapi.json
---

The replay takes the picks a pump.fun trading bot made, or would have made, and says what each would really have brought. It puts the bot's buy where it would have landed after the bot's own delay, prices it on the reserves of that moment with the bonding curve's own arithmetic, walks forward through the trades that really followed until the sell rule fires, and carries a position on into the coin's pool when the coin leaves the curve. Each answer holds the tokens bought, every fee and tip, the result in SOL, the reason an order would have failed on its own limit, and the simplest paper trade of the same pick for comparison, as data and as plain sentences.

The paid call is `POST /v1/replay`: up to 50 picks for 1 USDC, paid with x402 in USDC on Solana mainnet. A run is charged when at least one pick could be priced at its entry. A document that is wrong, a run in which no pick could be priced and every failure on the service's side are answered with a status of 400 or more and are not charged, and a paid answer is kept for 7 days for the wallet that paid.

The replay inserts the bot's order and keeps everyone else's orders as they were, so it is a calculation on public records and no advice on what to trade. It is not connected to pump.fun.

## Spend-aware usage

- Call `POST /v1/check` first. It is free and says whether the document is valid and whether its first pick fits the free sample.
- Call `POST /v1/replay/first` next. It replays the first pick of the document for free, so the format of the answer and the bot's settings can be judged before any payment.
- Put every pick of one question into one document, because the price is for the run and not for the pick, and a run takes up to 50 picks.
- Do not send a pick whose exit window ended less than a minute ago, because the chain's record of it is not final yet and the request is refused unpaid.
- A wallet is not charged twice for the same document while its answer is kept: fetch it again at `POST /v1/replay/results` with a signature of the paying wallet.
