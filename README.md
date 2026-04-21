# pay-skills

A public good and community-led registry for [pay](https://github.com/solana-foundation/pay) — an open directory of stablecoin-gated APIs that anyone can search, use, or contribute to. Built and maintained by the community, for the community.

## Add your API

Have a paid API? List it here so the `pay` CLI and AI agents can discover it.

### 1. Fork this repo

### 2. Create your provider file

Add `providers/<your-org>/<your-api>.md`:

```markdown
---
name: my-api
title: "My API"
description: "What it does in one sentence"
category: data
service_url: https://my-api.example.com
endpoints:
  - method: POST
    path: "v1/search"
    resource: "search"
    description: "Search for items by keyword"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Longer description, usage examples, pricing notes — whatever helps
people understand your API. This shows up in `pay skills info`.
```

### 3. Open a PR

CI will validate your spec automatically. Once merged, your API appears in `pay skills search` within minutes.

## Provider spec

**Required frontmatter:**

| Field | Description |
|---|---|
| `name` | Must match filename |
| `title` | Human-readable name |
| `description` | One sentence, max 120 chars — powers search |
| `category` | See categories below |
| `service_url` | Live URL where the API is reachable |
| `endpoints` | At least one (see format above) |

**Optional:** `version`, `openapi_url`, `affiliate_policy`

**Categories:** `ai_ml` `data` `compute` `maps` `search` `translation` `productivity` `finance` `identity` `storage` `messaging` `media` `iot` `security` `analytics` `devtools` `other`

**Per endpoint:**

| Field | Required | Description |
|---|---|---|
| `method` | yes | HTTP method |
| `path` | yes | URL path |
| `description` | yes | What it does, max 120 chars |
| `resource` | no | Group name (e.g. `jobs`, `datasets`) |
| `pricing` | no | Omit for free endpoints |

### Directory structure

If you operate your own API directly:
```
providers/<your-org>/<your-api>.md
```

If you proxy third-party APIs (like a gateway):
```
providers/<your-org>/<origin-org>/<api-name>.md
```

## Affiliates

Affiliates are systems (AI agents, CLIs, platforms) that recommend APIs to users and earn referral commission.

Add `affiliates/<name>.md`:

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

What this affiliate does and how it recommends APIs.
```

**Required:** `name`, `title`, `type` (`agent` | `cli` | `platform`), `account` (Solana pubkey), `contact`

Providers opt into affiliate referrals with:
```yaml
affiliate_policy:
  enabled: true
  default_percent: 10
```

## Aggregators

Aggregators are other registries in the ecosystem. We list them for visibility.

Add `aggregators/<name>.md`:

```markdown
---
name: other-registry
title: "Other Registry"
url: https://other-registry.dev
contact: team@other-registry.dev
---

What this registry focuses on.
```

**Required:** `name`, `title`, `url`, `contact`

## How it works

```
providers/                     Provider specs (.md with YAML frontmatter)
  solana-foundation/
    google/                    Proxied Google APIs
    payment-debugger.md        Native API
  merit-systems/
    stableenrich/              Data enrichment APIs
    stablesocial/              Social media data
  perplexity/
    sonar.md                   AI search
affiliates/                    Affiliate entries
aggregators/                   Other registries
```

1. Contributors open PRs to add `.md` files. CI validates the spec on every PR.
2. On merge, `pay skills build` compiles a lightweight index (`skills.json`) + per-provider detail files and publishes to CDN.
3. The `pay` CLI fetches the index for `pay skills search`, then lazy-loads provider detail on demand.

## Writing good descriptions

Descriptions power `pay skills search`. Both humans and AI agents read them.

1. **Max 120 characters.** Longer gets truncated.
2. **Start with a verb.** "Search", "Generate", "Detect", "Translate".
3. **Name the domain object.** "Search influencers", not "Search items".
4. **Skip boilerplate.** No auth/pagination/error handling.
