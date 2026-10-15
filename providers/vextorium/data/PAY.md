---
name: data
title: "Vextorium"
description: "552 pay-per-call data APIs: token safety, wallet balances and transactions on 30+ chains (EVM, Solana, XRP Ledger, Tron, TON, Bitcoin), DeFi (Aave, Hyperliquid, Jupiter), tokenized stocks, Polymarket, economic statistics, sanctions and IBAN/VAT checks."
use_case: "Use for token safety and pre-trade checks, wallet balances, transaction history, gas fees, DeFi positions, crypto and FX prices, prediction markets, official economic data (Eurostat, ECB, Fed), sanctions screening, IBAN/VAT/LEI checks and web tools."
category: finance
service_url: https://api.vextorium.com
version: v1
openapi:
  path: openapi.json
---

Vextorium serves 552 focused data endpoints for agents under `/v1/`. On-chain data is read directly from nodes and indexers for 12 EVM chains, Solana, the XRP Ledger, Tron, TON and Bitcoin; prices come from Chainlink oracles, DEX quotes and official sources; economic data comes from Eurostat, the ECB, the Fed, BLS and other public statistics offices; social data comes from the public Bluesky, Mastodon and Hacker News APIs. Every endpoint is `POST` with a JSON body and returns JSON. Payment is per call over x402 (from $0.001), in USDC on Solana, Base or Polygon, Circle Gateway (Optimism, Arc), or RLUSD on XRPL.

Requests that fail (invalid input, not found, upstream source down) return 4xx/5xx and are not charged. A human-readable catalog is at https://api.vextorium.com/, a machine-readable one at https://api.vextorium.com/catalog.json, and a remote MCP server at https://api.vextorium.com/mcp.

## Spend-aware usage

- Use the narrowest endpoint: `/v1/wallet-balances` for balances, `/v1/wallet-analysis` only when you also need account type, activity count or ENS.
- Batch where available: `/v1/token-safety-batch` checks 25 tokens per call and `/v1/token-price-batch` prices many tokens at once.
- For trading bots: `/v1/new-safe-tokens` → `/v1/pre-trade-check` before buying → `/v1/position-check` while holding.
- XRP Ledger: `/v1/xrpl-amm-pool`, `/v1/xrpl-order-book` and `/v1/xrpl-swap-quote` for liquidity and prices, `/v1/xrpl-rlusd` and `/v1/xrpl-token` for issued tokens, `/v1/xrp-account` for a full portfolio.
- Send only the fields you need; defaults are sensible (network defaults to `base`).
