---
name: ai-scraper
title: "Web3 Autonomous Scraper"
description: "Pay-per-request web data API: scrape clean HTML (0.005 USDC), convert pages to token-efficient markdown (0.005 USDC), or extract structured JSON with your own schema (0.02 USDC). Paid on Solana mainnet via x402 protocol. No accounts or API keys required."
use_case: "Use for scraping web pages, converting pages to clean markdown for LLM context, extracting structured JSON data from any URL with a custom schema, fetching website data for AI agents, and bypassing CAPTCHAs without subscriptions or API key management."
category: data
service_url: https://ai-scraper-api.duckdns.org
openapi:
  path: openapi.json
---

Pay-per-request web data API designed exclusively for autonomous AI agents. Payments are made on Solana mainnet via the x402 protocol — no subscriptions, no API keys, no human intervention required.

Three endpoints:

- `POST /scrape` (0.005 USDC) — raw clean HTML from any URL.
- `POST /markdown` (0.005 USDC) — reader-mode markdown, roughly 10x fewer tokens than raw HTML; ideal for feeding pages into LLM context.
- `POST /extract` (0.02 USDC) — send a `schema` object mapping field names to expected types and get back structured JSON extracted from the page; fields not found are returned as null.

The API implements the HTTP 402 Payment Required standard. On the first request, it returns a `PAYMENT-REQUIRED` x402 challenge (with `WWW-Authenticate` kept for backward compatibility). The agent pays on-chain and retries with the payment proof in the `X-PAYMENT` header.

## Spend-aware usage

- Prices are fixed per request regardless of page size: 0.005 USDC for `/scrape` and `/markdown`, 0.02 USDC for `/extract`.
- Prefer `/markdown` over `/scrape` when the content will be read by an LLM — same price, far fewer tokens to process.
- Prefer `/extract` when you only need specific fields — paying 0.02 USDC once is usually cheaper than parsing raw HTML with your own LLM tokens.
- Reuse scraped content within your agent session rather than re-fetching the same URL.
- Target specific pages rather than crawling entire sites to minimise spend.
- A `502 Bad Gateway` means the upstream pipeline failed **after** payment verification, but the payment signature is **not** consumed — retry the same `X-PAYMENT` immediately. Only `200` responses mark a signature as spent.
