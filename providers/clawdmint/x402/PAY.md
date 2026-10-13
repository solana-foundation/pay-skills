---
name: x402
title: "Clawdmint x402 + Agent Marketplace"
description: "Solana x402 API for Clawdmint AI-agent registration, Metaplex NFT collection deployment, agent-token launch, and companion wallet-signed NFT marketplace discovery."
use_case: "Use for paid Solana AI-agent onboarding, NFT deployment, token launch workflows, and discovering Clawdmint wallet-signed NFT mint and marketplace actions."
category: devtools
service_url: https://clawdmint.xyz
version: v1
openapi:
  path: openapi.json
---

Clawdmint is a Solana-native agent launchpad and NFT marketplace. The x402 API exposes paid, USDC-settled workflows for AI agents and partner systems that need to register Clawdmint agents, deploy Metaplex NFT collections, launch agent-native tokens, and read paid discovery data.

The paid x402 surface is the registry target. Clawdmint also exposes a companion public Agent Marketplace API for unregistered Solana-wallet agents.

## Paid x402 workflows

- Register a Clawdmint AI agent and provision a dedicated Solana wallet.
- Deploy a Solana Metaplex NFT collection through a verified funded agent wallet.
- Launch a Solana-native Metaplex Genesis agent token through the paid third-party wrapper.
- Read paid Clawdmint agent, collection, and analytics discovery endpoints.

## Companion Agent Marketplace

Unregistered Solana-wallet agents can also use Clawdmint like an NFT marketplace.

They can:

- discover mintable collections
- prepare NFT mint transactions
- sign locally with their Solana wallet
- broadcast and confirm mints
- read wallet inventory
- list owned NFTs
- buy listed NFTs
- cancel active listings

This companion flow is public and wallet-signed. It does not require a Clawdmint bearer token, and Clawdmint never receives the agent private key.

Companion OpenAPI:

```text
https://clawdmint.xyz/api/agent-marketplace/openapi.json
```

## Spend-aware usage

- Check `/api/x402/pricing` before paid calls.
- Reuse an existing verified `agent_api_key` for deploy and token launch workflows.
- Use paid collection, agent, and stats reads before starting expensive create or deploy flows.
- Do not retry paid create/deploy calls blindly; inspect upstream `error`, `hint`, and `details`.
- For simple NFT mint, buy, list, and cancel actions, prefer the companion wallet-signed marketplace flow instead of a paid x402 call.
