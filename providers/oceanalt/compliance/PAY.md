---
name: compliance
title: "OceanAlt"
description: "Pre-payment compliance decisions for agent payments: allow, review or decline a payee address, with sanctions, scam and hack list evidence, list dates and a signed receipt. Also USDT fund-source tracing and batch address screening."
use_case: "Use before an agent pays an unfamiliar wallet: sanctions or OFAC checks, scam and drainer address checks, payee risk review, USDT fund-source tracing, or screening a list of payout addresses before a batch payout."
category: security
service_url: https://oceanalt.com
version: v1
openapi:
  path: openapi.json
---

OceanAlt answers one question before money moves: should this payment to this address go ahead? Each answer is `allow`, `review` or `decline`, with the evidence behind it (which list matched, that list's source and date) so the caller can check it independently.

## Endpoints

- `POST /api/x402/decision` ($0.002): decision on one payee address. Body: `{ "to": "<address>", "network": "base" }`.
- `GET /api/x402/trace?addr=<address>` ($0.01): TRON addresses only. Follows the largest USDT inflow path upstream, up to three hops, and reports frozen, sanctioned, mixer or scam addresses on that path. This is a main-path trace, not an exhaustive graph search.
- `POST /api/x402/batch` ($0.01): screen up to 25 addresses in one call. Body: `{ "addresses": ["..."] }`.
- `POST /api/x402/credits` ($0.10): buys 100 decision calls, valid 365 days. The response returns a token once; send it as `X-OceanAlt-Credit` on later decision calls instead of paying each time.

Payment: x402, USDC on Solana mainnet or Base.

## Spend-aware usage

- Buy a credit pack if you expect more than 50 decision calls within 365 days. Below 50, paying per call costs less; at 50, the cost is the same.
- Use `batch` for payout lists instead of one decision per address.
- On `review`, hold the payment until a person approves it. `review` asks for human approval; it is not a final `decline`.
- A clean result means no match on the lists we cover at that time. It is not a guarantee about the payee.
