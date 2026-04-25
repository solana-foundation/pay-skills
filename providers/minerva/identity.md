---
name: identity
title: "Minerva"
description: "Resolve identities, search people, enrich contacts, and validate emails against a comprehensive people database. Returns LinkedIn matches, demographics, employment history, education, income and wealth signals, contact data, and confidence scores."
use_case: "Use for person identity resolution, LinkedIn profile matching, contact enrichment, lead research, demographics and work history, education lookup, financial signals, people search, CRM enrichment, email validation, and confidence-scored identity matching."
category: data
service_url: https://agentcash.minerva.io
endpoints:
  - method: POST
    path: "resolve"
    resource: identity
    description: "Resolve a person's identity from name and company to a unique Minerva PID and verified LinkedIn profile URL for further enrichment"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "enrich"
    resource: identity
    description: "Enrich a person record with detailed demographics, full work history, education background, skills, and financial signals using a Minerva PID"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.05
  - method: POST
    path: "validate-emails"
    resource: identity
    description: "Validate one or more email addresses against the Minerva database to confirm existence and match them to known person records"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Identity resolution and person enrichment. Resolve people to LinkedIn
profiles, enrich with demographics, work history, education, and
financial signals.
