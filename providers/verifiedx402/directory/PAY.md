---
name: directory
title: "Verified x402"
description: "Verified directory of paid x402 APIs at verifiedx402.com. Free /search and /check return listing URLs, prices, networks, and wallets. Paid /recommend returns a ranked shortlist of endpoints whose live 402 challenge was verified in the last 72 hours."
use_case: "Use for choosing which x402 API to call, finding verified weather, news, search, or inference endpoints, checking whether a listed URL is live and priced as advertised, and getting a ranked shortlist before paying the chosen API yourself."
category: search
service_url: https://verifiedx402.com
openapi:
  path: openapi.json
---

Verified x402 is a directory of paid x402 APIs at `https://verifiedx402.com`.
It tells an agent which listed endpoint currently looks live and priced as
advertised for a task. It does not call the recommended API for you; you pay
that API yourself.

A listing is marked verified only when a check in the last 72 hours confirmed
a valid HTTP 402 payment challenge whose price, network, asset, and wallet
match the listing. That is not a promise the next call will succeed. The rules
are public at `https://verifiedx402.com/methodology`.

## Endpoints

Free (no payment header):

- `GET /search` — rate-limited catalog search. Add `verified=1` to limit
  results to listings verified in the last 72 hours. Returns listing URLs,
  advertised prices, networks, and wallets.
- `POST /check` — probe one public URL against a live x402 payment challenge.
  Body: `{"url":"https://..."}`.
- `GET /health`, `GET /methodology`, `GET /llms.txt`, and
  `GET /openapi.json` — liveness, scoring rules, agent instructions, and this
  API's OpenAPI document.

Paid ($0.005 USDC per request, x402 `exact`):

- `GET /recommend?task={task}&limit={n}` and `POST /recommend` with the same
  fields as JSON. `task` is required. `limit` defaults to 5 and maxes out at
  10. Optional filters: `category`, `network` (CAIP-2, for example
  `eip155:8453` or `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`), and
  `max_price`. The response is a ranked shortlist of verified listings; only
  those listings are recommended.

The live 402 challenge advertises both Solana mainnet USDC
(`solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp`, mint
`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`, payTo
`6Pt95picj6WLazjZqT6ofhPx5T7M6fD44HyuKqREmzQV`) and Base USDC
(`eip155:8453`, `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`, payTo
`0xd1bac498a13228df83708c6ab2ff47561c915cc3`). Amount is `5000` atomic units
($0.005). Challenges use x402 v2: decode the `PAYMENT-REQUIRED` header
(base64 JSON) and retry with `PAYMENT-SIGNATURE`. Clients that only send the
v1 `X-PAYMENT` header will not work.

## MCP

`POST https://verifiedx402.com/mcp` is also listed in the official MCP
Registry as `com.verifiedx402/directory` and on npm as `@verifiedx402/mcp`.
The `search` and `check_endpoint` tools are free. The `recommend` tool is the
same $0.005 paid shortlist; send the payment in
`params._meta["x402/payment"]`. The HTTP `POST /mcp` route itself is not a
flat paid endpoint — only `tools/call` of `recommend` returns 402.

## Spend-aware usage

- Prefer free `GET /search?verified=1` when a keyword lookup is enough, and
  free `POST /check` when you already have a URL to verify.
- Call `/recommend` once per task. Reuse the shortlist instead of repeating
  the $0.005 request.
- Keep `limit` small. Default 5 is usually enough; the maximum is 10.
- Budget separately for the chosen API. This directory's fee does not include
  a call to the recommended endpoint.
- Use free `GET /health` for liveness and the current recommend price.

The committed OpenAPI document is a catalog snapshot of the live spec at
`https://verifiedx402.com/openapi.json`. It includes the agent-facing HTTP
routes (`/health`, `/search`, `/check`, and `/recommend`) and makes these
reviewable adjustments: explicit `security: []` on free routes (the live
document only clears the root x402 scheme on `/health` and `/search`);
verb-first operation summaries within the 24–63 character window the catalog
requires; parameter and required-field descriptions; and request examples so
probes send a real `task` or URL. MCP, methodology, and other docs routes stay
in PAY.md because they are not simple payment-gated REST operations.
