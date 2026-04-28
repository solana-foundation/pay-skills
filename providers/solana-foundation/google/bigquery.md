---
category: data
description: "Run SQL over BigQuery and 255 public datasets: crypto, weather, healthcare, genomics, patents, GitHub, PyPI, Stack Overflow, census, Wikipedia, real estate, transportation, satellite imagery, NLP corpora, SEC filings, and IoT."
use_case: "Use for data analytics, market research, fact-finding from public datasets, blockchain and crypto analysis, weather and climate queries, SQL exploration, benchmark datasets, investigative research, and large-scale structured data retrieval."
endpoints:
- description: Get BigQuery dataset metadata by dataset ID, including location, access settings, labels, and default expirations.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: List BigQuery datasets visible in the project, including dataset IDs, locations, and basic metadata.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets
  resource: datasets
- description: Create a new empty BigQuery dataset in the specified project, configuring its location, default table expiration, and access controls
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets
  resource: datasets
- description: Restore a deleted dataset within its time travel window, optionally restoring a specific historical version.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}:undelete
  resource: datasets
- description: Replace an existing BigQuery dataset resource with new metadata, access settings, labels, and defaults.
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Patch selected BigQuery dataset metadata fields without replacing the entire dataset resource.
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Delete a BigQuery dataset by ID, optionally after clearing contained tables when required.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Get BigQuery job metadata, status, configuration, statistics, and errors for a specific job ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}
  resource: jobs
- description: Get results from a BigQuery query job, including rows, schema, pagination tokens, and completion state.
  method: GET
  path: bigquery/v2/projects/{projectsId}/queries/{queriesId}
  resource: jobs
- description: List BigQuery jobs in the project with status, type, creation time, and user metadata.
  method: GET
  path: bigquery/v2/projects/{projectsId}/jobs
  resource: jobs
- description: Request cancellation of a BigQuery job, then poll job status to confirm whether cancellation completed.
  method: POST
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}/cancel
  resource: jobs
- description: Start an asynchronous BigQuery job such as query, load, copy, or extract and return the job resource.
  method: POST
  path: bigquery/v2/projects/{projectsId}/jobs
  resource: jobs
- description: Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
  method: POST
  path: bigquery/v2/projects/{projectsId}/queries
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.001
      unit: requests
  resource: jobs
- description: Delete BigQuery job metadata after the job is no longer needed.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}/delete
  resource: jobs
- description: Get BigQuery ML model metadata by model ID, including model type, labels, and training information.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: List BigQuery ML models in a dataset with model IDs, types, labels, and creation metadata.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models
  resource: models
- description: Patch selected BigQuery ML model metadata fields such as description, expiration, labels, or friendly name.
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: Delete a BigQuery ML model from a dataset by model ID.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: List Google Cloud projects visible to BigQuery for the authenticated account.
  method: GET
  path: projects
  resource: projects
- description: Get the BigQuery service account used by a project for Cloud KMS and related integrations.
  method: GET
  path: bigquery/v2/projects/{projectsId}/serviceAccount
  resource: projects
- description: Get a BigQuery routine such as a user-defined function or stored procedure by routine ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: List BigQuery routines in a dataset, including user-defined functions and stored procedures.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines
  resource: routines
- description: Get the IAM policy for a BigQuery routine resource.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:getIamPolicy
  resource: routines
- description: Create a BigQuery routine such as a SQL UDF, remote function, table function, or stored procedure.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines
  resource: routines
- description: Set the IAM policy for a BigQuery routine, replacing the existing policy.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:setIamPolicy
  resource: routines
- description: Test which IAM permissions the caller has on a BigQuery routine resource.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:testIamPermissions
  resource: routines
- description: Replace a BigQuery routine resource with updated definition, arguments, language, or metadata.
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Delete a BigQuery routine from a dataset by routine ID.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Get a row access policy on a BigQuery table by policy ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}
  resource: rowAccessPolicies
- description: List row access policies attached to a BigQuery table.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies
  resource: rowAccessPolicies
- description: Delete multiple row access policies from a BigQuery table in one request.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies:batchDelete
  resource: rowAccessPolicies
- description: Get the IAM policy for a BigQuery row access policy.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}:getIamPolicy
  resource: rowAccessPolicies
- description: Create a row-level security policy on a BigQuery table, restricting which rows specific users or groups can access via filter
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies
  resource: rowAccessPolicies
- description: Test which IAM permissions the caller has on a BigQuery row access policy.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}:testIamPermissions
  resource: rowAccessPolicies
- description: Update a row-level security policy on a BigQuery table, modifying the filter expression or the list of granted users and groups
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}
  resource: rowAccessPolicies
- description: Delete a row-level security policy from a BigQuery table, removing the row filter and restoring full access for affected users
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}
  resource: rowAccessPolicies
- description: List rows from a BigQuery table with pagination, selected fields, and row offsets.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/data
  resource: tabledata
- description: Streams data into BigQuery one record at a time without needing to run a load job.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/insertAll
  resource: tabledata
- description: Get BigQuery table metadata by table ID, including schema, partitioning, clustering, and labels.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: List BigQuery tables in a dataset with IDs, table types, creation times, and basic metadata.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables
  resource: tables
- description: Get the IAM policy for a BigQuery table resource.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:getIamPolicy
  resource: tables
- description: Create an empty BigQuery table with schema, partitioning, clustering, labels, and expiration settings.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables
  resource: tables
- description: Set the IAM policy for a BigQuery table, replacing the existing policy.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:setIamPolicy
  resource: tables
- description: Test which IAM permissions the caller has on a BigQuery table resource.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:testIamPermissions
  resource: tables
- description: Replace a BigQuery table resource with updated schema, metadata, partitioning, labels, or expiration settings.
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Patch selected BigQuery table metadata fields without replacing the entire table resource.
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Delete a BigQuery table and all contained data from a dataset by table ID.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
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
