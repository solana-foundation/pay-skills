---
name: tools
title: "QRCode.Pub"
description: "Pay-per-call HTTP tools from QRCode.Pub: QR code image generation (PNG or SVG, size, error correction, colors), web page to clean Markdown with title, description and links, and page metadata (OpenGraph, Twitter card, canonical, icons, JSON-LD)."
use_case: "Use for generating a QR code image for a link or text, converting a public web page into clean Markdown for summarization or RAG, listing the links on a page, fetching OpenGraph or Twitter card previews, canonical URLs, favicons and JSON-LD data."
category: devtools
service_url: https://qrcode.pub
openapi:
  path: openapi.json
---

Three deterministic HTTP tools (no model calls) metered with x402 v2, `exact` scheme, USDC on Solana mainnet or Base. Every paid route is a plain `GET` with query parameters; the `402` challenge lists both networks in `accepts`, so pay with the Solana entry. A `4xx` answer (bad input, unreachable page, non-HTML content) is never charged.

- `GET /x402/qr?data=…` — $0.005 — QR code image (PNG, or SVG with `format=svg`); `size`, `ecc`, `margin`, `color`, `bgcolor` optional. Same parameters as the free, rate-limited `/api/qr`.
- `GET /x402/extract?url=…` — $0.01 — JSON: `title`, `description`, clean `markdown` (scripts, styles and nav chrome removed), `words`, `links[]`, `truncated`.
- `GET /x402/meta?url=…` — $0.005 — JSON: `title`, `description`, `canonical`, `lang`, `og`, `twitter`, `meta`, `icons[]`, `jsonld[]`.

Docs: https://qrcode.pub/qr-code-api#x402 · catalog: https://qrcode.pub/x402

## Spend-aware usage

- Use `/x402/meta` when only the title, description or social preview is needed; `/x402/extract` costs twice as much and returns the whole page.
- Fetch a page once and reuse the Markdown; the output is deterministic for the same URL.
- Pages are capped at 2 MB and 15 s; very large or slow pages may come back `truncated: true` or as an uncharged `422`.
- For QR codes, request the final size once (32–2000 px) instead of regenerating at several sizes; `format=svg` scales without re-requesting.
- Agents without a funded wallet can fall back to the free `/api/qr` (rate-limited, same parameters).
