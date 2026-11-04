---
name: search
title: "x402serps"
description: "Pay-per-call web search, news, images, places, scholar and videos from a third-party search provider, plus page extraction to markdown. USDC on Solana or Base."
use_case: "Use when an agent needs fresh web, news or local results, or the clean text of a URL, priced per call with no account."
category: search
service_url: https://x402serps.com
version: 1.3.1
openapi:
  path: openapi.json
---

x402serps returns live search results in a small, consistent JSON shape and turns any public URL into clean markdown. Every `/api/v1/*` endpoint is a JSON POST; unpaid calls return HTTP 402 with x402 v2 requirements for USDC on Solana mainnet and Base.

Prices: web/news/images/places/shopping/scholar/videos search $0.004 per 10 results; extract $0.003 per URL; search-extract $0.02; deep research $0.08. Failed calls are not charged. Free trial: send `X-Trial: 1` for 25 calls. MCP: `https://x402serps.com/api/mcp`.

## Spend-aware usage

- Start with `/api/v1/search` using `num: 10`; raise `num` only when needed (priced per 10 results).
- Use `/api/v1/answer` or `/api/v1/search-extract` instead of a search followed by several extracts.
- Extract several URLs in one call (`urls: [...]`, up to 20) rather than looping.
- Cache results in your agent; repeated identical queries are billed again.
- Use `freshness` / date filters to cut irrelevant results instead of paging.
