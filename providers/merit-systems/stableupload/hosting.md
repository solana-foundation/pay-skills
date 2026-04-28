---
name: hosting
title: "StableUpload"
description: "Upload files for permanent CDN URLs or deploy static websites from zip archives via micropayments. Supports durable artifact hosting, generated download links, static site subdomains, renewals, and simple file or site publishing for agents."
category: storage
use_case: "Use for hosting files, sharing generated artifacts, publishing static websites, uploading zip deployments, creating permanent CDN download URLs, serving images or documents, agent-generated deliverables, simple web hosting, and renewing site deployments."
service_url: https://stableupload.dev
endpoints:
  - method: POST
    path: "api/upload"
    resource: files
    description: "Upload a file and receive a permanent CDN download URL for sharing or agent-generated artifacts"
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
    description: "Upload a zip archive and deploy it as a static website served from a generated subdomain"
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
    description: "Renew an existing static site deployment for another 6 months to keep the generated subdomain active"
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

## Spend-aware usage

- Choose `api/file` for a single hosted asset and `api/site` for a complete
  static website zip. Do not deploy a whole site when a file URL is enough.
- Compress or downsize large assets before upload when quality allows; pricing
  depends on file size.
- Ask before permanent hosting, site deployment, or renewal. Confirm the file
  path, size, retention expectation, and whether the URL may be public.
