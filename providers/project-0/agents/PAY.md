---
name: agents
title: "Project 0 Agent API"
description: "Lending reads and transaction builders for Project 0, a prime broker on Solana: one margin account across every major lending venue. Rates, positions, health, deposits, borrows, and leveraged loops."
use_case: "Use to earn yield on idle stablecoins, borrow against a portfolio, or run leveraged rate strategies on Solana. Every builder returns unsigned transactions for the calling agent's own wallet to sign — non-custodial end to end."
category: finance
service_url: https://x402.0.xyz
openapi:
  path: openapi.json
---

Project 0 is a prime broker on Solana: one margin account across every major
lending venue (P0, Kamino, Drift, JupLend). This API exposes it to agents —
market reads plus builders that return unsigned base64 transactions. The
calling wallet signs and submits; the service holds no keys. The same tools
are served over MCP at `POST /mcp`.

Reads and standard builders are free. The two flash-loan builders
(`/v1/tx/loop` and `/v1/tx/close-position`) cost $0.01 per request.
x402 USDC payment accepted on Solana mainnet.

## Spend-aware usage

- Filter `GET /v1/banks` with `venue`, `mint`, or `symbol` instead of reading
  the full list. `symbol` is not unique — confirm the `mint` before acting on
  a bank.
- `GET /v1/account/{address}` returns positions, health, and capacity in one
  call. Pass `borrow_bank` to get max borrow capacity in the same response.
- Keep the `account` address from responses and pass it back to builders — a
  wallet can own several marginfi accounts, and omitting it errors with
  ACCOUNT_AMBIGUOUS.
- Before paying for `/v1/tx/loop`, read `max_leverage` for the pair from
  `GET /v1/strategies` — the builder rejects leverage above it.
- Builds embed a ~60s blockhash. Build when ready to sign, or you rebuild.
