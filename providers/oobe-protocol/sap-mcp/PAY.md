---
name: sap-mcp
title: "SAP MCP Server"
description: "Hosted Solana-native MCP gateway for Synapse Agent Protocol operations, Solana protocol tools, SNS identity, x402/pay.sh payments, and agent execution workflows."
use_case: "Use when an AI agent needs paid remote access to Solana-native MCP tools for SAP agent registry, discovery, SNS identity, x402 payment flows, Solana RPC, and DeFi protocol operations."
category: devtools
service_url: https://mcp.sap.oobeprotocol.ai
openapi:
  path: openapi.json
---

SAP MCP is the hosted Model Context Protocol gateway for Synapse Agent Protocol and Solana-native agent operations. It exposes MCP tools for SAP registry and discovery, SNS identity, x402/pay.sh payment flows, Solana RPC, and protocol integrations across major Solana ecosystems.

The hosted server is non-custodial. It does not store user keypairs. Paid calls, x402 payment proofs, SAP registration, SNS operations, swaps, settlement, and other value-moving workflows should be authorized from the user's local SAP MCP profile, external signer, or compatible x402 client.

## Spend-aware usage

- Start with free MCP discovery calls such as `initialize`, `tools/list`, `prompts/list`, `resources/list`, and `sap_profile_current`.
- For paid calls, wallet setup, SAP profile creation, agent registration, SNS identity, swaps, settlement, or other signing workflows, optionally run the SAP MCP Wizard first: `npm exec --yes --package @oobe-protocol-labs/sap-mcp-server -- sap-mcp-config wizard`.
- Prefer narrow tool calls over broad searches: pass exact mints, agent public keys, SNS names, protocol IDs, wallet addresses, or transaction signatures when available.
- Use small `limit` values first, then paginate only when the previous result proves useful.
- Reuse identifiers returned by discovery tools instead of repeating enriched searches.
- Estimate paid calls with `sap_x402_estimate_cost` before running premium reads, builders, swaps, registration, settlement, or batch operations.
- For paid hosted calls, use any compatible x402 client that can sign the payment challenge and replay the same MCP request. If the agent runtime does not support x402 replay natively, optionally use SAP MCP's local helper: `npm exec --yes --package @oobe-protocol-labs/sap-mcp-server -- sap-mcp-x402-paid-call --tool sap_list_all_agents --arguments '{"limit":5}' --max-usd 0.02 --confirm`.
- For write/value-moving workflows, preview the transaction, confirm policy limits, and keep the local signer or external signer under user control.
- Keep hosted MCP client config minimal: point the runtime to `https://mcp.sap.oobeprotocol.ai/mcp` and avoid hardcoding wallet paths, RPC overrides, profile names, or private key material in agent configs.
