---
name: social-data
title: "StableSocial"
description: "Retrieve social media data from TikTok, Instagram, Facebook, and Reddit. Covers profiles, posts, comments, followers, following lists, search results, subreddit content, engagement metrics, captions, authors, timestamps, and nested threads."
category: media
use_case: "Use for social profile lookup, post retrieval, comment analysis, follower and following lists, TikTok/Instagram/Facebook/Reddit research, engagement metrics, subreddit monitoring, social listening, creator intelligence, and content discovery."
service_url: https://stablesocial.dev
openapi:
  url: https://stablesocial.dev/openapi.json
---

Social media data API covering TikTok, Instagram, Facebook, and Reddit.
All trigger endpoints are POST and priced at $0.06 per request.

### Two-step async flow

Every data endpoint is a **trigger**, not a fetch. The flow is:

1. **POST `/api/<platform>/<resource>`** with payment → returns `202 Accepted`
   with `{ "token": "<jwt>" }`. The token is your receipt and encodes the data
   path and the wallet that paid.
2. **GET `/api/jobs?token=<jwt>`** → returns
   `{ "status": "pending" | "finished" | "failed", "data"?, "error"? }`. Poll
   every few seconds; jobs typically finish in 5-60s. Tokens expire after 30
   minutes and are replayable.

The polling endpoint requires **SIWX wallet authentication** — only the wallet
that paid can poll. Pure x402 clients (no SIWX support) cannot complete the
flow; use a client that signs SIWX challenges (e.g. AgentCash) or implement
SIWX directly.

x402 and MPP payment in USDC accepted on Base, Solana mainnet, and Tempo.

## Spend-aware usage

- Each data endpoint is a paid trigger plus a later job read. Choose one
  platform and one resource per user question; do not trigger the same search on
  TikTok, Instagram, Facebook, and Reddit unless the user asks for all of them.
- Set the smallest limit or date window that can answer the question. Ask before
  multi-platform or repeated monitoring workflows.
- Keep the returned JWT token and poll the job endpoint with that token. Do not
  pay to retrigger the same job just because the first poll is still pending.
- If the client cannot sign SIWX challenges, explain that the trigger can be
  paid but results cannot be fetched with this client.
