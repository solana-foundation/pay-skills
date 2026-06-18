---
name: store
title: "Riley Craig x402 Agent Store"
description: "Pay-per-call data for AI agents: the only x402 AI-visibility data — does ChatGPT/Perplexity recommend a brand or token — plus token rug-check, live DEX prices, new-token launches, on-chain RPC reads, and Polymarket odds. USDC on Base+Solana."
use_case: "Use for checking whether AI recommends a brand or token, pre-trade token rug-checks (honeypot, tax, mint risk), live DEX price and liquidity, new-token discovery, on-chain balance/gas/tx reads, prediction-market odds, DeFi yields, and token prices."
category: finance
service_url: https://store.agentexchange.work
version: v1
openapi:
  path: openapi.json
---

Riley Craig x402 Agent Store exposes 27 pay-per-call endpoints for AI agents — no API keys, no signup, USDC on Base (and Solana). It is the only service in the x402 ecosystem that answers "does AI recommend this brand/token?" (AI-visibility / GEO), alongside a full crypto trading-support lane and on-chain RPC reads.

Highlights agents reach for most:

- **/brands/check** ($0.95) and **/crypto/ai-visibility** ($0.05) — does ChatGPT/Perplexity/Google AI recommend a brand or token in its category? Score 0–100, mention rate, and who AI names instead. Unique to this store.
- **/crypto/security** ($0.001) — pre-trade token rug-check (honeypot, buy/sell tax, mintable, owner-reclaim, blacklist) + DANGER/OK verdict. Call before any buy.
- **/crypto/dex** ($0.002), **/crypto/launches** ($0.003) — live DEX price/liquidity/flow and the new-token discovery feed sniper agents poll.
- **/chain/balance, /chain/gas, /chain/tx, /chain/supply, /chain/ens** ($0.001) — the high-frequency on-chain RPC reads wallet, settlement and trading agents poll constantly.
- **/markets/prediction** ($0.01) — live Polymarket odds.

## Spend-aware usage

- Sample any product free first: GET /samples returns a realistic example of every endpoint plus the exact paid call.
- Call /crypto/security once before a buy rather than re-polling; cache the verdict for the trade.
- Use /chain/balance and /chain/gas for cheap, frequent reads; reuse addresses across calls.
- Narrow /brands/check to one brand + category per call; it runs live LLM queries.
