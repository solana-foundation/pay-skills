---
name: devtools
title: "Cult OS Developer Toolkit"
description: "Cult OS provides HTTP security-header and Dockerfile audits, x402 payment-quote inspection, Base Builder Code validation, and Bazaar metadata validation. Five pay-per-request APIs return synchronous structured JSON results."
use_case: "Use for reviewing a Dockerfile before deployment, inspecting public HTTPS security headers, reading an x402 endpoint's payment terms, validating Base Builder Code syntax, or checking Bazaar discovery metadata before publishing a paid API."
category: devtools
service_url: https://www.cultos.dev
openapi:
  path: openapi.json
---

Five synchronous developer tools accept exact USDC payments on Solana mainnet
and Base. Send the documented JSON body, inspect the live x402 v2 challenge,
select the Solana option, and retry with payment authorization. No API key or
Cult OS account is required. Results and a settlement receipt arrive in the
same response.

| Endpoint | Result | USDC per request |
| --- | --- | --- |
| `POST /services/x402-lens` | Public endpoint reachability and advertised payment terms | 0.001 |
| `POST /services/builder-code-validator` | Base Builder Code syntax and request header; registration is not checked | 0.001 |
| `POST /services/bazaar-metadata-check` | Bazaar extension validation errors | 0.001 |
| `POST /services/http-header-audit` | Observed HTTP security headers and findings | 0.001 |
| `POST /services/dockerfile-audit` | Static Dockerfile findings without executing the file | 0.01 |

Only these five endpoints are included in this Solana provider. Other Cult OS
services have separate payment and execution contracts. Solana payments go
directly to the service recipient; x402aff payouts apply only to Base.

## Spend-aware usage

- Choose the one tool needed for the task; there is no bundled charge.
- Cap payment at the listed per-request price and verify the live quote.
- Use public inputs. Do not send credentials or private repository contents.
- x402 Lens reads a quote; it does not pay or execute the inspected service.
- A finding or `valid: false` can be a useful completed audit, not a delivery failure.
- Reconcile an uncertain settlement before authorizing another payment.
