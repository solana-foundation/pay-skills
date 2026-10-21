---
name: chain
title: "Tollkit Chain"
description: "Crypto and on-chain data for Base, Ethereum and Solana: crypto news with a mood read, Hyperliquid perps and funding, a market pulse, Chainlink price history, token prices and risk checks, a pre-trade check, balances and portfolios."
use_case: "Use for crypto market overviews, news on a coin, perp funding and open interest, past prices, pricing a token from DEX pools, spotting risky tokens before a trade, checking wallet balances or value, and confirming a payment landed."
category: finance
service_url: https://chain.tollkit.dev
openapi:
  path: openapi.json
---

Tollkit Chain reads Base, Ethereum and Solana directly, plus Hyperliquid, Chainlink and crypto news. Prices come from the
token's deepest on-chain pool (Uniswap v3 on EVM chains, Orca Whirlpools on
Solana) with the pool depth and a thin-liquidity flag. Every endpoint is a
read: nothing is signed or sent on the caller's behalf. Every endpoint is a
POST with a JSON body and is paid per call over x402 in USDC on Solana or
Base. No account or API key. A failed call is not charged.

| Endpoint | Body | Price |
|---|---|---|
| `POST /chain/balance` | `{"address", "chain", "tokens"?}` | $0.002 |
| `POST /chain/token` | `{"token", "chain"}` | $0.002 |
| `POST /chain/tx` | `{"hash", "chain"}` | $0.002 |
| `POST /chain/price` | `{"token", "chain"}` | $0.001 |
| `POST /chain/check` | `{"token", "chain"}` | $0.004 |
| `POST /chain/portfolio` | `{"address", "chain", "tokens"?}` | $0.005 |
| `POST /chain/pretrade` | `{"token", "chain", "wallet"?, "amount_usd"?}` | $0.01 |
| `POST /chain/news` | `{"query"?, "freshness"?, "num"?}` | $0.004 |
| `POST /chain/perps` | `{"coins"?, "sort"?, "limit"?, "funding_hours"?}` | $0.001 |
| `POST /chain/pulse` | `{}` | $0.003 |
| `POST /chain/history` | `{"asset", "days"?, "points"?}` | $0.002 |

`chain` is `base`, `ethereum` or `solana`. The same tools are available as a
remote MCP server at https://api.tollkit.dev/mcp.

## Spend-aware usage

- `/chain/check` returns identity, price, liquidity and warnings together; do not also call `/chain/token` and `/chain/price` for the same token.
- `/chain/portfolio` prices every holding in one call; prefer it to one `/chain/price` call per token.
- Start with `/chain/pulse` for the market at a glance: Fear & Greed, BTC, ETH and SOL, funding extremes and movers in one call; use `/chain/perps` only for coins it doesn't cover.
- `/chain/news` returns the articles and a short read of their mood together; there's no need to search and summarize separately.
- A transaction that is not found, or a token with no pool, is not charged.
- Send an `Idempotency-Key` header when retrying: a repeat within 10 minutes returns the paid answer again without a second charge.
