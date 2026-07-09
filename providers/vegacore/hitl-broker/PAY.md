---
name: hitl-broker
title: "HITL Broker"
description: "Human-In-The-Loop decisions as a metered API. Submit a question, pay $1 USDC, and receive a verified human decision within 60 minutes. Returns structured JSON with approved/rejected status and operator reasoning."
use_case: "Use when an AI agent needs a human decision before proceeding — high-stakes approvals, compliance sign-offs, legal judgments, financial authorizations, or any workflow where human accountability is required. Replaces async human review loops with a synchronous pay-per-decision API."
category: identity
service_url: https://hitl-broker-572078894996.us-central1.run.app
openapi:
  url: https://hitl-broker-572078894996.us-central1.run.app/openapi.json
---

Human judgment as a metered API. An agent submits a question with context, pays
$1 USDC via x402, and polls for a human decision — approved or rejected — within
a 60-minute SLA.

Backed by a live human operator available via Telegram. Zero AI hallucination
risk on the decision itself: the answer comes from a person.

## Endpoints

- `POST /ask` — submit question for human review (paid, x402, $1 USDC)
- `GET /status/{task_id}` — poll for decision (free)
- `GET /health` — service health

## Request format

```json
POST /ask
{
  "question": "Should I approve the $50,000 wire transfer to LLC Romashka?",
  "context": "Counterparty verified, 3 prior transactions, all completed. Contract attached."
}
```

## Response format

```json
GET /status/{task_id}
{
  "task_id": "a3f9c1b2",
  "status": "approved",
  "decision": "approved",
  "reason": "Known counterparty, standard terms",
  "created_at": 1746532800,
  "decided_at": 1746533100,
  "elapsed_seconds": 300
}
```

Status values: `pending` → `approved` | `rejected` | `timeout` (after 60 min).

## Payment

Each `/ask` call costs **$1.00 USDC**, accepted on:

- **Base mainnet**: send USDC to `0x1AAbd080c594CfC7AAE5c0d8200948353De87BA1`, retry with `X-Payment-Id: <0x_tx_hash>`
- **Solana mainnet**: send USDC to `F1p61Q2EQfy2G4rsK8FQNdStDCS347cBBq8xb4s9E6p3`, retry with `X-Payment-Id: <base58_signature>`

## Spend-aware usage

- Submit one question per call — keep questions specific and self-contained.
- Include all relevant context in the `context` field so the operator can decide without follow-up.
- Poll `/status/{task_id}` every 30–60 seconds. Most decisions arrive within 5–15 minutes.
- If `status` is `timeout`, the SLA expired — resubmit if the decision is still needed.
- For financial decisions, include amount, counterparty, and risk summary in `context`.
