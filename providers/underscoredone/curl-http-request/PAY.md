---
name: curl-http-request
title: "Curl HTTP Request"
description: "Send a GET, POST, PUT, PATCH, DELETE, or HEAD request to any URL from our servers and get back the full response: status code, every response header, and the body. Follows up to 3 redirects."
use_case: "Use to fetch a URL or exercise an HTTP endpoint from a neutral cloud origin — testing APIs, debugging redirect chains, or retrieving raw data when no local network access is available."
category: devtools
service_url: https://curl-http-request.underscoredone.com
openapi:
  path: openapi.json
---

Send a GET, POST, PUT, PATCH, DELETE, or HEAD request to any URL from our servers and get back the full response: status code, every response header, and the body. Follows up to 3 redirects. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Use HEAD when you only need status and headers.
- Combine checks into a single request per URL rather than probing methods one at a time.
