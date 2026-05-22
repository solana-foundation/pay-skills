---
name: environments
title: "Dynamic Environments API"
description: "REST API for managing Dynamic environments: users, sessions, access gates, webhooks, and external wallet links. All endpoints require a Bearer API token scoped to an environment."
use_case: "Use for creating and querying users, revoking sessions, managing access gates that restrict wallet creation or sign-in, subscribing to user and wallet events via webhooks, and linking external wallets to Dynamic user accounts."
category: identity
service_url: https://app.dynamicauth.com/api/v0
openapi:
  path: openapi.json
---

Dynamic's Environments API provides programmatic control over the users, sessions,
webhooks, and access gates in a Dynamic environment.

**Auth:** All endpoints require `Authorization: Bearer dyn_<token>`. Tokens are
scoped to an environment and available at
https://app.dynamic.xyz/dashboard/developer/api. Store as an environment variable
(`DYNAMIC_AUTH_TOKEN`) — never hardcode.

**Base URL:** `https://app.dynamicauth.com/api/v0`

All paths are parameterized by `environmentId` (from your Dynamic dashboard).
Resource IDs (`userId`, `webhookId`, `gateId`, etc.) are UUIDs.

## Key capabilities

**Users** — full CRUD with pagination. Filter by email, wallet address, or
custom fields. Create users programmatically; fetch and update profile fields;
delete when offboarding.

**Sessions** — list active sessions for a user and revoke them to force
sign-out. Use `POST .../users/{userId}/sessions/revoke` to invalidate all
sessions for a single user immediately.

**Webhooks** — subscribe to events (`user.created`, `wallet.created`,
`session.created`, `settlement.state.completed`, etc.). Create, update, and
delete webhook endpoints. Use `POST .../messages/{messageId}/redeliver` to
retry a failed delivery — idempotent and safe to repeat.

**Gates** — access control gates that restrict sign-in or wallet creation based
on configurable rules. Toggle with `PUT .../gates/{gateId}/enable` and
`.../disable`. Enable/disable is idempotent.

**Wallets (external links)** — list all wallets in an environment, get a wallet
by ID, or get and link wallets for a specific user. This covers externally
managed wallets (MetaMask, Phantom, etc.) linked to Dynamic users. For
server-side MPC wallets, see `dynamic/wallets`.

## Spend-aware usage

- Filter `GET .../users` with specific `filter[...]` params and a low `limit`
  before fetching by ID — avoid scanning all users for a single record.
- Webhook redelivery (`redeliver`) is idempotent — safe to retry on network errors.
- Gate enable/disable is idempotent — safe to call multiple times.
- Paginate wallets and users with `offset` + `limit`; default limit is 50 for
  wallets and 20 for users.
