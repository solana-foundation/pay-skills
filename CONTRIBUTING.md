# Contributing to pay-skills

Thanks for contributing! This registry is a public good — every API you add makes the ecosystem more useful for developers and AI agents.

## Quick start

1. Fork this repo
2. Add your `.md` file (see below)
3. Open a PR
4. CI validates your spec and probes your endpoints automatically
5. A maintainer reviews and merges

## Adding a provider

Create `providers/<your-org>/<your-api>.md` with YAML frontmatter:

```markdown
---
name: my-api
title: "My API"
description: "A clear description of what this API does and what data it returns (min 64 chars, max 255 chars)."
use_case: "when to use this API, what problems it solves, example queries (min 32 chars)"
category: data
service_url: https://my-api.example.com
sandbox_service_url: https://sandbox.my-api.example.com
endpoints:
  - method: POST
    path: "v1/search"
    resource: "search"
    description: "Search items by keyword with filtering and pagination support (min 32 chars)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Free-form markdown: longer description, usage examples, pricing notes.
```

### Rules

- `name` must match the filename (without `.md`)
- `description` is required (min 64, max 255 characters)
- `use_case` is required (min 32 characters) — helps LLMs decide when to use your API
- `service_url` must use HTTPS with a domain name (no IP addresses)
- Every endpoint needs `method`, `path`, and `description` (min 32, max 255 chars)
- `pricing` is optional — omit it for free endpoints
- `sandbox_service_url` is optional — a staging deployment for testing without real payments (your sandbox service should use `https://402.surfnet.dev` as its Solana RPC)
- Start endpoint descriptions with a verb: "Search", "Create", "List", "Generate"

### Payment compatibility

Every paid endpoint must:

- Return HTTP 402 with a valid payment challenge (MPP or x402 protocol)
- Accept payment on **Solana** (mainnet)
- Accept **USDC** or **USDT** stablecoins

CI will probe each endpoint in your PR and verify these requirements. Endpoints that don't return a valid Solana 402 challenge will fail the check.

### Directory structure

Native APIs (you run it):
```
providers/<your-org>/<api-name>.md
```

Proxied APIs (you gateway someone else's API):
```
providers/<your-org>/<origin-org>/<api-name>.md
```

### Categories

Use one of: `ai_ml` `data` `compute` `maps` `search` `translation` `productivity` `finance` `identity` `storage` `messaging` `media` `iot` `security` `analytics` `devtools` `other`

## Adding an affiliate

Create `affiliates/<name>.md`:

```markdown
---
name: my-agent
title: "My Agent"
type: agent
account: "base58SolanaPubkey..."
network: mainnet
contact: hello@example.com
url: https://example.com
---

What this affiliate does and how it recommends APIs.
```

`type` must be `agent`, `cli`, or `platform`. `account` must be a valid Solana pubkey.

## Adding an aggregator

Create `aggregators/<name>.md`:

```markdown
---
name: other-registry
title: "Other Registry"
url: https://other-registry.dev
contact: team@other-registry.dev
---

What this registry focuses on.
```

## CI validation

Every PR runs two checks:

1. **Static validation** (`pay skills build`) — verifies YAML correctness, required fields, description/use_case lengths, valid categories, and endpoint structure.
2. **Endpoint probe** (`pay skills probe`) — hits each endpoint in your changed providers and verifies it returns a valid Solana 402 challenge with USDC/USDT support.

On merge to `main`, CI probes **all** endpoints before publishing the index. If any endpoint is broken, the new index is not published.

Fix any issues and push again — the PR summary shows exactly which endpoints passed or failed.

## Code of conduct

Be respectful. Don't submit spam or misleading API listings. Maintainers may remove entries that misrepresent pricing, capabilities, or availability.

## License

By contributing, you agree that your contributions are licensed under the [Apache License 2.0](LICENSE).
