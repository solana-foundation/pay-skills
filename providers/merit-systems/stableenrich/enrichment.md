---
name: enrichment
title: "StableEnrich"
description: "Pay-per-request data enrichment — Apollo, Exa, Firecrawl, Google Maps, and more"
category: data
service_url: https://stableenrich.dev
endpoints:
  - method: POST
    path: "api/apollo/people-search"
    resource: apollo
    description: "Apollo — Find prospects by filters"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: POST
    path: "api/apollo/people-enrich"
    resource: apollo
    description: "Apollo — Enrich person by email, name, or domain"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.050
  - method: POST
    path: "api/apollo/org-search"
    resource: apollo
    description: "Apollo — Find companies by filters"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: POST
    path: "api/apollo/org-enrich"
    resource: apollo
    description: "Apollo — Enrich company by domain"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.050
  - method: POST
    path: "api/clado/contacts-enrich"
    resource: clado
    description: "Clado — Enrich contact from LinkedIn URL, email, or phone"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.200
  - method: POST
    path: "api/exa/search"
    resource: exa
    description: "Exa — Neural search across the web"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.010
  - method: POST
    path: "api/exa/find-similar"
    resource: exa
    description: "Exa — Find pages similar to a URL"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.010
  - method: POST
    path: "api/exa/contents"
    resource: exa
    description: "Exa — Retrieve content from URLs"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.002
  - method: POST
    path: "api/exa/answer"
    resource: exa
    description: "Exa — AI-generated answers with citations"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.010
  - method: POST
    path: "api/firecrawl/scrape"
    resource: firecrawl
    description: "Firecrawl — Full JS rendering scrape"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.013
  - method: POST
    path: "api/firecrawl/search"
    resource: firecrawl
    description: "Firecrawl — Web search with scraped results"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.025
  - method: POST
    path: "api/google-maps/nearby-search/partial"
    resource: google-maps
    description: "Google Maps — Nearby places (partial fields)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: POST
    path: "api/google-maps/nearby-search/full"
    resource: google-maps
    description: "Google Maps — Nearby places (all fields)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.080
  - method: POST
    path: "api/google-maps/text-search/partial"
    resource: google-maps
    description: "Google Maps — Text query search (partial)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: POST
    path: "api/google-maps/text-search/full"
    resource: google-maps
    description: "Google Maps — Text query search (all fields)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.080
  - method: GET
    path: "api/google-maps/place-details/partial"
    resource: google-maps
    description: "Google Maps — Place details (partial)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: GET
    path: "api/google-maps/place-details/full"
    resource: google-maps
    description: "Google Maps — Place details (all fields)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.050
  - method: POST
    path: "api/hunter/email-verifier"
    resource: hunter
    description: "Hunter — Verify email deliverability"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.030
  - method: POST
    path: "api/influencer/enrich-by-email"
    resource: influencer
    description: "Find social profiles for an email"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.400
  - method: POST
    path: "api/influencer/enrich-by-social"
    resource: influencer
    description: "Enrich social profile with contact info"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.400
  - method: POST
    path: "api/minerva/resolve"
    resource: minerva
    description: "Minerva — Resolve person to PID and LinkedIn URL"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: POST
    path: "api/minerva/enrich"
    resource: minerva
    description: "Minerva — Enrich person with demographics and work history"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.050
  - method: POST
    path: "api/minerva/validate-emails"
    resource: minerva
    description: "Minerva — Check emails in database"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.010
  - method: POST
    path: "api/reddit/search"
    resource: reddit
    description: "Reddit — Search posts by keyword"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: POST
    path: "api/reddit/post-comments"
    resource: reddit
    description: "Reddit — Get post details and comments"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.020
  - method: POST
    path: "api/serper/news"
    resource: serper
    description: "Serper — Google News search"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.040
  - method: POST
    path: "api/serper/shopping"
    resource: serper
    description: "Serper — Google Shopping search"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.040
  - method: POST
    path: "api/whitepages/person-search"
    resource: whitepages
    description: "Whitepages — Find people by name, phone, or address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.440
  - method: POST
    path: "api/whitepages/property-search"
    resource: whitepages
    description: "Whitepages — Property ownership and resident data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.440
  - method: POST
    path: "api/cloudflare/crawl"
    resource: cloudflare
    description: "Cloudflare — Start a crawl job (async)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.100
---

Unified data enrichment gateway. Pay per request with no API keys or subscriptions.
Access Apollo, Exa, Firecrawl, Google Maps, Hunter, Minerva, Reddit, Serper,
Whitepages, Cloudflare, and more through a single endpoint. Prices range from
$0.002 (Exa content retrieval) to $0.44 (Whitepages searches).
