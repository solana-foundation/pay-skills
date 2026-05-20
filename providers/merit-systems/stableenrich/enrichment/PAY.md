---
name: enrichment
title: "StableEnrich"
description: "Unified enrichment gateway for Apollo, Exa, Firecrawl, Google Maps, Hunter, Minerva, Reddit, Serper, Whitepages, Cloudflare, and more. Covers people and company enrichment, web search, scraping, maps, email verification, and property data."
category: data
use_case: "Use for contact enrichment, company lookup, prospect search, web search, page scraping, local business discovery, place details, email verification, social profile enrichment, Reddit research, news and shopping search, people search, and property records."
service_url: https://stableenrich.dev
openapi:
  path: openapi.json
---

Unified data enrichment gateway covering Apollo, Exa, Firecrawl, Google Maps,
Hunter, Minerva, Reddit, Serper, Whitepages, Cloudflare, and more through a
single endpoint. Prices range from $0.002 (Exa content retrieval) to $0.44
(Whitepages searches).

## Spend-aware usage

- Choose the narrow source first: Exa for web content retrieval, Serper for web
  search snippets, Hunter for email/domain lookup, Google Maps for places,
  Apollo or Minerva for people/company enrichment, Firecrawl or Cloudflare for
  page/site extraction, Reddit for Reddit data, and Whitepages only for identity
  or phone/address research that justifies the higher price.
- Prefer lookup/enrich endpoints when the user provides a URL, domain, email, or
  profile. Use broad search only when no stable identifier is available.
- For scraping, fetch one URL before starting a crawl. Ask before crawl jobs,
  Whitepages searches, or any plan likely to require multiple paid calls.
- Batch records when the endpoint supports arrays, and cap result limits to the
  smallest number needed for the answer.
