---
name: identity
title: "Minerva"
description: "Identity resolution, person search, enrichment with demographics and work history, and email validation against a comprehensive people database"
use_case: "Use when you need to resolve a person's identity to a LinkedIn profile, enrich contact records with demographics, employment history, education, and financial signals, or validate email addresses"
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
