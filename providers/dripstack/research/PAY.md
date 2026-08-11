---
name: research
title: "Drip"
description: "Drip indexes premium financial newsletters, blogs, and podcasts, returning ranked post matches with prices, publication and author metadata, synthesized summaries of paywalled posts, and structured stock-picker calls with ticker and conviction."
use_case: "Use for investment research, finding what newsletter writers say about a ticker or theme, resolving a Substack publication or author, unlocking a paywalled post as a synthesized summary, and pulling a day's long/short stock picks with conviction."
category: finance
service_url: https://dripstack.xyz
version: v1
openapi:
  path: openapi.json
---

Drip turns paid financial media into an API. It indexes premium newsletters,
blogs, and podcasts (largely Substack-backed), so an agent can search across
them, unlock a single post instead of buying a subscription, and read
ticker-level calls extracted from the underlying articles.

Discovery is free and unauthenticated:

- `GET /api/v1/search` — topic search over the index, returning ranked `items[]`
  with `publicationSlug`, `slug`, `title`, `publishedAt`, `priceCents`, and a
  match snippet.
- `GET /api/v1/publications` and `GET /api/v1/publications/search` — browse the
  curated catalog, or resolve a named author, publication, podcast show, or
  Substack URL to a slug. Slugs are normalized hosts
  (`bytesbeyondborders.substack.com`, `reallygoodbusinessideas.com`).
- `GET /api/v1/publications/{publicationSlug}` — publication metadata plus
  recent posts with each post's slug, title, publish date, and unlock price.

Two endpoints are paid:

- `GET /api/v1/publications/{publicationSlug}/{postSlug}` returns
  `synthesizedSummary` and metadata for one post. Price is per article and is
  advertised as `priceCents` in the free search and publication responses
  ($0.10 in the common case).
- `GET /api/v1/stock-picks` returns one UTC effective calendar day of extracted
  calls (`ticker`, `action`, `direction`, `authorConviction`,
  `rationaleSnippet`, `articleUrl`). It defaults to the latest day with picks;
  pass `date=YYYY-MM-DD` for a specific day. The charge scales with the number
  of distinct attributed source posts in the response, so it varies by day
  ($0.30 when this listing was probed).

Pay per request in USDC via x402 on Solana or Base — no API key or subscription.
The live 402 challenge is authoritative for both paid routes, since post prices
are per-article and stock-pick pricing is computed per response.

A hosted MCP server (`https://dripstack.xyz/api/mcp`) and an agent skill
(`https://dripstack.xyz/SKILL.md`) wrap the same API for clients that prefer
OAuth-metered credits over per-call wallet payments.

## Spend-aware usage

- Search and publication routes are free — narrow the candidate set there
  before unlocking anything, and quote `priceCents` to the user before you pay.
- Unlock the one or two posts that actually answer the question rather than a
  whole publication's recent run.
- `GET /api/v1/stock-picks` returns `404` with no charge when a day has no
  picks — treat that as "no picks", not as a failed payment to retry.
- Stock-pick cost grows with the number of distinct source articles in the
  response, so pass `limit` when a full day's list is more than the task needs.
- A post's summary is stable once published; cache what you fetched instead of
  re-unlocking it later in the same session.
