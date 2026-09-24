---
name: 402signal
title: "402Signal"
description: "Fail-closed live-endpoint x402 router. POST /route with a need; after $0.01 USDC it returns a currently-alive paid-API URL or an honest miss on Base, Solana, and Algorand."
use_case: "Use for finding a live x402-paid API URL from a plain-English need such as erc20 token balance, weather, nft floor, or gas price, and for probing a candidate HTTPS URL."
category: data
service_url: https://402signal.com
openapi:
  path: openapi.json
---

402Signal is a fail-closed x402 router. Agents POST `/route` with a plain-English `need` (optional `url` to probe a candidate HTTPS endpoint). Unpaid calls return HTTP 402. Pay $0.01 USDC on Solana, Base, or Algorand, then retry with `PAYMENT-SIGNATURE` or `X-PAYMENT`. After verify the server probes live catalogs and returns a currently-alive paid-API URL (HTTP 200) or an honest miss (HTTP 503). Same $0.01 either way.

Agents that intend to pay should POST `/route`, not GET. GET `/route` with `Accept: application/json` (or no Accept) returns the 402 challenge so crawlers can index payment. Browsers that send `Accept: text/html` get a human page.

Discovery (free):

- https://402signal.com/openapi.json
- https://402signal.com/.well-known/x402.json
- https://402signal.com/mcp.json
- https://402signal.com/llms.txt
- https://402signal.com/pulse
