---
name: smart-wallet-deploy
title: "GenTech Labs — Smart Wallet Deploy API"
description: "Deploy smart contract wallets programmatically. Create ERC-4337 compatible smart accounts, configure spenders, and manage wallet policies via API."
use_case: "Use when an agent needs to deploy a smart contract wallet, set up account abstraction, or configure wallet spending policies."
category: finance
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "GenTech Labs — Smart Wallet Deploy API", "version": "1.0.0" }, "paths": {} }
---

# GenTech Labs — Smart Wallet Deploy API

Deploy smart contract wallets programmatically. Create ERC-4337 compatible smart accounts, configure spenders, and manage wallet policies via API.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
