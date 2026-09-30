---
name: sitemap-url-extractor
title: "Sitemap URL Extractor"
description: "Fetches and parses any sitemap.xml, returning every URL inside — following nested sitemap indexes — along with available metadata such as last-modified date and change frequency."
use_case: "Use to enumerate a site's URLs from its sitemap, including nested sitemap indexes, for content inventories, SEO audits, crawl planning, or migration checks."
category: search
service_url: https://sitemap-url-extractor.underscoredone.com
openapi:
  path: openapi.json
---

Fetches and parses any sitemap.xml, returning every URL inside — following nested sitemap indexes — along with available metadata such as last-modified date and change frequency. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Point at the sitemap index once and let it follow children rather than calling per child sitemap.
- Cache the URL list; sitemaps change slowly.
