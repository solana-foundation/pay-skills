---
name: domains
title: "StableDomains"
description: "Domain registration, renewal, and DNS management via micropayments"
category: productivity
service_url: https://stabledomains.dev
endpoints:
  - method: POST
    path: "register"
    resource: domains
    description: "Register a new domain name"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 10.00
  - method: POST
    path: "renew"
    resource: domains
    description: "Renew an existing domain registration"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 10.00
  - method: POST
    path: "dns"
    resource: dns
    description: "Manage DNS records for a domain"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Domain registration, renewal, and DNS management via stablecoin micropayments.
Supports .com, .org, .net, .io, .ai, .dev, .app, .xyz. Bonding curve pricing.
