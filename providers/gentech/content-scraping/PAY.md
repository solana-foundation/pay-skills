---
name: content-scraping
title: "GenTech Labs — Content Scraping API"
description: "Real-time social intelligence from X, Reddit, YouTube, and Instagram trends via x402 USDC on Base."
use_case: "Use when an agent needs trending content, social media intelligence, or platform-specific data from major social networks."
category: ai_ml
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Content Scraping API

Real-time social intelligence from X, Reddit, YouTube, and Instagram trends via x402 USDC on Base.

## Endpoints

- `GET /v1/content/{platform}` — Get trending content from social platforms ($0.02)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
