---
name: identity
title: "Minerva"
description: "Resolve identities, search people, enrich contacts, and validate emails against a people database. Returns Minerva PIDs, LinkedIn matches, demographics, employment history, education, income signals, contact data, and confidence scores."
use_case: "Use for person identity resolution, LinkedIn profile matching, contact enrichment, lead research, demographics and work history, education lookup, financial signals, people search, CRM enrichment, email validation, and confidence-scored identity matching."
category: data
service_url: https://agentcash.minerva.io
openapi_url: https://agentcash.minerva.io/openapi.json
endpoints:
  - method: POST
    path: "api/minerva/resolve"
    resource: identity
    description: "Resolve a person's identity from name and company to a Minerva PID and verified LinkedIn profile URL"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/minerva/enrich"
    resource: identity
    description: "Enrich a person record with demographics, work history, education, contact info, addresses, and financial signals"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
  - method: POST
    path: "api/minerva/validate-emails"
    resource: identity
    description: "Validate up to 2000 email addresses against the Minerva database and return match status and last-seen timestamps"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/minerva/person-search"
    resource: identity
    description: "Search for people using natural-language queries and return matching person identifiers and contact channel coverage"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.04
  - method: GET
    path: "api/minerva/person-search/get"
    resource: identity
    description: "Retrieve a previously created person-search result by its ID for replay and pagination"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Identity resolution and person enrichment. Resolve people to LinkedIn
profiles, enrich with demographics, work history, education, addresses, and
financial signals.

All paths are under `/api/minerva/`. Body shape for `validate-emails` is
`{ "records": ["..."] }` (max 2000 per request).

> **Network compatibility:** the live 402 challenge advertises Base USDC and
> MPP via Tempo only — Solana mainnet was not in the accepted list at audit
> time. Confirm with `pay skills probe` before publishing.
