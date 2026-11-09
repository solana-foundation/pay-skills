---
name: api
title: "Horizon Pulse"
description: "Horizon Pulse pay-per-call HTTP APIs over x402 v2, 18 routes payable in USDC on Solana (as of 2026-11-09): web search, page fetch to markdown, HTTP proxy, page extract, PDF to text, x402 endpoint checks and page change watch. No API key."
use_case: "Use for live web research with sources, reading pages or PDFs as text, scraping page fields, calling public APIs, checking x402 endpoints, or watching a public page for changes."
category: search
service_url: https://horizonpulse.dev
openapi:
  path: openapi.json
---

Horizon Pulse: x402 v2 pay-per-call HTTP APIs, no account or API key. **18 routes** payable in USDC on Solana mainnet (as of 2026-11-09); the unpaid 402 on these routes also offers other rails. Hosted MCP at https://horizonpulse.dev/mcp.

- Web: `GET /api/search` (search with page contents), `GET /api/fetch` (page to
  markdown), `GET|POST /api/extract` (title, links, JSON-LD, CSS-selector
  fields), `GET|POST /api/http` (raw response from a public URL),
  `GET /api/pdf` (PDF text layer).
- Developer: `GET /api/x402-check` (one unpaid probe of an x402 endpoint,
  decoded and checked; never pays), `GET /api/x402-check/deep` (the full
  x402-check report plus live checks: TLS, security headers, CORS, payTo vs
  the payee's own published addresses, lookalike payTo detection, listing
  drift; never pays or signs).
- Monitoring: `GET /api/watch` (whether a public web page or endpoint changed
  since your last check; pass back the returned state token as `since`; a
  short diff of added lines; a changed:false answer is charged).
- Tokenized stocks: `GET /api/tokenized-stock` (status check of the Coinbase
  tokenized stocks on Base: paused flags, supply, supply cap, multiplier,
  issuer; on-chain token state only, no price; not investment advice).
- Names: `GET /api/name/resolve` (ENS and Basenames, name to address or
  address to primary name, read on-chain).
- Food: `GET|POST /api/grocery/normalize` (recipe ingredient lines to a
  normalized, scaled list; deterministic, no prices);
  `GET|POST /api/grocery/ingredient` (per-100 g nutrients from a USDA
  FoodData Central snapshot or Open Food Facts by barcode; up to 10 items
  per POST; no prices).
- Market helpers: `GET /api/market/search` and `GET /api/market/quote`
  (checked seller quotes with evidence fields).
- Yield / portfolio / gas: `GET /api/yield` (DefiLlama pools),
  `GET /api/portfolio` (holdings of one EVM address on Base and Ethereum),
  `GET /api/gas` (Base and Ethereum fees).
- Discourse: `GET /api/discourse/split` (how public Hacker News and Bluesky
  posts split on a question; a sample, not a poll).

Payment: every paid operation returns an x402 v2 402 challenge offering USDC
on Solana mainnet (`exact`, payTo BjY98A6dS3GGLZdz2zHy8wK7XAwnQgNhCc66mfmBTRPz)
alongside Base. No account or API key.

Market data outputs are descriptive, not advice.
Most errors are not charged; exceptions are listed in https://horizonpulse.dev/llms.txt.
Sample responses for fixed inputs: `GET /api/demo/{route}`.

## Spend-aware usage

- Try `GET /api/demo/{route}` first to see a response shape before paying.
- `search`: keep `n` (1-5 pages) as small as the task allows.
- `fetch` and `pdf` cover most reading tasks; use `http` only when the raw
  status, headers or body are needed.
- Don't poll paid routes unless the user approved repeated paid calls.
