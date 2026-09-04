---
name: asn-lookup
title: "ASN Lookup"
description: "Look up the network operator behind any IP address or ASN number: owner name, ASN, country, regional registry, and the exact CIDR address block it belongs to."
use_case: "Use to attribute an IP address or ASN to its owning network — identifying hosting providers, cloud ranges, or ISPs during abuse investigation, log enrichment, or traffic analysis."
category: data
service_url: https://asn-lookup.underscoredone.com
openapi:
  path: openapi.json
---

Look up the network operator behind any IP address or ASN number: owner name, ASN, country, regional registry, and the exact CIDR address block it belongs to. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Batch your unique IPs first — deduplicate before calling, since many addresses in a log share one ASN.
- Cache the CIDR block returned and match further IPs against it locally instead of paying for another lookup.
