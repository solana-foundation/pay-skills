# pay-skills

A community registry of stablecoin-gated APIs for [pay](https://github.com/solana-foundation/pay) — an open directory the `pay` CLI and AI agents can search, route to, and pay through. Public good, community-maintained.

## Add your API in three commands

```bash
# 1. Scaffold a new provider from the upstream API's OpenAPI document.
pay catalog scaffold --output-dir providers <your-org>/<api-name> https://api.example.com/openapi.json

# 2. Edit the generated providers/<your-org>/<api-name>/PAY.md:
#      - replace the `category: TODO` placeholder
#      - replace the `use_case: TODO` placeholder
#    (TODO values fail validation, so you'll catch unfinished work locally.)

# 3. Validate locally — parses frontmatter, fetches the OpenAPI, probes every
#    endpoint, applies the Solana-compat verdict.
pay catalog check providers/<your-org>/<api-name>/PAY.md
```

When `pay catalog check` prints `PAY.md check successful`, open a PR. CI runs the same pipeline; once merged, your API is live in `pay skills search` and at `https://pay.sh/api/<fqn>` within minutes.

## Provider directory layout

```
providers/
  <operator>/<name>/PAY.md                 ← native API
  <operator>/<origin>/<name>/PAY.md        ← proxied API (gateway)
```

Each provider lives in its own directory. The directory's path under `providers/` becomes the provider FQN, such as `<operator>/<name>` or `<operator>/<origin>/<name>`. Commit the upstream OpenAPI snapshot next to `PAY.md` and reference it with `openapi: { path: openapi.json }` — the build inlines the resolved spec into the published index.

## PAY.md structure

```markdown
---
name: rpc                                  # must match parent directory name
title: "QuickNode"
description: "..."                         # 64–255 chars, powers search
use_case: "Use for ..."                    # 32–255 chars, helps LLMs route
category: compute                          # see categories list below
service_url: https://x402.quicknode.com    # production HTTPS URL, no IPs
openapi:
  path: openapi.json                       # committed upstream spec snapshot
---

Free-form prose. Explain what the API offers, when an agent should reach
for it, and any spend-aware patterns (prefer narrow lookups over broad
searches, reuse identifiers, cap result limits, …).

## Spend-aware usage

- TODO: list patterns that minimize paid calls.
```

**Required frontmatter:** `name` `title` `description` `use_case` `category` `service_url` plus exactly one of `openapi:` or inline `endpoints:`.

**Categories:** `ai_ml` `cloud` `compute` `data` `devtools` `finance` `identity` `maps` `media` `messaging` `other` `productivity` `search` `security` `shopping` `storage` `translation`

**Optional:** `version`, `sandbox_service_url`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full field reference and writing guide.

## Local commands

| Command | What it does |
|---|---|
| `pay catalog scaffold --output-dir providers <fqn> <openapi_url>` | Generate a starter `providers/<fqn>/PAY.md` from an upstream OpenAPI document. |
| `pay catalog check <PAY.md>` | Validate one provider: frontmatter shape, OpenAPI resolution, live probe, Solana verdict. |
| `pay catalog check . --no-probe` | Walk the entire registry; frontmatter-only check (fast, offline-ish). |
| `pay catalog check . --changed-from origin/main` | Probe + verdict only on providers changed since `origin/main`. Useful before opening a PR. |
| `pay catalog build .` | Full registry build → writes `dist/skills.json` and per-provider detail JSONs. Used on `main` only. |

`-v` / `--verbose` on any `check` adds the per-endpoint probe + verdict tables. `--strict` upgrades non-Solana warnings to blocking errors.

## Payment requirements

Paid endpoints must:

- Return HTTP **402** with a valid payment challenge (MPP or x402 protocol).
- Accept payment on **Solana mainnet**.
- Accept **USDC** or **USDT** stablecoins.

CI probes every endpoint and emits `::warning::` / `::error::` annotations inline on PRs. Endpoints that don't return a valid Solana 402 challenge block the merge. Indeterminate statuses (auth-required, SIWX, body-required) neither warn nor error — they pass through.

## How publication works

1. Contributors open PRs adding/editing PAY.md files (and optional sidecars). The `Validate providers` workflow parses, probes, and emits inline annotations.
2. On merge to `main`, the `Build & Publish Skills Index` workflow:
   - Re-runs the Solana-compat gate against this commit's diff (so a bypassed PR can't slip through).
   - Pulls the previous dist from `gs://pay-skills/v1/`.
   - Runs an incremental build (`--only <changed-fqns> --previous-dist prev-dist`) — unchanged providers are copied verbatim.
   - Publishes `dist/` to `gs://pay-skills/v1/`.
3. `pay skills update` clients refetch the index. Search updates within minutes.
