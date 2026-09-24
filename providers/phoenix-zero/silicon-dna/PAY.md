---
name: silicon-dna
title: "Phoenix Zero — Silicon DNA"
description: "Behavioral bot/agent classifier. POST session timing signals, get HUMAN / LEGIT_AGENT / MALICIOUS_BOT with confidence, via x402 micropayments. Tells a legitimate high-frequency trading agent apart from a spam script at the gateway."
use_case: "Use as an abuse/fraud pre-check before granting an agent access to a paid or rate-limited resource: RPC gateways, airdrop claims, governance actions, or any endpoint that must tell a real agent from a bot farm. Complements IP allow/deny lists with behavioral signals."
category: security
service_url: https://rtt.phoenix-ai.work
openapi:
  path: openapi.json
---

Silicon DNA is a full-time behavioral bot-detection system. This skill exposes its
3-class agent classifier as a paid x402 endpoint.

## Endpoint

- `POST /api/v1/classify` — send behavioral session signals (entropy, timing variance,
  autocorrelation, Spearman rho, request intervals, optional IP). Returns
  `{"agentClass": "HUMAN|LEGIT_AGENT|MALICIOUS_BOT", "confidence": 0..1, "signals": [...]}`.

## What it detects

Scripted/zero-variance timing (spam bots), low-entropy sessions, static-script patterns
(Spearman correlation), and inconsistent fingerprints — combined into one verdict, with the
contributing signals returned for auditability. The decision is interpretable threshold
logic over the submitted signals, not a black-box model.

## Payment

x402 USDC on Base (eip155:8453), $0.01 per call.
