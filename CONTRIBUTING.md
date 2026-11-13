# Contributing to pay-skills

`pay-skills` is the public registry of payment-gated APIs discoverable by the `pay` CLI and by agents using the `pay` MCP server. A good contribution is machine-readable, probeable, and honest about pricing and capabilities.

## Quick Start

```bash
# 1. Fork + clone
git clone git@github.com:<you>/pay-skills && cd pay-skills

# 2. Scaffold a new provider from the upstream API's OpenAPI document
pay catalog scaffold --output-dir providers <operator>/<name> https://api.example.com/openapi.json

# 3. Edit providers/<operator>/<name>/PAY.md — replace the TODO placeholders
#    for `category` and `use_case`, then refine the prose.

# 4. Validate the provider locally
pay catalog check providers/<operator>/<name>/PAY.md

# 5. Optional: run the static registry-wide check
pay catalog check . --no-probe

# 6. Open a PR
```

If `pay` is not installed, use `npx @solana/pay catalog ...` in place of `pay catalog ...`.

## Directory layout

Each provider lives in its own directory; the path under `providers/` becomes the provider FQN:

```
providers/
  <operator>/<name>/PAY.md              ← FQN: <operator>/<name>          (native)
  <operator>/<origin>/<name>/PAY.md     ← FQN: <operator>/<origin>/<name> (proxied)
```

Use the two-level layout when you operate the API directly. Use the three-level layout when your gateway proxies another provider's API:

- `providers/acme/search` means Acme operates the API.
- `providers/acme/google/translate` means Acme operates a gateway for Google's Translate API.

Sidecar files, including `openapi.json` and request schemas, live in the same directory as `PAY.md`. The public registry requires the OpenAPI document to be committed next to `PAY.md` and referenced with `openapi: { path: openapi.json }`.

Do not use `openapi: { url: ... }` in `PAY.md`. Remote specs are not accepted in registry entries because reviewers need a stable diff and the published catalog must not depend on an upstream server at build time.

Naming rules:

| Rule | Example |
|---|---|
| `name:` field must match the parent directory name | `providers/acme/search/PAY.md` ⇒ `name: search` |
| Path under `providers/` is the FQN | `acme/search`, `solana-foundation/google/translate` |
| Use lowercase, URL-safe segments | `market-data`, not `Market Data` |

## PAY.md structure

```markdown
---
name: rpc
title: "QuickNode"
description: "Pay-per-request JSON-RPC for 140+ blockchain networks. ..."
use_case: "Use for blockchain JSON-RPC, account/contract reads, ..."
category: compute
service_url: https://x402.quicknode.com
sandbox_service_url: https://sandbox.example.com    # optional
version: v1                                         # optional
openapi:
  path: openapi.json
# Or, for a tiny inline spec:
# openapi:
#   content: |
#     { "openapi": "3.1.0", ... }
---

Free-form prose. Explain what the API offers, when an agent should
reach for it, and any spend-aware patterns.

## Spend-aware usage

- Prefer narrow lookups over broad searches.
- Cap result limits to the smallest number that answers the task.
- Reuse identifiers across calls.
```

### Required frontmatter

| Field | Constraint |
|---|---|
| `name` | Matches the parent directory name. |
| `title` | Human-readable provider name. |
| `description` | 64–255 chars. Powers search results and catalog summaries. |
| `use_case` | 32–255 chars. Helps agents decide *when* to use the API. |
| `category` | One of the categories below. |
| `service_url` | Production URL. `https://` + domain name (no IPs). |
| One of `openapi:` or `endpoints:` | OpenAPI source (preferred — must be `path:` or `content:`, not `url:`) or inline endpoint list. |

### Optional frontmatter

| Field | Constraint |
|---|---|
| `sandbox_service_url` | HTTPS staging URL. For sandbox payment tests, configure the service to use `https://402.surfnet.dev` as its Solana RPC. |
| `version` | API version, e.g. `v1` or `2026-01-01`. |

### Categories

```text
ai_ml cloud compute data devtools finance identity maps media messaging other
productivity search security shopping storage translation
```

Use the narrowest category that matches the user's task:

| Category | Use for |
|---|---|
| `ai_ml` | Model inference, embeddings, OCR/vision/NLP, speech, and model-powered extraction when no narrower category fits. |
| `cloud` | Domains, DNS, hosting control planes, cloud platform APIs, and infrastructure management. |
| `compute` | RPC, execution, node access, server workloads, and metered compute resources. |
| `data` | Structured datasets, enrichment, records, analytics datasets, and factual lookups that are not primarily search. |
| `devtools` | Developer utilities, testing, CI, code, automation helpers, and integration tools. |
| `finance` | Market data, crypto data, financial research, payments data, portfolio and asset analytics. |
| `identity` | KYC, verification, account/person/business identity, credentials, and trust assertions. |
| `maps` | Places, geocoding, addresses, local discovery, travel locations, routing, and geographic context. |
| `media` | Image/video/audio generation or processing, social content, creator data, and visual web artifacts. |
| `messaging` | Email, SMS, phone calls, inboxes, notifications, and communication channels. |
| `productivity` | Workflows around documents, tasks, scheduling, collaboration, office tools, and personal productivity. |
| `search` | Web search, knowledge search, fact-check search, catalog discovery, and query-first retrieval. |
| `security` | Moderation, abuse/risk checks, fraud signals, CAPTCHA/security workflows, and policy compliance. |
| `shopping` | Product search, retail pricing, marketplaces, purchases, merchandise, checkout, and fulfillment. |
| `storage` | File upload, object storage, durable artifacts, CDN links, backups, and static asset storage. |
| `translation` | Translation, localization, language detection, transliteration, and glossary-controlled language workflows. |
| `other` | Only when none of the categories above is a truthful fit. |

### OpenAPI provenance

The committed `openapi.json` should come from the upstream API that defines the product you are listing.

- For a native API, the upstream API is your own production API.
- For a proxied API, the upstream API is the provider you proxy, such as Google, Alibaba, Perplexity, or another third-party API.
- If your gateway exposes only a subset of the upstream API, commit that subset and say so in `PAY.md`.
- If your gateway changes paths, schemas, auth, or behavior, the OpenAPI file must describe the public surface callers actually use and `PAY.md` must explain the difference.

Do not invent capabilities, include endpoints you do not expose, or commit an unrelated SDK-generated spec. Reviewers should be able to trace the file back to the upstream API docs, source repo, or OpenAPI endpoint.

### `openapi:` source variants

Exactly one variant per provider. The public registry requires the spec to be committed in the repo; `openapi.url` is rejected by CI.

```yaml
# Co-located upstream spec snapshot, read relative to PAY.md.
openapi:
  path: openapi.json

# Inline document — useful for tiny specs that change rarely.
openapi:
  content: |
    { "openapi": "3.1.0", "paths": { ... } }
```

If the upstream spec lives at a URL, fetch it once and commit the snapshot next to `PAY.md`:

```bash
curl -fsSL https://api.example.com/openapi.json -o providers/<fqn>/openapi.json
```

Refresh the committed snapshot whenever the upstream API changes. The diff lets reviewers see what moved.

The build inlines the parsed document into the published per-provider detail JSON, so downstream consumers can introspect schemas/types without a follow-up HTTP round-trip.

### Inline `endpoints:` (legacy / OpenAPI-less)

Use only when the provider has no OpenAPI document (e.g. a hand-built gateway). Mutually exclusive with `openapi:`.

```yaml
endpoints:
  - method: POST
    path: v1/search
    resource: search
    description: "Search products by keyword with structured filters"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
```

## Writing `description` and `use_case`

Aim for 180–255 characters for both unless the API is genuinely narrow. The 255-char budget exists because both fields power agent search and routing.

### `description` — *what* the service is

- One dense, concrete summary sentence.
- Mention the provider domain, major capabilities, result shapes.
- Use nouns agents can search for: `wallet balances`, `OCR`, `place details`, `inbox messages`, `price alerts`.
- Don't start with `Use for…` / `Use when…` — that belongs in `use_case`.
- Avoid marketing claims, vague adjectives, and internal implementation details.

### `use_case` — *when* an agent should pick it

- Start with `Use for` or `Use when`.
- Include task phrases, synonyms, and adjacent workflows users are likely to ask for.
- Prefer specific triggers: `invoice parsing`, `domain registration`, `wallet transaction history`, `Instagram influencer discovery`.
- Don't repeat the description in prose form — optimize for agent routing and search recall.
- Keep it truthful to the listed endpoints. Don't list workflows you don't actually support.

## Endpoint reference (inline `endpoints:` only)

Each entry describes one HTTP endpoint relative to `service_url`.

| Field | Required | Constraint |
|---|---:|---|
| `method` | yes | `GET` / `POST` / `PUT` / `PATCH` / `DELETE`. |
| `path` | yes | Relative path. `v1/search` and `/v1/search` both work. |
| `description` | yes | 32–255 chars. Start with a verb and name the domain object. |
| `resource` | no | Optional grouping key (`jobs`, `datasets`, `messages`). |
| `pricing` | no | Omit for free endpoints. If present, CI treats the endpoint as paid and probes for HTTP 402. |

Description tips:

- Concrete verb first: `Search`, `Create`, `List`, `Generate`, `Validate`, `Send`.
- Name the object: `Search influencers`, not `Search items`.
- Mention useful result shape when it matters: `returning profiles, audience metrics, and contact signals`.
- Avoid implementation boilerplate (auth, pagination, retries) unless that *is* the product value.

## Pricing

Pricing is small and machine-readable:

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

Rules enforced at build time:

- Omit `pricing` entirely for free endpoints. Endpoints with a `pricing` block are treated as metered, and CI expects a 402 response.
- `price_usd` is a USD amount for `scale` units. `scale: 1000` ⇒ "price per 1,000 units".
- Non-zero per-unit prices must be representable by 6-decimal stablecoins: `price_usd / scale >= 0.000001`.
- Zero-price tiers are allowed; a paid endpoint still needs a valid 402 flow for priced usage.

Supported dimensions mirror runtime `pay server start` YAML:

| Field | Common values |
|---|---|
| `direction` | `usage`, `input`, `output`, `storage` |
| `unit` | `requests`, `tokens`, `characters`, `minutes`, `seconds`, `pages`, `documents`, `bytes`, `GiB`, `quota_units` |
| `scale` | Positive integer. `1` for per-request pricing. |
| `tiers[].price_usd` | USD price for the tier. |
| `tiers[].up_to` | Optional upper bound. Omit on the final catch-all tier. |

## Payment compatibility

Every paid endpoint must:

- Return HTTP **402 Payment Required** before payment.
- Use MPP or x402 challenges that `pay` can decode.
- Accept payment on **Solana mainnet**.
- Accept **USDC** or **USDT** (Solana mint addresses are normalized to those symbols at probe time).

Probe behavior:

- `POST` / `PUT` / `PATCH` probes send a JSON body with `content-type: application/json`. For OpenAPI-driven providers, the body is the operation's `example` / `examples[0]`, or a body synthesized from the `requestBody` schema; in any other case, `{}` is sent as a minimal fallback.
- Free endpoints (no `pricing` and no 402 response) are skipped.
- Indeterminate statuses (`siwx_required`, `auth_required`, `unprobeable_needs_body`, `not_found`, `method_not_allowed`) neither pass nor fail — the probe couldn't classify them, so they pass through silently.

## Local commands

| Command | What it does |
|---|---|
| `pay catalog scaffold --output-dir providers <fqn> <openapi_url>` | Fetch the upstream OpenAPI doc and write `providers/<fqn>/PAY.md` with frontmatter pre-filled. Inserts `TODO` for `category` / `use_case` so unfinished scaffolds fail validation. |
| `pay catalog check <PAY.md>` | One provider: frontmatter + OpenAPI path/content resolution + live probe + Solana verdict. Use this most. |
| `pay catalog check <PAY.md> --no-probe` | Frontmatter shape + OpenAPI path/content resolution only. Fast smoke test. |
| `pay catalog check <PAY.md> -v` | Same as `check`, with the per-endpoint probe + verdict tables printed before the summary. |
| `pay catalog check <PAY.md> --strict` | Upgrade non-Solana warnings to blocking errors. |
| `pay catalog check . --no-probe` | Whole registry, frontmatter-only. |
| `pay catalog check . --changed-from origin/main` | Probe + verdict only on providers changed since `origin/main`. Useful before opening a PR. |
| `pay catalog build .` | Full registry build (`dist/skills.json` + per-provider details). Used by main-branch CI; not needed for local dev. |

`--probe-timeout`, `--probe-concurrency`, `--currencies` are knobs on every probe-driven command.

## CI behavior

### Pull requests (`.github/workflows/validate.yml`)

1. **Static check** across the entire registry: every `PAY.md` parses, frontmatter is shape-validated, and every committed `openapi:` path/content resolves. No live probe.
2. **Probe + Solana-compat gate** on the changed providers. CI resolves the changed `PAY.md` files with `git diff origin/<base>...HEAD`, then passes them to `pay catalog check . --files ...`. A sidecar change like `openapi.json` triggers a re-probe of the owning provider.
3. **Verdict summary** (`always()`): `--format json` is rendered into a markdown table on the PR Step Summary so reviewers see verdicts at a glance.

### Merges to `main` (`.github/workflows/build-skills.yml`)

1. Detect providers changed in the commit: any file under `providers/<...>/` is resolved up to its owning `PAY.md`; the set is deduped.
2. Re-run the Solana-compat gate (so a bypassed PR can't slip through).
3. Pull the previously-published `dist/` from GCS.
4. Build incrementally: `--only <changed-fqns> --previous-dist prev-dist`. Unchanged providers are copied through verbatim; only the diff is re-probed.
5. Publish `dist/` to `gs://pay-skills/v1/` via Workload Identity Federation (no long-lived secrets). Within minutes, the API is available in `pay skills search` and at `https://pay.sh/api/<fqn>`.

`workflow_dispatch` with `mode: rebuild` does a full re-resolve + re-probe of every provider — use after image / pipeline changes that affect cached providers.

## PR checklist

Before opening a PR:

- [ ] `pay catalog check providers/<fqn>/PAY.md` is green locally.
- [ ] OpenAPI spec comes from the upstream API and is committed as a sidecar (`openapi: { path: openapi.json }`) or inline `content:`, not referenced by URL.
- [ ] Any gateway-specific subset or behavior difference is explained in `PAY.md`.
- [ ] The `name:` field matches the parent directory name.
- [ ] `description` is 64–255 chars and summarizes capabilities + result shapes (not use cases).
- [ ] `use_case` is 32–255 chars and lists concrete agent trigger tasks.
- [ ] No remaining `TODO` placeholders (`category: TODO`, `use_case: TODO`).
- [ ] `service_url` is a production HTTPS domain (no localhost, no IPs).
- [ ] Free endpoints omit `pricing`.
- [ ] Paid endpoints return a valid Solana 402 challenge accepting USDC or USDT.
- [ ] Non-zero per-unit prices satisfy `price_usd / scale >= 0.000001`.

## Aggregators

Other registries we list for visibility. Create `aggregators/<name>.md`:

```markdown
---
name: other-registry
title: "Other Registry"
description: "A focused registry of stablecoin-gated APIs"   # optional
url: https://other-registry.dev
catalog_url: https://other-registry.dev/skills.json     # optional
contact: team@other-registry.dev
---

What this registry focuses on.
```

## Code of Conduct

Be respectful. Don't submit spam, misleading API listings, fake pricing, or unavailable endpoints. Maintainers may remove entries that misrepresent pricing, capabilities, availability, or payment compatibility.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
