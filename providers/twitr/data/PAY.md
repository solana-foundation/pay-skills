---
name: data
title: "twitr.sh"
description: "Pay-per-call X/Twitter API: tweet and profile lookups, tweet search with full operators, timelines, follower lists, communities, bulk dataset exports, real-time account and keyword monitors with signed webhooks, trends, and posting via connected accounts."
use_case: "Use for X/Twitter data in agent workflows: look up tweets or profiles, search tweets about a topic or brand, pull timelines and followers, export reply or follower datasets, watch accounts or keywords in real time, or post from a connected account."
category: data
service_url: https://twitr.sh
openapi:
  path: openapi.json
---

Live X/Twitter for AI agents, paid per call: single or batch tweet/profile reads, tweet search with the full operator set, user timelines and follower graphs, lists and communities, async bulk exports (23 extractors, downloadable datasets), real-time account/keyword monitors (prepaid hours; events by free polling or HMAC-signed webhooks), trend radar, AI tweet drafting, and posting through a connected account. Every endpoint is gated by x402 (USDC on Solana or Base) and MPP (Tempo). No API keys, no signup — the wallet is the account. Errors are RFC 9457 Problem bodies with machine-actionable `retryable` and `hint` fields; failed calls are never charged.

## Spend-aware usage

- Volume tools (x_search, x_timeline, x_lists, most x_communities kinds) REQUIRE `resultsLimit` (1-10000) and bill per returned item — set it to what you actually need; `resultsLimit: 1000` is a ~$1.20 call.
- The first response is always HTTP 402 quoting the exact price — read `amount` before signing; confirm with your user above ~$0.10.
- Prefer direct lookups over search when you already hold an id: `x_read` get-tweet/get-user is fixed-price (~$0.0012).
- x_extract is async: you pay once, get a claim check, and poll the status URL (free, SIWX) — never re-submit; send an `Idempotency-Key` header so retries replay instead of re-charging.
- Monitors are prepaid by the hour and hard-stop at expiry; poll events at /api/monitors/{id}/events (free) rather than re-running paid reads.
