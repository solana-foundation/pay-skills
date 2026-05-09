---
name: name-resolve
title: "anchor-x402: name resolver"
description: "Cross-chain name service resolver. Pass any `.eth` (ENS) or `.sol` (Bonfida / Solana Name Service) name and get back the on-chain address, the chain, and a TTL hint — for $0.001 USDC per call. Other TLDs return a graceful unsupported notice."
use_case: "Use for agent payment routing, vendor onboarding, cross-chain address book lookups, AML pre-flight name normalization, wallet-display UX, contact-resolution before transfers, or any flow that hands a human-typed `.eth`/`.sol` name to a paying agent."
category: identity
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

`GET /v1/resolve/name?name=<value>` — pay $0.001 USDC, get back a
canonical address for any supported name. The response carries:

- `name` — the input (echoed verbatim)
- `addresses[]` — `{chain, address, ttl_hint_seconds}` per resolved chain
- `resolved_at` — Unix epoch seconds
- `registry_used` — `"ENS"`, `"SNS"`, or `null` for unsupported TLDs
- `supported_tlds` — currently `[".eth", ".sol"]`
- `notes` — populated when a name doesn't resolve, when a TLD isn't
  supported, or when the answer was served from the in-process cache

Names that fail to resolve still return HTTP 200 with an empty
`addresses` list and an explanatory `notes` field, so callers can
distinguish a hard failure from "name doesn't exist".

## Spend-aware usage

- Resolutions are memoized in-process for 1 hour. The first call to a
  name pays the full price; immediate repeats served from cache cost
  the same — clients should layer their own cache for high-frequency
  agent loops.
- Use `ttl_hint_seconds` from the response to size client-side caches.
  ENS records change rarely; 1 hour is a safe default.
- Always paired with `/v1/screen` for institutional payouts: resolve
  `vendor.eth` -> address, then screen the address for sanctions in
  the same workflow for $0.0015 total.
- Unsupported TLDs (`.crypto`, `.x`, `.nft`, `.blockchain`, etc.) return
  a typed `notes` field listing what *is* supported — don't pay
  twice on the same unsupported name. Inspect `registry_used == null`
  before retrying.
