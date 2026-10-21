---
name: oracle
title: "anchor-x402: yes/no oracle with on-chain receipt"
description: "Yes/no oracle. LLM answers YES / NO / MAYBE with a single-sentence reason, then anchors sha256(question | answer | timestamp) on both Base and Solana mainnet — cryptographic receipt of when the question was asked, independently verifiable on-chain."
use_case: "Use for sealed prediction commits, prediction-market commitments, conditional contracts, settled-bet evidence, 'I called it' receipts, time-stamped opinions you want to prove later, decision logs for AI agent audit trails."
category: ai_ml
service_url: https://api.anchor-x402.com
openapi:
  path: openapi.json
---

`POST /v1/oracle { question }` — $0.05 USDC. Any yes/no question up to 1000 chars. Powered by Claude Haiku on AWS Bedrock plus dual-chain anchoring on Base + Solana mainnet.

Returns `{ answer: YES | NO | MAYBE, explanation, merkle_root, base_tx, solana_tx, asked_at }`. The `merkle_root` is `sha256(question | answer | asked_at)`. The `base_tx` and `solana_tx` are the actual on-chain transactions where that root was anchored — anyone can read those txs and verify the receipt without contacting anchor-x402.

## Spend-aware usage

- This is a one-shot LLM call plus two L1 transactions — pricing is set assuming both anchors succeed.
- Use when you need a cryptographic receipt of when a question was asked: sealed predictions, prediction-market commits, dispute resolution, 'I called it' tweets.
- Don't use for repeated polling — the on-chain anchor is fixed per call.
- For just a yes/no without the on-chain receipt, prompt your own LLM cheaply. The value here is the dual-chain proof of question + answer + time.
- Forging requires breaking SHA-256 or simultaneously reorging Base AND Solana mainnet — not realistic.
