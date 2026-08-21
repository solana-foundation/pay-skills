---
name: x402-audit
title: "x402 Security Auditor"
description: "Pay $0.99 USDC to audit any public x402 GitHub repo — 12 checks: CORS null-origin, subdomain bypass, verb tampering, JWT alg-confusion, source leaks, payment replay, cloud SSRF, pre-flight bypass, and hardcoded secrets."
use_case: "Use to audit any public GitHub repository that implements x402 payments before integrating it into an agent workflow. Returns severity-rated findings (CRITICAL → INFO), fix guidance, and an overall PASS / REVIEW / FAIL verdict."
category: security
service_url: https://audit.hfsp.cloud
openapi:
  path: openapi.json
---

x402-audit runs automated security checks on any public GitHub repo that implements the x402 payment protocol. It combines static code analysis with live dynamic probing against the deployed endpoint.

Payment is $0.99 USDC (Solana mainnet or Base mainnet) per audit. The service auto-detects the chain from the submitted tx hash — both are accepted.

## What it checks

**Static analysis (code scan):**
- CORS reflected-origin + credentials misconfiguration
- Payment header presence-only bypass (`if headers['x-payment']` without verification)
- Hardcoded secrets — private keys, API keys, mnemonics in source
- Source exposure patterns — `.env`, `.git/HEAD`, `openapi.json`, `.js.map` committed or publicly reachable
- HTTP verb gate gaps — payment check only on `POST`, missing on `GET`/`PUT`/`PATCH`/`DELETE`
- JWT alg-confusion — `"alg":"none"` or HS256/RS256 confusion in payment receipt verification

**Dynamic probing (live endpoint):**
- Auth bypass — sends a fake `X-Payment` header and checks if the endpoint accepts it
- CORS null-origin probe — tests `Origin: null` to detect sandboxed-iframe trust
- CORS subdomain-regex bypass — tests `evil.yourdomain.com` to catch unanchored wildcard patterns
- OPTIONS pre-flight bypass — sends payment-gated request via OPTIONS verb to check if gate is skipped
- HTTP verb tampering — tries `GET`/`PUT`/`X-HTTP-Method-Override: DELETE` on POST-only payment endpoints
- Payment replay probe — re-submits a prior `X-Solana-Tx` signature against a different endpoint to detect cross-endpoint reuse
- Cloud metadata SSRF — if endpoint accepts URL input, probes `169.254.169.254` (AWS IMDSv1) and `metadata.google.internal` (GCP)
- Info-leak probe — checks if error responses expose stack traces or internal paths

## Output

Returns a JSON report with:
- `summary.verdict` — PASS / REVIEW / FAIL
- `findings[]` — each finding has `severity`, `title`, `detail`, `location`, `fix`
- `meta` — repo, commit SHA, files scanned, probe categories executed

## Spend-aware usage

- One payment covers one full audit (static + dynamic if endpoint found).
- Pass `endpoint` in the POST body to override auto-detected live URL — saves a GitHub API call.
- Audit once; re-audit only when payment or security-critical code changes.
- The service auto-detects the live endpoint from `README.md` or repo metadata.
