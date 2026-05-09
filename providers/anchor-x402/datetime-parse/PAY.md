---
name: datetime-parse
title: "anchor-x402: datetime parser"
description: "Parse freeform datetime strings ('next Tuesday at 3pm', 'yesterday noon UTC', '2026-05-08T15:30Z', 'in 2 hours', 'march 15 2026') into a fully normalized structured form: ISO 8601, unix epoch, broken-out components, signed relative-seconds delta, human-readable relative phrase, and a confidence label — all for $0.001 USDC per call."
use_case: "Use whenever an AI agent receives a user-supplied datetime in any natural form and needs reliable structured output for scheduling, reminders, contract effective dates, deadline math, calendar events, or any tool-call argument that demands ISO 8601 — without burning LLM tokens on parsing."
category: devtools
service_url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com
openapi:
  url: https://1c09pdnrx1.execute-api.us-east-1.amazonaws.com/openapi.json
---

`POST /v1/parse/datetime` — pay $0.001 USDC, send `{ "input": "next
Tuesday at 3pm" }` (optionally `base_time` ISO 8601 and `timezone` IANA
name), get back a fully structured normalized datetime: `iso`, `unix`,
resolved `timezone`, `components` (year/month/day/hour/minute/second
plus 0-6 `weekday` and `day_name`), `relative_seconds` (signed —
negative if past, positive if future, relative to `base_time`),
`relative_human` ("in 5 days" / "2 hours ago"), and `confidence`
(`high` for clean ISO/RFC, `medium` for unambiguous natural language,
`low` for fallback parsing).

Powered by `dateparser` for natural language plus `python-dateutil` for
ISO/RFC fast paths. Defaults: `base_time` = current UTC, `timezone` =
`UTC`. If parsing fails completely, the service returns 400 with a
clear error — never a silently-wrong timestamp.

## Spend-aware usage

- Use this BEFORE asking your model to reason about a date — at $0.001
  per call you replace many thousands of tokens of LLM date-arithmetic
  with a deterministic, reproducible structured answer.
- `relative_seconds` is signed; you can branch on `< 0` to detect past
  references without re-parsing the ISO.
- For batches of datetimes (e.g. parsing a CSV column), call
  sequentially — the response is small and the per-call cost is already
  the cheapest in the bazaar.
- `confidence` is the cheap signal you should respect: on `low`,
  consider asking the user to confirm before scheduling anything
  irreversible. On `high`, store the `iso` directly.
- The service is stateless — every call is independent. Cache the
  response client-side keyed by `(input, base_time, timezone)` for
  free re-reads.
