---
name: agent-data-tools
title: "Agent Data Tools"
description: "Pay-per-call data and document tools for agents: web, PDF and office files to text, invoice field extraction, EU VAT and company registers, LEI, EVM and Solana chain reads, token prices and FX rates, all returning JSON."
use_case: "Use for reading web pages, PDFs, Word, Excel or PowerPoint files as text, invoice or receipt fields as JSON, EU VAT number checks, Swedish, Norwegian, Finnish or French company lookups, LEI, wallet balances, transactions, token prices and FX."
category: data
service_url: https://agent-data-tools.revmesh2074.workers.dev
openapi:
  path: openapi.json
---

Agent Data Tools is a pay-per-call HTTP API (also served as an MCP server at
`/mcp`) run by SpellzCode. Every tool is a `GET` with query parameters that
returns JSON. An unpaid request answers `402` with x402 v2 terms in the
`PAYMENT-REQUIRED` header (`exact` scheme, USDC on Solana mainnet, Base,
Polygon or Arbitrum) and MPP challenges in `WWW-Authenticate`. Failed calls
(4xx/5xx) are not charged.

This listing covers a focused subset of 21 endpoints. The committed
`openapi.json` is the live document at
`https://agent-data-tools.revmesh2074.workers.dev/openapi.json`, filtered to
these paths and the components they reference; the full service has about
700 tools. Source (MIT): https://github.com/Nutshell2000/agent-data-tools

| Group | Endpoints | Price per call |
|---|---|---|
| Web and documents | `/extract`, `/extract/rendered`, `/pdf/text`, `/document/text` | $0.002 to $0.01 |
| Invoice and receipt fields | `/document/extract` | $0.03 |
| VAT and company registers | `/vat/validate`, `/se/company`, `/no/company`, `/fi/company`, `/fr/company`, `/lei/lookup`, `/company` | $0.01 |
| Chain reads | `/base/balance`, `/base/token-balance`, `/eth/balance`, `/eth/token-balance`, `/eth/tx`, `/solana/balance` | $0.002 to $0.01 |
| Prices | `/price/token`, `/price/tokens`, `/fx` | $0.002 |

Exact prices are in each 402 answer and in `x-payment-info` in the spec.
Per-tool reliability for the last 7 days is public at
`https://agent-data-tools.revmesh2074.workers.dev/status`.

## Spend-aware usage

- Add `sample=1` to any endpoint for a free static example of its output
  before paying for a real call.
- Use `/extract` ($0.002) for static pages; reach for `/extract/rendered`
  ($0.01) only when a page needs JavaScript to show its content.
- For PDFs, set `pages` and `maxChars` to the part you need instead of
  reading the whole file.
- Use `/document/text` ($0.005) when plain text is enough; `/document/extract`
  ($0.03) runs a model to return named fields and costs more.
- Use `/price/tokens` for up to 20 tokens in one call instead of repeated
  `/price/token` calls.
- Add `only=<key,key>` to keep just the result fields you need.
