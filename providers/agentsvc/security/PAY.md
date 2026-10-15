---
name: security
title: "agentsvc.io"
description: "Risk checks for AI agents: token honeypot and rug checks with ALLOW, CAUTION or BLOCK and grade A to F for Solana and EVM tokens, crypto scam message detection with checked links, and prompt injection detection with quoted evidence."
use_case: "Use for checking a token before a swap, honeypot detection, rug pull risk, Solana mint or freeze authority checks, screening DMs, emails or casts for wallet drainers and phishing links, and scanning untrusted web or tool text for prompt injection."
category: security
service_url: https://agentsvc.io
openapi:
  path: openapi.json
---

Five pay-per-call risk checks from agentsvc.io. All endpoints are JSON POST
requests under `api/v1/proxy/<slug>`. No account and no API key: call without
payment to get HTTP 402 with the x402 requirements, then pay in USDC on Solana
mainnet (also Base, Polygon or Arbitrum). Payment is settled only after the
service succeeded; input errors are not charged.

- `token-precheck` ($0.004): up to 5 token addresses per call, one decision
  each (ALLOW, CAUTION or BLOCK) with grade, score, honeypot flag and reason.
- `token-verdict` ($0.009): grade A to F, label, score and one-line reason for
  one token, plus a shareable result page.
- `token-security` ($0.009): detailed flags for one token, e.g. Solana freeze
  and mint authority, transfer hooks, EVM buy and sell simulation, taxes and
  owner powers.
- `scam-message-check` ($0.003): verdict safe, suspicious or scam for a
  message, with scam type, quoted red flags and checks of every link.
- `prompt-injection-check` ($0.004): verdict safe, suspicious or malicious for
  untrusted text, with the techniques found and quoted evidence.

Every service has a free sample that runs the documented example input:
`POST https://agentsvc.io/api/v1/try/<slug>`. The full catalog of agentsvc.io
services is at https://agentsvc.io/api/v1/services.

## Spend-aware usage

- For trading loops, use `token-precheck` with up to 5 tokens per call instead
  of one `token-verdict` call per token. Results are cached for 10 minutes.
- Call `token-security` only when the user needs the individual flags behind
  a CAUTION or BLOCK decision.
- Pass `chain` explicitly for EVM tokens; Solana mints are detected
  automatically.
- Send only the untrusted part of a page or message to
  `prompt-injection-check` (up to 20,000 characters) or `scam-message-check`
  (up to 8,000 characters).
