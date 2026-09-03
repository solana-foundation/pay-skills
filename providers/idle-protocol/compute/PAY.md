---
name: compute
title: "IDLE Protocol"
description: "Distributed compute & AI inference network on Solana. Access residential IPs for web scraping, DNS/SSL checks, latency measurement, price extraction, content verification, change detection, data queries, AI agent task routing, and multi-model AI inference (Claude, Gemini, Llama, Mistral) via x402 micropayments."
use_case: "Use for AI inference (OpenAI-compatible chat completions with 21 models at $0.001/req), web scraping from residential IPs, API health monitoring, DNS resolution, SSL verification, response time measurement, price extraction, stock checks, content verification, change detection, data queries, and AI agent task routing."
category: compute
service_url: https://api.earnidle.com
openapi:
  path: openapi.json
---

Distributed compute and AI inference network on Solana. 15 paid endpoints
across four tiers ($0.001–$0.005 per request) route tasks to distributed
nodes. All endpoints use x402 payment in USDC on Solana mainnet.

The `v1/chat/completions` endpoint is OpenAI-compatible — change the base URL
and existing SDKs work. 21 models including Claude Sonnet, Claude Haiku,
Gemini 3.5 Flash, Llama 3.2, Mistral, and NVIDIA NIM models at $0.001/request.
Use `GET /v1/models` (free) to list available models.

The free `GET /health` endpoint checks gateway status without payment — do not
confuse it with the paid `POST /v1/compute/health` ($0.002), which checks
external API endpoints from residential IPs.

## Spend-aware usage

- Use `v1/chat/completions` ($0.001) for any LLM task — cheapest endpoint and
  OpenAI-compatible. Prefer `claude-haiku` for fast/cheap, `claude-sonnet` for
  quality.
- Use `GET /v1/models` (free) to discover available models before calling
  chat/completions.
- Use `GET /health` (free) to check if the IDLE gateway is up. Use
  `v1/compute/health` ($0.002) only when you need to test an external URL
  from a residential IP.
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
