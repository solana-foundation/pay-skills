---
name: web
title: "PageWire"
description: "Pay-per-call web reading for AI agents: any public web page as clean Markdown with title, description and links, page metadata (OpenGraph, Twitter card, canonical, icons, JSON-LD), and a page plus up to 4 same-site linked pages in one call."
use_case: "Use for reading a URL as Markdown for summarization or RAG, reading a short docs section or small site in one call, listing the links on a page, or fetching link-preview metadata such as OpenGraph and Twitter cards, canonical URLs, favicons and JSON-LD."
category: devtools
service_url: https://pagewire.dev
openapi:
  path: openapi.json
---

Three deterministic HTTP tools with no model calls, metered with x402 v2 (`exact` scheme) in USDC on Solana mainnet or Base. Every paid route is a plain `GET`. The `402` challenge lists both networks in `accepts`; pay with the Solana entry. A `4xx` answer (bad input, an unreachable page, non-text content) is never charged.

- `GET /x402/extract?url=…` ($0.01): JSON with `title`, `description`, clean `markdown`, `words`, `links[]` and `truncated`.
- `GET /x402/meta?url=…` ($0.005): JSON with `title`, `description`, `canonical`, `lang`, `og`, `twitter`, `meta`, `icons[]` and `jsonld[]`.
- `GET /x402/crawl?url=…&prefix=/docs/&limit=4` ($0.03): `pages[]`, the start page plus up to 4 same-host linked pages (only those under `prefix` if given), each with `url`, `title`, `markdown` and `words`.

Docs: https://pagewire.dev/ · catalog: https://pagewire.dev/x402 · MCP: https://pagewire.dev/mcp

## Spend-aware usage

- Use `/x402/meta` when only the title or social preview is needed. `/x402/extract` costs twice as much and returns the whole page.
- Use `/x402/crawl` instead of five `/x402/extract` calls when you need several pages from the same site: $0.03 instead of $0.05.
- Output is deterministic for the same URL, so fetch once and reuse it.
- Pages are capped at 2 MB and 15 s. Larger ones come back `truncated: true` or as an uncharged `422`.
