---
name: market-data
title: "StableCrypto"
description: "Access crypto market and on-chain data through CoinGecko, DefiLlama, Alchemy, and Etherscan. Covers prices, DEX pools, DeFi TVL, yields, bridges, treasuries, token balances, transactions, contracts, logs, gas, and Ethereum stats."
category: finance
use_case: "Use for crypto prices, market charts, DeFi analytics, TVL and yield research, DEX pool data, wallet token balances, Ethereum transfers, contract metadata, gas estimates, bridge volume, stablecoin supply, treasury holdings, and blockchain monitoring."
service_url: https://stablecrypto.dev
openapi:
  url: https://stablecrypto.dev/openapi.json
---

Unified crypto market data gateway aggregating four data sources: CoinGecko for market prices and on-chain DEX pool data, DefiLlama for DeFi protocol analytics and TVL tracking, Alchemy for Ethereum token balances and transaction simulation, and Etherscan for on-chain account and contract data. All endpoints are POST and priced at $0.01 per request.

## Spend-aware usage

- Pick the source before paying: CoinGecko for prices, markets, trending, and
  token/pool metadata; DefiLlama for TVL, yields, bridges, fees, treasuries, and
  stablecoin supply; Alchemy or Etherscan for Ethereum account, transaction,
  contract, gas, and log data.
- Use batch-capable endpoints for multiple coins, addresses, or IDs instead of
  one request per item.
- Skip discovery calls when the user gives canonical IDs, contract addresses, or
  chain names. Use search/discovery only when identifiers are genuinely missing.
- For historical charts, request the smallest date range and granularity that
  answers the question.
