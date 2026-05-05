---
name: coingecko
title: "CoinGecko Onchain DEX API"
description: "Query CoinGecko onchain DEX market data through x402 for token prices, token detail lookup, trending pools on a network, and pool/token search."
use_case: "Use for onchain token pricing, token detail enrichment, trending-pool discovery on a network, and search across GeckoTerminal market data."
category: finance
service_url: https://pro-api.coingecko.com/api/v3/x402/onchain
openapi:
  path: openapi.json
---

CoinGecko onchain DEX data through x402 payments.

This provider adapts CoinGecko's official Pro OpenAPI spec to the live x402
URL shape. The current spec covers 5 `GET` endpoints: spot coin prices by
ID/symbol/name, onchain token prices by contract address, token detail
lookup, trending pools on a network, and pool/token search.

All published endpoints in the current spec are paid `GET` routes at $0.01 per
request and accept x402 USDC on Base and Solana mainnet.

## Spend-aware usage

- Use `/x402/simple/price` when the task only needs spot prices for
  well-known coins by CoinGecko ID, symbol, or name (e.g. `bitcoin`, `solana`,
  `ethereum`). Accepts comma-separated `ids`/`symbols`/`names` and
  `vs_currencies`, so batch coins and target currencies into one paid call.
  Prefer this over the onchain token-price route when you don't have an
  on-chain contract address.
- Use `/x402/onchain/simple/networks/{network}/token_price/{addresses}` when
  the task only needs token price or market-cap snapshots. It accepts a
  comma-separated list of addresses, so batch known tokens into a single call.
- Use `/x402/onchain/search/pools` to discover pools by token name, symbol,
  or contract address before following up with a token detail call.
- Use `/x402/onchain/networks/{network}/trending_pools` to surface what's
  active on a specific network without knowing addresses up front.
- Use `/x402/onchain/networks/{network}/tokens/{address}` for token detail
  enrichment (name, symbol, decimals, FDV, market cap, top pools) once you
  have a contract address.
