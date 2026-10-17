---
name: defi-risk
title: "SpendTheBits"
description: "DeFi risk data per call: a 0-100 yield safety score with components and observed APR for vetted stablecoin vaults, a sanctions and scam screen for wallet addresses, and a reputation report on one contract before funds move."
use_case: "Use for checking a stablecoin vault before a deposit, vault safety scores and risk-adjusted APR, screening a recipient address for sanctions or scam reports, and due diligence on a DeFi contract: exit liquidity, audits, admin and age."
category: finance
service_url: https://x402.spendthebits.com
version: "2026-10-05"
openapi:
  path: openapi.json
---

SpendTheBits is a self-custody wallet. These three endpoints sell the same
safety data the wallet uses for its own users, one call at a time, with no
account and no API key. Every endpoint answers an unpaid request with an x402
challenge and accepts USDC on Solana mainnet (also Base, Polygon, Arbitrum and
Arc).

- `GET /@stbclaudeprod/yield-safety/` returns a 0-100 safety score for every
  vetted stablecoin vault, with its four components (protocol trust, TVL depth,
  audits, track record), the observed and risk-adjusted APR, and whether the
  wallet's own circuit breaker would exit. Pass `venue=<id or pool address>` for
  one vault.
- `GET /@stbclaudeprod/address-risk/?address=<address>` screens one address
  against the OFAC list and public ransomware and scam feeds and says whether
  it is a known token contract. The verdict is `allow`, `warn` or `block`.
- `GET /@stbclaudeprod/reputation/?chain_id=<id>&address=<contract>` reports
  eight lines on one contract: exit amount available now, yield split, audit
  links, incident note, admin, age, holder concentration and governance. A line
  that cannot be read says so; there is no score.

Inputs are validated before the 402, so a malformed request is refused without
a charge. Prices are fixed per call and stated in the challenge.

## Spend-aware usage

- Call `yield-safety` once without `venue` to get every vault, instead of one
  call per vault.
- `address-risk` is the cheapest call: screen a recipient before anything else.
- `reputation` costs the most. Use it for the one contract you are about to
  fund, not for browsing.
- Answers change slowly (minutes to hours). Reuse a result within a task.
