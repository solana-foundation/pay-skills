---
name: seo
title: "Citable"
description: "SEO and AI-visibility data for agents: keyword research and search volume, on-page audits, AI-citation checks across ChatGPT, Claude, Gemini and Perplexity, Google rank and SERP results, competitor keywords and backlinks."
use_case: "Use for checking where a domain ranks on Google, which keywords are worth targeting and what they cost, whether AI answer engines cite a domain and for which prompts, and what a competitor's organic footprint and link profile look like."
category: data
service_url: https://citable.run
openapi:
  path: openapi.json
---

Seventeen paid GET endpoints covering two questions: how a site ranks in Google,
and whether AI answer engines cite it. Keyword suggestions and metrics, on-page
audits, rank and SERP checks, domain overview, keywords and history, backlinks,
plus AI-citation checks run through the engines' own APIs.

There is no account and no API key — the wallet is the identity. Prices run
$0.005–$0.30 per call, settled in USDC on Solana mainnet. A 4xx or 5xx cancels
the payment instead of settling it, so a failed call is never charged.

Every 402 challenge carries the endpoint's query parameters and a sample
response, so an agent can shape a valid call from the challenge alone. The
service also publishes `/skill.md`, `/llms.txt` and `/.well-known/x402`.

## Spend-aware usage

- Expand a seed with `v1/keyword-suggest` ($0.005) first, then buy volumes for
  the shortlist with `v1/keyword-metrics` ($0.03). Do not start at the metrics
  endpoint with a guessed keyword list.
- `v1/ai-visibility` is priced per engine asked ($0.05 each, $0.20 for all
  four). Ask for one engine when the user named one; ask for all four only when
  the question is about coverage.
- `v1/citability-report` ($0.30) bundles the on-page audit, the AI-visibility
  sweep and top-cited-pages. It costs less than those three bought separately —
  prefer it when the user wants the whole picture, and the single endpoints when
  they want one answer.
- `v1/keyword-research` ($0.06) is `keyword-suggest` plus `keyword-ideas` plus
  metrics in one call; cheaper than the three, but only worth it for a seed the
  user actually cares about.
- The AI-visibility endpoints never invent a prompt. Pass the buyer question the
  user gave you; do not loop over prompts you generated yourself.
- Domain endpoints are per-domain, not per-keyword. Ask for one competitor at a
  time rather than sweeping a list.
