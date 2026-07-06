---
name: furigana
title: "Japan Furigana API"
description: "Generate kana/furigana readings for Japanese (JP) text and personal names, normalize text width and form, convert between hiragana/katakana/romaji, and classify whether a string is a name, place, or company. Backed by a name-reading dictionary."
use_case: "Use for Japanese furigana and kana readings, ruby annotation, reading personal names, hiragana/katakana/romaji conversion, text normalization, and classifying Japanese strings as names, places, or organizations."
category: ai_ml
service_url: https://furigana.agentic-jp.com
version: v1
openapi:
  path: openapi.json
---

Pay-per-request kana/furigana readings and Japanese text processing for AI
agents — ruby annotation, name reading, and script conversion without a
local Japanese tokenizer.

## Spend-aware usage

- Use `POST /furigana` ($0.001) for general text; use `POST /name-readings`
  ($0.005) only for personal names, where the dictionary-backed reading
  matters and a plain tokenizer is unreliable.
- Use `POST /convert` ($0.001) for hiragana/katakana/romaji conversion and
  `POST /normalize` ($0.001) for width/form cleanup — both are cheap.
- Use `POST /batch` for bulk work; it bills per item at $0.0008 (20% discount).
  Batch up to 100 items per request rather than looping single calls.
