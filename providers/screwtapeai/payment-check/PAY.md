---
name: payment-check
title: "Screwtape Payment Check"
description: "Checks whether a seller is safe to pay before an agent sends funds. Compares the 402 price and payee with published listings, screens the payee, flags over-price and duplicates, and returns allow, review or block with a signed receipt."
use_case: "Use before paying an API or seller: validate the 402 challenge, payee, and price, then get an allow, review, or block verdict with a signed receipt."
category: security
service_url: https://screwtape.ai
version: v1
openapi:
  path: openapi.json
---

Screwtape answers whether a seller is safe to pay before an agent sends funds.
`POST /v1/payment-check` compares the seller's 402 price and payee with
published listings, screens the payee, flags over-price and duplicates, and
checks that the seller URL returns a valid 402. The response is allow, review,
or block, with reasons and a signed receipt.

Price is $0.005 USDC per call. Agents can pay with x402 on Solana mainnet or
Base (USDC). There are 3 free calls per UTC day with no key, or 10 with a free
key from https://screwtape.ai/signup/. After the free allowance, pay per call.

Hosted MCP is at https://screwtape.ai/mcp (streamable HTTP). The A2A agent
card is at https://screwtape.ai/.well-known/agent-card.json. Docs:
https://screwtape.ai/docs/. Contact: support@screwtape.ai.

Send JSON with `seller_url` (the seller's paid HTTP URL) and, when known,
`intended_amount` in USD. Optional fields: `payment_required` (the seller's
402 payload), `agent_id`, and `event_id`.

## Spend-aware usage

- Call payment-check once per intended payment, after you have the seller URL
  and the 402 or intended amount, and before you settle.
- Reuse `event_id` if you retry the same check so you do not pay twice for
  the same decision.
- Do not poll or loop this endpoint to watch a seller. One check at payment
  time is enough.
- If the verdict is review or block, stop and inspect the reasons instead of
  paying and retrying.
- Prefer the dedicated payment-check route over broader judge or consensus
  calls when the task is only "is this seller safe to pay."
