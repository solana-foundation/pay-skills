---
name: priorseal
title: "PriorSeal"
description: "Paid, signed EVM integration-readiness reports verify configured RPC reachability and an address's public bytecode presence without custody or transaction execution."
use_case: "Use before integrating an EVM agent or wallet when you need a paid, signed read-only check of a chain RPC and a public address's bytecode presence."
category: security
service_url: https://priorseal.xyz
version: v1
openapi:
  path: openapi.json
---

PriorSeal provides a paid, read-only integration-readiness report. The listed
endpoint checks a configured EVM RPC and public bytecode presence, then returns a
short-lived Ed25519-signed report. It does not establish address control, safety,
ownership, authorization, custody, or transaction execution.

## Spend-aware usage

- Query the exact chain and public address an agent is preparing to integrate.
- Reuse a report only until its stated expiry time.
- Treat the report as configuration evidence, not as authority to transact.
