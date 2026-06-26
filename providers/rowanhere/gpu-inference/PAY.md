---
name: gpu-inference
title: "Qwen2.5 32B GPU Inference"
description: "High-performance Qwen2.5 32B language model served from a dedicated RTX 4090 GPU. Fast inference for chat and text generation tasks."
use_case: "Use for chat completions and text generation requiring a large 32B parameter model with fast GPU inference."
category: ai_ml
service_url: https://rowanhere.duckdns.org
endpoints:
  - method: POST
    path: /api/chat
    description: Chat completion with Qwen2.5 32B. Charged per request.
  - method: POST
    path: /api/generate
    description: Text generation with Qwen2.5 32B. Charged per request.
---

## Qwen2.5 32B GPU Inference

RTX 4090-powered inference for the Qwen2.5 32B model via Ollama. Per-request USDC payments on Solana mainnet, no API key required.

### Example

```bash
pay curl -X POST https://rowanhere.duckdns.org/api/chat \
  -H "Content-Type: application/json" \
  -d '{"model":"qwen2.5:32b","messages":[{"role":"user","content":"Hello"}]}'
```

### Pricing

$0.001 per request, paid in USDC on Solana mainnet.
