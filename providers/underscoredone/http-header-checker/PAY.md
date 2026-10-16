---
name: http-header-checker
title: "HTTP Header Checker"
description: "Sends a request to any URL and reports everything the server returned: status code, all response headers, the number of redirects followed, and total response time."
use_case: "Use to inspect a live server's response headers — verifying caching, security, or content-type headers, or measuring redirect depth and response time for one URL."
category: devtools
service_url: https://http-header-checker.underscoredone.com
openapi:
  path: openapi.json
---

Sends a request to any URL and reports everything the server returned: status code, all response headers, the number of redirects followed, and total response time. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- One call returns all headers — do not re-call for a different header.
- For bulk status-only checks across many URLs, use the HTTP Status Checker instead.
