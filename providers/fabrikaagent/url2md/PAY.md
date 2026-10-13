---
name: url2md
title: "url2md — URL to Markdown"
description: "Convert any public URL to clean Markdown (title, headings, links, tables preserved). x402 pay-per-call, 0.01 USDC on Base; no API key, no account."
use_case: "Use to read one known public web page into a model context as Markdown. Cheaper and simpler than running a headless browser; for JS-rendered SPAs that return an empty shell, use a render service instead."
category: data
service_url: https://x402-url2md.shablony-pro.workers.dev
openapi:
  path: openapi.json
---

`url2md` fetches a public http(s) URL and returns clean Markdown: page title as H1, headings, links, images, lists and tables preserved, boilerplate (scripts, styles, nav noise) stripped. Output is capped at 200k chars with an explicit truncation marker.

Payment: x402 v1 `exact` scheme, USDC on Base, $0.01 per call. An unpaid request returns HTTP 402 with `accepts[]`; retry with the `X-PAYMENT` header. Settlement is verified and executed against the Dexter facilitator (`https://x402.dexter.cash`); the payer never needs gas.

Free metadata endpoints (no payment): `GET /info`, `GET /.well-known/x402`, `GET /openapi.json`, `GET /health`.

## Spend-aware usage

- One call per page; the response already includes the title and source URL.
- Prefer this over general search tools when the URL is known — search first, then one `url2md` call per promising result.
- Pass `?url=` percent-encoded; only http/https targets are accepted.

## Errors

- `400` — missing or invalid `url` parameter.
- `502` — upstream fetch failed (timeout, non-HTML content-type it cannot handle, >2MB page).
