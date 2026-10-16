---
name: email-verifier
title: "Email Verifier & Validator"
description: "Checks whether a single email address can actually receive mail, returning a valid, risky, or invalid verdict plus the split username and domain, and flags free providers and shared role accounts like admin@ or support@."
use_case: "Use before sending to an address or accepting a signup, to judge deliverability and filter out invalid, disposable, or shared role mailboxes that would bounce or hurt sender reputation."
category: data
service_url: https://email-verifier.underscoredone.com
openapi:
  path: openapi.json
---

Takes one email address and tells you whether it can actually receive mail. Returns a verdict of valid, risky, or invalid, splits the address into username and domain, and flags free providers such as Gmail or Yahoo as well as role accounts like admin@ or support@ that are shared mailboxes rather than personal inboxes. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- One address per call, so filter locally first — drop malformed syntax and addresses on domains you have already verified before paying to check the rest.
- Cache each verdict against the address; results are stable, and re-checking a known-good address on every send is pure spend. For domain-level questions, check the domain once with DNS & WHOIS Lookup instead of verifying many addresses on it.
