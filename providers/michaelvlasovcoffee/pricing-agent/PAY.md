---
name: pricing-agent
title: Pricing Agent
description: Extract source-backed SaaS pricing plans, billing text and limits from up to three public pages; return structured JSON with evidence.
use_case: Compare public SaaS subscription prices and collect cited pricing data for procurement or monitoring.
category: data
service_url: https://pricing-agent-production-6581.up.railway.app
openapi:
  path: openapi.json
---

Create an unpaid order using POST /v1/orders with {"urls":["https://example.com/pricing"]}.
Keep order_token private. Call execute_url using X-Order-Token and x402 v2 payment.
Price: 0.20 USDT on Solana mainnet. Use the exact advertised USDT mint, recipient and memo.
The server-provided extra.memo binds payment to the order; preserve it exactly.
If status is settling, poll status_url with X-Order-Token; do not pay again or create a replacement order.
Paid results can be retrieved for free with that token. Failed extraction is not settled.
Only public server-rendered HTML/text is supported; no login, CAPTCHA or JavaScript browser rendering.
Evidence is checked mechanically, not manually. Results may be cached up to 3600 seconds.

Documentation: https://pricing-agent-production-6581.up.railway.app/docs?utm_source=pay-skills
Reference client: https://github.com/michaelvlasovcoffee/pricing-agent
Support: michael.vlasov.coffee@gmail.com
For attribution, optionally send X-Pricing-Source: pay-skills when creating an order.

This API requires the order creation step and private X-Order-Token. Generic probes using an unknown order ID return 404; they cannot validate the paid route without creating an order first. The reference client implements the complete flow.
