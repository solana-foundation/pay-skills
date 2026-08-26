---
name: search
title: "OptimAI"
description: "OptimAI is an agent-ready decentralized search and retrieval service powered by OptimAI Network nodes, returning real-time contextual answers with citations from web, social, and crypto sources."
use_case: "Use for current web research, source-backed answers, social and crypto discovery, fact checking, and citation-rich searches when an agent needs live information."
category: search
service_url: https://api-onchain.optimai.network
openapi:
  path: openapi.json
---

OptimAI Search gives agents current, source-backed context through a paid x402 endpoint. It searches web, social, and crypto sources and returns a contextual answer with citations. The same endpoint accepts x402 payment on Base and Solana mainnet in USDC.

## Request lifecycle

The paid `POST /external/v1/x402/search` returns `202` with a search `id`. Poll `GET /external/v1/x402/search/{id}` with the `PAYMENT-SIGNATURE` header to read progress and retrieve the completed answer with citations. A completed result that is still verified but unsettled returns a fresh x402 payment challenge before the result is released.

## Spend-aware usage

- Ask one focused question per call.
- Reuse a prior answer's citations and identifiers before paying for another search.
- Use the smallest query that answers the task; avoid repeating equivalent searches.

## SDK

For TypeScript integrations, use the [OptimAI x402 SDK](https://www.npmjs.com/package/@optimai-network/x402-sdk).
