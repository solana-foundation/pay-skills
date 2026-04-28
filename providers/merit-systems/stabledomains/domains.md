---
name: domains
title: "StableDomains"
description: "Register, renew, and manage DNS for domains via stablecoin micropayments. Supports common TLDs including .com, .org, .net, .io, .ai, .dev, .app, and .xyz, plus DNS record creation and updates without traditional registrar billing."
category: productivity
use_case: "Use for domain registration, renewing existing names, managing DNS records, buying agent-owned domains, setting A/AAAA/CNAME/MX/TXT records, launching websites, configuring branded email, and handling registrar workflows through micropayments."
service_url: https://stabledomains.dev
endpoints:
  - method: POST
    path: "api/register"
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
    path: "api/domain/renew"
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
    path: "api/check"
    resource: domains
    description: "Check whether a domain name is available before attempting registration; returns availability and price metadata for the requested name"
  - method: GET
    path: "api/domain/list"
    resource: domains
    description: "List domains owned by the authenticated wallet, including expiration dates and current DNS configuration summaries"
  - method: GET
    path: "api/domain/status"
    resource: domains
    description: "Get the current registration and propagation status for a single domain owned by the authenticated wallet"
  - method: POST
    path: "api/domain/dns"
    resource: dns
    description: "Manage DNS records for a domain including creating, updating, and deleting A, AAAA, CNAME, MX, TXT, and other record types"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: GET
    path: "api/domain/dns"
    resource: dns
    description: "Read the current DNS record set for a domain owned by the authenticated wallet"
---

Domain registration, renewal, and DNS management via stablecoin micropayments.
Supports .com, .org, .net, .io, .ai, .dev, .app, .xyz. Bonding curve pricing.

## Spend-aware usage

- Domain registration and renewal are purchase-like actions. Confirm the exact
  domain, TLD, term, and expected charge before calling `api/register` or
  `api/domain/renew`.
- Use `api/check` to test availability instead of calling `api/register` as a
  probe — register is a paid action.
- Use `api/domain/dns` for record management after the domain exists. Batch
  DNS record changes in one request when the endpoint body supports it, and
  ask before destructive record deletes.
