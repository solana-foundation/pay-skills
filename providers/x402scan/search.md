---
name: search
title: "x402scan"
description: "Indexed registry and explorer for x402-compatible paid API endpoints. Query resources, merchants, wallets, facilitators, and origins by chain or keyword. Includes registry write endpoints (SIWX) and an x402-gated USDC send endpoint for Base and Solana."
use_case: "Use for discovering x402 paid APIs, searching by chain or keyword, exploring merchant and wallet payment activity, registering new x402 resources, sending USDC programmatically, and inspecting facilitator stats across the ecosystem."
category: search
service_url: https://x402scan.com
openapi_url: https://x402scan.com/openapi.json
endpoints:
  - method: GET
    path: "api/x402/resources"
    resource: registry
    description: "Paginated list of all indexed x402 resources with chain, price, and origin metadata"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "api/x402/resources/search"
    resource: registry
    description: "Full-text search across indexed x402 resources by keyword with pagination support"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: GET
    path: "api/x402/merchants"
    resource: merchants
    description: "Paginated list of merchants ranked by total received x402 payment volume"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "api/x402/merchants/{address}/transactions"
    resource: merchants
    description: "Paginated x402 transfers where the given merchant address is the recipient"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "api/x402/wallets/{address}/transactions"
    resource: wallets
    description: "Paginated x402 transfers where the given wallet address is the sender"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "api/x402/facilitators/stats"
    resource: facilitators
    description: "Overall facilitator statistics across all indexed x402 facilitators (volume, count, fees)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "api/x402/origins/{id}/resources"
    resource: registry
    description: "List all indexed x402 resources for a specific origin/domain by origin ID"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/x402/registry/register"
    resource: registry
    description: "Register a single x402-protected resource by URL using SIWX wallet authentication"
  - method: POST
    path: "api/x402/registry/register-origin"
    resource: registry
    description: "Discover and register all x402 resources from an origin via OpenAPI or .well-known/x402"
  - method: POST
    path: "api/x402/send"
    resource: send
    description: "Send USDC to an address on Base or Solana with the amount paid via x402 dynamic pricing"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Indexed registry and payment data explorer for the x402 protocol. Query
resources, merchants, wallets, facilitators, or full-text-search the catalog.

Most data endpoints are GET and cost $0.01–$0.02 per call. The registry write
endpoints (`register`, `register-origin`) use SIWX wallet auth and are free.
The `send` endpoint forwards USDC to a recipient — the paid amount equals the
transfer plus a small protocol fee.

Note: x402scan redirects bare-domain requests to `www.x402scan.com`. Follow
redirects in your HTTP client.

> **Network compatibility:** the live 402 challenge currently accepts Base USDC
> only — Solana payment was not in the accepted list at audit time. Confirm
> with `pay skills probe` before publishing.
