---
name: gentechlabs-erc8004-lookup
title: GenTech Labs — ERC-8004 Identity Lookup API
category: identity
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "ERC-8004 Lookup API", "version": "1.0.0" }, "paths": { "/v1/identity/{address}": { "get": { "summary": "Lookup identity", "responses": {"200": {"description": "Identity data"}} } } } }
  Verify any agent's on-chain identity across chains. Check registration, metadata, and token ID.
  ERC-8004 agent identity verification and metadata lookup.
  Verify agent ownership, capabilities, and on-chain reputation via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/identity/{address}
    description: Look up ERC-8004 identity for an agent address
    price_usd: 0.001
    request: { address: "0x..." }
    response: { address, name, capabilities, domains, metadata, verified }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — ERC-8004 Identity Lookup API

ERC-8004 agent identity verification and metadata lookup. Verify agent ownership and capabilities.

## Endpoints

- `GET /v1/identity/{address}` — Look up ERC-8004 identity ($0.001)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
