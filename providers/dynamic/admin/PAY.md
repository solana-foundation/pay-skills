---
name: admin
title: "Dynamic Admin API"
description: "REST API for managing Dynamic environments: users, embedded MPC wallets, server-side WaaS wallet creation and message signing, webhooks, access gates, sessions, and allowlists. All endpoints require a Bearer API token."
use_case: "Use for creating and querying users, listing or creating wallets, provisioning server-side MPC wallets via WaaS, signing messages with delegated wallet access, managing webhooks for transaction events, and configuring access gates or allowlists."
category: identity
service_url: https://app.dynamicauth.com/api/v0
openapi:
  path: openapi.json
---

Dynamic's Admin API gives programmatic control over environments: create and manage
users, wallets, and server-side MPC wallets (WaaS); configure access gates and
allowlists; subscribe to events via webhooks; and revoke sessions.

**Auth:** All endpoints require `Authorization: Bearer dyn_<token>`. API tokens
are scoped to an environment and are available at
https://app.dynamic.xyz/dashboard/developer/api. Store as an environment variable
(`DYNAMIC_AUTH_TOKEN`) — never hardcode.

**Base URL:** `https://app.dynamicauth.com/api/v0`

All paths are parameterized by `environmentId` (available from your Dynamic
dashboard). Resource IDs returned in responses (`userId`, `walletId`, `webhookId`,
etc.) are UUIDs.

## Key capabilities

**Users** — full CRUD plus bulk update and session management. Query by email,
wallet address, or custom fields with pagination. Use `GET .../users` with the
`filter` query param for targeted lookups before fetching by ID.

**Wallets** — list all wallets in an environment, get a wallet by ID, or get all
wallets belonging to a specific user. Use `POST .../users/{userId}/wallets` to
link an external wallet to an existing user.

**WaaS (server-side MPC wallets)** — `POST .../waas/create` provisions a
server-controlled MPC wallet for a user identified by email or userId. Use
`POST .../waas/{walletId}/delegatedAccess/signMessage` to sign messages without
exposing private keys. Verify your API key is scoped correctly first with
`POST .../waas/verifyApiKey`.

**Webhooks** — subscribe to events like `user.created`, `wallet.created`,
`session.created`, and checkout settlement events. Create, update, and delete
webhook endpoints. Use `POST .../webhooks/{webhookId}/messages/{messageId}/redeliver`
to retry failed deliveries.

**Gates** — enable or disable access control gates that guard wallet creation or
sign-in flows. Toggle with `PUT .../gates/{gateId}/enable` and `.../disable`.

**Sessions** — revoke individual sessions or all sessions for a user. Use
`POST .../users/{userId}/sessions/revoke` to force sign-out.

## Spend-aware usage

- Use `GET .../users?filter[...]&limit=20` with specific filter params before
  fetching by ID — avoid listing all users when you only need one.
- Call `POST .../waas/verifyApiKey` once at startup to confirm the token is valid
  before making wallet or signing calls.
- Webhook redelivery (`redeliver`) is idempotent — safe to retry on network errors.
- Paginate wallet and user lists with `offset` + `limit`; default limit is 50 for
  wallets and 20 for users.
- Gate enable/disable is idempotent — safe to call multiple times.
