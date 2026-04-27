---
name: blockchain-analytics
title: "Allium"
description: "Query token prices, wallet balances, transaction history, and on-chain analytics across 150+ EVM, Solana, and Bitcoin chains. Supports portfolio analysis, decoded transactions, async SQL queries, and custom blockchain data research."
use_case: "Use for real-time or historical token pricing, wallet portfolio balances, transaction history, decoded transfers, swaps, PnL research, Solana/EVM/Bitcoin analytics, custom SQL over blockchain data, and multi-chain portfolio enrichment."
category: finance
service_url: https://agents.allium.so
openapi_url: https://agents.allium.so/openapi.json
endpoints:
  - method: POST
    path: "api/v1/developer/prices"
    resource: prices
    description: "Get current spot prices for a token by chain and contract address with decimals and OHLC fields"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/v1/developer/prices/history"
    resource: prices
    description: "Retrieve historical price candles for a token by chain and contract address over a time range"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/v1/developer/wallet/balances"
    resource: wallets
    description: "Retrieve wallet token balances across multiple chains, returning holdings with current values"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/v1/developer/wallet/transactions"
    resource: wallets
    description: "Retrieve full transaction history for a wallet address, including transfers, swaps, and decoded contract interactions"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/v1/developer/wallet/pnl"
    resource: wallets
    description: "Compute realized and unrealized profit and loss for a wallet across tokens and chains"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/v1/explorer/queries/run-async"
    resource: sql
    description: "Submit an async SQL query against on-chain data and receive a run_id for polling results"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
---

Blockchain analytics across 150+ EVM, Solana, and Bitcoin chains.
Token prices, wallet balances, transaction history, PnL, and async SQL queries.

x402 payment with USDC on Base or Solana mainnet. SQL queries are async:
submit via `queries/run-async` to get a `run_id`, then poll
`query-runs/{run_id}/status` and fetch via `query-runs/{run_id}/results`.

Body shape for price endpoints is `{ "token_address": "...", "chain": "solana" }`
(singular). Docs: https://docs.allium.so
