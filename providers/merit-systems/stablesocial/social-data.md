---
name: social-data
title: "StableSocial"
description: "Pay-per-request social media data from TikTok, Instagram, Facebook, and Reddit"
category: media
service_url: https://stablesocial.dev
endpoints:
  - method: POST
    path: "api/tiktok/profile"
    resource: tiktok
    description: "Get user profile"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/posts"
    resource: tiktok
    description: "Get user posts/videos"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/post-comments"
    resource: tiktok
    description: "Get comments on a post"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/comment-replies"
    resource: tiktok
    description: "Get replies to a comment"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/followers"
    resource: tiktok
    description: "Get user followers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/following"
    resource: tiktok
    description: "Get accounts user follows"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search"
    resource: tiktok
    description: "Search posts by keyword"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search-hashtag"
    resource: tiktok
    description: "Search posts by hashtag"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search-profiles"
    resource: tiktok
    description: "Search user profiles"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/tiktok/search-music"
    resource: tiktok
    description: "Search posts by music/sound"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/profile"
    resource: instagram
    description: "Get user profile"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/posts"
    resource: instagram
    description: "Get user posts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/stories"
    resource: instagram
    description: "Get user stories"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/highlights"
    resource: instagram
    description: "Get user highlights"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/post-comments"
    resource: instagram
    description: "Get comments on a post"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/comment-replies"
    resource: instagram
    description: "Get replies to a comment"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/followers"
    resource: instagram
    description: "Get user followers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/following"
    resource: instagram
    description: "Get accounts user follows"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/search"
    resource: instagram
    description: "Search posts by keyword"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/instagram/search-tags"
    resource: instagram
    description: "Search posts by hashtag"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/profile"
    resource: facebook
    description: "Get user/page profile"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/posts"
    resource: facebook
    description: "Get user/page posts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/post-comments"
    resource: facebook
    description: "Get comments on a post"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/comment-replies"
    resource: facebook
    description: "Get replies to a comment"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/followers"
    resource: facebook
    description: "Get followers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/following"
    resource: facebook
    description: "Get following"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search"
    resource: facebook
    description: "Search posts by keyword"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search-people"
    resource: facebook
    description: "Search people profiles"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search-pages"
    resource: facebook
    description: "Search page profiles"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/facebook/search-groups"
    resource: facebook
    description: "Search group profiles"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/post"
    resource: reddit
    description: "Get post details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/post-comments"
    resource: reddit
    description: "Get comments on a post"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/comment"
    resource: reddit
    description: "Get comment details"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/search"
    resource: reddit
    description: "Search posts by keyword"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/search-profiles"
    resource: reddit
    description: "Search user profiles"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
  - method: POST
    path: "api/reddit/subreddit"
    resource: reddit
    description: "Get subreddit posts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.06
---

Social media data API covering TikTok, Instagram, Facebook, and Reddit.
All endpoints are POST and priced at $0.06 per request.
