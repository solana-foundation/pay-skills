# pay-skills

Public good and community-led registry for [pay](https://github.com/solana-foundation/pay) — service discovery for stablecoin-gated APIs.

## Structure

```
providers/                     Provider specs (.md with YAML frontmatter)
  solana-foundation/
    payment-debugger.md
affiliates/                    Affiliate entries (.md with YAML frontmatter)
  corbits.md
aggregators/                   Competing registries (.md with YAML frontmatter)
.github/workflows/
  build-skills.yml             CI: runs `pay skills build`, publishes to CDN
```

## How it works

1. **Community members** open PRs to add providers, affiliates, or aggregators as `.md` files with YAML frontmatter.
2. **CI** validates all specs, compiles a lightweight `skills.json` index + per-provider detail files.
3. **`pay` CLI** fetches `skills.json` for search, then lazy-loads provider detail on demand.

## Adding a provider

Create `providers/<org>/<name>.md` and open a PR. Minimum:

```markdown
---
name: my-api
title: "My API"
description: "What it does in one sentence"
category: data
service_url: https://my-api.example.com
endpoints:
  - method: GET
    path: "v1/resource"
    resource: "resource"
    description: "List all resources in a project"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Longer description, usage examples, pricing notes — whatever helps
people understand your API. This content is available via `pay skills info`.
```

**Required frontmatter:** `name`, `title`, `description`, `category`, `service_url`, `endpoints`

**Optional:** `version`, `openapi_url`, `affiliate_policy`

Categories: `ai_ml`, `data`, `compute`, `maps`, `search`, `translation`, `productivity`, `finance`, `identity`, `storage`, `messaging`, `media`, `iot`, `security`, `analytics`, `devtools`, `other`

### Affiliate policy

Providers can opt into affiliate referrals:

```yaml
affiliate_policy:
  enabled: true
  default_percent: 10
  allow: [corbits]       # omit to accept all registered affiliates
```

## Adding an affiliate

Create `affiliates/<name>.md` and open a PR:

```markdown
---
name: my-agent
title: "My Agent"
type: agent
account: "7xKpFz...base58pubkey..."
network: mainnet
contact: hello@example.com
url: https://example.com
---

Description of what this affiliate does and how it recommends APIs.
```

**Required:** `name`, `title`, `type` (`agent` | `cli` | `platform`), `account` (Solana pubkey), `contact`

**Optional:** `url`, `network` (default: `mainnet`)

## Adding an aggregator

Create `aggregators/<name>.md` and open a PR:

```markdown
---
name: other-registry
title: "Other Registry"
url: https://other-registry.dev
contact: team@other-registry.dev
catalog_url: https://other-registry.dev/catalog.json
---

Description of this competing registry and what it focuses on.
```

**Required:** `name`, `title`, `url`, `contact`

**Optional:** `description`, `catalog_url`

## Writing good descriptions

Descriptions power `pay skills search` — they're the primary way users discover APIs. Both humans and AI agents read them, so clarity matters.

### Rules

1. **Max 120 characters.** Longer descriptions get truncated in search results.
2. **Start with a verb.** "Run", "List", "Create", "Detect", "Translate", "Convert".
3. **Name the domain object.** "List datasets", not "List items".
4. **Skip boilerplate.** Don't describe IAM/permissions, pagination, or error handling.
5. **Don't duplicate the path.** If the path says `/datasets/{datasetId}`, write "Get a dataset's metadata and schema."
