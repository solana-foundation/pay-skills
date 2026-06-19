---
name: trade-finance-risk-score
title: "Trade Finance Risk Score API"
description: "Score trade finance transaction risk from country and buyer parameters. Returns structured risk verdicts optimized for direct LLM pipeline and microservice integration."
use_case: "Use for assessing trade finance transaction risk by country and buyer, automating credit decisions in trade workflows, and routing high-risk deals for review."
category: finance
service_url: https://orbisapi.com/proxy/trade-finance-risk-score-api-d53631
openapi:
  url: https://orbisapi.com/proxy/trade-finance-risk-score-api-d53631/openapi.json
---

## Overview

Trade Finance Risk Score API is available on [Orbis](https://orbisapi.com) — a pay-per-call x402 API marketplace on Base and Solana.

No API key or account required. Send an x402 payment header with USDC on Solana or Base and your request goes straight through.

## Pricing

**$0.001 USDC per call** — accepted on Solana (USDC) and Base (USDC).

## Quick start

```bash
# See the 402 challenge
curl https://orbisapi.com/proxy/trade-finance-risk-score-api-d53631

# Pay and call with the pay CLI
pay curl https://orbisapi.com/proxy/trade-finance-risk-score-api-d53631
```

## Networks

- **Solana** — `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` (USDC)
- **Base** — `eip155:8453` (USDC)
