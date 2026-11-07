---
name: karp
title: "KARP by SoulDriver"
description: "KARP hallucination check and research API: live fact-checks of one claim by four web-searching AI models (GPT, Gemini, Grok, Claude) returning verdict, agreement, confidence and sources, plus dated research cards from a multi-model research library."
use_case: "Use for fact-checking a claim before acting on it, catching LLM hallucinations, verifying news, figures, quotes or events, pre-trade fake-news filtering, and dated multi-model research conclusions with consensus, warnings and open questions."
category: search
service_url: https://agents.souldriver.com.au
version: v1
openapi:
  path: openapi.json
---

KARP is SoulDriver's multi-model research engine. Its agent API offers a
cross-checked fact-check for single claims and a library of past multi-model
research, so an agent can verify something before relying on it.

One endpoint is free:

- `POST /v1/coverage` `{"query": "..."}` takes the question you are actually
  researching, in plain words, and says whether KARP already has research on it
  (`covered`, `partial` or `none`), the match strength, the newest research date,
  the matching topic titles and which endpoint to call next.

Two endpoints are paid:

- `POST /v1/check` `{"claim": "..."}` ($0.25) is a hallucination check. Four
  independent models (GPT, Gemini, Grok, Claude) each search the web
  separately and judge the claim. The response leads with a `summary`: the
  verdict (`confirmed`, `disputed`, `unverifiable`, or `contested` when the
  models split), agreement such as `4/4`, mean confidence and a one-line
  headline. Then each model's verdict, reasoning and cited sources follow.
  Disagreement is shown, not hidden. Takes 10-45 s.
- `POST /v1/ask` `{"query": "...", "max_cards": 1-8}` ($0.03) returns research
  cards from KARP's library of past multi-model debates: conclusion, key
  insight, warnings, dated figures, consensus status and open questions. Every
  card carries its research date and a `stale` flag. Usually 5-15 s. The
  library is deepest on Alzheimer's and neurodegeneration, ageing biology,
  ancient scripts, AI governance and quantum computing.

Pay per request in USDC via x402 on Solana or Base, with no API key or account.
The payment settles only when the call succeeds, so a failed call is never
charged, and each signed payment pays for one request. The live 402 challenge
is authoritative. Every response field is described in the committed
`openapi.json`; the live spec is at `https://agents.souldriver.com.au/openapi.json`
and a short agent guide is at `https://agents.souldriver.com.au/llms.txt`.

Agents without a wallet yet can apply for a small research grant with
`POST /v1/grant` (terms, read-only: `GET /v1/grant`), which pays for a few
asks and checks instead of x402 while it lasts.

## Spend-aware usage

- Call the free `POST /v1/coverage` first, with your real question. If it is
  `covered`, `POST /v1/ask` ($0.03) is usually enough; keep `POST /v1/check`
  ($0.25) for the specific claims you need verified live.
- Send one specific, checkable claim per `POST /v1/check` call. Split a compound
  statement only where each part changes your decision.
- `POST /v1/ask` is priced per call, not per card, so `max_cards` only changes
  the response size. Use the card dates and `stale` flags to decide whether a
  live check is still needed.
- Allow at least 60 s per `POST /v1/check` request. A timeout on your side does
  not mean you were charged; payment settles only after a successful response.
- Reuse results within a session rather than re-checking the same claim.
