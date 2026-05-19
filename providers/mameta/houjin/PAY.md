---
name: houjin
title: "Japan Corporate-Number API"
description: "Look up Japan's (JP) corporate-number (法人番号) registry from the National Tax Agency. Fetch a corporation by its 13-digit number, search by trade name and location, and reconcile a company name and address to candidates with a score."
use_case: "Use for Japanese corporate-number lookup, KYC/KYB on JP companies, verifying a vendor or invoice counterparty, name-and-address reconciliation against the official registry, and searching Japanese companies by trade name or location."
category: identity
service_url: https://houjin.agentic-jp.com
version: v1
endpoints:
  - method: GET
    path: /corporation/:number
    resource: corporation
    description: "Look up a single Japanese corporation by its 13-digit corporate number (法人番号)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.002
  - method: POST
    path: /verify
    resource: verify
    description: "Reconcile a company name and optional address to ranked candidate corporate numbers with a confidence score"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.003
  - method: GET
    path: /stats
    resource: stats
    description: "Get dataset metadata: how many corporations are loaded and which prefectures are covered"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.001
  - method: POST
    path: /search
    resource: search
    description: "Search the Japanese corporate registry by trade name and location, filterable by prefecture and city"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
  - method: POST
    path: /batch
    resource: batch
    description: "Look up many Japanese corporate numbers in one request (up to 50 items)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.002
---

Pay-per-request access to Japan's official corporate-number registry
(法人番号, National Tax Agency) for AI agents doing KYC/KYB, vendor checks,
and invoice reconciliation.

## Spend-aware usage

- Use `GET /corporation/:number` ($0.002) when you already have the 13-digit
  corporate number — it's a direct lookup.
- Use `POST /verify` ($0.003) for the name-matching / 名寄せ case: it returns
  ranked candidates with a confidence score and handles 株式会社 / (株) / ㈱
  spelling variation. A dissolved corporation is never reported as verified.
- Use `POST /search` ($0.005 base + per-result fee) to discover companies by
  name or location; cap `limit` to the smallest useful number.
- Use `POST /batch` ($0.002/item) for bulk number lookups, up to 50 per call.
