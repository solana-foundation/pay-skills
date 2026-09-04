---
name: url-uptime-checker
title: "URL Uptime Checker"
description: "Checks whether a website or web address is currently reachable and reports how quickly it responded — a fast, single-purpose availability and latency probe."
use_case: "Use for a quick up/down and response-time check on a single URL — confirming a service is live after a deploy or spot-checking an outage report."
category: devtools
service_url: https://url-uptime-checker.underscoredone.com
openapi:
  path: openapi.json
---

Checks whether a website or web address is currently reachable and reports how quickly it responded — a fast, single-purpose availability and latency probe. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Poll on a sensible interval rather than tightly looping; each check is a paid call.
- For a batch of URLs, use the HTTP Status Checker instead.
