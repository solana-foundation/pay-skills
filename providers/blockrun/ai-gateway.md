---
name: ai-gateway
title: "BlockRun"
description: "AI service marketplace — LLMs, image/video generation, code sandboxes, and social data via x402"
category: ai_ml
service_url: https://blockrun.ai
endpoints:
  - method: POST
    path: "api/v1/chat/completions"
    resource: inference
    description: "Chat completions with 33+ models (GPT-4o, Claude, Gemini, Grok, Llama)"
  - method: POST
    path: "api/v1/images/generations"
    resource: generation
    description: "Generate images with multiple models"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/v1/search"
    resource: search
    description: "Real-time web search via Grok"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.025
  - method: POST
    path: "api/v1/modal/sandbox/create"
    resource: sandbox
    description: "Create an isolated code execution sandbox"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/v1/modal/sandbox/exec"
    resource: sandbox
    description: "Execute code in a sandbox"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: "api/v1/modal/sandbox/status"
    resource: sandbox
    description: "Check sandbox status"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: "api/v1/modal/sandbox/terminate"
    resource: sandbox
    description: "Terminate a sandbox"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: "api/v1/x/users/info"
    resource: twitter
    description: "Get X/Twitter user profile info"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.002
  - method: POST
    path: "api/v1/x/users/tweets"
    resource: twitter
    description: "Get a user's tweets"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.032
  - method: POST
    path: "api/v1/x/search"
    resource: twitter
    description: "Advanced tweet search"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.032
  - method: POST
    path: "api/v1/x/trending"
    resource: twitter
    description: "Get trending topics"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.002
---

AI service marketplace where agents discover, route, and pay for models,
data APIs, and secure runtimes. Provider cost plus 5% margin, no subscriptions.

Built on x402, settled in USDC, running on Base and Solana.
