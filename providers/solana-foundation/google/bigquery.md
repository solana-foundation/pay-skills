---
category: data
description: "Run SQL over BigQuery and 255 public datasets: crypto, weather, healthcare, genomics, patents, GitHub, PyPI, Stack Overflow, census, Wikipedia, real estate, transportation, satellite imagery, NLP corpora, SEC filings, and IoT."
use_case: "Use for data analytics, market research, fact-finding from public datasets, blockchain and crypto analysis, weather and climate queries, SQL exploration, benchmark datasets, investigative research, and large-scale structured data retrieval."
openapi:
  url: https://production-pay-google-bigquery-123883807128.us-central1.run.app/openapi.json
name: bigquery
sandbox_service_url: https://sandbox-pay-google-bigquery-123883807128.us-central1.run.app
service_url: https://production-pay-google-bigquery-123883807128.us-central1.run.app
title: BigQuery API
version: v2

---

## Usage notes

Authentication and billing are handled automatically by the payment gateway.

### How the proxy works

The `{projectsId}` in every path is **ignored** — the proxy rewrites it to the operator's GCP project. Use any placeholder (e.g. `x` or `_`).

### Running SQL queries (most common use case)

Use `POST /bigquery/v2/projects/x/queries` with a JSON body:

```json
{
  "query": "SELECT * FROM `bigquery-public-data.crypto_solana_mainnet_us.Transactions` LIMIT 10",
  "useLegacySql": false
}
```

### Cross-project access

REST endpoints like `GET /datasets` only see the operator's project. To access **public datasets** or other projects, use SQL with fully-qualified table names:

```sql
-- This works (project reference is in the SQL, not the URL path)
SELECT * FROM `bigquery-public-data.crypto_solana_mainnet_us.Token Transfers` LIMIT 10

-- This does NOT work (REST path gets rewritten)
GET /bigquery/v2/projects/bigquery-public-data/datasets
```

### Public datasets overview

255 datasets in `bigquery-public-data`, spanning petabytes of queryable data. Reference them in SQL as `` `bigquery-public-data.<dataset_id>.<table>` ``.

**Blockchain / Crypto** — `crypto_bitcoin`, `crypto_ethereum` (7.9 TB), `crypto_solana_mainnet_us`, `crypto_polygon` (20 TB), `crypto_litecoin`, `crypto_bitcoin_cash`, `crypto_dogecoin`, `crypto_dash`, `crypto_zcash`, `crypto_tezos`, `crypto_band`, `crypto_theta`, `crypto_iotex`, `crypto_zilliqa`, `crypto_ethereum_classic`

**Weather / Climate** — `noaa_global_forecast_system` (159 TB), `noaa_gsod`, `noaa_hurricanes`, `noaa_lightning`, `noaa_tsunami`, `noaa_significant_earthquakes`, `epa_historical_air_quality`, `ghcn_d`, `ghcn_m`, `openaq`, `nrel_nsrdb`, `nasa_wildfire`

**Healthcare / Genomics** — `human_genome_variants` (7.6 TB), `gnomAD` (2.6 TB), `deepmind_alphafold`, `ebi_chembl`, `fhir_synthea`, `cms_medicare`, `nlm_rxnorm`, `open_targets_genetics`, `immune_epitope_db`, `fda_drug`, `genomics_cannabis`, `genomics_rice`

**Software / Tech** — `pypi` (440 TB), `deps_dev_v1` (65 TB), `github_repos` (3.6 TB), `stackoverflow` (237 GB), `hacker_news`, `libraries_io`

**Patents / IP** — `google_patents_research` (40 TB), `patents` (21 TB), `patents_view`, `uspto_oce_claims`, `uspto_oce_pair`

**Government / Census** — `census_bureau_acs`, `census_bureau_international`, `world_bank_wdi`, `un_sdg`, `usa_names`, `fec`, `bls`, `sec_quarterly_financials`

**Geography / Maps** — `geo_openstreetmap` (4.5 TB), `geo_us_roads`, `geo_census_tracts`, `geo_us_boundaries`, `open_buildings`

**NLP / Text** — `google_books_ngrams_2020` (347 TB), `wikipedia` (19 TB), `gdelt_hathitrustbooks`, `gdelt_internetarchivebooks`

**Other** — `google_analytics_sample`, `google_trends`, `imdb`, `ncaa_basketball`, `noaa_goes16`, `the_met`, `gbif`, `worldpop`, COVID-19 datasets (28), SDOH datasets (7), transportation (NYC taxi, Chicago taxi, bikeshare), real estate, and more.

### Discovery workflow

Before writing a query, check if the data you need exists here. The dataset catalog above covers blockchain, weather, healthcare, genomics, software, patents, government, geography, NLP, and more — if the topic is in one of those categories, it's likely here.

**Step 1 — Pick a dataset** from the catalog above based on the topic.

**Step 2 — List its tables:**
```sql
SELECT table_name FROM `bigquery-public-data.<dataset_id>.INFORMATION_SCHEMA.TABLES`
```

**Step 3 — Inspect a table's schema:**
```sql
SELECT column_name, data_type
FROM `bigquery-public-data.<dataset_id>.INFORMATION_SCHEMA.COLUMNS`
WHERE table_name = '<table_name>'
```

**Step 4 — Query it:**
```sql
SELECT * FROM `bigquery-public-data.<dataset_id>.<table_name>` LIMIT 10
```

If no dataset in the catalog matches, you can search the full metadata index:
```sql
SELECT DISTINCT dataset_id, dataset_description
FROM `adventures-on-gcp.bigquery_public_datasets.bq_public_metadata`
WHERE LOWER(dataset_description) LIKE '%<keyword>%'
ORDER BY dataset_id
```

## Spend-aware usage

- Make a query plan before paying: target dataset/table, expected paid queries,
  partition filter, and `maximumBytesBilled` when practical.
- If the dataset and table are known, skip `INFORMATION_SCHEMA` discovery and
  run the aggregate directly. Use schema discovery only when the user request
  cannot be mapped to a known table.
- For large public datasets, always constrain date/time partitions and select
  only aggregate columns needed for the answer. Avoid `SELECT *` except with a
  small `LIMIT` during schema exploration.
- Prefer one aggregate query over multiple exploratory queries. If the first
  query returns zero rows or a schema error, explain the correction before
  making one follow-up call.

### Known low-call recipes

For "USDC volume moved on Solana over the past week", use the public Solana
token transfer table directly instead of probing schemas first:

```sql
DECLARE usdc_mint STRING DEFAULT 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
DECLARE window_end TIMESTAMP DEFAULT CURRENT_TIMESTAMP();
DECLARE window_start TIMESTAMP DEFAULT TIMESTAMP_SUB(window_end, INTERVAL 7 DAY);

SELECT
  FORMAT_TIMESTAMP('%Y-%m-%d %H:%M:%S UTC', window_start) AS window_start_utc,
  FORMAT_TIMESTAMP('%Y-%m-%d %H:%M:%S UTC', window_end) AS window_end_utc,
  COUNT(*) AS transfer_rows,
  COUNT(DISTINCT tx_signature) AS distinct_transactions,
  ROUND(SUM(value / POW(10, decimals)), 2) AS total_usdc_moved
FROM `bigquery-public-data.crypto_solana_mainnet_us.Token Transfers`
WHERE mint = usdc_mint
  AND block_timestamp >= window_start
  AND block_timestamp < window_end
  AND transfer_type = 'spl-transfer';
```
