---
name: reservations
title: "Agentic Reservations"
description: "Agentic Reservations books, lists, and cancels Resy restaurant reservations, queues jobs that grab hard-to-get tables the moment booking windows open, and returns camera-based walk-in wait times plus Blackbird restaurant picks with live specials."
use_case: "Use for booking a restaurant table, checking availability for a date and party size, requesting a hard-to-get table before it drops, listing or canceling reservations, checking how long the line is at a restaurant, and neighborhood dining recommendations."
category: productivity
service_url: https://agentres.dev
openapi:
  path: openapi.json
---

Agentic Reservations gives an agent a restaurant stack: Resy booking, a queue
for tables that are not bookable yet, live walk-in wait times, and Blackbird
recommendations. There is no signup — a funded wallet is the account, and the
user's Resy account is linked once by email one-time code.

- **Booking** — `GET /api/search` resolves a venue id within a city slug,
  `GET /api/availability` returns slots with short-lived `config_id` values, and
  `POST /api/book` ($0.01) books the confirmed slot. Config ids expire, so
  re-fetch availability immediately before booking. A failed booking refunds
  automatically in the response.
- **Reservation jobs** — for restaurants whose tables drop on a schedule.
  `GET /api/reservation-jobs/options` (public, no auth) lists supported
  restaurants and each one's `drop_days_in_advance`;
  `POST /api/reservation-jobs/create` ($3.00) queues the attempt and returns the
  scheduled `drop_time`. Jobs are best-effort: they target the preferred time
  and book the closest available slot, so a booking is not guaranteed. Canceled,
  failed, and timed-out jobs become `refund_pending` — claim them via the job's
  `refund` route. A duplicate job for the same venue and window returns
  `409 ACTIVE_JOB_EXISTS` and refunds automatically.
- **Wait times** ($0.01 per query) — camera-based crowd data. One call to
  `GET /api/wait-times` answers "how busy is X right now" for every monitored
  location; `GET /api/wait-times/history` aggregates one location's line counts
  over a UTC range into raw, 1m, 5m, or 1h buckets. Wait-time location slugs are
  not Resy venue ids.
- **Discovery** ($0.01 per query) — `GET /api/discover/restaurants` searches
  ~2,000 curated Blackbird restaurants (mostly NYC and San Francisco), with
  optional live specials attached per result. Blackbird ids are not Resy venue
  ids; book a discovered restaurant by feeding its name to `GET /api/search`.

Pay per use in USDC via x402 on Solana or Base, or MPP on Tempo. The free
endpoints are wallet-gated rather than open: account, search, availability,
reservation listing, cancellation, and job status all issue a $0 `402` carrying
either a SIWX (CAIP-122) challenge or a $0 payment challenge, so route every
call through the payment-aware client rather than a plain HTTP client.
`GET /api/reservation-jobs/options` is the one fully public route.

Paid failures refund — instant bookings automatically, jobs on claim — and a
replayed settlement proof returns `409 DUPLICATE_PAYMENT` with the original
`charge_id` rather than double-charging. Booking, job creation, and cancellation
all commit the user to something real, so confirm each with them first. The
agent skill at `https://agentres.dev/SKILL.md` documents the full flow.

## Spend-aware usage

- Venue search and availability are free — settle the venue, date, party size,
  and slot there, then pay once at `POST /api/book`.
- Re-fetch availability right before booking. Paying with a stale `config_id`
  spends $0.01 on a booking that cannot succeed.
- `GET /api/wait-times` returns every monitored location in one paid call — read
  the one you care about from that response instead of querying per restaurant.
- Discovery results are ordered alphabetically, not by relevance, and each page
  is its own charge. Push the user's stated preferences into `query` and
  `neighborhood` rather than paging through a neighborhood to filter by eye.
- Reserve reservation jobs ($3.00) for tables that genuinely are not bookable
  yet; check `GET /api/availability` first, since an open table costs $0.01.
- These are read-only queries — do not poll wait times or discovery in a loop.
