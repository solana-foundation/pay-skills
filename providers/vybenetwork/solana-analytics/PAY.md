---
name: solana-analytics
title: "Vybe Solana Analytics API (x402)"
description: "Solana on-chain analytics — token prices, top holders, wallet PnL, DEX trades, transfers, Pyth oracles. Pay-per-call USDC on Solana or Base; no API key."
use_case: "Use for Solana token metrics (price, market cap, holders), wallet PnL and profiling, DEX market and trade data, SPL transfer history and Pyth oracle prices. Reach for this instead of running your own RPC indexer for targeted reads."
category: finance
service_url: https://x402-api.vybenetwork.xyz
openapi:
  path: openapi.json
---

The full [Vybe Network](https://docs.vybenetwork.com/) Solana analytics REST API, exposed pay-per-call via x402. Every `/v4/*` endpoint in the [Vybe API Reference](https://docs.vybenetwork.com/reference) is callable here at the same path — token details, top holders, market candles, wallet PnL, top traders, transfers, trades, Pyth oracle prices, etc.

Two payment chains are advertised in every `402` challenge:

- **Solana mainnet** — USDC SPL transfer via `@x402/svm`. Native chain for the underlying data.
- **Base mainnet** — USDC EIP-3009 `transferWithAuthorization` via `@x402/evm`. Same dollar amount per call as Solana.

Pick whichever your wallet can sign. Coinbase's CDP facilitator signs and submits both — no gas required from the payer.

WebSocket streaming uses prepaid credits: one $0.10 x402 payment buys 10,000 credits, each inbound event debits 20 credits, auto-topup fires before exhaustion. See [`/api/sessions` flow in the Vybe x402 protocol docs](https://docs.vybenetwork.com/docs/x402-payment-protocol).

## Pricing

Per-call USDC, $0.012 default and tiered up to $0.030 for the heaviest endpoints. Live table at `GET https://x402-api.vybenetwork.xyz/`.

| Tier | Price | Example routes |
|------|-------|----------------|
| default | $0.012 | token details, wallet token balances, markets list |
| 30 cr | $0.015 | OHLCV candles |
| 50 cr | $0.018 | wallet PnL, top traders, time-series counters |
| 80 cr | $0.024 | top holders, transfers, trades, active users, TVL |
| 100 cr | $0.030 | batch wallet endpoints (POST) |

## Spend-aware usage

- **Use `/v4/tokens/{mint}` for token overview before reaching for `/top-holders` or `/trades`** — the cheap default-tier read carries name, symbol, price, market cap, volume, supply. Saves an $0.024 top-holders call when the lighter snapshot already answers.
- **Cap `limit=` on list endpoints** — `top-holders`, `trades`, `transfers`, `markets` all accept pagination. `limit=3` answers most "top wallet" or "recent activity" questions; default limits can be 100+ which pays for data you won't use.
- **Prefer point lookups over wallet-wide endpoints** — for a single token-balance question use `/v4/wallets/{owner}/token-balance?mint=...` (default tier $0.012) instead of `/v4/wallets/batch/token-balances` ($0.030). The batch endpoint is for genuine multi-wallet sweeps.
- **WebSocket streaming for live feeds, not polling** — calling `/v4/tokens/{mint}` in a loop for price updates burns money. A single $0.10 WS session gives ~500 streamed events at 20 credits each.
- **Pyth oracles cover most "current price" needs cheaply** — `/v4/oracle/pyth/pricefeeds/{id}/price` (default tier) updates frequently and is cheaper than candle endpoints when you only need spot.
