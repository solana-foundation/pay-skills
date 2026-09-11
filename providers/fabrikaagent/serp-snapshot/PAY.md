---
name: serp-snapshot
title: "serp-snapshot — Live SERP Results"
description: "Top-10 organic search-engine results (title, url, snippet) as JSON from a live query. No API keys required by the caller. x402 pay-per-call, 0.02 USDC on Base."
use_case: "Use for fresh web-search results inside agent loops: competitor checks, source discovery before a url2md read, market scans. Returns ranked organic results, not ads."
category: search
service_url: https://x402-serp.shablony-pro.workers.dev
openapi:
  path: openapi.json
---

`serp-snapshot` runs a live web search (Bing HTML) server-side and returns the top organic results as JSON: `title`, `url` (redirects unwrapped to the real destination), `snippet`. Callers need no search-API account or key.

Payment: x402 v1 `exact`, USDC on Base, $0.02 per call. Unpaid request → HTTP 402 with `accepts[]`; retry with `X-PAYMENT`. Dexter facilitator settles; no gas for the payer.

Free metadata: `GET /info`, `GET /.well-known/x402`, `GET /openapi.json`, `GET /health`.

## Spend-aware usage

- `count` caps results (max 10) — ask for 3-5 when you only need the top hits.
- Pair with a URL-to-markdown tool: one `serp-snapshot` call to discover URLs, then read only the promising ones.
