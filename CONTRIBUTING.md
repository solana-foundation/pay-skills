# Contributing to pay-skills

Thanks for contributing! This registry is a public good — every API you add makes the ecosystem more useful for developers and AI agents.

## Quick start

1. Fork this repo
2. Add your `.md` file (see below)
3. Open a PR
4. CI validates your spec automatically
5. A maintainer reviews and merges

## Adding a provider

Create `providers/<your-org>/<your-api>.md` with YAML frontmatter:

```markdown
---
name: my-api
title: "My API"
description: "One sentence, max 120 chars"
category: data
service_url: https://my-api.example.com
endpoints:
  - method: POST
    path: "v1/search"
    resource: "search"
    description: "Search items by keyword"
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
- `description` must be under 120 characters
- Every endpoint needs `method`, `path`, and `description`
- `pricing` is optional — omit it for free endpoints
- Start endpoint descriptions with a verb: "Search", "Create", "List", "Generate"

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

Every PR runs `pay skills build` against the repo. If your spec has errors (missing fields, invalid category, bad wallet address), CI will fail with a clear error message. Fix the issue and push again.

## Code of conduct

Be respectful. Don't submit spam or misleading API listings. Maintainers may remove entries that misrepresent pricing, capabilities, or availability.

## License

By contributing, you agree that your contributions are licensed under the [Apache License 2.0](LICENSE).
