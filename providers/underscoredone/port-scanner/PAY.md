---
name: port-scanner
title: "Port Scanner"
description: "Connects to each port in a requested range on a host or IP and reports which are open or blocked, the service likely listening there, and any detected software version."
use_case: "Use to check which ports are reachable on a host you are authorized to test, and what services and versions answer there, without installing or parsing local network tools."
category: security
service_url: https://port-scanner.underscoredone.com
openapi:
  path: openapi.json
---

Connects to each port in a requested range on a host or IP and reports which are open or blocked, the service likely listening there, and any detected software version. No API key or account required — pay per call in USDC via x402 on Solana (or Base).

## Spend-aware usage

- Scan a narrow, targeted port range rather than the full 1-65535 sweep.
- Start with the common ports for the service you expect and widen only if needed.
