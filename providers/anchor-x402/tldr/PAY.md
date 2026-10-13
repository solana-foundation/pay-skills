---
name: tldr
title: "anchor-x402: TL;DR URL or text"
description: "Summarize a URL (fetches up to 500KB and strips HTML with BeautifulSoup) or pasted text (up to 200KB) into 3-5 concise bullets, each one sentence ≤25 words. Claude-powered. Provide exactly one of `text` or `url`."
use_case: "Use for research distillation, link-rot insurance, agent reading lists, condensing long articles before passing to another LLM, pre-flight summaries before linking to a teammate, and any 'too long, can you summarize' workflow."
category: ai_ml
service_url: https://api.anchor-x402.com
openapi:
  path: openapi.json
---

`POST /v1/tldr` — $0.01 USDC. Provide either `{ text }` or `{ url }`, not both.

- `url` path: fetches at most 500KB, follows redirects, strips HTML with BeautifulSoup. Rejects URLs with no extractable text. 10s timeout.
- `text` path: pass up to 200,000 chars; the service truncates to 15,000 before summarization.

Returns `{ summary_bullets: [<bullet>, ...], source_chars: <int> }`. 3-5 bullets, each one sentence, each ≤25 words. No preamble or interpretation — just the facts.

## Spend-aware usage

- Cheap LLM utility — pays for itself the moment you'd otherwise paste a 5000-word article into a prompt; you save more in input tokens than $0.01.
- Use the `url` path when you only have a link. Use `text` when content is dynamically generated or behind auth (you've already fetched it yourself).
- The URL fetch is server-side from anchor-x402's IP — useful for SSRF-free agent pipelines.
- For non-URL content like meeting notes or chat logs, paste into `text`.
