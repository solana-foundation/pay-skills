---
name: travel-search
title: "GenTech Labs — Travel Search API"
description: "Flight and hotel search across providers. Real-time availability, price comparison, and booking links."
use_case: "Use when an agent needs to search for flights, find hotels, compare travel prices, or plan trips."
category: travel
service_url: https://api.gentechlabs.net
openapi:
  content: |
    {
      "openapi": "3.1.0",
      "info": {
        "title": "GenTech Labs \u2014 Travel Search API",
        "version": "1.0.0"
      },
      "paths": {
        "/api/v1/travel/flights": {
          "get": {
            "summary": "Search flights",
            "description": "Real-time flight search across providers.",
            "operationId": "searchFlights",
            "parameters": [
              {
                "name": "origin",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Origin airport (IATA)"
              },
              {
                "name": "destination",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "Destination airport (IATA)"
              },
              {
                "name": "depart_date",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string",
                  "format": "date"
                }
              },
              {
                "name": "return_date",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "string",
                  "format": "date"
                }
              },
              {
                "name": "passengers",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "integer",
                  "default": 1
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Flight results"
              },
              "402": {
                "description": "x402 payment required"
              }
            }
          }
        },
        "/api/v1/travel/hotels": {
          "get": {
            "summary": "Search hotels",
            "description": "Hotel availability and price search.",
            "operationId": "searchHotels",
            "parameters": [
              {
                "name": "location",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string"
                }
              },
              {
                "name": "check_in",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string",
                  "format": "date"
                }
              },
              {
                "name": "check_out",
                "in": "query",
                "required": true,
                "schema": {
                  "type": "string",
                  "format": "date"
                }
              },
              {
                "name": "guests",
                "in": "query",
                "required": false,
                "schema": {
                  "type": "integer",
                  "default": 2
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Hotel results"
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

# GenTech Labs — Travel Search API

Flight and hotel search across providers. Real-time availability, price comparison, and booking links.

## Spend-aware usage

- Prefer specific lookups over broad searches to minimize cost.
- Cache results when possible — many endpoints support TTL-based caching.
- Use the cheapest endpoint that satisfies the task.
