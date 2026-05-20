---
category: search
description: "Look up US civic data by address: elected representatives, offices, political divisions, elections, polling locations, ballot contests, and voter guidance, with official contact info, social links, photos, and district metadata."
openapi:
  path: openapi.json
name: civicinfo
service_url: https://civicinfo.google.gateway-402.com
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
