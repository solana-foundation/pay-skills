---
name: solana-history
title: "Trawl — Solana history scans"
description: "Bulk Solana history from the Old Faithful archive: decoded instructions and events of any program over whole epochs as Parquet, and account state at a past slot as CSV. 28 presets (Pump.fun, Raydium, Jupiter, Meteora, Drift). USDC per job."
use_case: "Use for historical Solana backfills: all trades or events of a program over days or months, Anchor IDL decoding, token holders or program accounts at a past slot, research datasets, OHLCV candles from trade events. Use instead of paging RPC history."
category: data
service_url: https://trawl.run
openapi:
  path: openapi.json
---

[Trawl](https://trawl.run) reads whole epochs of the Old Faithful archive of Solana and gives the result as files. You pay one x402 payment for each job. There is no account and no API key.

- **`POST /scan`** reads an epoch range (or a date range) with a filter on programs, accounts, instruction discriminators, slots or fees. With an Anchor IDL (your own, or the IDL of a preset), each instruction and event gets its own Parquet table, one column for each account and argument. Every row has `slot`, `block_time`, `signature`, `success`, `fee` and the call position. Without an IDL, you get the matched instructions with raw data.
- **`POST /snapshot`** gives the state of chosen accounts at a past slot as gzipped CSV: the token holders of a mint, the accounts of a program (owner, `data_size` and `memcmp`, as in `getProgramAccounts`), or a list of up to 1,000 accounts.

The flow is the same for both:

1. `POST` the JSON body without `X-PAYMENT`. The answer is `402` with the firm price in `quote` and the x402 v1 terms in `accepts` (USDC on Solana mainnet; the fee payer is in `extra.feePayer`, so the payer needs no SOL).
2. Send the same body with `X-PAYMENT`. The answer is `202` with `job_id` and `status_url`.
3. `GET /job/{job_id}` until `state` is `done`. It then holds `download_urls`, `manifest_url`, `provenance_url` and a `duckdb` query that reads the files in place. The URLs stay valid for 7 days.

A failed job (`failed` or `timeout`) delivers no files. It gives `credit_issued`: send the same request with `X-CREDIT: <id>` to run it again for free. The full reference for agents is at [trawl.run/llms.txt](https://trawl.run/llms.txt). The tables and columns of each preset are at [trawl.run/data](https://trawl.run/data).

## Pricing

- Scan: a price for each TB of archive that the job reads, with a minimum for each job. The current rate is on [trawl.run/pricing](https://trawl.run/pricing). The price depends only on the epochs, not on the filter.
- Snapshot: $99 for one snapshot with any filter. `"pick": "exact"` (the state at the end of the slot itself, checked against the validator votes) is $500, for slots 330479689 to 377568055.
- The `402` quote is free and firm. The amount in `accepts` is the amount you pay.

## Spend-aware usage

- **Get the quote first.** A `POST` without `X-PAYMENT` costs nothing. Read `quote.price`, `quote.archiveTb`, `quote.estimatedSeconds` and `quote.estimatedOutputGb` before you pay.
- **Read the smallest epoch range.** An epoch is about one day of chain time now. Send `start_date` and `end_date` (UTC days) to get only the epochs that hold those days. `GET /epochs` maps dates to epochs for free.
- **Use a preset when one exists.** `GET /presets` lists them. Each preset with an IDL has a free sample at `https://trawl.run/data/<slug>/sample.zip` (1,000 slots of every table), so you can check the columns before you pay.
- **One program per IDL job.** A job with an IDL names exactly one program. For two programs, send two jobs.
- **Make the output smaller, not the price.** `include_failed: false`, `discriminators` and `accounts` cut the rows and keep a job under the 500 GB output limit. They do not change the price.
- **Put all accounts in one snapshot.** One $99 snapshot takes up to 1,000 accounts and 8 owner filters. Do not send one snapshot for each account.
- **Do not pay twice.** On `503`, wait `Retry-After` seconds and send the same request again; no payment is taken. On a failed job, use the credit in `X-CREDIT`.
- **Poll slowly.** `GET /job/{job_id}` is free, but a scan takes from under an hour to many hours. Poll once a minute or less.
