---
category: search
description: Search fact-check articles from ClaimReview markup.
endpoints:
- description: Search through fact-checked claims.
  method: GET
  path: v1alpha1/claims:search
  resource: claims
- description: Search through fact-checked claims using an image as the query.
  method: GET
  path: v1alpha1/claims:imageSearch
  resource: claims
- description: List the `ClaimReview` markup pages for a specific URL or for an organization.
  method: GET
  path: v1alpha1/pages
  resource: pages
- description: Get all `ClaimReview` markup on a page.
  method: GET
  path: v1alpha1/pages/{pagesId}
  resource: pages
- description: Create `ClaimReview` markup on a page.
  method: POST
  path: v1alpha1/pages
  resource: pages
- description: Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` mark
  method: PUT
  path: v1alpha1/pages/{pagesId}
  resource: pages
- description: Delete all `ClaimReview` markup on a page.
  method: DELETE
  path: v1alpha1/pages/{pagesId}
  resource: pages
name: factchecktools
service_url: https://sandbox-pay-google-factchecktools-v2c65mhlba-uc.a.run.app
title: Fact Check Tools API
version: v1alpha1
---
