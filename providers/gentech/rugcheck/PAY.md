---
name: rugcheck
title: "GenTech Labs — Rugcheck v2 API"
description: "Solana token risk analysis with 11-factor scoring. Honeypot detection, freeze authority, LP status, holder distribution. x402 USDC on Base."
use_case: "Use when an agent needs to verify Solana token safety before trading, check for scams, assess risk scores, or validate token contracts."
category: security
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Rugcheck v2 API

Solana token risk analysis with 11-factor scoring. Honeypot detection, freeze authority, LP status, holder distribution. x402 USDC on Base.

## Endpoints

- `GET /v1/score/{mint}` — Score a Solana token for risk factors ($0.01)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
