---
name: token-risk
title: "Haris Guardian"
description: "Read-only scam and rug-pull risk checks for Solana SPL and Token-2022 tokens: 0-100 risk score, verdict and reasons covering mint/freeze authority, Token-2022 traps, liquidity, LP lock, holder concentration and a buy/sell honeypot simulation."
use_case: "Use before buying, swapping into, listing or recommending a Solana token: rug check, scam check, honeypot test, token safety score, holder/bundle concentration, batch screening of up to 20 mints, or watching a held token for changes."
category: security
service_url: https://haris-api.vercel.app
openapi:
  path: openapi.json
---

Haris Guardian checks a Solana token mint and returns a risk score from 0 to 100
(**higher = riskier**), a level (`low` / `medium` / `high` / `critical`), a
one-line verdict, and a list of flags. Each flag has a published weight and a
plain-English reason. It is read-only: it never signs, trades, or asks for keys.
Results are signals, not guarantees.

All paid endpoints take a Solana mint address (base58). Every 402 offers USDC on
Solana mainnet and on Base. The facilitator pays network fees. Checks that fail
are not charged.

- `POST /v1/paid/check` `{"mint"}`: $0.01. Standard check covering authorities,
  Token-2022 extensions (permanent delegate, transfer hook, transfer fee),
  liquidity, LP burn/lock, top-holder concentration and a simulated buy+sell.
  It also accepts `GET ?mint=` and `GET /v1/paid/check/{mint}`.
- `POST /v1/paid/deep-check` `{"mint"}`: $0.10. Adds top1/top5/top10 holder
  share, top wallets linked by a shared funder (bundles/insiders),
  creator-funded and fresh wallets, and LP lock detail.
- `POST /v1/paid/batch-check` `{"mints": [...]}`: $0.10 for up to 20 mints.
  Charged only if at least one mint is checked.
- `POST /v1/paid/diff` `{"mint", "previous"}`: $0.02. Send a previous result to
  get alerts on what changed (authority re-enabled, LP unlocked, liquidity
  pulled, sell blocked). It is stateless.
- Without a wallet: `GET /v1/check/{mint}` gives 3 free checks per UTC day per
  IP, then answers with the same $0.01 402. It is not in the snapshot because
  it is not always gated.

## Spend-aware usage

- To screen several tokens, use one `batch-check` instead of many `check`
  calls. 20 mints cost $0.10, compared with $0.20 for 20 separate checks.
- Start with `check`. Only call `deep-check` when the user needs holder or
  insider analysis, or when `check` returns a medium or high score.
- To monitor a token, keep the last result and call `diff` with it instead of
  re-running `deep-check`.
- Results are cached for 60 seconds, so repeating a call for the same mint
  within a minute gives the same answer.
