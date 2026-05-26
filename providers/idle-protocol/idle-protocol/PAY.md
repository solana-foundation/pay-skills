---
name: idle-protocol
title: "IDLE Protocol — Distributed Residential Compute Network"
description: "Turn idle PCs, wallets, agents, and data into revenue streams. 14 task types — scraping, monitoring, price extraction, DNS, SSL, and agent routing — all paid per-request with USDC on Solana."
use_case: "Use for web scraping from residential IPs, API health monitoring, DNS resolution, SSL verification, price extraction, content change detection, natural language data queries, and AI agent task routing."
category: compute
service_url: https://gateway.earnidle.com
version: v3
endpoints:
  - method: POST
    path: v1/compute/fetch
    resource: http_fetch
    description: "Fetch any URL from a residential IP via IDLE's distributed node network. Returns status code, headers, and response body."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: v1/compute/health
    resource: api_health
    description: "Comprehensive API endpoint health check. Verifies status code, response body, and latency from a residential IP."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: v1/compute/dns
    resource: dns_lookup
    description: "Resolve domain DNS records (A, AAAA, MX, TXT, NS) from a residential IP."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: v1/compute/ssl
    resource: ssl_check
    description: "Verify SSL certificate validity, expiry date, and issuer for any domain."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: v1/compute/latency
    resource: response_time
    description: "Measure endpoint response time with p50/p95/avg from real residential IPs."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: v1/compute/scrape
    resource: html_scrape
    description: "Scrape full HTML from any URL via residential IP. Includes title, text, and raw HTML."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
  - method: POST
    path: v1/compute/extract
    resource: element_extract
    description: "Extract specific elements from any page using CSS selectors. Returns structured data."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.04
  - method: POST
    path: v1/compute/links
    resource: link_extract
    description: "Extract all links from a page. Filter by internal, external, or all."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.03
  - method: POST
    path: v1/compute/price
    resource: price_extract
    description: "Extract current price and currency from any product page."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: v1/compute/availability
    resource: availability_check
    description: "Check if a product is in stock on any e-commerce page."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.04
  - method: POST
    path: v1/compute/verify
    resource: content_verify
    description: "Verify that a page contains specific text, matches a regex, or has a specific CSS selector."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.03
  - method: POST
    path: v1/compute/changes
    resource: change_detect
    description: "Detect if page content has changed since last check. Returns SHA-256 hash and diff preview."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.03
  - method: POST
    path: v1/data/query
    resource: query
    description: "Natural language query against any IDLE-connected data source."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
  - method: POST
    path: v1/agent/task
    resource: agent_task
    description: "Route a task to any registered IDLE agent by capability."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.10
  - method: GET
    path: health
    resource: health
    description: "Gateway health check — no payment required."
---

IDLE Protocol is the first distributed residential compute network built for AI agents on Solana.

## How it works

Every paid endpoint uses the x402 protocol. Hit any endpoint without payment and you get a `402` response with exact payment instructions — recipient wallet, USDC mint, amount in atomic units. Send a USDC transfer on Solana, then retry with the `X-PAYMENT` header containing the signed transaction. The gateway verifies on-chain and forwards your request.

## Quick start

```bash
pay skills update
pay curl https://gateway.earnidle.com/v1/compute/fetch \
  -d '{"url":"https://example.com"}'
```

## Pricing

| Tier | Endpoints | Price |
|------|-----------|-------|
| Basic Monitoring | fetch, health, dns, ssl, latency | $0.01–0.02 |
| Web Intelligence | scrape, extract, links, price, availability, verify, changes | $0.03–0.06 |
| Data & Agents | query, agent/task | $0.05–0.10 |

All prices in USDC on Solana mainnet.

## Spend-aware usage

- Prefer `v1/compute/fetch` over `v1/compute/scrape` when you only need status codes or headers. Fetch is $0.02 vs scrape at $0.05.
- Use `v1/compute/extract` with a CSS selector instead of scraping full HTML when you need one element from a page.
- For price monitoring, call `v1/compute/changes` with `previous_hash` to detect changes before pulling fresh data with `v1/compute/price`.
- `v1/data/query` accepts natural language — use it for structured data lookups instead of scraping and parsing HTML.
- `v1/agent/task` is the most expensive endpoint ($0.10). Only route to it when the task requires agent reasoning, not simple data retrieval.
