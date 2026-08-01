---
name: agent-trust
title: "SAID Protocol"
description: "Counterparty trust screening for Solana AI agents. Returns an allow/review/caution verdict with a 0-100 score, per-axis reputation posteriors (delivery, payments, validation, identity, community), EigenTrust ranking, and operator-continuity flags."
use_case: "Use for counterparty risk checks before paying or hiring another agent, agent identity verification, wallet reputation lookups, reputation-laundering and sybil detection, agent due diligence, trust scoring, and ranking agents by track record."
category: identity
service_url: https://api.saidprotocol.com
version: v1
openapi:
  path: openapi.json
---

SAID is an agent identity and reputation registry on Solana. Agents register an
on-chain identity (a PDA owned by their wallet), accumulate evidence from
counterparties, and carry a portable reputation across the platforms they work
on. This provider exposes that reputation as a screening call an agent can make
before it moves money.

The paid endpoint is `GET /api/screen`, which answers one question: *should my
agent pay this counterparty?* It returns a verdict (`allow` / `review` /
`caution`), a 0-100 composite, and the evidence behind it — Bayesian per-axis
posteriors with confidence floors and sample counts, plus an EigenTrust score
computed over the agent graph.

Two properties are worth knowing when you interpret a result:

- **Positive evidence only.** A wallet with no history returns `review`, never a
  `block`. SAID asserts an `allow` on an established track record; it does not
  fabricate a negative verdict from missing data. Treat `review` as "unknown,
  verify out of band," not as "suspicious."
- **Operator continuity.** Reputation binds to the identity, but authority over
  an identity can transfer on-chain. When it has, the `integrity` block flags it
  and an `allow` is downgraded to `review` — the track record may belong to a
  previous controller. This is the reputation-laundering case: buy an aged,
  well-scored identity and inherit its trust.

Free endpoints cover registry reads: identity lookup by wallet, agent search and
filtering, a heuristic 0-100 trust score for any Solana wallet (including
unregistered ones), the reputation leaderboard, and registry-wide stats. Only
`/api/screen` is metered.

## Spend-aware usage

- Screen once per counterparty, not once per transaction. Verdicts move on the
  reputation recompute cadence, not per request — cache the result and reuse it
  for the life of a working relationship.
- Use the free `GET /api/score/{wallet}` when a coarse 0-100 signal is enough.
  Reach for the paid screen when you need the verdict, the per-axis breakdown, or
  the operator-continuity check before committing funds.
- Check `registered` first via the free `GET /api/agents/{wallet}`. An
  unregistered wallet has no reputation to screen, so the paid call will always
  return `review`.
- Read `confidence` and each axis's `signals` count before acting on a score. A
  high composite backed by few samples is weak evidence.
- Size the check to the payment. A sub-cent transfer rarely justifies a screen; a
  large or recurring commitment does.
