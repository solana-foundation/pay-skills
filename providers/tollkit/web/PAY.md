---
name: web
title: "Tollkit Web"
description: "Web pages as data: read one page or five at once as clean text from a real browser, take screenshots, run Google web search with date, site and news filters, search and read the top pages in one call, PDF to text, and summaries."
use_case: "Use for reading a URL as text, scraping JavaScript-heavy pages, web search with result snippets, research that needs the full text of top results, page screenshots, PDF text extraction, and short page summaries."
category: search
service_url: https://web.tollkit.dev
openapi:
  path: openapi.json
---

Tollkit Web reads public web pages for agents. Pages are rendered in a real
headless browser before the text is taken, so JavaScript-built pages work.
Every endpoint is a POST with a JSON body and is paid per call over x402 in
USDC on Solana or Base. No account or API key. A failed call is not charged.

| Endpoint | Body | Price |
|---|---|---|
| `POST /read` | `{"url"}` | $0.002 |
| `POST /screenshot` | `{"url"}` | $0.003 |
| `POST /search` | `{"query", "num"?, "country"?, "freshness"?, "include_domains"?, "exclude_domains"?, "type"?}` | $0.003 |
| `POST /search/read` | `{"query", "num"?, plus the same filters}` | $0.005 |
| `POST /pdf` | `{"url"}` | $0.005 |
| `POST /summarize` | `{"text", "max_words"?}` | $0.005 |
| `POST /web/brief` | `{"url", "max_words"?}` | $0.007 |
| `POST /web/pages` | `{"urls": [up to 5]}` | $0.008 |

The same tools are available as a remote MCP server at https://api.tollkit.dev/mcp.

## Spend-aware usage

- Use `/read` ($0.002) when you already know the URL; use `/search` only for discovery.
- `/search/read` returns results and the full text of the top 1-3 pages for one payment; it is cheaper than `/search` plus several `/read` calls.
- `/web/brief` reads and summarizes in one call; do not chain `/read` and `/summarize` for the same page.
- Scanned PDFs without a text layer are refused at no charge, so a failed `/pdf` call costs nothing.
- Send an `Idempotency-Key` header when retrying: a repeat within 10 minutes returns the paid answer again without a second charge.
