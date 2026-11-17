---
name: aptu
title: "aptu.dev"
description: "Machine-payable x402 API for autonomous agents: typed decision judging, domain agent-readiness audits and fixes, x402 conformance pre-flight, BTC/SOL regime gates, and Quebec enterprise and construction licence lookups."
use_case: "Typed noul/choice/score judgments for agents or CI, domain readiness audits and fixes, x402 pre-flight, BTC/SOL regime gates, and Quebec enterprise or licence lookups."
category: devtools
service_url: https://aptu.dev
version: v1
openapi:
  path: openapi.json
---

aptu.dev is machine-payable API infrastructure for autonomous agents. All paid
endpoints speak x402 v2: an unpaid request returns 402 with a PAYMENT-REQUIRED
header; sign the exact-scheme authorization and retry with a PAYMENT-SIGNATURE
header; a settled response carries PAYMENT-RESPONSE with the settlement
receipt. USDC payment accepted on Base mainnet and Solana mainnet.

Capabilities:

- Typed decision judging: ask named yes/no, choice, or ordered-score questions
  about JSON state and get calibrated answers with a settlement receipt and an
  Ed25519-signed attestation verifiable offline.
- Domain agent-readiness: audit any domain's surfaces for agents, re-probe and
  generate ready-to-host artifacts, and pre-flight a resource's x402
  conformance before listing.
- Market regime gates: spot-vs-moving-average bull/bear checks for BTC and
  SOL, plus a combined cross-rail verdict.
- Quebec open-data lookups: enterprise resolution by NEQ or name and
  construction licence resolution by RBQ number, NEQ, or holder name prefix.

The committed OpenAPI document mirrors the live spec at
`https://aptu.dev/v1/openapi.json`; the endpoint list, per-call USD pricing,
and free discovery surfaces (x402 manifest, catalog, OpenAPI, x401 demand
probe, self-check) are all published there and in `https://aptu.dev/v1/catalog`.

## Spend-aware usage

- Validate signing and retry logic on the cheapest paid endpoint before
  spending on higher-priced ones.
- Use the free x401 demand probe to confirm challenge handling without any
  charge.
- Domain audits return the full report in one call, so no need to fetch
  individual surface files separately.
