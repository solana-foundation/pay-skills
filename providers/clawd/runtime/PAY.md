---
name: runtime
title: "Clawd Runtime — Solana Agent Storefront Runtime"
description: "Installable Solana AI agent runtime for spawning agents with encrypted wallets, CAAP identity, registry metadata, x402 monetized storefronts, and Clawd Gateway settlement."
use_case: "Use to install or run a Clawd agent that can publish a storefront, price tools or skills, accept Solana USDC payments through x402, register identity on-chain, and route paid requests through the Clawd Gateway."
category: ai_ml
service_url: https://solanaclawd.com
version: v2
openapi:
  path: openapi.json
---

Clawd Runtime is the installable Solana agent runtime that turns an agent into a
monetizable storefront. It wires together `/agents`, `/auth`, `/providers`,
Clawd Registry metadata, and the Clawd Gateway so an installed agent can expose
paid tools, skills, chat routes, MCP routes, and storefront listings.

## Monetized storefront flow

1. Install or spawn a Clawd agent.
2. Register the agent identity and storefront metadata in Clawd Registry.
3. Publish paid services such as `/chat`, `/tools/{toolId}`, `/mcp`, or `/storefront/{agentId}`.
4. Clients call a paid route and receive an HTTP 402 payment challenge.
5. The Clawd Gateway verifies and settles Solana USDC.
6. The runtime executes the skill and returns the paid response.

## Components

- `/agents` — installable agent catalog and runtime routes.
- `/auth` — CAAP wallet, token, NFT, and identity attestation.
- `/providers` — model, data, payment, registry, and gateway providers.
- **Clawd Registry** — discovery metadata for agent storefronts.
- **Clawd Gateway** — x402 Solana USDC verify and settle flow.

## Spend-aware usage

- Read the free storefront/catalog route before paying for a tool.
- Enforce `maxAmountRequired` client-side before signing any x402 payload.
- Cache CAAP and registry discovery results between requests.
