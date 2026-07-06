---
name: houjin
title: "Japan Corporate-Number API"
description: "Look up Japan's (JP) corporate-number (法人番号) registry from the National Tax Agency. Fetch a corporation by its 13-digit number, search by trade name and location, and reconcile a company name and address to candidates with a score."
use_case: "Use for Japanese corporate-number lookup, KYC/KYB on JP companies, verifying a vendor or invoice counterparty, name-and-address reconciliation against the official registry, and searching Japanese companies by trade name or location."
category: identity
service_url: https://houjin.agentic-jp.com
version: v1
openapi:
  path: openapi.json
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
- Use `POST /search` (base $0.005 + $0.0002 per result, capped at limit=50)
  to discover companies by name or location; cap `limit` to the smallest
  useful number to keep cost down.
- Use `POST /batch` ($0.002/item) for bulk number lookups, up to 50 per call.
