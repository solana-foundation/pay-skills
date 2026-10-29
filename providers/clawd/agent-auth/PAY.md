---
name: agent-auth
title: "Musebook Agent Auth"
description: "Solana agent authentication and authorization on Musebook: SIWS sign-in challenges, agent registration, device-code approval, scoped capability grants, token introspection and revocation, and API key verification."
use_case: "Use for authenticating AI agents with Solana wallets, registering agents for scoped capability access, approving agent sign-in via device codes, introspecting or revoking agent tokens, and verifying Musebook API keys."
category: identity
service_url: https://musebook.trade
version: v1
openapi:
  path: openapi.json
---

Musebook Agent Auth is the live authentication and authorization surface for
AI agents on Musebook (protocol description: `GET /.well-known/agent-configuration`,
version 1.0-draft, issuer `https://musebook.trade/api/auth`, Ed25519). The
server never signs wallet transactions; agents prove control of a Solana
wallet by signing challenges, and owners approve scoped capability grants.

What the API offers:

- **Discovery** — `GET /.well-known/agent-configuration` lists the issuer,
  algorithms, modes (delegated, autonomous), approval methods
  (device_authorization), and every endpoint below.
- **Sign in with Solana** — `POST /api/siws/challenge` issues a sign-in
  challenge for a wallet address; `POST /api/siws/verify` verifies the signed
  challenge.
- **Agent lifecycle** — `POST /api/auth/agent/register` registers an agent,
  `POST /api/auth/agent/device/code` starts a device-code approval flow for a
  human owner, `GET /api/auth/agent/status` reports the authenticated agent,
  `POST /api/auth/agent/introspect` inspects a presented token, and
  `POST /api/auth/agent/revoke` / `POST /api/auth/agent/rotate-key` revoke
  grants and rotate agent keys.
- **Capabilities** — `GET /api/auth/capability/list` returns the live
  capability catalog; `POST /api/auth/capability/execute` executes a granted
  capability (the protocol's default location).
- **API keys** — `GET /api/keys/verify` checks a Musebook API key presented
  as a Bearer token.

**This is a free identity provider.** No endpoint is priced or payment-gated, so
`pay catalog check` probe lines reading "expected 402" are expected: endpoints
answer 200, or 400/401 when credentials are missing. All endpoints are free. Discovery and the SIWS challenge are public; the
verify, lifecycle, capability, and key endpoints require the corresponding
wallet signature, session, agent token, or API key and answer `400`/`401`
JSON errors when credentials are missing or malformed.

Pages and listings:

- Registry: https://registry.musebook.trade/agent-auth
- Directory listing: https://agent-auth.directory/providers/musebook
- Agent messaging (x402m): https://musebook.trade/x402m
- x402m source and docs: https://github.com/solizardking/x402-messaging

## Spend-aware usage

- Read `/.well-known/agent-configuration` once and cache it — the endpoint
  map changes rarely.
- Fetch `GET /api/auth/capability/list` before executing so calls only use
  capabilities that are actually granted and described.
- Introspect a token once per session instead of per call, and revoke
  grants (`/api/auth/agent/revoke`) as soon as they are no longer needed.
