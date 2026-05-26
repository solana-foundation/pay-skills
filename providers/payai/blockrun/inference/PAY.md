---
name: inference
title: "BlockRun AI Gateway"
description: "Pay-per-request AI gateway with chat and image models, plus market data (crypto, FX, stocks, commodities), web search, and X/Twitter analytics. Single endpoint, USDC settlement on Solana, no signup or API keys required."
use_case: "Use for LLM inference, agent image generation, crypto/stock/FX/commodity price and history lookups, web search, and X/Twitter sentiment or follower analysis through one stablecoin-paid endpoint with no API keys."
category: ai_ml
service_url: https://sol.blockrun.ai
openapi:
  path: openapi.json
---

Agent-native stablecoin AI gateway routed through the [PayAI facilitator](https://facilitator.payai.network/). One HTTPS host exposes chat completions, image generation, web search, X/Twitter analytics, and multi-asset market data (crypto, FX, US stocks, commodities) — no signup, no API keys, no per-tenant credentials.

## Payment

- **x402** (default): An unauthenticated request to a paid route returns `402` with a base64 `Payment-Required` header carrying the x402 v2 challenge — Solana mainnet USDC, a per-call `amount`, and a real `payTo`. The agent signs the payment and replays the request with an `X-Payment` header.
- Some routes (chat completions, image generation) validate the request body before issuing the challenge, so probe with a well-formed body to receive the `402`.

This is a server-to-server API. CORS is not configured for browser clients, so browser-based agents should call through a backend proxy.

## Spend-aware usage

- Resolve identifiers once and reuse them. For X/Twitter analytics, call `/api/v1/x/users/info` to look up a `user_id`, then use that id for follower, tweet, and mention queries instead of re-resolving handles each call.
- For "what's happening now" style requests, prefer a single `/api/v1/search` or `/api/v1/x/trending` call as agent context before invoking `/api/v1/chat/completions` — one cached search is cheaper than a retry loop that runs the model with no grounding.
- Image generation is per-image. Pick one capable model (`/api/v1/images/generations`) with a concrete prompt rather than fanning out across providers; use `/api/v1/images/image2image` only when an input asset is already chosen.
- Market data history endpoints accept date ranges. Ask for the smallest window that answers the task — daily granularity for trend questions, hourly only when intraday signal matters.
- Batch crypto/FX/stock queries via the `*/list` endpoints when the agent needs many tickers at once, instead of N individual price calls.
