---
name: search
title: "Exa"
description: "Exa is an AI-native web search API: neural and keyword search plus content extraction, returning ranked result URLs, titles, published dates, authors, full page text, highlights, and AI-generated summaries for grounding LLMs and agents on live web data."
use_case: "Use for semantic web search, finding relevant pages by meaning, retrieving clean page text or AI summaries, news and current-events lookup, company and competitor research, fact-checking, and feeding real-time web context to LLMs and autonomous agents."
category: search
service_url: https://api.exa.ai
endpoints:
  - method: POST
    path: "search"
    resource: search
    description: "Search the web semantically with neural, keyword, or auto modes, returning ranked results with URLs, titles, published dates, authors, and optional text, highlights, or summaries"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.007
  - method: POST
    path: "contents"
    resource: contents
    description: "Retrieve clean page content for given URLs or Exa document IDs, returning full text, highlights, and optional AI-generated summaries"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
---

Exa is an AI-native search engine built for LLMs and agents. Instead of keyword
matching, it uses neural (embeddings-based) search to find pages by meaning,
making it well suited for grounding models on live web data.

- `search` — semantic web search (`neural`, `keyword`, `auto`, plus deep modes),
  returning ranked results with URLs, titles, published dates, and authors.
  Optionally inline `contents` (text, highlights, summary) per result.
- `contents` — fetch clean page content for URLs or Exa result IDs, returning
  full text, highlights, and optional AI-generated summaries.

Pay per request in USDC via x402 — no API key required. The live 402 challenge
advertises both Solana and Base USDC; x402 search requests are capped at 10
results (use the API-key flow for more). Adding `summary` to results incurs a
small additional per-result charge.
