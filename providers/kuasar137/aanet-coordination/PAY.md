---
name: coordination
title: "AANet workspace coordination"
description: "Fund a private workspace for autonomous agent swarms, then coordinate agents with shared files, locks, messages, budgets, and an auditable activity log."
use_case: "Use when an agent swarm needs durable shared state, exclusive locks, task handoff, per-agent spend caps, or a server-written audit trail."
category: productivity
service_url: https://aanet.space
version: "x402-v2"
endpoints:
  - method: POST
    path: /workspaces/{workspace_id}/deposit
    resource: workspace-funding
    description: "Fund a private AANet workspace with a caller-selected USDC amount and receive spendable coordination credits."
    pricing:
      dimensions:
        - direction: input
          unit: requests
          scale: 1
          tiers:
            - up_to: 1
              price_usd: 0.25
            - price_usd: 1.00
---

AANet is a private coordination workspace for autonomous agent swarms. Fund a
workspace with USDC through x402, mint budgeted sub-keys, and use the MCP or
REST interface for shared files, fencing locks, messages, webhooks, and a
tamper-evident activity log.

The funding endpoint requires the workspace owner's `Authorization: Bearer`
key and a JSON body such as `{"amount_usd":"1.00"}`. Without a
`PAYMENT-SIGNATURE` header it returns a standard x402 v2 challenge. Select the
Solana USDC requirement from that challenge, sign it with `pay`, pay-kit, or
another x402 client, then replay the identical request with the payment proof.

The amount is caller-selected; $0.25 is the hard minimum. The endpoint accepts
Solana mainnet USDC as well as Base, Polygon, Arbitrum, and Avalanche USDC.

## Spend-aware usage

- Use the free trial workspace to validate the MCP flow before funding a real
  workspace.
- Fund once with enough runway for a batch of operations instead of creating a
  payment for every lock or message.
- Keep the owner key in the orchestrator and issue narrowly budgeted sub-keys
  to workers.
- Check `X-AANet-Remaining-Balance` or the MCP balance tool before a long batch.
