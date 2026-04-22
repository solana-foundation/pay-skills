---
name: blockchain-analytics
title: "Allium"
description: "Token prices, wallet balances, transaction history, and on-chain analytics across 150+ chains"
category: finance
service_url: https://agents.allium.so
endpoints:
  - method: POST
    path: "token/prices"
    resource: tokens
    description: "Get real-time and historical token prices"
  - method: POST
    path: "wallet/balances"
    resource: wallets
    description: "Get wallet token balances across chains"
  - method: POST
    path: "wallet/transactions"
    resource: wallets
    description: "Get transaction history for a wallet"
  - method: POST
    path: "query"
    resource: sql
    description: "Run async SQL queries via natural language"
---

Blockchain analytics across 150+ chains including EVM, Solana, and Bitcoin.
Token prices, wallet balances, transaction history, PnL, and async SQL queries.

x402 payment with USDC. No accounts to create — works directly from agent code.
