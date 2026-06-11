---
name: ai-scraper
title: "Web3 Autonomous Scraper"
description: "Pay-per-request web scraping API that extracts clean HTML from any URL. Costs 0.005 USDC per request on Solana mainnet via x402 protocol. No accounts or API keys required."
use_case: "Use for scraping web pages, extracting HTML content from any URL, fetching website data for AI agents, and bypassing CAPTCHAs without subscriptions or API key management."
category: data
service_url: https://ai-scraper-api.duckdns.org
openapi:
  path: openapi.json
---

Pay-per-request web scraping API designed exclusively for autonomous AI agents. Each request costs exactly 0.005 USDC paid on Solana mainnet via the x402 protocol — no subscriptions, no API keys, no human intervention required.

The API implements the HTTP 402 Payment Required standard. On the first request, it returns a `PAYMENT-REQUIRED` x402 challenge (with `WWW-Authenticate` kept for backward compatibility). The agent pays on-chain and retries with the payment proof in the `X-PAYMENT` header.

## Spend-aware usage

- Each scrape costs exactly 0.005 USDC regardless of page size.
- Reuse scraped content within your agent session rather than re-fetching the same URL.
- Target specific pages rather than crawling entire sites to minimise spend.
- A `502 Bad Gateway` means the upstream scraper failed **after** payment verification, but the payment signature is **not** consumed — retry the same `X-PAYMENT` immediately. Only `200` responses mark a signature as spent.
