---
name: cors-header-checker
title: "CORS Header Checker"
description: "Sends a real request to any URL you provide, attaches an Origin header, and reads back all six standard cross-origin permission headers the server returns. No API key required — authenticate with an EVM or Solana wallet via SIWX and pay with USDC credits."
use_case: "Use when you need to see a live server's actual CORS response headers for a specific origin, not guess from docs. Use it to diagnose browser-blocked requests, verify a fresh deploy, or audit whether an API permits credentialed cross-origin calls — all payable with USDC via x402 without an account."
category: devtools
service_url: https://cors-header-checker.underscoredone.com
openapi:
  path: openapi.json
---

Sends a real request to any URL you provide, attaches an Origin header, and reads back all six standard cross-origin permission headers the server returns. Tells you whether cross-origin requests are enabled at all, whether your specific origin is permitted, and shows you every permission value exactly as the server sent it. Perfect for figuring out why a browser is blocking a request, confirming a freshly deployed service is configured correctly, or auditing whether a public API allows credentialed cross-origin calls.

## Spend-aware usage

- Test one representative URL per origin/endpoint pattern rather than every path — CORS config is almost always server-wide, so one call confirms the policy. Reuse the result instead of re-checking the same origin, and only re-run after a deploy or config change.
