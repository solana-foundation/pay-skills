---
name: gentechlabs-content-scraping
title: GenTech Labs — Content Scraping API
category: data
version: 1.0.0
author: gentech
description: >
use_case: >
service_url: https://api.gentechlabs.net
openapi:
  content: |
    { "openapi": "3.1.0", "info": { "title": "Content Scraping API", "version": "1.0.0" }, "paths": { "/v1/content/{platform}": { "get": { "summary": "Scrape platform", "responses": {"200": {"description": "Content data"}} } } } }
  Scrape social media trends from X, Reddit, YouTube, Instagram. Real-time social intelligence for agents.
  Web content extraction and scraping for social media, news, and documentation.
  Returns structured data from URLs via x402 USDC on Base.
endpoints:
  - method: GET
    path: /v1/content/{platform}
    description: Extract content from a URL on a specific platform
    price_usd: 0.005
    request: { platform: "twitter", url: "https://twitter.com/..." }
    response: { platform, content: { title, text, media, metadata } }
network: base
currency: USDC
payment_protocol: x402
base_url: https://gentechlabs.net
---

# GenTech Labs — Content Scraping API

Web content extraction for social media, news, and documentation. Structured data from URLs.

## Endpoints

- `GET /v1/content/{platform}` — Extract content from a URL ($0.005)

## Payment

x402 USDC on Base. Each call returns a `Payment-Required` header with x402 challenge when payment is needed.
