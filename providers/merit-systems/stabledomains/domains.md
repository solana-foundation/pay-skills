---
name: domains
title: "StableDomains"
description: "Domain registration, renewal, and DNS management via micropayments"
category: productivity
use_case: "Use when you need to register, renew, or manage DNS records for domain names via micropayments, supporting .com, .org, .net, .io, .ai, .dev, .app, and .xyz"
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
