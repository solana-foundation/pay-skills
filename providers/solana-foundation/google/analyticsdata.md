---
category: data
description: Access Analytics reporting data programmatically.
endpoints:
- description: 'Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. '
  method: GET
  path: v1beta/properties/{propertiesId}/metadata
  resource: properties
- description: 'Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected '
  method: POST
  path: v1beta/properties/{propertiesId}:runReport
  resource: properties
- description: Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive fo
  method: POST
  path: v1beta/properties/{propertiesId}:runPivotReport
  resource: properties
- description: Returns multiple reports in a batch. All reports must be for the same Google Analytics property.
  method: POST
  path: v1beta/properties/{propertiesId}:batchRunReports
  resource: properties
- description: Returns multiple pivot reports in a batch. All reports must be for the same Google Analytics property.
  method: POST
  path: v1beta/properties/{propertiesId}:batchRunPivotReports
  resource: properties
- description: Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after th
  method: POST
  path: v1beta/properties/{propertiesId}:runRealtimeReport
  resource: properties
- description: This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility.
  method: POST
  path: v1beta/properties/{propertiesId}:checkCompatibility
  resource: properties
- description: Gets configuration metadata about a specific audience export. This method can be used to understand an audience export a
  method: GET
  path: v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}
  resource: properties.audienceExports
- description: Lists all audience exports for a property. This method can be used for you to find and reuse existing audience exports r
  method: GET
  path: v1beta/properties/{propertiesId}/audienceExports
  resource: properties.audienceExports
- description: Creates an audience export for later retrieval. This method quickly returns the audience export's resource name and init
  method: POST
  path: v1beta/properties/{propertiesId}/audienceExports
  resource: properties.audienceExports
- description: Retrieves an audience export of users. After creating an audience, the users are not immediately available for exporting
  method: POST
  path: v1beta/properties/{propertiesId}/audienceExports/{audienceExportsId}:query
  resource: properties.audienceExports
name: analyticsdata
service_url: https://sandbox-pay-google-analyticsdata-v2c65mhlba-uc.a.run.app
title: Google Analytics Data API
version: v1beta
---
