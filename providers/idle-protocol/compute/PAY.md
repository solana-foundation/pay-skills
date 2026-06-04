---
name: compute
title: "IDLE Protocol"
description: "Distributed residential compute network on Solana. Access residential IPs for web scraping, DNS/SSL checks, latency measurement, price extraction, content verification, change detection, data queries, and AI agent task routing via x402 micropayments."
use_case: "Use for web scraping from residential IPs, API health monitoring, DNS resolution, SSL verification, response time measurement, price extraction, stock checks, content verification, change detection, data queries, and AI agent task routing."
category: compute
service_url: https://gateway.earnidle.com
openapi:
  path: openapi.json
---

Distributed residential compute network on Solana. 14 paid endpoints across
three tiers ($0.001–$0.005 per request) route tasks to distributed nodes
running on residential IPs. All endpoints use x402 payment in USDC on Solana
mainnet. The free `/health` endpoint checks gateway status without payment.

## Spend-aware usage

- Prefer `v1/compute/fetch` ($0.002) over `v1/compute/scrape` ($0.005) when
  you only need status codes or headers.
- Use `v1/compute/extract` with a CSS selector instead of scraping full HTML
  when you need one element from a page.
- Use `v1/compute/changes` to detect changes before pulling fresh data with
  `v1/compute/price` — avoids paying for unchanged pages.
- `v1/data/query` accepts natural language — use it for structured data lookups
  instead of scraping and parsing HTML.
- Use `v1/compute/dns` ($0.001) and `v1/compute/ssl` ($0.001) for lightweight
  domain checks before committing to a full fetch or scrape.
- Use `v1/compute/verify` ($0.003) to confirm content exists before paying for
  a full scrape — avoids wasted calls on pages behind auth walls.
