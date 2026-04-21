---
name: identity
title: "Minerva"
description: "Identity resolution, person search, enrichment, and email validation"
category: data
service_url: https://agentcash.minerva.io
endpoints:
  - method: POST
    path: "resolve"
    resource: identity
    description: "Resolve person identity to a Minerva PID and LinkedIn URL"
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
    description: "Enrich person with demographics, work history, education, and financial signals"
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
    description: "Check if email addresses exist in the Minerva database"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Identity resolution and person enrichment. No auth, no subscriptions.
Resolve people to LinkedIn profiles, enrich with demographics, work history,
education, and financial signals.
