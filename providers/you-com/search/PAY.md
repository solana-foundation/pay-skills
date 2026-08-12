---
name: search
title: "You.com"
description: "You.com Web Search API: real-time web and news search returning ranked results grouped by section (results.web, results.news) with URLs, titles, descriptions, and snippets. Optional livecrawl adds live page contents per result for LLM and agent grounding."
use_case: "Use for real-time web search, news and current-events lookup, fact-checking, company and market research, and grounding LLM or agent answers with fresh, citable web results, including live page contents via livecrawl."
category: search
service_url: https://api.you.com
endpoints:
  - method: GET
    path: "v1/search"
    resource: search
    description: "Search the web and news in real time, returning ranked results with URLs, titles, descriptions, and snippets grouped into web and news sections"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.005
---

Real-time web search built for LLMs and agents. One GET call returns ranked
results grouped into `results.web` and `results.news`, each with `url`,
`title`, and `description`; web results also carry query-matched `snippets`.
Response `metadata` includes the query, a `search_uuid`, and latency.

Query parameters: `query` (required), `count` (1 to 100, default 10),
`livecrawl` (`web` | `news` | `all`, fetches live page contents for results),
`country`, `freshness` (`day` | `week` | `month` | `year`, or a
`YYYY-MM-DDtoYYYY-MM-DD` range), `language`, and domain filters.

Payment is x402 V2, quoted in USDC on Solana mainnet and Base, with no API key
and no account. The base call is $0.005. Adding `livecrawl` raises the quote
by $0.001 per result, so `count=10` with livecrawl quotes $0.015. The same
endpoint also advertises MPP terms (USDC on Tempo) in the same 402. If you
need a POST form, `/v1/agents/search` accepts machine payments on both GET and
POST with identical pricing and response shape.

## Spend-aware usage

- Set `count` to the smallest number that answers the task; with `livecrawl`
  the price scales linearly with `count`.
- Omit `livecrawl` unless you will actually read page contents; snippets are
  included at the base price.
- Sign against the exact 402 you were handed. Terms are priced per request
  shape, so a quote fetched for one `count` or `livecrawl` setting is not
  valid for another.
- Terms stay valid for 10 minutes. Reuse the challenge you already hold
  instead of minting a new one per attempt; more than 10 unpaid challenge
  requests per minute returns 429.
- Use `freshness` and domain filters to narrow results rather than paying for
  broader searches and filtering client side.
