---
name: domain-age-checker
title: "Domain Age Checker"
description: "For a list of domains, returns exactly how old each one is, its first registration date, its expiration date, and how much time remains before it expires. Works across 100+ TLDs."
use_case: "Use to judge a domain's history and trustworthiness — spotting newly registered suspicious domains, vetting link or acquisition targets, or researching competitor domain timelines."
category: data
service_url: https://domain-age-checker.underscoredone.com
openapi:
  path: openapi.json
---

For a list of domains, returns exactly how old each one is, its first registration date, its expiration date, and how much time remains before it expires. Works across 100+ TLDs. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Send the whole list in one call rather than per domain.
- Age changes predictably — store the registration date and compute age locally later.
