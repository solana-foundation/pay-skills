---
name: kyb
title: "Vérif Entreprise FR"
description: "French company verification (KYB) by SIREN from official open data: legal identity, active or closed status, insolvency proceedings (BODACC), VAT number checked in VIES, RGE labels, and an explained verdict."
use_case: "Use before paying, onboarding or contracting with a French company (supplier, client, contractor) to check it exists, is active, is not in insolvency, and has a valid VAT number."
category: identity
service_url: https://api-production-24833.up.railway.app
openapi:
  path: openapi.json
---

One call per French company (SIREN, 9 digits) aggregates official sources: the Annuaire des Entreprises (DINUM) for identity, status, age, activity and headcount; BODACC (DILA) for insolvency proceedings (safeguard, receivership, liquidation, closure) and deregistration; VIES (European Commission) for the VAT number; ADEME for RGE energy-renovation qualifications. The response carries a verdict (favorable, vigilance, defavorable, indetermine) justified by stable, documented signal codes, each with its source and a link to the official notice. No personal data about company officers is returned.

Paid with x402 in USDC on Solana or Base: $0.01 for `/v1/verify` and `/v1/rge`, $0.002 for `/v1/search`. Invalid input is rejected with a 400 before any payment request, and an unknown company (404) or an unavailable source (502) is never settled. The same tools are exposed as a remote MCP server at https://api-production-24833.up.railway.app/mcp. Full documentation for agents: https://api-production-24833.up.railway.app/llms-full.txt.

## Spend-aware usage

- If you only have a company name, call `/v1/search` first ($0.002, up to 10 results with SIREN, status and postcode), then `/v1/verify` only on the right SIREN.
- Pass `nom` to `/v1/verify` to check in the same call that the SIREN matches the name you were given (detects typos and impersonation).
- `/v1/rge` is only useful for building and energy-renovation contractors; `/v1/verify` already tells you whether any establishment is RGE-qualified.
- Responses are cached up to 12 hours: re-checking the same SIREN within a task is unnecessary.
