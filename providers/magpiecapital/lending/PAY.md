---
name: lending
title: "Magpie"
description: "Agent-native lending protocol on Solana: live LendingPool state across memecoin (V1), RWA (V3), and in-vault exit (V4) strategies, the approved-collateral catalog (170+ tokens), the permissionless liquidation feed, 24h aggregates, and loan/wallet lookups."
use_case: "Use for Solana lending-pool state, collateral eligibility checks, liquidation-bot data feeds, past-due loan discovery, borrower loan history, credit and tier lookups, and routing agents to memecoin or RWA-collateralized SOL borrowing."
category: finance
service_url: https://x402.magpie.capital
version: v1
openapi:
  path: openapi.json
---

Magpie is a permissionless, agent-native lending protocol on Solana that an
autonomous agent can drive end-to-end with no signup, no API key, and zero
custody — the service holds no keys and returns unsigned transactions the
agent signs locally.

An agent borrows SOL against its own memecoin collateral (V1) or tokenized
stock / RWA collateral (V3), can arm in-vault take-profit / stop-loss exit
orders on its own loan (V4 — proceeds stay in the loan's vault and the loan
stays Active), and repays with a borrower-signed transaction. 170+ tokens are
approved as collateral.

The endpoints listed here are the **free, no-payment** data and routing feeds:

- `/api/v1/pools` and `/api/v1/pool` — live on-chain LendingPool state for the
  V1 (memecoin), V3 (RWA), and V4 (in-vault exit) strategies.
- `/api/v1/collateral/eligible` — catalog of every token currently approved as
  Magpie collateral (mint, symbol, decimals, category). First-touch endpoint
  for any agent integrating Magpie.
- `/api/v1/markets/liquidatable` — active V1/V3 loans at or past their on-chain
  due timestamp; the canonical liquidation-bot data feed. The liquidate
  instruction is permissionless on-chain, so any wallet can call it and receive
  the liquidator reward.
- `/api/v1/agent/protocol-pulse` and `/api/v1/agent/activity` — 24h protocol
  aggregates and anonymized recent borrows / repays / liquidations.
- `/api/v1/wallet/{wallet}/loans`, `/api/v1/loan/by-pda/{loanPda}`, and
  `/api/v1/loan/{loanId}` — loan lookups across V1/V3/V4, each tagged with
  program version and category.
- `/api/v1/tiers`, `/api/v1/simulate-borrow`, and `/api/v1/agent/lp-state` —
  tier definitions, a borrow simulation, and depositor position state.

Magpie also exposes **paid** endpoints (build-borrow, build-repay,
build-deposit, build-withdraw, build-liquidate, credit-score, token-risk,
conditional borrow intents, and in-vault exit arming). These settle in
**native SOL** via Magpie's own `x402/solana/v1` payment scheme rather than
USDC/USDT, so they are intentionally not registered as priced endpoints in
this catalog. Discover them in the live x402 manifest at
`https://x402.magpie.capital/.well-known/x402.json`.

- SDK: `@magpieloans/magpie-agent` — typed one-liners that sign locally.
- MCP: `@magpieloans/magpie-mcp` — pool state, simulate-borrow, conditional
  intents, and in-vault exit arming as Claude / Cursor / Windsurf / ChatGPT
  tools.
- Repo: https://github.com/magpiecapital/magpie-x402

## Spend-aware usage

- All endpoints listed here are free — they are server-cached on-chain reads,
  so prefer them for discovery before reaching for any paid build endpoint.
- Call `/api/v1/pools` once to read all three strategies instead of three
  separate `/api/v1/pool` calls.
- Start at `/api/v1/collateral/eligible` to confirm a mint is supported before
  attempting a borrow flow.
- Poll `/api/v1/markets/liquidatable` for liquidation candidates rather than
  scanning chain state directly; reuse the returned loan PDAs.
- Cap `limit` on `/api/v1/markets/liquidatable` and `/api/v1/agent/activity`
  to the smallest count that answers the task.
