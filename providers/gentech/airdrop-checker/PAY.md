---
name: airdrop-checker
title: "Airdrop Checker — Multi-Chain Eligibility"
description: "Check wallet eligibility for airdrops across multiple blockchain ecosystems. Covers Base, Solana, Avalanche, BNB, and OKX."
use_case: "Use when an agent or user needs to check which airdrops a wallet qualifies for across multiple chains."
category: finance
service_url: https://gentech-x402-gateway.jordanjones0902.workers.dev
openapi:
  path: openapi.json
pricing:
  per_request: 0.010
---

# GenTech Labs — Airdrop Checker

Multi-chain airdrop eligibility checker. Returns protocol name, eligibility status, estimated value, claim deadline, and tier.

## Endpoints

| Endpoint | Description | Price |
|----------|-------------|-------|
| `GET /api/airdrops/check` | Multi-chain airdrop eligibility | $0.01 |
