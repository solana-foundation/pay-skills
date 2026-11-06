---
name: url-intel-api
title: "URL Intel API"
description: URL status, redirect chain, SSL expiry, page metadata, batch check (up to 10 URLs), and x402 service discovery. 7 endpoints. $0.01 per call. No API key.
use_case: Verify a URL is live, safe, and not expiring before an agent fetches or links to it. Returns HTTP status, redirect depth, SSL days remaining, and page title.
category: security
service_url: https://url-intel-api-production.up.railway.app
openapi:
  path: openapi.json
---
