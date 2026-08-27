---
name: domain-availability-checker
title: "Domain Availability Checker"
description: "Checks up to 10 domains against official RDAP registry data and labels each registered, unregistered, or indeterminate — structured registry answers with no free-text WHOIS parsing."
use_case: "Use to check whether domain names are already registered before brainstorming, buying, or brand-protection filing, using authoritative registry data rather than a reseller's search box."
category: data
service_url: https://domain-availability-checker.underscoredone.com
openapi:
  path: openapi.json
---

Checks up to 10 domains against official RDAP registry data and labels each registered, unregistered, or indeterminate — structured registry answers with no free-text WHOIS parsing. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Batch up to 10 candidate names per call.
- Filter your candidate list locally (length, TLD, keywords) before paying to check it.
