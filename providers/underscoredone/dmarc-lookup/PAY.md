---
name: dmarc-lookup
title: "DMARC Lookup"
description: "Checks the DMARC email-security record for one or many domains at once, returning whether a valid record exists, the policy (none, quarantine, or reject), reporting addresses, and the raw record."
use_case: "Use to audit domain spoofing protection across a list of domains — verifying DMARC exists, reading the enforcement policy, and confirming aggregate/forensic reporting is configured."
category: security
service_url: https://dmarc-lookup.underscoredone.com
openapi:
  path: openapi.json
---

Checks the DMARC email-security record for one or many domains at once, returning whether a valid record exists, the policy (none, quarantine, or reject), reporting addresses, and the raw record. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Send every domain in one batched call instead of one call per domain.
- DMARC records change rarely — cache results and re-check only after a DNS change.
