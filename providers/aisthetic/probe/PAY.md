---
name: probe
title: "aisthetic.service — Verifiable Receipts Probe"
description: "Free public-tier endpoint of aisthetic.service, a verifiable agent commerce gateway on Solana. Each paid call returns an Ed25519-signed receipt independently verifiable on aisthetic.services. 401 → 402 → 200 + X-AgentTrust-Receipt-Id."
use_case: "Use to learn, test, or wire up a payment-gated API that returns a portable signed receipt. The production mainnet billing path exists separately; the probe is the free public tier so agents practise the flow without spending stablecoin."
category: devtools
service_url: https://sandbox.aisthetic.services
openapi:
  path: openapi.json
---

`aisthetic.service` is a 7-stage gateway (identity → policy → risk → payment → upstream → receipt → audit) that sits in front of any HTTP API. The probe endpoint, `POST /g/aisthetic/probe`, walks an agent through the full 401 → 402 → 200 flow and produces a real Ed25519-signed receipt anyone can verify on the public landing site without an API key.

The 402 response from this gateway is JSON-shaped (`type: "payment_required"`, machine-readable `paymentMethods[]`), distinct from the `WWW-Authenticate: Payment` header used by `pay.sh`'s MPP debugger. Both formats co-exist as machine-readable payment requirements at the 402 layer; an agent stack can support either.

## Spend-aware usage

- The probe is the **free public tier**: settlement is satisfied by `X-AgentTrust-Sandbox-Proof: demo-paid` (no real stablecoin moves). Use it to validate your client-side 402 → retry-with-proof loop and to capture sample receipts before pointing your agent at the production billing path.
- One paid call → one receipt. Do not retry at high concurrency unless you are testing the platform's velocity policy — it engages and starts denying with HTTP 403 after a burst.
- Read the receipt id off the `X-AgentTrust-Receipt-Id` response header. Every receipt is independently verifiable (no key) at `https://aisthetic.services/r?id=<receipt-id>`.
- Recent activity is published with bounded hashes (no PII) at `GET /v1/public/activity`. Useful for agents that want to see what other agents did recently without reading raw logs.
- The production gateway uses real x402 with USDC settlement on Solana mainnet. Contact the operator for a production API key; the probe is intentionally free.

## Receipt verification

```
$ curl -i https://sandbox.aisthetic.services/g/aisthetic/probe \
    -H "Authorization: Bearer ak_demo_agent" \
    -H "X-AgentTrust-Sandbox-Proof: demo-paid"

HTTP/2 200
x-agenttrust-receipt-id: 98abf39b-66cb-486e-894d-75bacfa43c2b

# verify the receipt anywhere, no auth:
https://aisthetic.services/r?id=98abf39b-66cb-486e-894d-75bacfa43c2b
```

A blackbox stress-test agent for the same gateway lives at [github.com/den0th/aisthetic-hard-test](https://github.com/den0th/aisthetic-hard-test) — it runs 30+ scenarios across 5 acts (coverage, adversarial, pay.sh interop, real Solana mainnet trade, stress) and produces ~150 signed receipts per run.
