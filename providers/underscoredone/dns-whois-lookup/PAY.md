---
name: dns-whois-lookup
title: "DNS & WHOIS Lookup"
description: "For up to 10 domains at once, returns every DNS record type (A, AAAA, MX, CNAME, TXT, NS, PTR, SOA, SRV, CAA, NAPTR, DS, TLSA) plus the full WHOIS profile: registrar, dates, contacts, status, nameservers."
use_case: "Use when you need complete DNS and registration data for one or more domains in a single call — domain research, migration verification, mail routing checks, or ownership investigation."
category: data
service_url: https://dns-whois-lookup.underscoredone.com
openapi:
  path: openapi.json
---

For up to 10 domains at once, returns every DNS record type (A, AAAA, MX, CNAME, TXT, NS, PTR, SOA, SRV, CAA, NAPTR, DS, TLSA) plus the full WHOIS profile: registrar, dates, contacts, status, nameservers. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Batch up to 10 domains per call; duplicates are removed automatically.
- This returns all record types at once — do not call again for a different record type.
