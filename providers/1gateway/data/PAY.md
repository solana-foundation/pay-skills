---
name: data
title: "1gateway"
description: "Pay-per-call HTTP APIs (x402 v2) for Korean company, compliance, real-estate and macro data, onchain and market data, and utilities such as document-to-Markdown. English JSON names its source. Failed calls are not charged. From $0.002 per call."
use_case: "Use when an agent needs Korean company or filing data, real-estate or trade statistics, onchain or market lookups, document-to-Markdown, translation, or other listed utilities, as English JSON, paid per call with no API key."
category: data
service_url: https://1gateway.dev
version: v1
openapi:
  path: openapi.json
---

1gateway exposes pay-per-call HTTP APIs for agents over x402 v2. No signup or API key is required. Failed calls are not charged. Responses are English JSON and name their source.

Coverage includes Korean company and compliance data, Korean real estate, trade and macro series, onchain and market data, and agent utilities such as document-to-Markdown and translation.

x402 v2 payments are accepted in USDC on Base, Monad, Polygon, Arbitrum or Solana mainnet, at the same price on each; every 402 quote lists all options.

List prices start at $0.002 per call (`x-payment-info` in the committed OpenAPI document). The 402 quote on the wire is authoritative if it differs.

## Spend-aware usage

- Use a $0.002 route (for example `GET /v1/time/convert` or `GET /v1/crypto/pulse`) when that is all the task needs, instead of a higher-priced aggregate.
- Prefer a single documented aggregate (for example `GET /v1/crypto/perp/screener`) over many per-venue calls when a cross-venue snapshot is required.
- For translation (`/v1/ai/translate`) and document conversion (`/v1/convert/markdown`), prices are ranges in the OpenAPI document; check the 402 quote for the actual charge before a large batch.
- The same tools are available over MCP at `https://1gateway.dev/mcp` (Streamable HTTP; `tools/call` paid with x402). MCP clients that cannot sign x402 can use the stdio proxy `npx -y 1gateway-mcp`. This catalog entry describes the HTTP API at `service_url`.
