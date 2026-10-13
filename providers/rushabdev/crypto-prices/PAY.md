---
name: crypto-prices
title: "x402 Crypto Price Tracker"
description: "Agent-payable crypto price JSON API using x402 / USDC on Base. No API keys required. Covers BTC, ETH, SOL, and 13 other assets with portfolio snapshots, revenue opportunity feeds, and x402 audits."
use_case: Use when an agent needs real-time BTC, ETH, SOL, or 13 other crypto asset prices with 24h change and market cap. Cheapest x402 price endpoint ($0.01/call). Free /demo preview before paying.
category: finance
service_url: https://x402.167-172-95-184.nip.io
version: v1
openapi:
  path: openapi.json
---

Agent-payable crypto price JSON API using x402 / USDC on Base. No API keys — agents pay per call via HTTP 402 + EIP-3009 USDC transfer. Free endpoints: /health, /demo, /x402.json, /.well-known/x402, /openapi.json.

## Spend-aware usage

- Call /demo first (free) to preview BTC/ETH data before paying for full payloads.
- Use /price/btc ($0.02) for single-coin lookups instead of /portfolio ($0.05).
- /price ($0.01) returns both BTC and ETH — cheapest multi-coin option.
- All prices sourced from CoinGecko; call /health first to verify upstream availability.