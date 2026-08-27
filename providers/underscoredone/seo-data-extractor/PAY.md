---
name: seo-data-extractor
title: "SEO Data Extractor"
description: "Visits a URL and returns every important SEO field: title, meta description, meta keywords, robots directives, canonical link, H1/H2/H3 headings, link counts, and HTTP status code."
use_case: "Use to pull a page's on-page SEO fields in one structured response for audits, competitor analysis, or verifying that metadata shipped correctly after a deploy."
category: search
service_url: https://seo-data-extractor.underscoredone.com
openapi:
  path: openapi.json
---

Visits a URL and returns every important SEO field: title, meta description, meta keywords, robots directives, canonical link, H1/H2/H3 headings, link counts, and HTTP status code. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- One call returns every field — do not call again for a different tag.
- Sample representative template pages rather than every URL on a large site.
