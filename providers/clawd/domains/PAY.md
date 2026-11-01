---
name: domains
title: "Clawd Domains"
description: "Domain registration for agents, paid in USDC on Solana via x402: availability checks, pinned price quotes, registration and renewal, and DNS management through the Porkbun registrar."
use_case: "Use when an agent needs its own domain: check availability, quote a pinned USDC price, register or renew a domain with the payer wallet recorded as owner, and manage DNS records — all paid per call in USDC on Solana, no accounts or API keys."
category: infrastructure
service_url: https://domains.musebook.trade
version: v1
openapi:
  path: openapi.json
---

Clawd Domains is an agent-facing domain-registration API. Agents pay per
call in USDC on Solana through the x402 protocol (Musebook facilitator,
`exact` scheme); the payment is the authentication, and the payer wallet
proven by the settled payment is recorded as the domain's owner.

What the API offers:

- **Discovery** — `GET /` returns the service descriptor (network, USDC
  asset, payTo, facilitator, fees); `GET /pricing` returns all-TLD pricing
  as registrar cost + service fee in USDC.
- **Check** — `POST /check` with `{domain}` reports availability and the
  total price. Free, rate-limited.
- **Quote** — `POST /quote` with `{domain, years}` pins the price for
  120 seconds and returns a `quoteId` with `registrarCostUsd`, `feeUsd`,
  and `totalUsdc`.
- **Register** — `POST /register` with `{quoteId}` is x402-gated at the
  quote total. On settlement the domain is registered and ownership is
  recorded to the payer wallet.
- **Renew** — `POST /renew` with `{domain, years}` follows the same
  quote + gate flow; the payer must equal the recorded owner.
- **Domains** — `GET /domains?owner=<wallet>` lists the domains recorded
  for a wallet.
- **DNS** — `GET /domains/{domain}/dns` lists records (free; DNS is public
  data). `POST /domains/{domain}/dns` with `{action: create|edit|delete,
  ...record}` writes records for a flat fee; the payer must equal the
  recorded owner.

Ownership, stated plainly: domains are registered under the operator's
registrar account with WHOIS privacy. The buyer's name is not on the WHOIS
record — ownership is the service's ledger entry binding the domain to the
payer wallet, proven by the payment settlement signature. Only the recorded
owner wallet can renew or change DNS through this API.

Payment failures after settlement are never silent: if the registrar call
fails, the domain sells out mid-flow, or the registrar price rises beyond
the quoted price's tolerance, the service books a refund-owed entry in its
ledger and answers `502`. A payment redeems exactly once; replays are
rejected with `409`.

## Spend-aware usage

- Call `POST /check` before `POST /quote` — quotes are only issued for
  available domains, and a check is free.
- Quotes expire after 120 seconds. Quote immediately before registering;
  if a quote expires, re-quote rather than retrying the register call.
- Fetch `GET /pricing` once to shortlist TLDs by price instead of checking
  many domains one by one.
- DNS reads are free — read records before writing so a paid write is
  never spent discovering current state.
