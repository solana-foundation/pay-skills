---
category: search
description: "Search Google ClaimReview fact-check data across 100+ publishers. Returns checked claims, ratings, claimants, publishers, review URLs, claim dates, and pages for politics, health, science, viral images, and misinformation."
endpoints:
- description: Search fact-checked claims by query text and return claim reviews, ratings, publishers, and review URLs.
  method: GET
  path: v1alpha1/claims:search
  resource: claims
- description: Search fact-checked claims using an image query and return related claim reviews and ratings.
  method: GET
  path: v1alpha1/claims:imageSearch
  resource: claims
- description: List the `ClaimReview` markup pages for a specific URL or for an organization.
  method: GET
  path: v1alpha1/pages
  resource: pages
- description: Get all ClaimReview markup for a specific page, including reviewed claims, ratings, and publisher metadata.
  method: GET
  path: v1alpha1/pages/{pagesId}
  resource: pages
- description: Create ClaimReview markup for a page so fact-check claim ratings can be indexed.
  method: POST
  path: v1alpha1/pages
  resource: pages
- description: Replace all ClaimReview markup on a page with a full update for reviewed claims and ratings.
  method: PUT
  path: v1alpha1/pages/{pagesId}
  resource: pages
- description: Delete all ClaimReview markup associated with a specific page.
  method: DELETE
  path: v1alpha1/pages/{pagesId}
  resource: pages
name: factchecktools
sandbox_service_url: https://sandbox-pay-google-factchecktools-123883807128.us-central1.run.app
service_url: https://production-pay-google-factchecktools-123883807128.us-central1.run.app
title: Fact Check Tools API
use_case: "Use for claim verification, misinformation checks, media literacy tools, newsroom research, health or science claim review, political fact-check lookup, viral rumor triage, source citation, and finding prior fact-check coverage."
version: v1alpha1
---

## Spend-aware usage

- For user-facing claim checks, use claim search endpoints with the exact claim
  text and language/region when known.
- Page create, update, and delete endpoints manage ClaimReview markup. Do not
  call them for ordinary fact-check lookup.
- Start with one narrow query. Broaden the claim wording only if the first result
  set is empty or clearly unrelated.
