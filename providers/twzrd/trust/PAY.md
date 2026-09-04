---
name: trust
title: "TWZRD Agent Reputation Rails"
description: "Pre-spend trust check for x402 agents on Solana. Free preflight + merchant_card; paid V6 trust receipt; seller reputation, wash flags, leaderboard, and watches."
use_case: "Use before any x402 payment for free preflight or merchant checks, optional paid trust receipts, seller-decay watches, and agent discovery through the leaderboard and directory."
category: security
service_url: https://intel.twzrd.xyz
openapi:
  path: openapi.json
---

TWZRD is the independent trust layer for Solana x402 payments. Before an agent pays any endpoint, TWZRD answers "should I pay this counterparty?" from the live on-chain payer graph — not self-reported reputation.

**Before payment:** Free preflight returns `allow` / `warn` / `block` with a readiness card. Verified clean agents get `allow`. Suspicious, unknown, or thin-history wallets get `warn` (elevated risk — buy the $0.05 receipt for signed proof). The heaviest wash wallets and scripted fleets can escalate to `block`. Free `GET /v1/intel/merchant_card/{wallet}` surfaces seller-side demand quality (unique payers, wash flags) without charging.

**During payment:** The optional buyer-side `twzrd-x402-gate` can abort before signing. The separate opt-in TWZRD settle rail can refuse settlement when the counterparty scores below threshold. Both paths stop before USDC leaves your wallet; neither is enabled merely by calling the free preflight.

**After payment:** Paid signed V6 trust receipt ($0.05 USDC on `GET /v1/intel/trust/{pubkey}`). Portable, Ed25519-signed, keccak-leafed, offline-verifiable via free `POST /v1/receipts/verify` (sample first with `GET /v1/receipts/example`). Receipt leaf versions supported: v5 and v6. Cheap entry: `GET /v1/intel/quick/{pubkey}` at $0.001 for tier + score only. Paid seller track-record: `GET /v1/intel/merchant/{pubkey}` at $0.05.

**Retention:** Register a re-call watch (`POST /v1/intel/watch` / MCP `twzrd_watch_*`) so TWZRD re-checks a seller when the receipt's `recheck_after_unix` elapses.

**Discovery:** Live leaderboard of observed Solana x402 payers (always read live totals from `get_top_intel_agents` / cohort surfaces — do not hardcode). Free embeddable SVG badges for wallets and merchants. Free three-bazaar directory with wash overlay. MCP server with **22 tools** at `https://intel.twzrd.xyz/mcp`.

x402 USDC payment accepted on Solana mainnet. Gas is sponsored on the paid intel routes — the agent only pays the USDC amount.

## Spend-aware usage

- Always start free: `POST /v1/intel/preflight` with `seller_wallet` and `price_usdc`. Costs nothing.
- Optional free seller teaser: `GET /v1/intel/merchant_card/{wallet}` before a larger spend.
- `decision=allow` → proceed with payment (or buy a portable receipt if you need offline proof).
- `decision=warn` → elevated risk. Buy `GET /v1/intel/trust/{pubkey}` ($0.05) for signed proof before paying.
- `decision=block` → do not pay. Wash wallet, scripted fleet, or known-bad actor. Abort.
- Cheap paid check: `GET /v1/intel/quick/{pubkey}` ($0.001) for tier + score only.
- Paid seller track-record: `GET /v1/intel/merchant/{pubkey}` ($0.05).
- Embed free badges: `GET /v1/intel/badge/{pubkey}`, `/v1/wash/badge/{wallet}`, `/v1/reputation/badge/{merchant}`.
- Browse the live graph: `GET /v1/intel/get_top_intel_agents` and `GET /v1/intel/x402-directory`.
- Install MCP: `pip install twzrd-mcp` or `npx twzrd-mcp-server`. Set `TWZRD_MCP_PAYMENTS_ENABLED=1` only when you intentionally want paid tools.
