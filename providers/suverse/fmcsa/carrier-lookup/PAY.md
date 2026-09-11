---
name: carrier-lookup
title: "FMCSA Carrier Lookup via SuVerse GovHub"
description: "Pay-per-call lookup of US motor carrier safety data (USDOT registration, operating status, safety rating, fleet size, address) via FMCSA QCMobile, unified JSON, no FMCSA registration required."
use_case: "Use when an AI agent needs to verify a US trucking carrier or broker by USDOT number without managing FMCSA credentials, registration, or rate limits."
category: data
service_url: https://api.suverse.io
openapi:
  path: openapi.json
---

# FMCSA Carrier Lookup via SuVerse GovHub

SuVerse GovHub is a universal gateway for US government data APIs designed for AI agents. This provider covers the FMCSA carrier safety endpoint, the most common verification need in US trucking and freight automation.

## What this provides

- USDOT number lookup → unified carrier record
- Operating status, safety rating, fleet size, addresses
- No FMCSA developer registration required for the agent
- Production HTTPS endpoint, sub-second response, cached
- Single endpoint pattern `{service, params}` extensible to other US government APIs (USCIS, SAM.gov, SEC, Census, FDA, USPS) — all coming soon under the same `service_url`

## Spend-aware usage

- Per call: $0.005 (5000 micro-USDC)
- One call per USDOT lookup, no hidden fan-out
- Free tier: not yet, contact for evaluation access
- Agent should call once per unique USDOT and cache the result; carrier records change infrequently

## Why aggregation

US government APIs each require separate registrations, demos with officers (USCIS), and production review processes. This makes it impractical for agents and indie builders to integrate them directly. SuVerse GovHub holds the credentials, normalizes responses, and exposes a single per-call endpoint via Pay.sh.
