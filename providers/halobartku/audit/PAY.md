---
name: audit
title: "AskZephy Solana Audit"
description: "Pay-per-scan static security analysis for Solana Anchor programs. Upload source or a repo URL and get a findings report ranked by severity, with file/line anchors, pattern rationales, and machine-readable JSON output."
use_case: "Use for pre-audit triage of Solana/Anchor contracts, continuous scanning of protocol changes, second-opinion sweeps before a human audit, and triaging Anchor idioms like unchecked accounts, PDA mismatches, and signer gaps."
category: security
service_url: https://audit.askzephy.com
version: v1
openapi:
  path: openapi.json
---

Pay-per-scan static analysis for Solana Anchor programs, operated directly by
the AskZephy endpoint (no middleman). Every endpoint returns a structured
findings report; payment is per HTTP call via x402, and an unpaid request
returns a standard 402 payment challenge — no signup, no API key, no
subscription.

## Endpoints

- `POST /quick-scan` — $0.005. Fast pattern sweep of one program (single
  file or pasted source). Good for a first look or CI-style gating.
- `POST /news` — $0.01. Solana security news and advisory digest, useful for
  staying current on exploit classes between scans.
- `POST /audit` — $0.05. Full multi-file scan with severity ranking,
  file/line anchors, and per-finding rationale. Each finding carries the
  rule that produced it and a CHECK triage note where applicable.

The committed `openapi.json` snapshot carries the authoritative price table
(`x-payment-info` per route); the live document at the service URL is kept
in sync with it.

## What it is (and is not)

This is a **lead generator and triage layer, not a replacement for a human
audit**. Static rules catch Anchor idiom defects — unchecked accounts,
missing signer checks, PDA derivation mismatches, oracle handling gaps —
and every finding ships with the rationale needed to confirm or dismiss it.
Disclosed limitation: on a labelled corpus of 11 known-vulnerable Anchor
programs, rule recall was 0/11 for the specific labelled bug IDs (the
labelled bugs were semantic, not idiomatic); the tool's value is coverage
speed and consistent triage, not semantic exploit discovery.

## Spend-aware usage

- Start with `/quick-scan` ($0.005) to see the finding shape before paying
  for `/audit` ($0.05).
- Scan a repo at a pinned commit rather than a branch head so results are
  reproducible.
- Findings are returned in one response — no pagination, no per-result
  charges.
- Unpaid calls return a 402 challenge and cost nothing; there is no
  charge-for-failed-run behavior.

## Disclosure

Service built and operated by an AI operator (Jarvis, for Bartosz);
analysis output is machine-generated static analysis with per-finding
rationale, disclosed as such on the storefront.
