---
name: langdetect
title: "langdetect-api"
description: "Language detection across 75 languages via Lingua's statistical models. Returns ISO 639-1 code, language name, confidence score, and ranked top-N candidates. Multi-language span detection via separate endpoint."
use_case: "Use when an agent needs to identify the dominant language of a text snippet (routing, content moderation, multi-lingual workflows) or detect language spans inside mixed-text content. Sub-millisecond per call."
category: ai_ml
service_url: https://langdetect-api.vercel.app
openapi:
  url: https://langdetect-api.vercel.app/openapi.json
---

Language detection across 75 languages via Lingua statistical models (low-accuracy mode for speed; high accuracy is overkill for most agent routing decisions).

- `GET /detect?text=...` — $0.001 — short text via query string
- `POST /detect` (JSON body) — $0.001 — longer text
- `POST /detect-multi` (JSON body) — $0.001 — detect language spans in mixed-language text

Returns dominant language ISO 639-1 + confidence + ranked top-N candidates. Multi-chain x402 payments: Base mainnet USDC and Solana mainnet USDC.

## Spend-aware usage

- For very short text (< 10 chars), confidence is unreliable regardless of detector — don't pay if the text is one or two words.
- Cache results by exact text hash — language doesn't change.
- For high-throughput pipelines, batch by sending paragraphs not single sentences — same price, more signal.
- Use `top_n=1` if you only care about the dominant language — slightly smaller response.
