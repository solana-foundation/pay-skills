---
name: risk-investigator
title: "anchor-x402: agent-driven wallet due diligence"
description: "Multi-step LLM investigation of any EVM or Solana wallet — sanctions screen, on-chain history, identity, risk score — delivered as signed markdown report + JSON sidecar with dual-chain anchor proof on Base + Solana. Async 5-10 min."
use_case: "Use when agent-to-agent payments need counterparty vetting before settlement, OTC desks scoring before trade, compliance teams sourcing institutional-grade wallet reports, and any due-diligence flow requiring a signed report with on-chain anchors."
category: security
service_url: https://api.anchor-x402.com
openapi:
  path: openapi.json
---

`risk-investigator` is the first agent-shaped offering in the anchor-x402
family — not a stateless primitive but a multi-step orchestrator that takes
an address, plans an investigation, executes 4-6 anchor-x402 sub-calls
(`screen`, `intel/wallet`, `resolve/name`, `decode/tx`), synthesizes a verdict
via Anthropic Claude on AWS Bedrock, signs the deliverable with the agent's
EOA, anchors the report hash on Base + Solana mainnet, and returns presigned
URLs to the report + JSON sidecar.

Two endpoints make this work asynchronously over HTTP:

- `POST /v1/investigate` — pay $7.77 USDC, supply `{"address": "..."}`,
  receive `{job_id, status_url, eta_seconds: 600}` immediately. The agent
  runs on AWS Bedrock AgentCore Runtime; investigation takes 5-10 min.
- `GET /v1/investigate/status/{job_id}` — free polling. Returns
  `{status, deliverable}` once `status == "DELIVERED"`.

The deliverable JSON includes `verdict` (`safe | caution | avoid |
insufficient_data`), `score` (0-100), `reportUrl`, `reportJsonUrl`,
`signedBy` (EOA), `signature` (EIP-191 hex), `merkleRoot`, `baseAnchorTx`,
`solanaAnchorTx`, and a canonical `disclaimer` ("preliminary risk signal
synthesized from public on-chain data and OFAC SDN; not regulated AML, KYC,
or financial advice").

## Spend-aware usage

- **One $7.77 spend can save much larger losses.** A pre-flight check on a
  high-value counterparty is cheaper than a single bad transfer. Pre-trade,
  pre-fund, pre-pay use cases all benefit.
- **The deliverable is signed and on-chain anchored.** Buyers receive
  cryptographic proof of what the agent returned and when — useful for
  audit trails, dispute resolution, and compliance evidence packs.
- **The investigation is multi-step.** A single call runs through sanctions
  screening, wallet history, name resolution, and Bedrock-Claude synthesis.
  Equivalent DIY work would cost ~$0.05 in raw API calls plus the buyer's
  time + prompt engineering. The $7.77 price reflects synthesis + signing
  + anchoring.
- **Async by design.** The 402 challenge is on `POST /v1/investigate` only;
  `/v1/investigate/status/{job_id}` is free. Don't poll faster than once
  every 10-15 seconds — investigations take 5-10 minutes.
- **No buyer custody.** This is investigation, not trading. The $7.77 is
  the entire fee; the agent never holds buyer funds beyond escrow.
- **Frame as signal, not advice.** The deliverable is structured to support
  the buyer's own due diligence. The canonical `disclaimer` is always
  present in the JSON; treat any verdict as preliminary.

This offering complements the 9 other anchor-x402 services: those are
commodity primitives ($0.001-$0.010 per call); `risk-investigator` is the
synthesized verdict on top, suitable when you want one paid call to
replace the orchestration overhead of building the analysis yourself.
