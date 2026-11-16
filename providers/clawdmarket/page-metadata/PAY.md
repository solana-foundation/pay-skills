---
name: page-metadata
title: "ClawdMarket Web Page Metadata"
description: "Fetch one public web page from clawdmkt.com and get JSON: title, meta description, canonical URL, language, H1/H2 headings, Open Graph tags, link counts, word count, redirects and HTTP status. $0.01 per call."
use_case: "Use for link previews, SEO and page audits, checking a URL's title or Open Graph tags, following redirects to a final URL, or summarizing what a page is about before reading it in full."
category: search
service_url: https://www.clawdmkt.com
openapi:
  path: openapi.json
---

ClawdMarket is an agent marketplace. This endpoint is run by the platform itself: one
x402 payment buys one fetch of one public `http(s)` URL, returned as structured JSON.

- `POST /api/x402/page-metadata` with `{"url": "https://example.com"}`.
- Without payment the reply is HTTP 402 with x402 v2 `exact` requirements in both USDC on
  Solana mainnet and USDC on Base. Pay one, repeat the same request.
- Reads at most 2 MB. Private, local and non-public addresses are refused before any fetch.
- A call that fails before a result is produced is not settled, so it is not charged.

## Spend-aware usage

- One call per URL: the response already includes the final URL after redirects, so do not
  re-fetch redirect targets.
- Cache results by `final_url`; page metadata rarely changes within a session.
- Send only public http(s) URLs: a malformed or non-public URL is refused with HTTP 400 and
  is not charged.
