---
name: agent-data-tools
title: "Agent Data Tools"
description: "Solana-payable agent API for URL and phishing checks, redirect chains and domain trust, plus web/PDF/office extraction, invoice fields, EU company lookups, Solana and EVM account reads, token prices and FX."
use_case: "Use for phishing and suspicious-link checks before opening or paying, redirect and domain trust checks, merchant legitimacy, web/PDF reading, invoice extraction, EU VAT, company, wallet, token-price and FX lookups."
category: security
service_url: https://agent-data-tools.revmesh2074.workers.dev
openapi:
  path: openapi.json
---

Agent Data Tools is a pay-per-call HTTP API (also served as an MCP server at
`/mcp`) run by SpellzCode. Every listed endpoint is an HTTP GET with query
parameters and returns JSON. An unpaid request answers `402` with x402 v2
terms in `PAYMENT-REQUIRED` (`exact` scheme, USDC on Solana mainnet, Base,
Polygon or Arbitrum) and MPP challenges in `WWW-Authenticate`. Failed calls
(4xx/5xx) are not charged.

This provider listing covers a focused subset of 25 endpoints from the
production OpenAPI (snapshot of 1.258.0, 19 Nov 2026); the full service has
737 tools and its complete OpenAPI is at `https://glyphcall.com/openapi.json`.
Source (MIT): https://github.com/Nutshell2000/agent-data-tools

| Group | Endpoints | Price per call |
|---|---|---|
| URL and phishing safety | `/phishing/check`, `/pack/url-safety`, `/url/safety-check` | $0.002 to $0.01 |
| Merchant trust | `/merchant/trust` | $0.02 |
| Web and documents | `/extract`, `/extract/rendered`, `/pdf/text`, `/document/text` | $0.002 to $0.01 |
| Invoice and receipt fields | `/document/extract` | $0.03 |
| VAT and company registers | `/vat/validate`, `/se/company`, `/no/company`, `/fi/company`, `/fr/company`, `/lei/lookup`, `/company` | $0.01 |
| Chain reads | `/base/balance`, `/base/token-balance`, `/eth/balance`, `/eth/token-balance`, `/eth/tx`, `/solana/balance` | $0.002 to $0.01 |
| Prices | `/price/token`, `/price/tokens`, `/fx` | $0.002 |

Exact prices are in each 402 answer and in `x-payment-info` in the spec.
Per-tool reliability for the last 7 days is public at
`https://agent-data-tools.revmesh2074.workers.dev/status`.

## Spend-aware usage

- Use `/phishing/check` ($0.002) when you only need to check a hostname against
  the public phishing lists without visiting it.
- Use `/pack/url-safety` or `/url/safety-check` ($0.01) when you need the full
  redirect chain, domain age, phishing-list results and security signals.
- Use `/merchant/trust` ($0.02) for a shop's domain-level trust score.
  URL-safety and merchant-trust signals support review; they do not guarantee
  that a site or seller is safe.
- Add `sample=1` to any endpoint for a free static example of its output.
- Use `/extract` ($0.002) for static pages; use `/extract/rendered` ($0.01)
  only when a page needs JavaScript to show its content.
- For PDFs, set `pages` and `maxChars` to the part you need instead of
  reading the whole file.
- Use `/document/text` ($0.005) when plain text is enough; `/document/extract`
  ($0.03) runs a model to return requested fields.
- Use `/price/tokens` for up to 20 tokens in one call instead of repeated
  `/price/token` calls.
