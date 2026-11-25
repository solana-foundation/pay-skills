---
name: crypto-data
title: "AtlasData Crypto Data"
description: "Pay-per-call crypto market, token risk, wallet, transaction, DEX, gas, and chain data. Returns compact JSON objects for prices, sentiment, mempool state, balances, blocks, contract metadata, and network status."
use_case: "Use for crypto price lookup, token risk screening, wallet and transaction inspection, Base gas checks, Bitcoin mempool state, Solana slot status, DEX pair research, and agent workflows needing small paid chain-data calls."
category: finance
service_url: https://x402atlas.xyz
version: v1
openapi:
  path: openapi.json
---

AtlasData Crypto Data is a pay-per-call x402 API for agents that need compact crypto and chain facts without an account or API key. Paid endpoints return HTTP 402 first and accept USDC on Solana mainnet, plus several EVM networks.

Most narrow lookups cost $0.001 per call. Broader aggregate market endpoints cost up to $0.005 per call. Responses are JSON and are shaped for machine consumption rather than dashboards.

## Spend-aware usage

- Use single-symbol endpoints such as `/api/price/{symbol}` or `/api/ticker/{symbol}` before broader aggregate endpoints.
- Use `/api/token/verdict-lite` for first-pass token risk screening before paying for deeper research elsewhere.
- Cache chain metadata, prices, and block numbers for their natural freshness window instead of polling in tight loops.
- Prefer one purposeful call per user question. Do not retry a paid call after a settlement unless the first response was lost.
