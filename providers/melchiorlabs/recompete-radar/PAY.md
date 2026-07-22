---
name: recompete-radar
title: "Recompete Radar"
description: "Source-linked USAspending evidence for federal contract awards approaching their reported period-of-performance end date, with recipient, agency, obligation, expiration, provenance, and receipt fields."
use_case: "Use for researching federal contract award expirations by recipient name or UEI, building sourced GovCon watchlists, and retrieving current USAspending records with direct award links."
category: data
service_url: https://recompete.melchiorlabs.com
version: v1
openapi:
  path: openapi.json
---

Recompete Radar exposes one paid operation: `POST /v1/awards/expiring`.
Send a JSON body with the required `recipient` field and optional `windowDays`,
`asOf`, `limit`, and `minimumAwardAmount` controls. The response returns current
USAspending-backed award records, days until their reported end dates, direct
USAspending links, source metadata, scan coverage, digests, and interpretation
warnings.

Each successful request costs $0.03 USDC over x402. The live payment challenge
accepts Base and Solana mainnet. Invalid input, an incomplete broad-recipient
scan, and upstream failures are not successful paid results.

## Interpretation limits

- An award's reported expiration is not proof of a recompete, renewal,
  solicitation, or future opportunity. The API does not predict any of them.
- Recompete Radar is an independent product and is not affiliated with or
  endorsed by the U.S. government.
- USAspending records can be revised. `asOf` filters the current source snapshot
  and does not reconstruct what the source reported historically.
- Recipient lookup can span similarly named entities. Prefer a UEI when entity
  precision matters and review the returned recipient names and source links.
- `totalObligation` is cumulative federal obligation from USAspending's Award
  Amount field, not the award's potential ceiling.

## Spend-aware usage

- Use the smallest `windowDays` and `limit` that answer the research question.
- Apply `minimumAwardAmount` when low-value awards are outside the task scope.
- Reuse returned award IDs and USAspending links instead of repeating broad
  recipient searches.
- Treat a zero-result response as evidence for the stated query and current
  source snapshot, not as proof that no future opportunity exists.
