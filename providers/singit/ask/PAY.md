---
name: ask
title: "SingIt Ask - pay-per-answer LLM, search, image and speech API"
description: "Accountless OpenAI-compatible chat completions for Claude, GPT, Gemini, Grok, DeepSeek, Kimi, Qwen and GLM, one URL per model, plus Exa web search, page contents and cited answers, paid per request with x402 in USDC on Solana."
use_case: "Use for pay-per-call LLM answers in the OpenAI request shape, a fixed model at its own URL, or cited Exa web search and page contents, when an agent has no API key, account, subscription or prepaid credit."
category: ai_ml
service_url: https://ask.singitai.app
openapi:
  path: openapi.json
---

SingIt Ask answers model and web-search requests for x402 payments. An unpaid
request returns a 402 challenge with offers in USDC on Solana (and on Base):
`upto` charges the actual usage up to a quoted ceiling, `exact` charges the
ceiling flat for buyers that only sign that scheme.

- `POST /v1/chat/completions` takes the familiar OpenAI `model` and `messages`
  body for any listed model.
- `POST /v1/chat/{model}` (for example `/v1/chat/claude-opus-5.5`) is the same
  request with the model fixed by the URL.
- `POST /v1/exa/search`, `/v1/exa/contents` and `/v1/exa/answer` are Exa web
  search, page contents and cited answers.

- `POST /v1/messages` and `POST /v1/responses` take Anthropic Messages and OpenAI
  Responses requests for any listed model.
- `POST /v1/images/generations` and `POST /v1/audio/speech` are image generation
  and text to speech; their models are listed at `GET /v1/images/models` and
  `GET /v1/audio/models`.

The live spec is https://ask.singitai.app/openapi.json.

## Spend-aware usage

- Read `GET https://ask.singitai.app/pricing.json` first and pick the least
  expensive model that can do the task; prices are quoted per request.
- Set the smallest useful `max_tokens`: the ceiling in the 402 challenge grows
  with it, and `upto` only charges what the answer actually used.
- Prefer `upto` when the client supports it; use `exact` only when it does not.
- Retry only when the previous request failed before an answer was returned.
