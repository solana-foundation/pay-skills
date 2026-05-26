---
name: inference
title: "BlockRun AI Gateway"
description: "Pay-per-request gateway: LLM chat and image generation, web search, X/Twitter analytics, crypto/FX/stock/commodity and onchain market data, wallet intelligence, phone lookup/provisioning, and outbound voice calls. USDC on Solana, no API keys."
use_case: "Use for LLM inference, image generation, web search, market and onchain data, wallet labels, X/Twitter analysis, phone-number lookup and provisioning, and placing outbound voice calls — all through one stablecoin-paid endpoint with no API keys."
category: ai_ml
service_url: https://sol.blockrun.ai
openapi:
  path: openapi.json
---

Agent-native stablecoin gateway routed through the [PayAI facilitator](https://facilitator.payai.network/). One HTTPS host exposes 57 endpoints across several surfaces:

- **AI** — chat completions (dynamic `$0.0001–$5.00` by token count) and image generation/editing (`$0.02–$0.08`).
- **Web & social** — web search, X/Twitter search, trending, tweets, and user analytics (`$0.002–$0.20`).
- **Market data** — crypto, FX, US stock, and commodity price/history (`$0.001`), plus a `surf` onchain-intelligence suite: exchange klines and funding, market rankings, fear/greed, ETF flows, gas, transactions, SQL-over-onchain, Polymarket markets, wallet detail and batch labels, and social mindshare (`$0.001–$0.02`).
- **Comms** — phone lookup (`$0.01`) and fraud scoring (`$0.05`), phone-number provisioning (buy/renew `$5.00` per number), and outbound voice calls (`$0.54/call`).

No signup, no API keys, no per-tenant credentials.

## Payment

- **x402** (default): An unauthenticated request to a paid route returns `402` with a base64 `Payment-Required` header carrying the x402 v2 challenge — Solana mainnet USDC, a per-call `amount`, and a real `payTo`. The agent signs the payment and replays the request with an `X-Payment` header.
- Some routes (chat completions, image generation) validate the request body before issuing the challenge, so probe with a well-formed body to receive the `402`.

This is a server-to-server API. CORS is not configured for browser clients, so browser-based agents should call through a backend proxy.

## Spend-aware usage

- Comms routes are the priciest by far: a phone number is `$5.00` to buy and `$5.00` to renew, and each `/api/v1/voice/call` is `$0.54`. Confirm the task genuinely needs telephony before provisioning, and reuse a purchased number across calls rather than buying one per task.
- `/api/v1/chat/completions` is dynamically priced (`$0.0001–$5.00` by token count) — cap `max_tokens` to bound spend, and keep prompts tight.
- Resolve identifiers once and reuse them. For X/Twitter analytics, call `/api/v1/x/users/info` to look up a `user_id`, then use that id for follower, tweet, and mention queries instead of re-resolving handles each call.
- Onchain `surf` reads are cheap (`$0.001–$0.02`). Prefer a targeted `/api/v1/surf/wallet/detail` or `/api/v1/surf/wallet/labels/batch` over looping per-wallet, and use `/api/v1/surf/onchain/sql` for aggregate queries instead of many single reads.
- For "what's happening now" style requests, prefer a single `/api/v1/search` or `/api/v1/x/trending` call as agent context before invoking `/api/v1/chat/completions` — one cached search is cheaper than a retry loop that runs the model with no grounding.
- Image generation is per-image. Pick one capable model (`/api/v1/images/generations`) with a concrete prompt rather than fanning out across providers; use `/api/v1/images/image2image` only when an input asset is already chosen.
- Market data history endpoints accept date ranges. Ask for the smallest window that answers the task — daily granularity for trend questions, hourly only when intraday signal matters.
- Batch crypto/FX/stock queries via the `*/list` endpoints when the agent needs many tickers at once, instead of N individual price calls.
