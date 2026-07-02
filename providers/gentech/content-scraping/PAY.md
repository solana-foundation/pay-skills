---
name: content-scraping
title: "GenTech Labs — Content Scraping API"
description: "Web content extraction optimized for AI agents. Scrape pages, extract markdown, parse structured data from any URL."
use_case: "Use when an agent needs to extract text content from web pages or convert HTML to markdown."
category: data
service_url: https://api.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Content Scraping API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/scrape": {
          "post": {
            "summary": "Extract web content",
            "description": "Extract clean text content from any URL. Returns markdown-formatted content.",
            "operationId": "scrapeUrl",
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "url"
                    ],
                    "properties": {
                      "url": {
                        "type": "string",
                        "format": "uri",
                        "description": "URL to scrape"
                      },
                      "format": {
                        "type": "string",
                        "enum": [
                          "markdown",
                          "text",
                          "html"
                        ],
                        "default": "markdown"
                      }
                    }
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Extracted content"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/scrape/status/{jobId}": {
          "get": {
            "summary": "Check scrape job status",
            "description": "Check the status of an async scrape job.",
            "operationId": "getScrapeStatus",
            "parameters": [
              {
                "name": "jobId",
                "in": "path",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Job ID"
              }
            ],
            "responses": {
              "200": {
                "description": "Job status"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        }
      },
      "x-payment": {
        "protocol": "x402",
        "network": "base",
        "token": "USDC"
      }
    }
---

# GenTech Labs — Content Scraping API

Web content extraction optimized for AI agents. Scrape pages, extract markdown, parse structured data from any URL.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
