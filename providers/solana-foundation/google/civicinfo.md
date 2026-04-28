---
category: search
description: "Look up US civic data by address: elected representatives, offices, political divisions, elections, polling locations, ballot contests, and voter guidance, with official contact info, social links, photos, and district metadata."
endpoints:
- description: Look up voter information by registered address, including polling places, contests, and election-specific guidance.
  method: GET
  path: civicinfo/v2/voterinfo
  resource: elections
- description: List available elections that can be queried for voter information and election metadata.
  method: GET
  path: civicinfo/v2/elections
  resource: elections
- description: Search political divisions by natural name or Open Civic Data division identifier.
  method: GET
  path: civicinfo/v2/divisions
  resource: divisions
- description: Look up Open Civic Data division IDs and names for political divisions related to an address.
  method: GET
  path: civicinfo/v2/divisionsByAddress
  resource: divisions
name: civicinfo
sandbox_service_url: https://sandbox-pay-google-civicinfo-123883807128.us-central1.run.app
service_url: https://production-pay-google-civicinfo-123883807128.us-central1.run.app
title: Google Civic Information API
use_case: "Use for finding elected officials, election lookup, polling place search, ballot and contest research, political district mapping, civic engagement tools, voter guidance, officeholder contact data, and address-to-district resolution."
version: v2
---

## Spend-aware usage

- Use `civicinfo/v2/voterinfo` when the user provides an address and asks about
  voting, polling places, ballot contests, or election-specific guidance.
- Use `elections` only when the election ID is unknown. Do not list elections
  first when the user already named the election.
- Use division lookup endpoints for district mapping, not for general address
  validation.
