---
name: toolkit
title: "SolKnife"
description: "Non-custodial Solana toolkit, 55 endpoints: token rug-checks (freeze authority, sellability, holders, liquidity), Jupiter swaps, wallet portfolios, LP positions, DLMM pool analytics, SPL and Token-2022 mint lifecycle, Squads multisig, Arweave uploads."
use_case: "Use for checking whether a Solana token is a rug before buying, reading wallet holdings and LP positions, comparing DLMM pools, swapping via Jupiter, creating or editing SPL and Token-2022 mints, revoking mint authority, and reclaiming locked rent."
category: finance
service_url: https://solknife.xyz
openapi:
  path: openapi.json
---

SolKnife is a non-custodial Solana toolkit. Reads are plain GETs. Every write is
a two-step flow: POST to a `/build` endpoint to get an unsigned base64
VersionedTransaction, sign it with your own key, then POST the signed bytes to
the matching `/execute` endpoint. The server never holds a key with authority
over your funds.

Reads and builds are x402-gated at $0.01 USDC per call on Solana mainnet.
`/execute` endpoints are not charged: the caller already paid a network fee to
sign, and billing there would double-charge.

The same 55 tools are available over MCP at `/api/mcp` (streamable HTTP).
Connecting and listing tools is not charged; calling a tool is.

## Spend-aware usage

- Use `/api/check` for a full token risk snapshot (freeze authority, sellability,
  holders, liquidity) in one call instead of chaining separate reads.
- Use `/api/token-meta` when only name, symbol, and decimals are needed. It is
  the same price but a much smaller response than a full check.
- Use `/api/pool-compare` to rank a token's DLMM pools in one call rather than
  fetching `/api/pool` per pool address.
- Use `/api/portfolio` to get every holding at once instead of querying balances
  per mint.
- Resolve a mint address once and reuse it across calls. Every endpoint keys off
  the mint, and there is no discount for repeat lookups.
- Sign in once with SIWS (`/api/auth/challenge`) if you are making many calls in
  a row. A session cookie skips the per-call charge for an hour.
