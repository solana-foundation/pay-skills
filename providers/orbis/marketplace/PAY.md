---
name: marketplace
title: "Orbis API Marketplace"
description: "Pay-per-call API marketplace with 2000+ endpoints across finance, data, analytics, compute, and enrichment. No API key required — pay with USDC on Solana or Base."
use_case: "Use for finance scoring, crypto analytics, text processing, data enrichment, QR encoding, mortgage calculations, gas fee estimation, AI agent memory, media data, and hundreds of other agent-ready tools. Browse the full catalog at orbisapi.com."
category: data
service_url: https://orbisapi.com
openapi:
  url: https://orbisapi.com/openapi.json
---

## Overview

**Orbis** is a pay-per-call x402 API marketplace. Every API in the catalog is gated behind an x402 paywall — no signup, no API key, no monthly invoice.

Send a USDC payment header on Solana or Base and any endpoint responds immediately.

## Catalog

2,000+ APIs across:

- **Finance** — mortgage calculators, trade finance scoring, litigation finance, refinance analysis, embedded finance, blended finance, project finance
- **Analytics** — crypto tokenomics, DeFi data, gas fees, blockchain analytics
- **Compute** — text analysis, sentiment, QR generation, encoding, AI agent memory
- **Data** — movie databases, YouTube stats, Spotify search, job markets, weather
- **Enrichment** — email validation, company data, web scraping, security scanning

Full catalog: [orbisapi.com/openapi.json](https://orbisapi.com/openapi.json)

## Pricing

**$0.001 USDC per call** (most endpoints) — prices shown in each endpoint's 402 response.

## Quick start

```bash
# See any endpoint's 402 challenge
curl https://orbisapi.com/proxy/movie-database-api-0d6d62

# Pay and call with the pay CLI
pay curl https://orbisapi.com/proxy/movie-database-api-0d6d62

# Search for specific APIs
pay skills search "mortgage calculator"
pay skills search "crypto analytics"
```

## Networks

- **Solana** — `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp` (USDC)
- **Base** — `eip155:8453` (USDC)
