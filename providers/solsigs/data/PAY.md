---
name: data
title: "SolSigs"
description: "23 Solana x402 endpoints for AI agents — DEX prices, whale tracking, token safety, wallet intelligence, prediction markets, and ProofGuard receipts. From $0.001/call in USDC."
use_case: "Use for real-time Solana market data, token safety checks, wallet analysis, whale moves, prediction-market odds, and x402 payment/fulfillment evidence."
category: finance
service_url: https://solsigs.com
version: v2
openapi:
  path: openapi.json
---

SolSigs is a Solana-native x402 service offering 23 specialist endpoints, each priced per call in USDC ($0.001–$0.015) with no API keys, accounts, or subscriptions. All resources are verified on x402scan, and the service settles directly on Solana mainnet (~400ms finality).

Coverage spans live DEX prices (Jupiter + Birdeye), arbitrage scanning, wallet intelligence and scoring, new-token launch detection with rug-risk scoring, whale transfer tracking, smart-money discovery, NFT floor/rarity data, staking APY comparison, prediction-market odds (Polymarket), social sentiment, dev-activity metrics, an LLM on-chain summarizer, an intelligent RPC proxy, and ProofGuard receipt/refund evidence for x402-paid endpoint calls.

Agents can also discover endpoints via the machine-readable discovery document at https://solsigs.com/.well-known/x402.json. An open-source reference agent demonstrating the full discover → pay → data loop with finalized Solscan receipts lives at https://github.com/Gra-kir/solsigs-reference-agent.

## Spend-aware usage

- Start with the cheapest endpoint that answers the task: /rpc and /dev are $0.001; /dex and /staking are $0.002.
- Prefer a single targeted call over chained broad ones — /token-safety answers "is this token risky" directly rather than combining /launches + /wallet.
- Batch where supported: /price accepts a token list in one call instead of per-token /dex calls.
- Cap limit parameters (e.g. /launches, /predict) to the smallest number that answers the task.
- Reuse mint addresses and wallet addresses across calls rather than re-resolving them.
- Cached responses are served where upstreams rate-limit; repeat calls within a short window may be free of upstream latency but still billed — avoid tight polling loops.
