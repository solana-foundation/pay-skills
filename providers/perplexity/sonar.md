---
name: sonar
title: "Perplexity Sonar"
description: "AI-powered web search with real-time grounding via Perplexity Sonar, returning sourced and cited answers with inline references instead of raw links"
use_case: "Use when you need up-to-date, sourced answers from the web with citations — ideal for fact-checking, current events, research questions, or any query requiring real-time information beyond training data"
category: ai_ml
service_url: https://pplx.x402.paysponge.com
endpoints:
  - method: POST
    path: "search"
    resource: search
    description: "Search the web using Perplexity Sonar AI, returning grounded answers with inline citations and source URLs for any natural language query"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Perplexity Sonar provides AI-powered web search with real-time grounding.
Returns sourced, cited answers — not just links. Supports async completions and chat.

$0.01 per search. Solana USDC via x402.
