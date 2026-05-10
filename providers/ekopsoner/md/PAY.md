---
name: md
title: "md-api"
description: "URL → clean article markdown for AI agents and RAG pipelines. SSRF-guarded fetcher refuses private/internal IPs after DNS resolution; 5MB cap, 10s timeout, max 5 redirects."
use_case: "Use when an agent needs the article body of a web page as clean markdown for ingestion, summarization, or RAG context. Returns title/author/date metadata on demand. Works on most blog/news/docs pages."
category: data
service_url: https://md-api.vercel.app
openapi:
  url: https://md-api.vercel.app/openapi.json
---

URL → clean article markdown for AI agents and RAG pipelines. Built on `trafilatura` (article extractor) with `markdownify` fallback for pages where article-detection misses. SSRF-guarded.

- `GET /md?url=https://example.com` — $0.002 — fetch + extract + return markdown
- Optional `?include_images=true` — keep image references in markdown
- Optional `?metadata=true` — include extracted metadata (title, author, date, sitename)

Multi-chain x402 payments: Base mainnet USDC and Solana mainnet USDC. Settles via Coinbase CDP facilitator.

## Spend-aware usage

- Cache `markdown` output by URL — content rarely changes; pay once.
- Skip `metadata=true` unless you actually need the title/author — saves a few hundred ms.
- For bulk RAG ingestion, cap concurrency to ~5 in-flight calls — the upstream pages, not us, are the bottleneck.
- For paywalled or JS-heavy pages, expect a smaller markdown body — trafilatura returns what it can without browser rendering.
