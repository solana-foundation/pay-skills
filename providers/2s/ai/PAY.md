---
name: ai
title: "2s Ai"
description: "AI and search endpoints: text summarization, translation, structured extraction, image description, audio transcription, plus web and news search."
use_case: "Use for summarizing or translating text, extracting structured data, transcribing audio, describing images, and searching the web or news."
category: ai_ml
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
