---
name: exchange
title: "Tetrac Exchange Operations"
description: "Account reads, order placement, cancels, leverage changes and withdrawals on major centralized and decentralized crypto exchanges through one Tetrac dispatcher, plus the venue catalog and live venue latency."
use_case: "Use for placing or cancelling crypto perp orders, reading exchange balances, positions, open orders or trade history, setting leverage, or withdrawing funds from a user's own exchange account."
category: finance
service_url: https://www.tetrac.xyz
version: v1
openapi:
  path: openapi.json
---

Tetrac runs one method against one exchange per request:
`POST /api/v1/exchanges` with `exchangeName`, `method`, `params`, and — for
account, trading and withdrawal methods — the user's own exchange `credentials`.
`GET /api/v1/exchanges` lists the supported venues and every method with the
credentials it needs; `GET /api/v1/exchanges/latency` reports live venue
latency. Every call is $0.05 via x402 on Solana mainnet, settled in USDC.

For market data that needs no exchange account (tickers, funding rates, open
interest, listings, scanner signals), use the `tetrac/markets` skill instead.

## Safety

- `placeMarketOrder`, `placeLimitOrder`, `placeStopOrder`, `cancelOrder`,
  `cancelAllOrders`, `closeAllPositions`, `setLeverage`, `setHedgeMode` and
  `createWithdrawal` execute REAL trades and move REAL funds. Confirm the venue,
  symbol, side, size and price with the user before every call.
- Exchange credentials travel in the request body on every call. Ask the user
  for API keys limited to what the task needs — keys without withdrawal rights
  unless the user is withdrawing.
- A 200 response always carries `success: true`. Read `code` and `msg` for the
  venue's own result before reporting an order as placed.
- Not every venue implements every method; an unimplemented method returns 400.

## Spend-aware usage

- Call `GET /api/v1/exchanges` once per session and reuse its venue and method
  catalog instead of re-fetching it before each order.
- Read positions and open orders before placing or cancelling, rather than
  retrying an order blind.
- Public methods (`getTickers`, `getBestBidAsk`, `getKlines`,
  `getContractSpecs`) need no credentials, but `tetrac/markets` is usually the
  cheaper source for cross-venue data.
