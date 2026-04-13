# pay-bazaar

The central provider registry for [pay](https://github.com/solana-foundation/pay) — service discovery for paid APIs on Solana.

## Structure

```
bazaars.json           Vetted third-party bazaars (like brew taps)
providers/             Curated provider specs shipped in this repo
  solana-foundation/
    payment-debugger.yml
scripts/
  build-index.py       CI: validate specs + compile index.json
```

## How it works

1. **Providers** publish YAML specs describing their API: endpoints, pricing, metering, routing.
2. **This repo** curates a set of providers and references vetted third-party bazaars in `bazaars.json`.
3. **CI** (every 6 hours or on push) fetches all specs, validates them, and compiles a single `index.json`.
4. **`pay` CLI** fetches `index.json` to power `pay bazaar search`, `pay install`, etc.

## Adding a provider

### To this repo (curated)

1. Create `providers/<org>/<name>.yml`
2. Open a PR

### Via a third-party bazaar

1. Create a repo with a `providers/` directory containing YAML specs
2. Ask to be added to `bazaars.json` via PR

## Provider spec format

See any YAML file in `providers/` for the full schema. The minimum:

```yaml
name: my-api               # must match filename
subdomain: my-api
title: "My API"
description: "What it does."
category: data              # ai_ml, data, cloud, finance, identity, storage, ...
version: v1
routing:
  type: proxy
  url: https://api.example.com/
endpoints:
  - method: GET
    path: "v1/resource"
    resource: "resource"
    description: "Get a resource."
    metering:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
```
