---
name: x402-audit
title: "x402 Security Auditor"
description: "Pay $0.99 USDC to run a static + dynamic security audit on any public x402 GitHub repo. Checks CORS misconfiguration, payment-bypass patterns, exposed secrets, live auth-bypass, and info-leak probes."
use_case: "Use to audit any public GitHub repository that implements x402 payments before integrating it into an agent workflow. Returns severity-rated findings (CRITICAL → INFO), fix guidance, and an overall security verdict."
category: security
service_url: https://audit.hfsp.xyz
openapi:
  path: openapi.json
---

x402-audit runs automated security checks on any public GitHub repo that implements the x402 payment protocol. It combines static code analysis with live dynamic probing against the deployed endpoint.

Payment is $0.99 USDC on Solana mainnet per audit. The service auto-detects whether the submitted tx hash is a Base or Solana transaction — both chains are accepted.

## What it checks

**Static analysis (code scan):**
- CORS reflected-origin + credentials misconfiguration
- Payment header presence-only bypass (`if headers['x-payment']` without verification)
- Hardcoded secrets — private keys, API keys, mnemonics in source

**Dynamic probing (live endpoint):**
- Auth bypass — sends a fake `X-Payment` header and checks if the endpoint accepts it
- CORS credentials probe — checks if `Access-Control-Allow-Credentials: true` is reflected with an arbitrary origin
- Info-leak probe — checks if error responses expose stack traces or internal paths

## Output

Returns a JSON report with:
- `summary.verdict` — PASS / REVIEW / FAIL
- `findings[]` — each finding has `severity`, `title`, `detail`, `location`, `fix`
- `meta` — repo, commit SHA, files scanned, dynamic probes run

## Spend-aware usage

- One payment covers one full audit (static + dynamic if endpoint found).
- Pass `endpoint` in the POST body to override auto-detected live URL — saves a GitHub API call.
- Audit the repo once; re-audit only when the payment or security code changes.
- The service auto-detects the live endpoint from `README.md` or repo metadata — no need to look it up separately.
