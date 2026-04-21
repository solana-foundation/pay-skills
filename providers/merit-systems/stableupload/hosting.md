---
name: hosting
title: "StableUpload"
description: "Pay-per-upload file hosting with permanent CDN URLs and static site hosting"
category: storage
service_url: https://stableupload.dev
endpoints:
  - method: POST
    path: "api/upload"
    resource: files
    description: "Upload a file and get a permanent CDN download URL"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/site"
    resource: sites
    description: "Upload a zip to serve as a static site at a subdomain"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
  - method: POST
    path: "api/site/renew"
    resource: sites
    description: "Renew a static site for 6-month increments"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.02
---

File hosting and static site deployment via micropayments.
Upload files for permanent CDN URLs, or deploy zips as static sites.
Pricing tiers by file size ($0.02–$2.00).
