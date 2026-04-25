# Contributing to pay-skills

`pay-skills` is the public registry of payment-gated APIs discoverable by the
`pay` CLI and by agents using the `pay` MCP server. A good contribution is
machine-readable, probeable, and honest about pricing and capabilities.

## Quick Start

1. Fork this repo.
2. Add or edit a markdown file under `providers/`, `affiliates/`, or
   `aggregators/`.
3. Validate locally:

   ```bash
   pay skills build . --output /tmp/pay-skills-dist
   ```

4. If you added or changed a paid provider, probe it:

   ```bash
   pay skills probe . \
     --files providers/<operator>/<name>.md \
     --currencies USDC,USDT \
     --timeout 15 \
     --concurrency 5
   ```

5. Open a PR. CI runs the same build validation and probes changed providers.

If `pay` is not installed, use `npx @solana/pay` in place of `pay`.

## Provider Listings

Create a provider file as markdown with YAML frontmatter:

```markdown
---
name: my-api
title: "My API"
description: "Search and retrieve normalized marketplace data with prices, availability, seller metadata, product details, category filters, pagination, and commerce-ready result fields for catalog enrichment and price comparison workflows."
use_case: "Use for product search, marketplace price comparison, checking availability, seller research, catalog enrichment, ecommerce analytics, shopping recommendations, deal monitoring, competitive intelligence, and commerce automation."
category: data
service_url: https://api.example.com
sandbox_service_url: https://sandbox.api.example.com
openapi_url: https://api.example.com/openapi.json
version: v1
endpoints:
  - method: POST
    path: v1/search
    resource: search
    description: "Search products by keyword with structured filters and pagination"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Explain what the API does, what callers should send, and any pricing or
operational notes that help developers choose the right endpoint.
```

### Paths And Names

Use one of these layouts:

```text
providers/<operator>/<name>.md
providers/<operator>/<origin>/<name>.md
```

Use the two-level layout when you operate the API directly. Use the three-level
layout when your gateway proxies another provider's API.

Required naming rules:

| Rule | Example |
|---|---|
| `name` must match the filename without `.md` | `providers/acme/search.md` uses `name: search` |
| The path under `providers/` becomes the provider FQN | `acme/search`, `solana-foundation/google/translate` |
| Use lowercase, URL-safe names | `market-data`, not `Market Data` |

## Provider Frontmatter Reference

Required fields:

| Field | Constraint |
|---|---|
| `name` | Must match the filename without `.md`. |
| `title` | Human-readable provider name. |
| `description` | Required, 64-255 characters. Powers search results and catalog summaries. |
| `use_case` | Required, 32-255 characters. Helps agents decide when to use the API. |
| `category` | Must be one of the categories below. |
| `service_url` | Production URL. Must start with `https://` and use a domain name, not an IP address. |
| `endpoints` | At least one endpoint. |

Optional fields:

| Field | Constraint |
|---|---|
| `sandbox_service_url` | HTTPS staging URL. For sandbox payment tests, configure the service to use `https://402.surfnet.dev` as its Solana RPC. |
| `openapi_url` | Link to the source OpenAPI document. The registry stores the URL; it does not inline the spec. |
| `version` | API version, for example `v1` or `2026-01-01`. |
| `affiliate_policy` | Opt-in referral policy. See [Affiliates](#affiliates). |

Valid categories:

```text
ai_ml analytics cloud compute data devtools finance identity iot maps media
messaging other productivity search security storage translation
```

### Root Metadata Writing

Use the 255-character budget deliberately. Aim for 180-255 characters for both
`description` and `use_case` unless the API is truly narrow.

`description` explains what the service is and what it returns:

- Write one dense, concrete summary sentence.
- Mention the provider domain, major capabilities, and result shapes.
- Use nouns agents can search for: `wallet balances`, `OCR`, `place details`,
  `inbox messages`, `price alerts`.
- Do not start with `Use for` or `Use when`; that belongs in `use_case`.
- Avoid marketing claims, vague adjectives, and internal implementation details.

`use_case` explains when an agent should choose the service:

- Start with `Use for` or `Use when`.
- Include task phrases, synonyms, and adjacent workflows users are likely to ask
  for.
- Prefer specific triggers: `invoice parsing`, `domain registration`,
  `wallet transaction history`, `Instagram influencer discovery`.
- Do not repeat the description in prose form; optimize for agent routing and
  search recall.
- Keep it truthful to the listed endpoints. Do not include unsupported workflows
  just to attract traffic.

## Endpoint Reference

Each endpoint entry must describe one HTTP endpoint relative to `service_url`.

| Field | Required | Constraint |
|---|---:|---|
| `method` | yes | HTTP method, normally `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`. |
| `path` | yes | Relative path. Either `v1/search` or `/v1/search` works. |
| `description` | yes | 32-255 characters. Start with a verb and name the domain object. |
| `resource` | no | Optional grouping key such as `jobs`, `datasets`, or `messages`. |
| `pricing` | no | Omit for free endpoints. If present, CI treats the endpoint as paid and probes for HTTP 402. |

Description recommendations:

- Start with a concrete verb: `Search`, `Create`, `List`, `Generate`,
  `Validate`, `Send`.
- Name the object being acted on: `Search influencers`, not `Search items`.
- Include the useful result shape when it matters: `returning profiles,
  audience metrics, and contact signals`.
- Avoid implementation boilerplate such as auth, pagination, retries, or generic
  CRUD wording unless that is the product value.

## Pricing

Pricing is intentionally small and machine-readable. The common shape is:

```yaml
pricing:
  dimensions:
    - direction: usage
      unit: requests
      scale: 1
      tiers:
        - up_to: 1000
          price_usd: 0.00
        - price_usd: 0.01
```

Rules enforced by `pay`:

- Omit `pricing` entirely for free endpoints. An endpoint with a `pricing` block
  is considered metered and CI expects it to return a payment challenge.
- `price_usd` is a USD amount for `scale` units. A `scale` of `1000` means
  "price per 1,000 units".
- Non-zero per-unit prices must be representable by 6-decimal stablecoins:
  `price_usd / scale >= 0.000001`.
- A zero-price tier is allowed, but a paid endpoint still needs a valid 402 flow
  for priced usage.
- Keep all listed prices truthful. Maintainers may reject or remove misleading
  listings.

Supported pricing dimensions mirror runtime `pay server start` YAML:

| Field | Common values |
|---|---|
| `direction` | `usage`, `input`, `output`, `storage` |
| `unit` | `requests`, `tokens`, `characters`, `minutes`, `seconds`, `pages`, `documents`, `bytes`, `GiB`, `quota_units` |
| `scale` | Positive integer. Use `1` for per-request pricing. |
| `tiers[].price_usd` | USD price for the tier. |
| `tiers[].up_to` | Optional upper bound. Omit on the final catch-all tier. |

## Payment Compatibility

Every paid endpoint must:

- Return HTTP `402 Payment Required` before payment.
- Use MPP or x402 payment challenges that `pay` can decode.
- Accept Solana mainnet payments.
- Accept USDC or USDT. Known Solana mint addresses are normalized to those
  symbols during CI probing.

The probe sends `{}` with `content-type: application/json` for `POST`, `PUT`,
and `PATCH` endpoints so payment middleware has a minimal request body.

Free endpoints should omit `pricing`; they are skipped by the payment probe.

## Starting From Runtime YAML

If you already have a `pay server start` YAML file, prefer generating registry
markdown from it:

```bash
pay skills provider sync path/to/*.yml \
  --operator <operator> \
  --origin <origin> \
  --service-url 'https://production-{name}.example.com' \
  --sandbox-service-url 'https://sandbox-{name}.example.com' \
  --out providers
```

The sync command:

- Reads runtime `.yml` files.
- Validates metering and split rules before writing registry files.
- Converts `metering.dimensions` into registry `pricing.dimensions`.
- Strips runtime-only split config from the registry output.
- Writes files to `providers/<operator>/<origin>/<name>.md`.

Runtime split validation catches these issues before they can fail at payment
time:

- Split rules require explicit pricing dimensions; `sku_tiers` alone is not
  enough.
- Every split recipient must be declared in the runtime `recipients` map.
- Each split must set exactly one of `amount` or `percent`.
- Split totals must be strictly less than the minimum per-unit price.
- Per-tier split overrides must follow the same recipient and total rules.
- Non-zero `price_usd / scale` values must be at least `0.000001`.

## Affiliates

Affiliates are systems such as agents, CLIs, and platforms that recommend APIs
and may earn referral commissions.

Create `affiliates/<name>.md`:

```markdown
---
name: my-agent
title: "My Agent"
type: agent
account: "11111111111111111111111111111111"
network: mainnet
contact: hello@example.com
url: https://example.com
---

Describe how this affiliate recommends APIs.
```

Rules:

- `name` must match the filename.
- `type` must be `agent`, `cli`, or `platform`.
- `account` must be a 32-44 character base58 Solana public key.
- `network` defaults to `mainnet` when omitted.
- `contact` is required.

Providers opt into affiliate referrals with:

```yaml
affiliate_policy:
  enabled: true
  default_percent: 10
  allow:
    - my-agent
```

Omit `allow` to accept any affiliate.

## Aggregators

Aggregators are other registries or catalogs in the ecosystem.

Create `aggregators/<name>.md`:

```markdown
---
name: other-registry
title: "Other Registry"
description: "A focused registry of agent-ready APIs for a specific ecosystem"
url: https://other-registry.dev
catalog_url: https://other-registry.dev/skills.json
contact: team@other-registry.dev
---

Describe what this registry focuses on.
```

Rules:

- `name` must match the filename.
- `name`, `title`, `url`, and `contact` are required.
- `description` and `catalog_url` are optional.

## CI Behavior

Every PR runs:

1. Static validation with `pay skills build`.
2. Endpoint probing with `pay skills probe` for changed provider files.

The build step validates:

- YAML frontmatter parsing.
- Provider, affiliate, and aggregator filename matches.
- Required fields, category names, description lengths, and `use_case`.
- HTTPS domain-only `service_url` values.
- Endpoint presence and endpoint descriptions.
- Provider pricing precision.

The probe step validates changed paid endpoints:

- `402` challenge is returned.
- Protocol is recognized as MPP, MPP session, or x402.
- Currency is USDC or USDT.
- Chain/network is compatible with Solana.

On merge to `main`, CI builds the full `dist/` output, probes all endpoints, and
publishes to `gs://pay-skills/v1/`.

## PR Checklist

Before opening a PR:

- The file path matches the provider, affiliate, or aggregator `name`.
- Provider descriptions are 64-255 characters.
- Provider `description` summarizes capabilities and result shapes, not use
  cases.
- Provider `use_case` is 32-255 characters and lists concrete agent trigger
  tasks.
- Endpoint descriptions are 32-255 characters and start with a verb.
- `service_url` is a production HTTPS domain, not localhost or an IP address.
- Free endpoints omit `pricing`.
- Paid endpoints return a valid Solana 402 challenge and accept USDC or USDT.
- Non-zero per-unit prices satisfy `price_usd / scale >= 0.000001`.
- Local `pay skills build` succeeds.
- Changed paid providers pass `pay skills probe`.

## Code Of Conduct

Be respectful. Do not submit spam, misleading API listings, fake pricing, or
unavailable endpoints. Maintainers may remove entries that misrepresent pricing,
capabilities, availability, or payment compatibility.

## License

By contributing, you agree that your contributions are licensed under the
[Apache License 2.0](LICENSE).
