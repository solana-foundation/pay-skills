---
name: gtx1060-llama1b-node
title: "GTX 1060 Llama 3.2 1B Node"
description: "OpenAI-compatible chat completions served by Llama 3.2 1B on a single GTX 1060."
use_case: Cheap, fast text processing, listing, summarizing and utility tasks where a small model is enough and a flat per-request price beats a large hosted model.
category: ai_ml
service_url: https://almanac-pelt-lagging.ngrok-free.dev
openapi:
  path: openapi.json
---

OpenAI-compatible chat completions served by Llama 3.2 1B on a single GTX 1060. Paid per request ($0.00002 per call, flat regardless of length).

## Spend-aware usage

- Each request is billed once regardless of prompt length, so batch several items into one prompt instead of making many calls.
- 1B-parameter model with a 2048-token context: keep prompts short and tasks simple (classification, extraction, rewriting, short summaries).
- Not suited to long documents, complex reasoning or code generation; use a larger model for those rather than paying for retries here.
- Set `max_tokens` to bound response length and latency.
