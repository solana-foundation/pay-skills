---
name: data
title: "NetIntel"
description: "Pay-per-call network and domain intelligence: DNS records, DNSSEC, SSL/TLS certificates, WHOIS/RDAP, domain age and availability, email authentication (SPF/DKIM/DMARC), IP geolocation, reputation and risk scores, OSINT, and web page extraction."
use_case: "Use for resolving DNS records, checking certificate expiry and chains, looking up domain ownership, age or availability, validating SPF/DKIM/DMARC, scoring IP reputation and abuse risk, detecting typosquats, and extracting page content to Markdown."
category: data
service_url: https://netintel.dev
openapi:
  path: openapi.json
---

NetIntel is a keyless, pay-per-call intelligence API. 124 endpoints across DNS and DNSSEC,
SSL/TLS certificate inspection, WHOIS/RDAP and domain lifecycle, email authentication, IP
geolocation and reputation, ASN and subnet tooling, certificate transparency, OSINT lookups,
web and PDF extraction to Markdown, and LLM-backed text tools (classification, translation,
summarisation, structured extraction, embeddings).

There is no account, no API key, and no signup. Every endpoint answers HTTP 402 with an x402
challenge and serves the result once payment settles.

x402 USDC payment accepted on Solana mainnet, and on Base for callers who prefer EVM.

Prices are per request and fixed per endpoint, from $0.001 to $0.65. About half the catalogue
sits at $0.002–$0.01; composite reports run $0.15–$0.25 and the largest LLM gateway routes
reach $0.65. The exact price for every endpoint is in its 402 challenge, so an agent can read
it before committing to a call.

## Spend-aware usage

- Use `/dns/lookup` for record resolution; it already returns A, AAAA, MX, TXT, NS, CNAME, SOA
  and PTR in one call, plus parsed SPF/DKIM/DMARC. Do not chain separate lookups per type.
- Use `/ssl/cert` ($0.003) when you only need issuer, subject, SANs and validity dates.
  `/ssl/analyze` ($0.007) additionally probes protocol and cipher support, so reach for it only
  when the handshake configuration matters.
- Use `/email-auth` for a single domain's SPF/DKIM/DMARC verdict rather than parsing the raw TXT
  records returned by `/dns/lookup` yourself.
- Prefer a single `/domain-report/full` ($0.25) over separately calling DNS, SSL, WHOIS and
  reputation when you need the whole picture; prefer the individual endpoints when you need one
  fact, since four targeted lookups cost less than the composite.
- `/web/fetch` ($0.003) returns raw bytes or JSON for APIs and data files. `/web/extract`
  ($0.003) converts an HTML page or PDF to clean Markdown. Pick by what you intend to parse.
- `/bulk-domain/check` takes up to 50 domains in one request, which is cheaper than 50 calls.
