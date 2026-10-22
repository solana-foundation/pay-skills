---
name: bittensor
title: "metagraphed"
description: "Bittensor subnet registry and chain-event data: per-subnet profiles, published API surfaces with probe-derived health and uptime, emissions and validator economics, account activity, current hotkey registrations and stake, and bulk event exports."
use_case: "Use for Bittensor and TAO questions: find a subnet for a task, call its published API, check endpoint health, compare emissions or validator economics, inspect account activity and hotkey registrations, or export chain events."
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
than asserted. Alongside that sit chain-event feeds, account activity,
current hotkey registrations and stake, emissions, and validator economics.

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
- `GET /api/v1/accounts/{ss58}` — account activity for a hotkey or coldkey,
  plus current registrations and stake for a hotkey.

## Freshness and honesty

Readings carry provenance and a timestamp. Where a projection cannot answer
within its scan budget the response says so with an explicit reason code rather
than returning a plausible-looking empty result — an absent answer and a zero
are different answers, and the API distinguishes them.

Health, uptime and latency are derived from scheduled probes only. No figure on
this surface is set by hand.

## Payment

**Free, and staying free.** The whole registry, discovery, health, schema and
economics layer, plus `ask` and semantic search, are available without an
account, API key or payment header. Anonymous rate, quota and history-depth
limits still apply. On `ask`, semantic search and eligible deep-history
routes, an optional successful payment buys rate and quota headroom; it does
not make payment a prerequisite for an otherwise available free request.

**Paid.** `GET /api/v1/export/chain-events` answers `402` with an x402 quote
when no payment is presented. It returns up to 25,000 chain events in one
call, against the free `/api/v1/chain-events` route's 100 — the same rows,
filters and ordering, without the page ceiling or the cursor bookkeeping. It
is the only route on this API that requires payment, and it exists because a
single unpaginated pass over the lakehouse is the shape that costs real money
to serve.

The REST payment rail uses x402 v2's `exact` scheme. The prepared mainnet
configuration delegates verification and settlement to PayAI at
`https://facilitator.payai.network` and offers native **USDC on Base mainnet**
(`eip155:8453`). The selected rollout is Base mainnet only. Solana mainnet
support is prepared but disabled; a future rollout requires the receiving
wallet's USDC associated token account to be initialized and verified. This
listing must remain a draft until the API changes are deployed and usable
Solana mainnet payment is available, as required by this catalog.
`GET /.well-known/x402` and the request-specific quote are the source of truth
for deployed payment options; do not sign a payment based on this snapshot.

For an unpaid export request, decode the base64 JSON `PAYMENT-REQUIRED`
header, select one offer in `accepts`, and use that offer unchanged as the
payment payload's `accepted` requirements. An x402 v2 client or SDK prepares
the network-specific authorization and sends the base64 JSON payload in
`PAYMENT-SIGNATURE`. A settled call carries a base64 JSON `PAYMENT-RESPONSE`
receipt. Invalid encoding returns `400`; rejected payments return `402`.

A payment is bound to one exact HTTP method, URL and body. `503` with
`x402_settlement_pending` means the settlement outcome is unresolved: after
`Retry-After`, retry the identical request with the identical payment payload,
without creating a replacement payment. `409` with `x402_payment_consumed`
returns the saved receipt without running the paid operation again;
`x402_payment_conflict` means the same payment was bound to a different
request. Neither pending nor consumed responses provide a fresh quote.
Read the quote before signing; do not infer its amount, asset, recipient,
timeout or facilitator extras from this snapshot.

This listing covers REST. MCP access uses user-approved OAuth or a
wallet-provisioned API key, with no x402 payment rail; see the
[authentication guide](https://api.metagraph.sh/auth.md).

## Spend-aware usage

- Start from `search` or `search/semantic` to find the netuid, then fetch that
  one subnet. Listing the whole registry to find one row is the expensive way
  to ask a cheap question.
- `ask` is the costly call — it runs retrieval and a model. Prefer it when you
  need a synthesised answer with citations, not when a single field would do.
- Most artifacts are edge-cached and carry validators. Honouring them costs you
  nothing and costs the service less.
- Narrow chain-event reads by pallet, method or block, and cap the result
  limit to the rows you need.
- Page the free `/api/v1/chain-events` when you need tens of rows. Reach for
  the paid export when you need thousands — one priced call beats 250 free
  ones for you and for us.
