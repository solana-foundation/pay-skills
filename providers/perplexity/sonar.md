---
name: sonar
title: "Perplexity Sonar"
description: "AI-powered web search with real-time grounding via Perplexity Sonar"
category: ai_ml
service_url: https://pplx.x402.paysponge.com
endpoints:
  - method: POST
    path: "search"
    resource: search
    description: "Search the web with AI-powered real-time grounding"
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
