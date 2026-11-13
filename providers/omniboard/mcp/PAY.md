---
name: mcp
title: "OmniBoard MCP"
description: "Paid MCP server for Solana DeFi. Agents read wallet portfolio, prices, DeFi positions and prediction markets, then prepare custody-free swaps, bridges, limit orders and launchpad actions for the user to sign. Charged per call in USDC."
use_case: "Let AI agents read a Solana wallet's portfolio and prepare custody-free DeFi, swap, bridge, limit order, prediction market and token launchpad transactions for the user to review and sign in their own wallet."
category: finance
service_url: https://api.omniboard.pro
version: v1
openapi:
  path: openapi.json
---

OmniBoard MCP is a paid Model Context Protocol (MCP) server that exposes OmniBoard's Solana DeFi actions to AI agents over Streamable HTTP at `POST /mcp`.

The server is custody-free. It only reads data, prepares transactions, or relays transactions the user already signed. It never holds private keys and never signs for the user.

Every paid `tools/call` returns an HTTP 402 payment challenge (MPP) requesting a small USDC payment on Solana. The agent pays and replays the exact same request with the `X-PAYMENT` header. Settlement is verified on-chain before the tool executes.

## How agents should use it

Prefer the semantic intent tools over the lower-level protocol tools:

* `list_intents`: list available semantic intents with risk, kind, and required fields. Free.
* `describe_intent`: return the full definition of one intent. Free.
* `execute_intent`: run an intent. Paid, except `dryRun=true` or unconfirmed financial intents.

Recommended flow:

1. Call `list_intents`, then `describe_intent` for the chosen intent.
2. For financial intents, show the action to the user and get explicit confirmation.
3. Call `execute_intent` with `confirmed=true` only after the user confirms.
4. Let the user review and sign returned transactions in their own wallet.
5. Submit only user-signed transactions through the matching submit intent.

## Capabilities

* Portfolio and token prices
* DeFi earning opportunities and positions (Orca, Raydium, Meteora, and more)
* Jupiter limit orders
* Prediction markets
* Swaps and bridges via LI.FI
* Token launchpad reads, prepare, and submit

## Spend-aware usage

* Read and quote intents are cheaper signals than prepare or submit. Read first.
* Use `dryRun=true` to inspect the confirmation payload for free before paying.
* Reuse `list_intents` and `describe_intent` results instead of re-calling them.
* Send one `tools/call` per request. Batch JSON-RPC is not supported and each paid call is charged and audited individually.
* Replaying the exact same paid request after a tool error reuses the same payment within a short recovery window, so do not pay twice for the same payload.

Documentation: https://omniboard.pro
