---
name: blockchain-analytics
title: "Allium"
description: "Token prices, wallet balances, transaction history, and on-chain analytics across 150+ EVM, Solana, and Bitcoin chains with natural language SQL queries"
use_case: "Use when you need real-time or historical token pricing, wallet portfolio balances across multiple chains, transaction history lookups, or custom on-chain analytics via natural language SQL queries"
category: finance
service_url: https://agents.allium.so
endpoints:
  - method: POST
    path: "token/prices"
    resource: tokens
    description: "Retrieve real-time and historical token prices across 150+ chains, supporting multiple tokens and time ranges for portfolio valuation"
  - method: POST
    path: "wallet/balances"
    resource: wallets
    description: "Retrieve wallet token balances across multiple chains, returning holdings with current values for portfolio analysis"
  - method: POST
    path: "wallet/transactions"
    resource: wallets
    description: "Retrieve full transaction history for a wallet address, including transfers, swaps, and contract interactions with decoded details"
  - method: POST
    path: "query"
    resource: sql
    description: "Run async SQL queries against on-chain data using natural language, returning structured results for custom blockchain analytics"
---

Blockchain analytics across 150+ chains including EVM, Solana, and Bitcoin.
Token prices, wallet balances, transaction history, PnL, and async SQL queries.

x402 payment with USDC. No accounts to create — works directly from agent code.
