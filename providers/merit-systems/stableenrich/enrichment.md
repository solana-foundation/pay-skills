---
name: enrichment
title: "StableEnrich"
description: "Unified enrichment gateway for Apollo, Exa, Firecrawl, Google Maps, Hunter, Minerva, Reddit, Serper, Whitepages, Cloudflare, and more. Covers people and company enrichment, web search, scraping, maps, email verification, and property data."
category: data
use_case: "Use for contact enrichment, company lookup, prospect search, web search, page scraping, local business discovery, place details, email verification, social profile enrichment, Reddit research, news and shopping search, people search, and property records."
service_url: https://stableenrich.dev
endpoints:
  - method: POST
    path: "api/apollo/people-search"
    resource: apollo
    description: "Apollo — Search people by title, company, location, seniority, industry, and other prospecting filters"
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
    description: "Apollo — Search companies by domain, industry, location, employee count, revenue, and other firmographic filters"
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
    description: "Apollo — Enrich a company by domain with firmographics, website, industry, employee count, and related metadata"
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
    description: "Exa — Run neural web search for semantically relevant pages, returning ranked results with URLs and snippets"
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
    description: "Exa — Find pages similar to a seed URL for competitor discovery, source expansion, or related-content research"
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
    description: "Exa — Retrieve clean page content from URLs, including text extraction for downstream analysis or summarization"
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
    description: "Exa — Generate an answer to a research question with cited web sources and supporting search results"
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
    description: "Firecrawl — Scrape a page with JavaScript rendering and return extracted content in agent-friendly formats"
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
    description: "Firecrawl — Search the web and return scraped page content for each result instead of only links and snippets"
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
    description: "Google Maps — Search nearby places with a lower-cost partial field set for names, IDs, location, and basic metadata"
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
    description: "Google Maps — Search nearby places with the full field set, including ratings, hours, contact data, and richer details"
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
    description: "Google Maps — Search places by text query with a lower-cost partial field set for matching businesses or locations"
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
    description: "Google Maps — Search places by text query with the full field set, including ratings, hours, contact data, and details"
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
    description: "Google Maps — Get place details with a lower-cost partial field set for identity, address, and basic metadata"
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
    description: "Google Maps — Get full place details including ratings, hours, contact data, website, photos, and rich metadata"
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
    description: "Hunter — Verify whether an email address is deliverable and return confidence, status, and validation signals"
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
    description: "Find social profiles associated with an email address, including matched handles and profile metadata"
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
    description: "Enrich a social profile URL or handle with contact details, audience metadata, and related profile information"
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
    description: "Minerva — Validate whether email addresses exist in the Minerva database and return match status"
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
    description: "Reddit — Search posts by keyword or topic and return matching posts with subreddit, score, and author metadata"
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
    description: "Reddit — Get a post with its comment thread, including comment text, authors, scores, and nested replies"
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
    description: "Serper — Search Google News for recent articles, headlines, and press coverage matching a keyword or topic"
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
    description: "Serper — Search Google Shopping for product listings, prices, and merchant details matching a query"
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
    description: "Cloudflare — Start an asynchronous crawl job for a site or URL and return the crawl job identifier"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.100
---

Unified data enrichment gateway covering Apollo, Exa, Firecrawl, Google Maps,
Hunter, Minerva, Reddit, Serper, Whitepages, Cloudflare, and more through a
single endpoint. Prices range from $0.002 (Exa content retrieval) to $0.44
(Whitepages searches).

## Spend-aware usage

- Choose the narrow source first: Exa for web content retrieval, Serper for web
  search snippets, Hunter for email/domain lookup, Google Maps for places,
  Apollo or Minerva for people/company enrichment, Firecrawl or Cloudflare for
  page/site extraction, Reddit for Reddit data, and Whitepages only for identity
  or phone/address research that justifies the higher price.
- Prefer lookup/enrich endpoints when the user provides a URL, domain, email, or
  profile. Use broad search only when no stable identifier is available.
- For scraping, fetch one URL before starting a crawl. Ask before crawl jobs,
  Whitepages searches, or any plan likely to require multiple paid calls.
- Batch records when the endpoint supports arrays, and cap result limits to the
  smallest number needed for the answer.
