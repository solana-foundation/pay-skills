---
name: api
title: Arkham Intelligence API
description: Wallet balances, entity attribution, transfer and exchange-flow tracing, token holders, and Polymarket analytics across 10+ chains — returning labeled entities, portfolio breakdowns, transfer records, and live market data. Paid per request in USDC.
use_case: Use for identifying who owns a wallet, tracing transfers and exchange flows, checking balances and portfolios, breaking down token holders, and pulling Polymarket market data on demand.
category: finance
service_url: https://api.arkm.com/x402
openapi:
  path: openapi.json
---

Arkham sells its blockchain-intelligence API per request over x402 v2 — no
account, no API key. Every paid endpoint returns HTTP 402 with a
`payment-required` challenge; pay in USDC on **Solana mainnet** (fee payer
covered — no SOL needed) or on Base (EIP-3009, gasless for the agent), retry
the same request, and read the settlement receipt from `PAYMENT-RESPONSE`.
Failed requests are never charged: settlement happens only after a successful
upstream response.

Coverage mirrors the classic Arkham API's public read catalog (~90 endpoints):
entity and address intelligence (who owns a wallet, labels, predictions),
balances and portfolios, transfers and swaps, counterparties and money flows,
token holders and market data, and Polymarket markets. Responses are identical
to the subscription API — same data, different payment rail. Agent
instructions live at [/skill.md](https://api.arkm.com/x402/skill.md); prices
are embedded per operation in the OpenAPI (`x-payment-info`).

## Spend-aware usage

- Orient for free first: `chains`, `networks/status`, and `arkm/circulating`
  cost nothing (they ask for a Sign-In-With-X wallet signature instead of
  payment).
- Prices are `credits × $0.20`. Most lookups are a flat $0.20; premium
  intelligence endpoints cost more — check `x-payment-info` before calling.
- Per-row endpoints (transfers and swaps) price by the `limit` you request —
  the default is 20, so **always pass the smallest `limit` that covers your
  need**: `{"limit": 2}` costs a tenth of the default.
- Prefer `intelligence/address` ($0.20) for a single wallet before reaching
  for batch or enriched variants.
- Heavy endpoints are rate-limited to 1 request/second per wallet; back off on
  429 instead of retrying hot.
