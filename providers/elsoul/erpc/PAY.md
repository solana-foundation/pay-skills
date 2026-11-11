---
name: erpc
title: "ERPC x402 RPC"
description: "Pay-per-request RPC for 18 blockchain networks, including Solana, Ethereum, Bitcoin, Base and Polygon. Supports chain-specific reads and transaction submission, with Sui unary gRPC-web. Payments settle in Solana USDC, Base USDC or Base EURC."
use_case: "Use for on-demand blockchain account and balance reads, block and transaction lookups, contract calls, fee estimation, transaction simulation and submission across 18 networks, paid per request without an API key or subscription."
category: compute
service_url: https://x402.erpc.global
version: v1
openapi:
  path: openapi.json
---

ERPC x402 RPC is operated by ELSOUL LABO B.V. Paid routes serve Solana,
Ethereum, Bitcoin, Polygon, Kaia, BSC, Arbitrum, Optimism, Hyperliquid, Monad,
TRON, Sui, NEAR, Arc, Robinhood, Soneium, Avalanche and Base. The OpenAPI
sidecar describes each route and its request format. Most use JSON-RPC;
TRON also supports its listed REST methods, and Sui uses unary gRPC-web
protobuf frames rather than JSON-RPC or GraphQL.

Send a request without payment to obtain a `402 Payment Required` challenge,
select an advertised rail, then sign and resend the same body with
`Payment-Signature` or `X-Payment`. Payment settles before the RPC executes.
An upstream error can therefore still be paid; inspect `Payment-Response`
or `X-Payment-Response` independently of the RPC result. Reusing a payment
is rejected with 402 or 409 and does not retrieve the previous RPC response.

The chain being queried is independent of the settlement network. Every
per-call route can offer Solana USDC, Base USDC and Base EURC; consult the
request's challenge for currently available rails. Ethereum mainnet is an
RPC target, not a settlement network. No account or subscription is required
for these per-call routes. Account-bound credit top-ups are a separate flow.

Public `GET /pricing` supplies the current per-chain method tables and
`GET /.well-known/x402` supplies discovery metadata. `GET /health` is free.

## Spend-aware usage

- Each HTTP payment has a minimum of 1000 atomic units: 0.001 USDC or
  0.001 EURC. Both assets use the same quantity; no exchange-rate conversion
  is applied. An EURC payment is not a USD amount.
- Where the route supports batches, prices sum the method weights first and
  apply the minimum once to the entire batch. Consult the OpenAPI for each
  route's batch and body limits; Sui unary and TRON REST calls are not batches.
- Consult `GET /pricing` before paying. Dynamic methods such as Solana
  `getMultipleAccounts` depend on request size; request only needed accounts.
- Use narrow queries and available filters. Reuse block and account
  snapshots when they answer the task.
- Validate the route and method before signing. Do not assume an unknown
  method is supported or that an RPC failure automatically refunds payment.
- Keep the settlement receipt returned with each response. A transport
  failure does not prove that payment failed; avoid blindly signing a new
  payment for the same operation.
