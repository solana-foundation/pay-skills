---
name: summarize
title: "PageDigest"
description: "PageDigest fetches any public web page URL and returns a concise extractive summary as JSON, with the page title and description, headings, key points, and structured entities such as named phrases, dates, amounts, and outbound links."
use_case: "Use when an agent needs the gist of a web page without fetching and parsing full HTML itself: summarizing articles, documentation, and blog posts, extracting key points and entities from a URL, or pre-digesting pages before deeper reading."
category: ai_ml
service_url: https://4023-agqz5x3ybel4f5yrdnvpaqbzgi.instabox.tech
openapi:
  path: openapi.json
---

PageDigest is a pay-per-call web page summarizer and structured extractor for
agents. Send a public http(s) URL; PageDigest fetches the page and returns
JSON with an extractive summary (up to 10 sentences), the page title and
description, headings, key points, and structured entities (named phrases,
dates, amounts, and outbound links).

- `POST /summarize` — summarize and extract one web page per call.

Payment is via the x402 protocol (`exact` scheme) in native USDC on Solana
mainnet, verified and settled through the PayAI facilitator — no API key, no
signup. Price is $0.01 per call. Sampling calls (requests marked
`sampling: true`, per the x402 sampling convention) are served free.

## Spend-aware usage

- One call per URL; cache the JSON instead of re-calling for the same page.
- Use `maxSentences` to keep summaries (and downstream token spend) small.
