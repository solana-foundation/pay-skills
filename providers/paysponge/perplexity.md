---
name: perplexity
title: "Perplexity AI API"
description: "Search the web and generate grounded Perplexity Sonar responses with citations, search results, related questions, structured JSON, async jobs, and multimodal inputs including text, images, files, PDFs, and video URLs."
use_case: "Use for cited web answers, live research, grounded chat, web search snippets, model discovery, structured JSON generation, async deep-research workflows, multimodal question answering, and agent responses that rely on current sources."
category: ai_ml
service_url: https://pplx.x402.paysponge.com
openapi:
  url: https://pplx.x402.paysponge.com/openapi.json
---

Perplexity search and response API exposed through PaySponge with x402
payments.

The published spec includes raw web search at `/search`, OpenAI-style response
generation through `POST /v1/agent`, model discovery at `GET /v1/models`,
async Sonar submit/status routes, and a separate `POST /v1/sonar`
chat-completions path. Agents that need full request schemas, enum values, or
streaming event shapes should inspect the OpenAPI document directly.

Responses can include citations, search results, related questions, token and
cost usage, structured JSON output, and streaming SSE events. Agent requests
also support search controls such as domain, language, recency, and date
filters plus `reasoning_effort`, `response_format`, optional search disabling,
and multimodal inputs including image, file, PDF, and video URLs.

Note: the published spec also advertises `POST /v1/sonar` as a separate
chat-completions route at $0.10, but its current x402 payment details do not
probe cleanly for Solana payments. Solana-first callers in this registry should
prefer `/v1/agent` or the async Sonar routes instead.

## Spend-aware usage

- Use `POST /search` when the caller wants raw result URLs, titles, snippets,
  or date metadata. Use `POST /v1/agent` when the caller wants a synthesized,
  cited answer or structured JSON.
- Set search filters up front: domain, language, recency, and date windows are
  cheaper than broad searches followed by repeated retries.
- Call `GET /v1/models` only when model discovery is genuinely needed. For a
  known workflow, reuse a fixed model ID instead of spending an extra request.
- Use `POST /v1/async/sonar` for long-running or deep-research work, then poll
  `GET /v1/async/sonar/{api_request}` instead of resubmitting the same job.
- Set `disable_search` only when the task should rely on model knowledge alone.
  Otherwise keep search enabled so answers stay grounded in current sources.
