---
name: insight-oracle
title: "Insight Oracle"
description: "Paid pre-trade oracle safety checks return price-consensus, feed-health, manipulation-risk, and signed attestation data before an agent executes a DeFi action."
use_case: "Use before a swap, borrow, lend, liquidation, or repayment when an agent needs a paid oracle-risk verdict and verifiable evidence for a proposed trade."
category: finance
service_url: https://www.oracleinsight.xyz
version: v1
openapi:
  path: openapi.json
---

Insight Oracle is a paid, read-only pre-trade safety service. The listed endpoint
returns an oracle-integrity assessment for a proposed DeFi operation; it does not
sign, submit, or authorize a transaction.

## Spend-aware usage

- Check the specific asset, chain, action, and trade size that an agent is about to evaluate.
- Reuse a recent assessment only within the agent's own risk policy and freshness bounds.
- Treat the result as evidence for a decision, not as execution authorization.
