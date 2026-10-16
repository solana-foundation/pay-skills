---
name: finance-research
title: "You.com"
description: "You.com Finance Research API: agentic deep research over a finance-optimized index, returning a synthesized, citation-backed answer to financial questions on earnings, filings, guidance, and market data. Async: paying returns a jobId to poll for results."
use_case: "Use for financial research questions, earnings and guidance analysis, SEC filings review, market and company analysis, ticker comparisons, and trading or investment research that needs a reasoned answer with cited sources."
category: finance
service_url: https://api.you.com
endpoints:
  - method: POST
    path: "v1/finance_research"
    resource: finance_research
    description: "Run agentic research on a financial question and return a synthesized answer with cited sources; JSON body takes input and a research_effort tier"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.11
---

Agentic research on financial questions, running multiple searches over a
finance-optimized index and returning a synthesized answer with cited sources.
Suited to earnings and guidance analysis, filings review, and market or
company questions where an agent needs reasoning plus citations rather than
raw search results.

JSON body: `input` (the financial question, required) and `research_effort`
(the depth tier, default `deep`). Pricing is fixed per tier: `deep` is $0.11
and `exhaustive` is $0.50 per call. The 402 is issued before the body is
validated, so the quote always reflects the tier you sent; confirm the tier is
one the API accepts before paying against the quote.

Payment is x402 V2, quoted in USDC on Solana mainnet and Base, with no API key
and no account. The same 402 also advertises MPP terms (USDC on Tempo). The
call is asynchronous: paying returns a `jobId`, and the result is fetched from
the SIWX-authenticated `poll_url` in the response. Deep research typically
takes 1 to 3 minutes.

## Spend-aware usage

- Default to `deep` ($0.11). Reach for `exhaustive` ($0.50) only when a deep
  run has already proven insufficient for the question.
- Ask one well-formed question per call rather than splitting a question into
  several paid runs; the research is multi-step on the server side.
- For simple fact lookups (a single price, a headline), a $0.005 Web Search
  call is usually enough; reserve Finance Research for questions that need
  synthesis across sources.
- Poll the returned `poll_url` for completion instead of resubmitting the
  request; a resubmission is a second paid run.
