---
name: web-scrape
title: "minia2a Web Scrape"
description: "Pay-per-call web scraping via x402: extract structured text from any URL with optional CSS selector targeting. Part of the minia2a M2M micropayment marketplace (173+ services)."
use_case: "Use when an AI agent needs to extract structured text content from a webpage, with optional CSS selector targeting for precise data extraction. No API key, no account, no human — your agent pays in USDC via x402."
category: data
service_url: https://minia2a.uk
endpoints:
  - method: GET
    path: "/x402/proxy/x402-web-scrape"
    resource: web-scrape
    description: "Extract structured text content from any URL with optional CSS selector targeting. Supports multiple payment paths: Base (USDC), Solana (USDC), Polygon, BSC, XRPL (RLUSD), Injective, and Algorand."
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
---

minia2a is the largest x402 micropayment marketplace for AI agents, with 173+
services discoverable and callable through a single platform. Every endpoint
returns a standard HTTP 402 Payment Required response with multi-chain USDC
payment paths (Base, Solana, Polygon, BSC, XRPL, Injective, Algorand).

- `web-scrape` — extract structured text from any URL. Accepts `url` parameter
  and optional `selector` for CSS-based targeting. Returns `{ok, url, text,
  length}`. $0.005 per request (1/2 USDC cent).

### Discovery & Free Tier

All 173+ minia2a services are listed at `GET /x402/preview` (free, no auth).
New users get 500 free credits ($2.50 value) via `POST /api/v1/register-simple`.

### Payment Flow

1. Agent requests `GET /x402/proxy/x402-web-scrape?url=https://example.com`
2. Server returns `402 Payment Required` with `PAYMENT-REQUIRED` header containing
   a base64-encoded x402 v2 envelope (accepts array with 7+ chains)
3. Agent signs an EIP-3009 `transferWithAuthorization` (or equivalent for
   non-EVM chains) and retries with `PAYMENT-SIGNATURE` header
4. Server verifies on-chain settlement and returns the scraped content

### Agent Usage Pattern

```python
import requests

# Agents discover services for free
r = requests.get("https://minia2a.uk/x402/preview")
catalog = r.json()
print(f"{catalog['count']} services available")

# When ready to pay, the x402 client handles 402 → pay → retry
# See: https://minia2a.uk/blog/zero-to-paid-api-call
```
