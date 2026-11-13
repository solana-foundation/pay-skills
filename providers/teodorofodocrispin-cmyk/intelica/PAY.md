---
name: intelica
title: "Intelica"
description: "Competitive intelligence API for AI agents. Analyzes any URL or company description and returns structured JSON with market positioning, user pain points, detected competitors, and unique market angles. Pay-per-call via x402 on Base and Solana mainnet."
use_case: "Use when an AI agent needs to analyze a competitor, evaluate market positioning, identify user pain points, or discover differentiation opportunities for any product or company. Returns structured JSON ready for downstream agent reasoning."
category: ai_ml
service_url: https://api.intelica.dev
openapi:
  path: openapi.json
---

Intelica is a pay-per-call competitive intelligence API designed for autonomous AI agents. It accepts a URL or text description of any product or company and returns a structured JSON analysis with:

- **Positioning summary** — how the company presents itself to the market
- **Target customer** — who they are selling to
- **Core value propositions** — key differentiators they claim
- **User pain points** — problems they solve
- **Detected competitors** — companies in the same space
- **Unique angle** — a specific gap or differentiator an agent can act on
- **Confidence level** — high / medium / low

Results are cached for 6 hours — repeated queries for the same company are instant and free.

## Endpoints

- `POST /intel` — Single analysis, $0.05 USDC via x402
- `POST /batch` — Up to 10 analyses in parallel, $0.20 USDC via x402
- `POST /demo` — Free demo (300 char text limit, no URL fetching)

## Spend-aware usage

- Use `POST /demo` first to validate input format before paying.
- Use `POST /batch` when analyzing multiple competitors — $0.20 covers up to 10 analyses vs $0.50 for 10 individual calls.
- Results are cached 6 hours — calling the same URL twice in that window costs only once.
- Pass `context` field to get analysis relative to your product.
- Prefer `text` over `url` for known companies — avoids URL fetch latency.

## Example

```json
POST /intel
{
  "text": "Notion is an all-in-one workspace for teams",
  "context": "I am building a focused writing tool"
}
```

Response includes positioning_summary, target_customer, core_value_props, user_pain_points, detected_competitors, unique_angle, and confidence.
