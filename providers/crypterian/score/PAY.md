---
name: score
title: "Crypterian — agent-wallet credit score"
description: "Credit bureau for autonomous agents. Pay $0.001 USDC to query a calibrated 0-100 reliability score, tier (S/A/B/C/D/unranked), confidence, txn_count, and last_seen for any on-chain agent wallet — Base ERC-4337 smart accounts and Solana agent-controlled wallets."
use_case: "Use for filtering inbound agent traffic by demonstrated reliability, screening counterparty wallets before paid x402 calls, scoring smart accounts before high-value automation, and triaging fraud or low-quality agents on Base and Solana. Returns tier='unranked' honestly when observed activity is insufficient — never fabricated."
category: data
service_url: https://crypterian.io
openapi:
  url: https://crypterian.io/openapi.json
---

Crypterian is a cross-chain credit bureau for autonomous agents. It indexes
on-chain agent-wallet activity continuously (Base ERC-4337 UserOperationEvents
every 5 min, Solana receiver-watching via Helius hourly) and exposes a single
paid endpoint that returns a calibrated reliability score.

The scoring formula is deliberately simple and publicly committed: success
rate, recency, transaction volume, and paymaster quality, with a 45-day
exponential decay for inactivity. Wallets with fewer than 100 observed
events return `tier: "unranked"` regardless of score — Crypterian does not
fabricate signal where evidence is thin.

Payment is x402 USDC at $0.001 per call. The 402 response advertises both
Base Sepolia and Solana devnet payment options today (mainnet payTos move
in once EIN clears). Buyers pay with whichever chain they hold USDC on;
the score returned is independent of the payment chain — wallet format
auto-detects which chain the queried address lives on.

## Spend-aware usage

- **Cache results within a session.** Scores update at most hourly per
  wallet. If you've queried `0xabc…` recently in the same task, reuse the
  cached value instead of re-paying.
- **Skip the call when `txn_count < 100`.** Crypterian returns
  `tier: "unranked"` for low-volume wallets and the score has limited
  decisional value at that confidence. Use it as a filter input only when
  the wallet's reliability matters more than a few cents per check.
- **Batch by wallet, not by route.** The endpoint takes one wallet per
  request — there is no bulk variant. For sweeps over many wallets, prefer
  pre-filtering candidates on `txn_count` proxies (your own usage logs)
  before paying for the full score.
- **Treat `score: null` as "unobserved", not "bad".** A null score means
  Crypterian has never indexed activity for that wallet; it is silent, not
  negative. Decide whether you weight unknown-wallet traffic conservatively
  on the consumer side.
