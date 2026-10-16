---
name: ens-resolver
title: "ENS Resolver"
description: "Looks up an ENS name or an Ethereum address and returns the matching counterpart, detecting automatically which direction of resolution is needed."
use_case: "Use to resolve an ENS name to its Ethereum address, or reverse-resolve an address to its ENS name, when labeling wallets or accepting human-readable recipients."
category: identity
service_url: https://ens-resolver.underscoredone.com
openapi:
  path: openapi.json
---

Looks up an ENS name or an Ethereum address and returns the matching counterpart, detecting automatically which direction of resolution is needed. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Cache resolutions — ENS records change rarely.
- Deduplicate addresses/names before resolving a batch.
