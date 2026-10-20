---
name: safety
title: "Solana Pulse"
description: "Pay-per-call safety checks for Solana agents: dry-run a transaction before signing (drainers, wrong recipient or amount, failures), confirm it matches the request, token safety verdicts, fees and plain-words explanations. Open source."
use_case: "Use before an agent signs any Solana transaction (check_tx, tx_matches), before buying or accepting a token (token_safety, find_token), and to explain a landed or failed transaction (explain_tx, why_failed) instead of guessing from logs."
category: finance
service_url: https://solana-pulse-gateway-1021990235790.us-central1.run.app
openapi:
  path: openapi.json
---

Solana Pulse gives agents answers from live mainnet data, each with its source, and says "unknown" instead of guessing. 15 tools over HTTP (`POST /api/tools/<name>`) and MCP (`/mcp`). Every input and output is documented in plain words at `GET /api/tools/<name>`.

Pricing: $0.02 USDC per call for `check_tx`, `tx_matches` and `token_safety`; $0.01 for the rest. x402 USDC payment accepted on Solana mainnet. Calls made through pay are paid from the first call; other callers get 25 free calls per tool per day. Failed calls are never charged.

Measured, not assumed: the [Solana Agent Safety Benchmark](https://github.com/Timothymycompc/solana-pulse-ai-agent-gateway/tree/main/benchmark) (10 cases on live mainnet state; 9 of 9 attacks caught) and a false-alarm test on 200 ordinary mainnet transactions (no BLOCK; 80 of 80 transfers OK and MATCH).

## Spend-aware usage

- Call `check_tx` once per transaction, just before signing; it decodes, dry-runs and reports balance changes in one call.
- For a transfer or swap built from a request, `tx_matches` confirms token, exact amount and recipient; it is the one call to make when the request is known.
- Use `find_token` once to resolve a ticker to its mint, then pass the mint to `token_safety`; never resolve the same ticker twice.
- `why_failed` runs offline from the error text; try it before `explain_tx`, which reads the chain.
- `wallet` replaces separate `balance`, `tokens` and `history` calls when all three are needed.
