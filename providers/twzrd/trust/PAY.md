---
name: trust
title: "TWZRD Agent Reputation Rails"
description: "Pre-spend trust check for x402 agents on Solana. Free preflight (allow/warn/block) before any payment. Paid signed V6 trust receipt for portable proof. Wash detection, provider reputation, and live leaderboard — no API keys."
use_case: "Use before paying any x402 endpoint to check if the counterparty is a real agent or a wash wallet. Use during payment to gate settlement on trust. Use after payment to get a portable, offline-verifiable signed receipt. Use for discovery to find top-ranked x402 agents and services."
category: security
service_url: https://intel.twzrd.xyz
openapi:
  path: openapi.json
---

TWZRD is the independent trust layer for Solana x402 payments. Before an agent pays any endpoint, TWZRD answers "should I pay this counterparty?" from the live on-chain payer graph — not self-reported reputation.

**Before payment:** Free preflight returns `allow` / `warn` / `block` with a readiness card. Clean agents with real on-chain history get `allow`. Wash wallets and scripted fleets get `block`.

**During payment:** Optional settle-time trust gate (`canSpendSafely`) refuses to settle if the counterparty scores below threshold — before USDC leaves your wallet. Ships as `@wzrd_sol/plugin-trustgate` (npm) and `twzrd-x402-gate` (npm).

**After payment:** Paid signed V6 trust receipt ($0.05 USDC). Portable, Ed25519-signed, keccak-leafed, offline-verifiable with `npx twzrd-receipt-verifier`. No trust in TWZRD required.

**Discovery:** Live leaderboard of 97K+ observed x402 payers. Free embeddable SVG badges for any wallet (wash tier) or merchant (reputation tier). MCP server with 18 tools at `https://intel.twzrd.xyz/mcp`.

x402 USDC payment accepted on Solana mainnet. Gas is sponsored — the agent only pays the USDC amount.

## Spend-aware usage

- Always start with the free preflight: `POST /v1/intel/preflight` with `seller_wallet` and `price_usdc`. Costs nothing. Returns decision in milliseconds.
- `decision=allow` → the counterparty is a verified clean agent. Proceed with payment.
- `decision=warn` → elevated risk. Buy the $0.05 trust receipt (`GET /v1/intel/trust/{pubkey}`) for signed proof before paying.
- `decision=block` → do not pay. Wash wallet, scripted fleet, or known-bad actor. Abort the transaction.
- Use `GET /v1/intel/badge/{pubkey}` to embed a free SVG trust-tier badge in any marketplace listing. Cacheable (1h).
- Use `GET /v1/intel/get_top_intel_agents` to browse the live leaderboard of observed x402 payers before selecting a service.
- Install the MCP server for auto-pay: `pip install twzrd-mcp` (Python) or `npx twzrd-mcp-server` (Node). Set `TWZRD_MCP_PAYMENTS_ENABLED=1` to enable paid tools.
