---
name: tokentrace
title: 'TokenTrace — Solana Launch State Intelligence'
description: 'Evidence-backed Solana launch intelligence for autonomous agents. TokenTrace returns verified token state changes with creator, transaction, slot, deterministic transition IDs, cursor semantics, and provenance.'
use_case: 'Use TokenTrace to monitor verified Solana token launches and retrieve only material state changes since a prior cursor, instead of repeatedly rescanning the chain or buying full token snapshots.'
category: data
service_url: https://api-tokentrace.tailtracedata.com
openapi:
  path: openapi.json
payment:
  protocol: x402
  version: 2
  scheme: exact
  network: solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp
  currency: USDC
  price_usd: '0.005'
status: active_unpublished
---

## When to use TokenTrace

Use TokenTrace when an autonomous agent needs to monitor a Solana mint or verified Pump launch
incrementally and answer: “what materially changed since my last cursor?” It returns only
evidence-backed token lifecycle transitions instead of requiring a chain rescan or a full token
snapshot on every poll.

## Paid capability

`GET /v1/solana/token/{mint}/changes` costs $0.005 USDC using x402 V2
`exact` on Solana mainnet. It returns material state changes after an exclusive cursor with
mint, creator, transaction signature, slot, deterministic transition IDs, and provenance.
Request without payment to receive a `PAYMENT-REQUIRED` challenge, then retry with
`PAYMENT-SIGNATURE`. A successful response includes `PAYMENT-RESPONSE` and preserves the
documented JSON response schema.

## Example agent intents

- “Monitor this Solana mint and tell me only what changed since my last cursor.”
- “Check whether a verified Pump launch has produced any new material state changes.”
- “Return evidence-backed launch transitions for this token without rescanning the entire chain.”
