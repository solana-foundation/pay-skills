---
name: verifik
title: "Verifik AI"
description: "x402 KYC, KYB, and identity APIs with Latin America document checks, sanctions/PEP screening, OCR, and structured citizen/business verification records."
use_case: "Use for cedula/CURP/RUC validation, KYC/KYB checks, sanctions and watchlist screening, OCR on ID documents, and agent workflows that need verified identity or registry data."
category: identity
service_url: https://verifik.x402.paysponge.com
openapi:
  path: openapi.json
---

Verifik identity and compliance APIs exposed through PaySponge with x402
payments. The upstream Smart Agent proxy is deployed at
https://ai.verifik.co; this registry entry documents the x402 gateway at
`service_url`, which exposes the same capabilities on `/v2` and `/v3` paths.

The published spec includes 122 routes across Latin America, the United
States, Europe, Canada, and global compliance sources: national ID and registry
lookups (for example `/v2/co/cedula`, `/v2/mx/curp`, `/v2/cl/cedula`,
`/v2/usa/ssn`), sanctions and watchlist checks (OFAC, FBI, Interpol, Europol,
DEA, ONU), OCR on identity documents, communication validation, and KYB-style
business verification. OpenAPI operation tags mark region scope (`LATAM`,
`Global`, `USA`) so agents can filter discovery accurately — including Spain
and Canada registry routes and cross-region OCR, communication, and scheduling
utilities tagged `Global`. Agents that need
parameter schemas, country codes, or document-type enums should inspect the
OpenAPI document directly.

Without a valid Verifik user Bearer JWT, routes respond with HTTP 402 until
on-chain payment is submitted. Retry with `x-payment-tx` (or
`Authorization: L402 <txHash>`) after payment. A normal Verifik client JWT in
`Authorization: Bearer` skips on-chain payment for the same routes. Use the
documented `/v2` and `/v3` operations in the OpenAPI spec; per-operation
`x-payment-info` and runtime 402 responses define the exact price for each call.

## Spend-aware usage

- Prefer country-specific `/v2/{country}/...` routes when the jurisdiction is
  known (for example `/v2/co/cedula` for Colombia, `/v2/dea` for global
  sanctions).
- Use the narrowest endpoint for the task (single document lookup rather than
  broad or exploratory calls).
- Pass required query parameters and document types on the first request to
  avoid repeat paid 402 cycles.
- Reuse document numbers and country codes across follow-up calls in the same
  workflow.
- Call sanctions or watchlist endpoints only when screening is required, not
  as a default prelude to every identity lookup.
