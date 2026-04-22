---
category: data
description: Exchange data and analytics assets across organizations.
endpoints:
- description: Lists all data exchanges in a given project and location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges
  resource: projects.locations.dataExchanges
- description: Gets the details of a data exchange.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}
  resource: projects.locations.dataExchanges
- description: Lists all subscriptions on a given Data Exchange or Listing.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}:listSubscriptions
  resource: projects.locations.dataExchanges
- description: Creates a new data exchange.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges
  resource: projects.locations.dataExchanges
- description: Creates a Subscription to a Data Clean Room. This is a long-running operation as it will create one or more linked datas
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}:subscribe
  resource: projects.locations.dataExchanges
- description: Gets the IAM policy.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}:getIamPolicy
  resource: projects.locations.dataExchanges
- description: Sets the IAM policy.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}:setIamPolicy
  resource: projects.locations.dataExchanges
- description: Returns the permissions that a caller has.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}:testIamPermissions
  resource: projects.locations.dataExchanges
- description: Updates an existing data exchange.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}
  resource: projects.locations.dataExchanges
- description: Deletes an existing data exchange.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}
  resource: projects.locations.dataExchanges
- description: Lists all listings in a given project and location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings
  resource: projects.locations.dataExchanges.listings
- description: Gets the details of a listing.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}
  resource: projects.locations.dataExchanges.listings
- description: Lists all subscriptions on a given Data Exchange or Listing.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}:listSubscriptions
  resource: projects.locations.dataExchanges.listings
- description: Creates a new listing.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings
  resource: projects.locations.dataExchanges.listings
- description: Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. U
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}:subscribe
  resource: projects.locations.dataExchanges.listings
- description: Gets the IAM policy.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}:getIamPolicy
  resource: projects.locations.dataExchanges.listings
- description: Sets the IAM policy.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}:setIamPolicy
  resource: projects.locations.dataExchanges.listings
- description: Returns the permissions that a caller has.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}:testIamPermissions
  resource: projects.locations.dataExchanges.listings
- description: Updates an existing listing.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}
  resource: projects.locations.dataExchanges.listings
- description: Deletes a listing.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/listings/{listingsId}
  resource: projects.locations.dataExchanges.listings
- description: Gets a QueryTemplate
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/queryTemplates/{queryTemplatesId}
  resource: projects.locations.dataExchanges.queryTemplates
- description: Lists all QueryTemplates in a given project and location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/queryTemplates
  resource: projects.locations.dataExchanges.queryTemplates
- description: Creates a new QueryTemplate
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/queryTemplates
  resource: projects.locations.dataExchanges.queryTemplates
- description: Submits a query template for approval.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/queryTemplates/{queryTemplatesId}:submit
  resource: projects.locations.dataExchanges.queryTemplates
- description: Approves a query template.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/queryTemplates/{queryTemplatesId}:approve
  resource: projects.locations.dataExchanges.queryTemplates
- description: Updates an existing QueryTemplate
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/queryTemplates/{queryTemplatesId}
  resource: projects.locations.dataExchanges.queryTemplates
- description: Deletes a query template.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/dataExchanges/{dataExchangesId}/queryTemplates/{queryTemplatesId}
  resource: projects.locations.dataExchanges.queryTemplates
- description: Gets the details of a Subscription.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/subscriptions/{subscriptionsId}
  resource: projects.locations.subscriptions
- description: Lists all subscriptions in a given project and location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/subscriptions
  resource: projects.locations.subscriptions
- description: Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. Thi
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/subscriptions/{subscriptionsId}:refresh
  resource: projects.locations.subscriptions
- description: Revokes a given subscription.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/subscriptions/{subscriptionsId}:revoke
  resource: projects.locations.subscriptions
- description: Gets the IAM policy.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/subscriptions/{subscriptionsId}:getIamPolicy
  resource: projects.locations.subscriptions
- description: Sets the IAM policy.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/subscriptions/{subscriptionsId}:setIamPolicy
  resource: projects.locations.subscriptions
- description: Deletes a subscription.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/subscriptions/{subscriptionsId}
  resource: projects.locations.subscriptions
- description: Lists all data exchanges from projects in a given organization and location.
  method: GET
  path: v1/organizations/{organizationsId}/locations/{locationsId}/dataExchanges
  resource: organizations.locations.dataExchanges
name: analyticshub
service_url: https://sandbox-pay-google-analyticshub-v2c65mhlba-uc.a.run.app
title: Analytics Hub API
version: v1
---
