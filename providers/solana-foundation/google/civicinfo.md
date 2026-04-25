---
category: search
description: Look up elected officials, polling locations, and election info by address. Returns representatives at all government levels (federal, state, local) with contact info, social media, and photos.
endpoints:
- description: Looks up information relevant to a voter based on the voter's registered address.
  method: GET
  path: civicinfo/v2/voterinfo
  resource: elections
- description: List of available elections to query.
  method: GET
  path: civicinfo/v2/elections
  resource: elections
- description: Searches for political divisions by their natural name or OCD ID.
  method: GET
  path: civicinfo/v2/divisions
  resource: divisions
- description: Lookup OCDIDs and names for divisions related to an address.
  method: GET
  path: civicinfo/v2/divisionsByAddress
  resource: divisions
name: civicinfo
sandbox_service_url: https://sandbox-pay-google-civicinfo-123883807128.us-central1.run.app
service_url: https://production-pay-google-civicinfo-123883807128.us-central1.run.app
title: Google Civic Information API
use_case: finding elected representatives, voter information, election data, political district lookup, civic engagement tools
version: v2
---
