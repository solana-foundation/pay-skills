---
category: data
description: Schedule queries and transfer SaaS data into BigQuery.
endpoints:
- description: 'Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They '
  method: POST
  path: v1/projects/{projectsId}:enrollDataSources
  resource: projects
- description: Retrieves a supported data source and returns its settings.
  method: GET
  path: v1/projects/{projectsId}/dataSources/{dataSourcesId}
  resource: projects.dataSources
- description: Lists supported data sources and returns their settings.
  method: GET
  path: v1/projects/{projectsId}/dataSources
  resource: projects.dataSources
- description: Returns true if valid credentials exist for the given data source and requesting user.
  method: POST
  path: v1/projects/{projectsId}/dataSources/{dataSourcesId}:checkValidCreds
  resource: projects.dataSources
- description: Returns information about a data transfer config.
  method: GET
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}
  resource: projects.transferConfigs
- description: Returns information about all transfer configs owned by a project in the specified location.
  method: GET
  path: v1/projects/{projectsId}/transferConfigs
  resource: projects.transferConfigs
- description: Creates a new data transfer configuration.
  method: POST
  path: v1/projects/{projectsId}/transferConfigs
  resource: projects.transferConfigs
- description: Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source s
  method: POST
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}:scheduleRuns
  resource: projects.transferConfigs
- description: 'Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the ''re'
  method: POST
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}:startManualRuns
  resource: projects.transferConfigs
- description: Updates a data transfer configuration. All fields must be set, even if they are not updated.
  method: PATCH
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}
  resource: projects.transferConfigs
- description: Deletes a data transfer configuration, including any associated transfer runs and logs.
  method: DELETE
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}
  resource: projects.transferConfigs
- description: Returns information about the particular transfer run.
  method: GET
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}/runs/{runsId}
  resource: projects.transferConfigs.runs
- description: Returns information about running and completed transfer runs.
  method: GET
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}/runs
  resource: projects.transferConfigs.runs
- description: Deletes the specified transfer run.
  method: DELETE
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}/runs/{runsId}
  resource: projects.transferConfigs.runs
- description: Returns log messages for the transfer run.
  method: GET
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}/runs/{runsId}/transferLogs
  resource: projects.transferConfigs.runs.transferLogs
- description: Returns a transfer resource.
  method: GET
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}/transferResources/{transferResourcesId}
  resource: projects.transferConfigs.transferResources
- description: Returns information about transfer resources.
  method: GET
  path: v1/projects/{projectsId}/transferConfigs/{transferConfigsId}/transferResources
  resource: projects.transferConfigs.transferResources
- description: 'Lists information about the supported locations for this service. This method can be called in two ways: * **List all pu'
  method: GET
  path: v1/projects/{projectsId}/locations
  resource: projects.locations
- description: Gets information about a location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}
  resource: projects.locations
- description: 'Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They '
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:enrollDataSources
  resource: projects.locations
- description: Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. The
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}:unenrollDataSources
  resource: projects.locations
- description: Retrieves a supported data source and returns its settings.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataSources/{dataSourcesId}
  resource: projects.locations.dataSources
- description: Lists supported data sources and returns their settings.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/dataSources
  resource: projects.locations.dataSources
- description: Returns true if valid credentials exist for the given data source and requesting user.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/dataSources/{dataSourcesId}:checkValidCreds
  resource: projects.locations.dataSources
- description: Returns information about a data transfer config.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}
  resource: projects.locations.transferConfigs
- description: Returns information about all transfer configs owned by a project in the specified location.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs
  resource: projects.locations.transferConfigs
- description: Creates a new data transfer configuration.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs
  resource: projects.locations.transferConfigs
- description: Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source s
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}:scheduleRuns
  resource: projects.locations.transferConfigs
- description: 'Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the ''re'
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}:startManualRuns
  resource: projects.locations.transferConfigs
- description: Updates a data transfer configuration. All fields must be set, even if they are not updated.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}
  resource: projects.locations.transferConfigs
- description: Deletes a data transfer configuration, including any associated transfer runs and logs.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}
  resource: projects.locations.transferConfigs
- description: Returns information about the particular transfer run.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}/runs/{runsId}
  resource: projects.locations.transferConfigs.runs
- description: Returns information about running and completed transfer runs.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}/runs
  resource: projects.locations.transferConfigs.runs
- description: Deletes the specified transfer run.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}/runs/{runsId}
  resource: projects.locations.transferConfigs.runs
- description: Returns log messages for the transfer run.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}/runs/{runsId}/transferLogs
  resource: projects.locations.transferConfigs.runs.transferLogs
- description: Returns a transfer resource.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}/transferResources/{transferResourcesId}
  resource: projects.locations.transferConfigs.transferResources
- description: Returns information about transfer resources.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/transferConfigs/{transferConfigsId}/transferResources
  resource: projects.locations.transferConfigs.transferResources
name: bigquerydatatransfer
service_url: https://sandbox-pay-google-bigquerydatatransfer-v2c65mhlba-uc.a.run.app
title: BigQuery Data Transfer API
version: v1
---
