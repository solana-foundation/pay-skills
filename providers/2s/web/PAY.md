---
name: web
title: "2s Web"
description: "Developer and web utilities: DNS and WHOIS, TLS certificate info, URL cleaning/rendering/unfurl, HTML-to-markdown, hashing, barcode generation, image compression, unit conversion, npm/PyPI lookups, phone normalization, and bank routing."
use_case: "Use for DNS/WHOIS, TLS and URL inspection, HTML-to-markdown, hashing, unit conversion, package-registry lookups, and phone or routing-number checks."
category: devtools
service_url: https://2s.io
openapi:
  path: openapi.json
---

Part of 2s — a unified, agent-native JSON API. Pay per call in USDC on Solana (or Base) via x402; no accounts, no API keys. Add `?trial=1` (or header `X-2s-Trial: 1`) for one free real call per endpoint per hour.

## Spend-aware usage

- Prefer narrow lookups (by id/code) over broad searches; reuse identifiers across calls.
- Cap result `limit` to the smallest count that answers the task.
