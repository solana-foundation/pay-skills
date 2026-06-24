---
name: token-security
title: "GenTech Labs — Token Security API"
description: "11-factor token risk scoring with honeypot detection, owner privileges, contract verification, and LP analysis via x402 USDC on Base."
use_case: "Use when an agent needs deep token security analysis, contract verification, or honeypot detection before trading."
category: security
service_url: https://api.gentechlabs.net
version: v1
---

# GenTech Labs — Token Security API

11-factor token risk scoring with honeypot detection, owner privileges, contract verification, and LP analysis via x402 USDC on Base.

## Endpoints

- `GET /v1/score/{token}` — Score a token for security risks ($0.005)
- `GET /v1/scan/{token}` — Deep security scan of a token ($0.005)

## Payment

x402 USDC on Base. Each call returns a `402 Payment Required` response with x402 challenge when payment is needed.

## Rate Limits

TTL-cached responses. No hard rate limit — reasonable use expected.
