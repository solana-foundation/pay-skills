---
category: data
description: "SQL warehouse with 255 public datasets — cryptocurrency usage data, weather, healthcare, genomics, patents, GitHub, PyPI, Stack Overflow, census, Wikipedia, real estate, transportation, satellite imagery, NLP corpora, SEC filings, IoT, and more."
use_case: "data analytics, market research, querying public datasets for accurate data and facts, SQL over petabyte-scale data"
endpoints:
- description: Returns the dataset specified by datasetID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Lists all datasets in the specified project to which the user has been granted the READER dataset role.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets
  resource: datasets
- description: Create a new empty BigQuery dataset in the specified project, configuring its location, default table expiration, and access controls
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets
  resource: datasets
- description: Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version d
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}:undelete
  resource: datasets
- description: Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch me
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch me
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, e
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}
  resource: datasets
- description: Returns information about a specific job. Job information is available for a six month period after creation. Requires t
  method: GET
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}
  resource: jobs
- description: RPC to get the results of a query job.
  method: GET
  path: bigquery/v2/projects/{projectsId}/queries/{queriesId}
  resource: jobs
- description: Lists all jobs that you started in the specified project. Job information is available for a six month period after crea
  method: GET
  path: bigquery/v2/projects/{projectsId}/jobs
  resource: jobs
- description: Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status
  method: POST
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}/cancel
  resource: jobs
- description: Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of u
  method: POST
  path: bigquery/v2/projects/{projectsId}/jobs
  resource: jobs
- description: Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
  method: POST
  path: bigquery/v2/projects/{projectsId}/queries
  pricing:
    dimensions:
    - direction: usage
      scale: 1099511627776
      tiers:
      - notes: First 1 TiB/month free
        price_usd: 0
        up_to: 1
      - price_usd: 0.005
      unit: bytes
  resource: jobs
- description: Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/jobs/{jobsId}/delete
  resource: jobs
- description: Gets the specified model resource by model ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you ca
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models
  resource: models
- description: Patch specific fields in the specified model.
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: Deletes the model specified by modelId from the dataset.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/models/{modelsId}
  resource: models
- description: RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to conside
  method: GET
  path: projects
  resource: projects
- description: RPC to get the service account for a project used for interactions with Google Cloud KMS
  method: GET
  path: bigquery/v2/projects/{projectsId}/serviceAccount
  resource: projects
- description: Gets the specified routine resource by routine ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Lists all routines in the specified dataset. Requires the READER dataset role.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines
  resource: routines
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:getIamPolicy
  resource: routines
- description: Creates a new routine in the dataset.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines
  resource: routines
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:setIamPolicy
  resource: routines
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}:testIamPermissions
  resource: routines
- description: Updates information in an existing routine. The update method replaces the entire Routine resource.
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Deletes the routine specified by routineId from the dataset.
  method: DELETE
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/routines/{routinesId}
  resource: routines
- description: Gets the specified row access policy by policy ID.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}
  resource: rowAccessPolicies
- description: Lists all row access policies on the specified table.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies
  resource: rowAccessPolicies
- description: Deletes provided row access policies.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies:batchDelete
  resource: rowAccessPolicies
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies/{rowAccessPoliciesId}:getIamPolicy
  resource: rowAccessPolicies
- description: Create a row-level security policy on a BigQuery table, restricting which rows specific users or groups can access via filter
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/rowAccessPolicies
  resource: rowAccessPolicies
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
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
- description: List the content of a table in rows.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/data
  resource: tabledata
- description: Streams data into BigQuery one record at a time without needing to run a load job.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}/insertAll
  resource: tabledata
- description: Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the ta
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Lists all tables in the specified dataset. Requires the READER dataset role.
  method: GET
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables
  resource: tables
- description: Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:getIamPolicy
  resource: tables
- description: Creates a new, empty table in the dataset.
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables
  resource: tables
- description: Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:setIamPolicy
  resource: tables
- description: Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an emp
  method: POST
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}:testIamPermissions
  resource: tables
- description: Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method
  method: PUT
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method
  method: PATCH
  path: bigquery/v2/projects/{projectsId}/datasets/{datasetsId}/tables/{tablesId}
  resource: tables
- description: Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
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
