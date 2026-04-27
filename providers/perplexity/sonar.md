---
name: sonar
title: "Perplexity Sonar"
description: "Ask Perplexity Sonar for real-time web-grounded answers with sources. Returns cited responses, inline references, current information, research synthesis, fact-checking support, and answer generation beyond static model training data."
use_case: "Use for up-to-date sourced answers, current events, fact-checking, research questions, market or company research, web-grounded summaries, citation-backed claims, news-aware responses, and queries requiring current information beyond model training data."
category: ai_ml
service_url: https://pplx.x402.paysponge.com
openapi_url: https://pplx.x402.paysponge.com/openapi.json
endpoints:
  - method: POST
    path: "search"
    resource: search
    description: "Search the web using Perplexity Sonar AI, returning grounded answers with inline citations and source URLs"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "v1/agent"
    resource: agent
    description: "Generate an agent-style response with tool-use and chained reasoning over web-grounded sources"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "v1/sonar"
    resource: chat
    description: "Create a synchronous chat completion with the Sonar model and web-grounded answers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.10
  - method: POST
    path: "v1/async/sonar"
    resource: chat
    description: "Submit an async chat completion job and receive an api_request id for later retrieval"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "v1/async/sonar/{api_request}"
    resource: chat
    description: "Retrieve the result of a previously submitted async Sonar chat completion job by id"
  - method: GET
    path: "v1/models"
    resource: meta
    description: "List the available Perplexity Sonar model identifiers and capability flags"
---

Perplexity Sonar AI-powered web search with real-time grounding. Returns
sourced, cited answers — not just links. Supports synchronous chat (`v1/sonar`),
async chat (`v1/async/sonar` then poll the `{api_request}` GET), an agent
endpoint, and a one-shot `search` endpoint.

> **Network compatibility:** the live 402 challenge advertises Base USDC only
> — Solana payment was not in the accepted list at audit time. Confirm with
> `pay skills probe` before publishing.
