---
name: domains
title: "StableDomains"
description: "Register, renew, and manage DNS for domains via stablecoin micropayments. Supports common TLDs including .com, .org, .net, .io, .ai, .dev, .app, and .xyz, plus DNS record creation and updates without traditional registrar billing."
category: productivity
use_case: "Use for domain registration, renewing existing names, managing DNS records, buying agent-owned domains, setting A/AAAA/CNAME/MX/TXT records, launching websites, configuring branded email, and handling registrar workflows through micropayments."
service_url: https://stabledomains.dev
endpoints:
  - method: POST
    path: "register"
    resource: domains
    description: "Register a new domain name with bonding curve pricing across supported TLDs including .com, .org, .net, .io, .ai, .dev, .app, and .xyz"
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
    description: "Renew an existing domain registration to extend its expiration date and prevent it from being released back to the registrar"
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
    description: "Manage DNS records for a domain including creating, updating, and deleting A, AAAA, CNAME, MX, TXT, and other record types"
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
