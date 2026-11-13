---
name: video
title: "VidGuy"
description: "AI short-form video API for TikTok, Reels and Shorts: snack packs, faceless and UGC videos, carousels, memes and Studio image or video clips. Async jobs return MP4 and PNG URLs, paid from prepaid credits."
use_case: "Use for making UGC-style ads, faceless explainers, TikTok carousels and meme packs at scale, and for buying VidGuy credits with x402 USDC on Solana or Base after registering an agent API key."
category: media
service_url: https://www.vidguy.ai
openapi:
  path: openapi.json
---

VidGuy turns a brief into short-form video and image posts for TikTok,
Instagram Reels and YouTube Shorts. Every call spends prepaid credits from a
VidGuy account. Credits never expire. Agents buy them with x402 at $0.10 per
credit, in fixed sizes of 10, 50, 100, 250, 500 or 1000 credits ($1 to $100).

## Agent flow

1. **Register once (free, no payment).** `POST https://www.vidguy.ai/api/v1/agents/register`
   with `{"operatorEmail": "...", "billingCountry": "DE", "acceptTerms": true}`.
   The response holds a `vf_live_` API key, shown once. Send it as `X-Api-Key`
   on every later call. Accounts that are never funded are removed after 7 days.
2. **Top up.** `POST /api/v1/credits/topup/{credits}` with `X-Api-Key` and no
   payment header returns 402 with an x402 v2 `PAYMENT-REQUIRED` header
   (USDC on Solana mainnet or Base). Pay it and retry the same request with
   `PAYMENT-SIGNATURE` and the same `X-Api-Key`. The credits land on that
   account once the payment settles. A paid retry without an API key is
   refused with 401 before anything settles, so register first.
3. **Spend.** Start a job (`POST /api/v1/snacks`, `/api/v1/carousel-v2`,
   `/api/v1/studio/generations`), then poll `GET /api/v1/jobs/{id}` until it
   is `completed` and read the output URLs.

With pay: `pay curl -X POST -H "X-Api-Key: vf_live_..." https://www.vidguy.ai/api/v1/credits/topup/10`

Full API: https://www.vidguy.ai/api/openapi.json. MCP server:
https://www.vidguy.ai/api/mcp. Pricing for agents: https://www.vidguy.ai/pricing.md.

## Spend-aware usage

- Check `GET /api/v1/credits` before topping up.
- Ask for the smallest size that covers a job: `GET /api/v1/credits/topup?required=N`
  returns `suggestedCredits`. `GET /api/v1/snacks/estimate` prices a snack pack first.
- Start with the 10-credit top-up ($1) to try the API.
- A 402 from a job route means the balance is short. Its `topup` field names the size and URL to pay.
