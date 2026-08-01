---
name: data
title: "SuVerse Pay"
description: "Pay-per-call crypto decision APIs: Polymarket smart-money sheet, Solana token entry verdicts, market regime calls, Base token contract forensics, x402 endpoint liveness grading, and Jupiter-routed USDC swap quotes on Solana."
use_case: "Use for pre-trade Solana token safety checks, Polymarket smart-money positioning, crypto market regime detection, Base token due diligence, probing x402 payment endpoints, and quoting USDC token swaps on Solana."
category: finance
service_url: https://proxy.suverse.io
version: v1
openapi:
  path: openapi.json
---

SuVerse Pay is an x402 payment gateway. This entry lists its curated
first-party products: five verdict endpoints that compress multi-source
crypto research into a single machine-readable call, plus a Jupiter-routed
Solana swap. Every endpoint answers with a verdict-first JSON object — the
decision comes first, the evidence and a `data_quality` disclosure follow —
so an agent can act on the top-level field and only dig into the raw layer
when the task demands it.

All endpoints are POST with JSON bodies. An unpaid request returns an
HTTP 402 challenge that includes a machine-readable `input_schema`, so an
agent can discover the exact request shape for free before paying. Payment
is accepted on Solana mainnet in USDC. Critical upstream sources are proven
before payment settles (fail-closed); enrichment sources degrade gracefully
and the degradation is disclosed in `data_quality`. Post-settle failures are
automatically refunded.

## Endpoints

- `POST /v1/data/polymarket-smart-sheet` ($0.75) — ranked sheet of every
  active Polymarket market where tracked smart money currently has an edge:
  direction, conviction-based confidence, whale flow, entrant skill, holder
  concentration, and a single strongest pick.
- `POST /v1/data/token-entry-verdict` ($0.50) — ENTER / CAUTION / AVOID
  verdict for a Solana token mint, combining token safety checks, fresh
  24h/7d smart-money netflow, and wallet-label context.
- `POST /v1/data/market-regime-verdict` ($0.50) — risk_on / risk_off / chop
  call for the crypto market, combining market pulse, Binance funding, and
  stablecoin supply trends.
- `POST /v1/data/base-token-forensics` ($0.35) — CLEAN / WATCH / RED_FLAG
  verdict for a Base (eip155:8453) token contract from contract metadata,
  holder distribution, and transaction decoding.
- `POST /v1/data/x402-liveness-check` ($0.25) — ALIVE / DEGRADED / DEAD
  grade for any third-party x402 endpoint: probes it unpaid and grades the
  402 challenge it returns. Private-network targets are rejected before
  payment settles.
- `POST /v1/swap/solana/quote` ($0.001) — firm Jupiter-routed quote for a
  USDC↔token swap on Solana mainnet. The response carries a `quote_id` and
  an `x402_pay_url` pointing at `POST /v1/swap/solana/execute/{quote_id}`,
  which executes the swap at a dynamic per-quote price (quoted USDC value
  plus a 1% service fee). The execute step is not listed in the OpenAPI
  document because its price is set per quote, not fixed.

The full gateway catalog (400+ additional pay-per-call endpoints) is
published at `https://proxy.suverse.io/openapi.json`. The same endpoints are
also reachable as MCP tools via the `@suverselabs/mcp-server` npm package.

## Spend-aware usage

- Send an unpaid request first when unsure of the input shape — the 402
  challenge includes the endpoint's `input_schema` for free.
- Start with `x402-liveness-check` ($0.25) only when you actually need to
  grade a third-party paid endpoint; do not use it to probe this gateway's
  own endpoints — their 402 challenges are already free to read.
- For token decisions, call `token-entry-verdict` (Solana) or
  `base-token-forensics` (Base) once per token and act on the top-level
  verdict; the evidence layers rarely change the answer within a session.
- `market-regime-verdict` describes the whole market, not one asset — cache
  it for the session instead of re-buying per token. Pass
  `{"detail": "summary"}` to skip the raw payload you will not read.
- For swaps, buy one $0.001 quote, inspect `expected_output` and
  `price_impact`, and only then pay the execute URL. Quotes expire — do not
  stockpile them; re-quote right before executing.
- `polymarket-smart-sheet` returns up to 50 rows; keep `limit` at the
  default 20 or lower unless the task genuinely needs the long tail.
