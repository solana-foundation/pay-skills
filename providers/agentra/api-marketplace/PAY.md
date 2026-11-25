---
name: api-marketplace
title: Agentra
description: Query blockchain transactions, balances, and token markets, search the web, and use text and data tools through 24 pay-per-request JSON APIs.
use_case: Use Agentra to check transaction status, inspect token risk or pool liquidity, retrieve source links, or summarize, extract, and classify text.
category: data
service_url: https://agentapimarket.com
openapi:
  path: openapi.json
---

# Agentra

The OpenAPI snapshot contains all 24 POST operations, their JSON parameters,
request examples, and USDC prices. For fixed prices, read `x-payment-info.price`.
For tiered text operations, read `x-payment-info.tierAmountsAtomic`; `standard`
is the default and `large` must be requested in the JSON body. Each amount uses
six decimal places in USDC. The live quote is authoritative for the chosen body.

To check the quote for a transaction status query, send the example JSON from
`POST /api/v1/transaction-status` with `Content-Type: application/json`. An unpaid
request to a ready API returns HTTP 402 and a `PAYMENT-REQUIRED` header. An x402 v2
client selects an `exact` option for native USDC and retries the same POST with
`PAYMENT-SIGNATURE`, preserving the JSON body and its headers. A `chain` field in
the body selects the blockchain to query independently of the payment network.

Agentra accepts native USDC on Base mainnet and Solana mainnet through x402 v2
`exact`. For pay.sh, select the Solana offer from the live `PAYMENT-REQUIRED`
header and use its `extra.feePayer` for the sponsored transaction. The OpenAPI
snapshot records both offers for all 24 paid endpoints. Use the current challenge
for the submitted body's price, network availability, and fee payer.
