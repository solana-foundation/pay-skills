---
name: llm
title: "anchor-x402: universal LLM utilities"
description: "Five Claude-powered LLM utilities: witty roast, yes/no oracle with on-chain anchored verdict, URL/text summarizer, aura reader (color + tier + score), and academic letter grader with red-pen feedback."
use_case: "Use for LLM text generation: roasting wallets/tweets/pitches/code, yes/no oracles with cryptographic receipts, URL/text summaries into bullets, vibe checks with color and tier scores, and letter grades with red-pen feedback."
category: ai_ml
service_url: https://api.anchor-x402.com
openapi:
  url: https://api.anchor-x402.com/openapi.json
---

Five LLM endpoints powered by Claude on AWS Bedrock. Universal text inputs — works on any target. Pay-per-call USDC via x402 v2.

- `POST /v1/roast { target }` — $0.05 — Witty 3-5 paragraph roast of anything (wallet, tweet, idea, code, person, meme). Clever and observational, ends with a zinger.
- `POST /v1/oracle { question }` — $0.05 — Yes/no oracle. Returns `{answer: YES|NO|MAYBE, explanation}` plus `sha256(question | answer | timestamp)` anchored on Base + Solana mainnet — cryptographic receipt of when the question was asked.
- `POST /v1/tldr { text? OR url? }` — $0.01 — Summarize a URL (fetches up to 500KB, strips HTML) or pasted text into 3-5 concise bullets, each one sentence ≤25 words.
- `POST /v1/aura { target }` — $0.01 — Aura read of anything. Returns `{color, tier (S|A|B|C|D|F), score (0-9999), description}` with evocative color names and punchy 2-3 sentence reads.
- `POST /v1/grade { target }` — $0.01 — Academic letter grade (A+ to F) with 3-7 red-pen marginalia one-liners and a teacher-summary paragraph. Works on code, pitches, tweets, ideas, anything.

## Spend-aware usage

- `tldr` ($0.01) is the cheap utility — use whenever you'd otherwise paste a 5000-word article into a prompt; you'll save more in input tokens than $0.01.
- `aura` and `grade` ($0.01) take any text — wallets, code snippets, startup pitches, social posts. Universal.
- `oracle` ($0.05) is the right tool for one-shot yes/no decisions that need a cryptographic timestamp — sealed predictions, prediction-market commits, "I called it" receipts. The anchored hash is independently verifiable on Base + Solana.
- `roast` ($0.05) is 5x more expensive than `aura` — pick `roast` only when you specifically want long-form prose; `aura` returns a punchy 2-3 sentence read for 1/5 the price.
- All five are universal-input — no domain-specific parsing — so they're great for "I have some text, what would <X> say" patterns.
