---
name: cors-header-checker
title: "CORS Header Checker"
description: "Sends a real request to any URL with an Origin header attached and reads back all six standard cross-origin permission headers exactly as the server returned them."
use_case: "Use to diagnose a browser-blocked cross-origin request, verify CORS config after a deploy, or audit whether an API permits credentialed cross-origin calls from a specific origin."
category: devtools
service_url: https://cors-header-checker.underscoredone.com
openapi:
  path: openapi.json
---

Sends a real request to any URL with an Origin header attached and reads back all six standard cross-origin permission headers exactly as the server returned them. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Test one representative URL per origin/endpoint pattern — CORS config is almost always server-wide.
- Re-run only after a deploy or config change.
