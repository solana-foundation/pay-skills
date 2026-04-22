---
category: ai_ml
description: Convert audio to text using speech recognition models.
endpoints:
- description: Get a custom class.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}
  resource: projects.locations.customClasses
- description: List custom classes.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses
  resource: projects.locations.customClasses
- description: Create a custom class.
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses
  resource: projects.locations.customClasses
- description: Update a custom class.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}
  resource: projects.locations.customClasses
- description: Delete a custom class.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}
  resource: projects.locations.customClasses
- description: List phrase sets.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets
  resource: projects.locations.phraseSets
- description: Get a phrase set.
  method: GET
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}
  resource: projects.locations.phraseSets
- description: Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseS
  method: POST
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets
  resource: projects.locations.phraseSets
- description: Update a phrase set.
  method: PATCH
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}
  resource: projects.locations.phraseSets
- description: Delete a phrase set.
  method: DELETE
  path: v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}
  resource: projects.locations.phraseSets
- description: Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `
  method: GET
  path: v1/operations
  resource: operations
- description: Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals
  method: GET
  path: v1/operations/{operationsId}
  resource: operations
- description: 'Performs synchronous speech recognition: receive results after all audio has been sent and processed.'
  method: POST
  path: v1/speech:recognize
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.016
        up_to: 500000
      - price_usd: 0.01
        up_to: 1000000
      - price_usd: 0.008
        up_to: 2000000
      - price_usd: 0.004
      unit: minutes
  resource: speech
- description: 'Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns eithe'
  method: POST
  path: v1/speech:longrunningrecognize
  pricing:
    dimensions:
    - direction: usage
      scale: 1
      tiers:
      - price_usd: 0.016
        up_to: 500000
      - price_usd: 0.01
        up_to: 1000000
      - price_usd: 0.008
        up_to: 2000000
      - price_usd: 0.004
      unit: minutes
  resource: speech
name: speech
service_url: https://sandbox-pay-google-speech-v2c65mhlba-uc.a.run.app
title: Cloud Speech-to-Text API
version: v1
---
