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
description: "A clear description of what this API does and what data it returns (min 64, max 255 chars)."
use_case: "when to use this API, what problems it solves, example queries (min 32 chars)"
category: data
service_url: https://my-api.example.com
sandbox_service_url: https://sandbox.my-api.example.com
endpoints:
  - method: POST
    path: "v1/search"
    resource: "search"
    description: "Search for items by keyword with filtering and pagination support (min 32 chars)"
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

CI validates your spec and probes your endpoints automatically. Once merged, your API appears in `pay skills search` within minutes.

## Provider spec

**Required frontmatter:**

| Field | Description |
|---|---|
| `name` | Must match filename |
| `title` | Human-readable name |
| `description` | What it does (min 64, max 255 chars) — powers search |
| `use_case` | When to use it (min 32 chars) — helps LLMs pick the right API |
| `category` | See categories below |
| `service_url` | HTTPS URL with a domain name (no IPs) |
| `endpoints` | At least one (see format above) |

**Optional:**

| Field | Description |
|---|---|
| `version` | API version (e.g. `v1`) |
| `sandbox_service_url` | Staging URL for testing without real payments (service should use `https://402.surfnet.dev` as its Solana RPC) |
| `openapi_url` | Link to OpenAPI spec |
| `affiliate_policy` | Opt into affiliate referrals (see Affiliates below) |

**Categories:** `ai_ml` `data` `compute` `maps` `search` `translation` `productivity` `finance` `identity` `storage` `messaging` `media` `iot` `security` `analytics` `devtools` `other`

**Per endpoint:**

| Field | Required | Description |
|---|---|---|
| `method` | yes | HTTP method |
| `path` | yes | URL path |
| `description` | yes | What it does (min 32, max 255 chars) |
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

1. Contributors open PRs to add `.md` files. CI validates the spec and probes endpoints on every PR.
2. On merge, CI probes **all** endpoints — if any fail, the index is not published.
3. `pay skills build` compiles a lightweight index (`skills.json`) + per-provider detail files and publishes to CDN.
4. The `pay` CLI fetches the index for `pay skills search`, then lazy-loads provider detail on demand.

## Payment requirements

All paid endpoints must:

- Return HTTP **402** with a valid payment challenge (MPP or x402 protocol)
- Accept payment on **Solana mainnet**
- Accept **USDC** or **USDT** stablecoins

CI probes every endpoint to verify this. Endpoints that don't return a valid Solana 402 challenge will block the PR.

## Writing good descriptions

Descriptions power `pay skills search`. Both humans and AI agents read them.

1. **Min 64 characters** for provider descriptions, **min 32** for endpoints.
2. **Start with a verb.** "Search", "Generate", "Detect", "Translate".
3. **Name the domain object.** "Search influencers", not "Search items".
4. **Skip boilerplate.** No auth/pagination/error handling.
