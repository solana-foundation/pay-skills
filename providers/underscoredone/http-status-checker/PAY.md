---
name: http-status-checker
title: "HTTP Status Checker"
description: "Visits up to 10 URLs in one call and reports each one's exact status code, whether it redirects, and the final destination — for broken-link hunting, migration checks, and SEO audits."
use_case: "Use to check whether a batch of URLs is working, broken, or redirecting, and where each redirect lands — link audits, post-migration verification, or sitemap validation."
category: devtools
service_url: https://http-status-checker.underscoredone.com
openapi:
  path: openapi.json
---

Visits up to 10 URLs in one call and reports each one's exact status code, whether it redirects, and the final destination — for broken-link hunting, migration checks, and SEO audits. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Batch up to 10 URLs per call instead of checking them one at a time.
- Deduplicate URLs and drop known-good ones before submitting.
