---
name: nyne
title: "Nyne AI"
description: "Nyne AI person enrichment and prospect search through PaySponge's x402 wrapper, with known-contact enrichment, async request polling, and natural-language people search that can return contact, company, and profile data."
use_case: "Use for B2B contact enrichment from email, phone, name, or LinkedIn URL, plus natural-language prospect search with pagination, cached request reuse, and optional email or phone enrichment."
category: data
service_url: https://api.paysponge.com/x402/purchase/svc_d5ymfernpzeh58gb8
openapi:
  path: openapi.json
---

Nyne AI person enrichment and people search through PaySponge with x402
payments.

The live PaySponge service currently exposes three x402 operations across two
paths: `POST /person/enrichment` to start enrichment, `GET /person/enrichment`
to poll a request by `request_id`, and `POST /person/search` to run or continue
a natural-language people search.

The bundled OpenAPI document keeps Nyne's documented request and response
bodies for those live routes, including enrichment options such as
`lite_enrich`, `required_fields`, and `newsfeed`, plus people-search
continuation through `cursor` or `request_id`.

Upstream Nyne docs also describe `GET /person/search` for status polling, but
the current PaySponge purchase service returned `404 Endpoint not found` for
that route on May 4, 2026, so it is intentionally omitted from this catalog
entry.

## Spend-aware usage

- Prefer `POST /person/enrichment` with the strongest known identifier first:
  LinkedIn URL, then work email, then phone, and avoid `probability_score` for
  automated workflows.
- Use `required_fields` or `lite_enrich` when you only need a narrow subset of
  profile data so a paid enrichment does not over-fetch.
- Reuse `request_id` or `cursor` in `POST /person/search` for cached pages and
  continuation instead of forcing a fresh search.
- Only enable `show_emails`, `show_phone_numbers`, `insights`,
  `profile_scoring`, or `high_freshness` when the task actually needs them,
  because Nyne prices search by the features used.
