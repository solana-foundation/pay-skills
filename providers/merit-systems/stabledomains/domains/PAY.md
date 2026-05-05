---
name: domains
title: "StableDomains"
description: "Register, renew, and manage DNS for domains via stablecoin micropayments. Supports common TLDs including .com, .org, .net, .io, .ai, .dev, .app, and .xyz, plus DNS record creation and updates without traditional registrar billing."
category: cloud
use_case: "Use for domain registration, renewing existing names, managing DNS records, buying agent-owned domains, setting A/AAAA/CNAME/MX/TXT records, launching websites, configuring branded email, and handling registrar workflows through micropayments."
service_url: https://stabledomains.dev
openapi:
  url: https://stabledomains.dev/openapi.json
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
