---
name: data
title: "glim.sh"
description: "One remote endpoint gives your agent live data from Twitter, Reddit, the open web, GitHub and more. No API keys, no scraping stack - pay per call with USDC."
use_case: "Use for live external data in agent workflows: Twitter/X search and threads, Reddit posts and comments, semantic web search, clean page extraction, GitHub repos and code, Amazon products, YouTube transcripts."
category: data
service_url: https://glim.sh
openapi:
  path: openapi.json
---

One remote endpoint gives your agent live data from across the web: Twitter/X search and threads, Reddit posts and comments, semantic web search, clean page extraction (SSR, SPA shells, PDFs), GitHub repos/code/PRs, Amazon products, and YouTube transcripts. No API keys, no scraping stack - every endpoint is gated by x402 (USDC on Solana, Base, or Monad) and MPP (Tempo), $0.002-$0.015 per call. The same tools are also exposed as a hosted MCP server at https://glim.sh/mcp.

## Spend-aware usage

- Search endpoints return compact previews; follow up with the matching get endpoint only for items you need in full (search -> get is the intended two-step flow).
- Prefer direct lookups over search when you already have an identifier: a tweet URL/id, a Reddit post URL, a GitHub owner/repo, or an Amazon ASIN goes straight to the get endpoint.
- Scope Reddit queries with subreddit: and Twitter queries with operators (from:, since:, min_faves:) to cut irrelevant paid results.
- web/fetch ($0.002) is the cheapest way to read a known URL; reserve web/search ($0.01) for genuine discovery.
- Large web/fetch extractions are truncated inline with a download_full_url link - read it before paying for a second fetch.
