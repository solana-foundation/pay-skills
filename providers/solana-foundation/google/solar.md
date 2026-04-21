---
category: maps
description: Solar potential for rooftops — panel layout, energy, savings.
endpoints:
- description: 'Locates the building whose centroid is closest to a query point. Returns an error with code `NOT_FOUND` if there are no '
  method: GET
  path: v1/buildingInsights:findClosest
  resource: buildingInsights
- description: Gets solar information for a region surrounding a location. Returns an error with code `NOT_FOUND` if the location is ou
  method: GET
  path: v1/dataLayers:get
  resource: dataLayers
- description: Returns an image by its ID.
  method: GET
  path: v1/geoTiff:get
  resource: geoTiff
name: solar
service_url: https://solar.googleapis.com/
title: Solar API
version: v1
---
