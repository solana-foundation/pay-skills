---
name: bittensor
title: "metagraphed"
description: "Bittensor subnet registry and chain data: per-subnet profiles, the API surfaces each subnet publishes with probe-derived health and uptime, emissions, yield and validator economics, hotkey and coldkey balances, stake positions, blocks and extrinsics."
use_case: "Use for Bittensor and TAO questions: which subnet does a given task, how to call a subnet's own API, whether an endpoint is up, comparing emissions, yield or validator economics, and looking up wallet balances, stake positions and registrations."
category: data
service_url: https://api.metagraph.sh
openapi:
  path: openapi.json
---

metagraphed is an independent operational and integration registry for
[Bittensor](https://bittensor.com). It answers two kinds of question a chain
explorer does not: **what does each subnet actually expose**, and **is it
working right now**.

Every subnet in the registry carries its published surfaces — REST APIs, docs,
schemas, dashboards — each with a `source_url` proving the subnet publishes it,
and each probed on a schedule so health, uptime and latency are measured rather
than asserted. Alongside that sits the chain itself: blocks, extrinsics,
balances, stake positions, emissions, yield and validator economics.

## What an agent reaches for

- `GET /api/v1/subnets` and `GET /api/v1/subnets/{netuid}` — the registry, and
  one subnet's full profile.
- `GET /api/v1/search` and `GET /api/v1/search/semantic` — find a subnet by
  keyword, or by what you are trying to do.
- `POST /api/v1/ask` — a grounded natural-language answer with citations back
  to the records it used.
- `GET /api/v1/subnets/{netuid}/surfaces` and `/endpoints` — what a subnet
  publishes and how to call it, which is the step before integrating with it.
- `GET /api/v1/subnets/{netuid}/health` — probe-derived, never hand-set.
- `GET /api/v1/accounts/{ss58}` — balances, stake and registrations for a
  hotkey or coldkey.

## Freshness and honesty

Readings carry provenance and a timestamp. Where a projection cannot answer
within its scan budget the response says so with an explicit reason code rather
than returning a plausible-looking empty result — an absent answer and a zero
are different answers, and the API distinguishes them.

Health, uptime and latency are derived from scheduled probes only. No figure on
this surface is set by hand.

## Payment

There are two tiers, and the line between them is deliberate.

**Free, and staying free.** The whole registry, discovery, health, schema and
economics layer, plus `ask` and semantic search. No account, no key, no
payment header. These are served anonymously — this API's own website calls
them that way — and presenting a payment on one buys extra rate and quota
headroom rather than access. A request with no payment header is never
refused.

**Paid.** `GET /api/v1/export/chain-events` answers `402` with an x402 quote
when no payment is presented. It returns up to 25,000 chain events in one
call, against the free `/api/v1/chain-events` route's 100 — the same rows,
filters and ordering, without the page ceiling or the cursor bookkeeping. It
is the only route on this API that requires payment, and it exists because a
single unpaginated pass over the lakehouse is the shape that costs real money
to serve.

x402 v2, `exact` scheme, settled through the public facilitator. Every quote
lists a Solana (USDC) leg and a Base leg, so pay with whichever you hold.
`GET /.well-known/x402` states what is payable, on which networks, and to
which address.

## Spend-aware usage

- Start from `search` or `search/semantic` to find the netuid, then fetch that
  one subnet. Listing the whole registry to find one row is the expensive way
  to ask a cheap question.
- `ask` is the costly call — it runs retrieval and a model. Prefer it when you
  need a synthesised answer with citations, not when a single field would do.
- Most artifacts are edge-cached and carry validators. Honouring them costs you
  nothing and costs the service less.
- Block and extrinsic reads take explicit ranges. Bound them; an unbounded
  range scans far more than it returns.
- Page the free `/api/v1/chain-events` when you need tens of rows. Reach for
  the paid export when you need thousands — one priced call beats 250 free
  ones for you and for us.
