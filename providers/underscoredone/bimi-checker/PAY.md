---
name: bimi-checker
title: "BIMI Checker"
description: "Checks whether a domain is correctly set up to display its brand logo beside emails in Gmail, Apple Mail, and Yahoo: BIMI record, SVG logo format, VMC certificate validity, and DMARC strictness."
use_case: "Use to validate or debug a domain's BIMI email-branding setup before or after rollout, checking the record, logo file, certificate, and the DMARC policy BIMI requires."
category: security
service_url: https://bimi-checker.underscoredone.com
openapi:
  path: openapi.json
---

Checks whether a domain is correctly set up to display its brand logo beside emails in Gmail, Apple Mail, and Yahoo: BIMI record, SVG logo format, VMC certificate validity, and DMARC strictness. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Check the apex domain first — subdomains usually inherit the same setup.
- Only re-check after a DNS, logo, or certificate change; results are stable otherwise.
