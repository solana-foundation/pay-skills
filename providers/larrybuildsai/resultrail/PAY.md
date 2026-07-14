---
name: resultrail
title: "ResultRail by LarryBuildsAI"
description: "Pay-per-success public domain and URL result packs with source URLs, confidence, timestamps, useful-path extraction, stop conditions, and deterministic receipt hashes."
use_case: "Use when an agent needs one bounded public company-domain or webpage result with evidence and price limits instead of a broad enrichment or scraping workflow."
category: data
service_url: https://proofbeforepay.vercel.app
version: v1
openapi:
  path: openapi.json
---

ResultRail sells small, bounded public-data results. Domain packs return public
company and technology signals; URL extraction packs return page metadata,
headings, links, and a text preview. Both include source URLs, confidence,
timestamps, stop conditions, and receipt hashes.

The production API accepts Solana mainnet USDC and Base mainnet USDC. Public MCP
discovery is available at `https://proofbeforepay.vercel.app/resultrail/mcp`.

## Spend-aware usage

- Use the free public `POST /v1/resultrail/quote` route before payment to confirm the exact price, paid endpoint, and success criteria.
- Choose the $0.05 URL extraction when one page is sufficient.
- Use the $0.12 domain pack only when company and technology signals are needed.
- Cache source packs and receipt hashes instead of repeating unchanged requests.

## Safety and claim boundaries

- ResultRail reads public pages only and does not access private data or credentials.
- Results are bounded by source availability and explicit stop conditions.
- Results do not guarantee completeness, correctness of third-party pages, customer adoption, settlement, or revenue.
