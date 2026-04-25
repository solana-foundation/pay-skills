---
name: sonar
title: "Perplexity Sonar"
description: "Ask Perplexity Sonar for real-time web-grounded answers with sources. Returns cited responses, inline references, current information, research synthesis, fact-checking support, and answer generation beyond static model training data."
use_case: "Use for up-to-date sourced answers, current events, fact-checking, research questions, market or company research, web-grounded summaries, citation-backed claims, news-aware responses, and queries requiring current information beyond model training data."
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
