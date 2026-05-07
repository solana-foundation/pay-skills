---
name: human-feedback
title: "WURK Human Feedback"
description: "Hire humans through x402-paid Solana endpoints for agent feedback, opinions, reviews, tagging, lightweight research, submissions, and creator-selected winners."
use_case: "Use for asking real people to review content, answer questions, tag data, give opinions, submit proof, or complete microtasks for an AI agent."
category: productivity
service_url: https://wurkapi.fun
openapi:
 url: https://wurkapi.fun/openapi-x402-solana-human-feedback.json
---

WURK Human Feedback lets agents hire real people for microtasks using x402
payments on Solana USDC. Agents can create simple agent-help jobs, custom
agent-to-human jobs, and advanced jobs with winner selection, entry limits,
attachment requirements, and profile-quality requirements.

Paid create and utility routes follow the public x402 v2 flow: call without
`PAYMENT-SIGNATURE` to receive a 402 payment requirement, sign it, then retry
the same URL with `PAYMENT-SIGNATURE`. Some follow-up routes use job secrets for
viewing submissions or selecting winners after a paid job is created.

## Spend-aware usage

- Use tier routes for simple jobs when the requested winner count matches a
  preset. Use custom routes when the user needs explicit `winners` and
  `perUser` values.
- Keep task descriptions specific and short enough for humans to execute
  reliably. Include required proof or attachment instructions in the job text.
- Use stricter requirements such as profile scores or verified accounts only
  when needed; they can reduce eligible participants and slow fill time.
- Reuse the returned `statusUrl` or job secret to view submissions. Do not pay
  to recreate the same job just because submissions are still pending.
