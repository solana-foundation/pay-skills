---
name: market-data
title: "StableCrypto"
description: "Crypto market data via CoinGecko, DefiLlama, Alchemy, and Etherscan"
category: finance
service_url: https://stablecrypto.dev
endpoints:
  - method: POST
    path: "api/coingecko/price"
    resource: coingecko
    description: "Prices for coin(s) in given currencies"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/markets"
    resource: coingecko
    description: "Market data with sorting and pagination"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/coin"
    resource: coingecko
    description: "Detailed coin metadata and market data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/chart"
    resource: coingecko
    description: "Historical price, volume, and market cap chart data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/ohlc"
    resource: coingecko
    description: "OHLC candlestick data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/history"
    resource: coingecko
    description: "Historical snapshot of coin data on a specific date"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/trending"
    resource: coingecko
    description: "Trending coins, NFTs, and categories"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/global"
    resource: coingecko
    description: "Global crypto market stats"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/categories"
    resource: coingecko
    description: "All coin categories with market data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/top-movers"
    resource: coingecko
    description: "Biggest 24h gainers and losers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/exchange"
    resource: coingecko
    description: "Exchange info and volume"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/exchange/tickers"
    resource: coingecko
    description: "Exchange tickers"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/exchange/volume-chart"
    resource: coingecko
    description: "Exchange volume history"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/networks"
    resource: coingecko-onchain
    description: "Supported on-chain networks"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/search"
    resource: coingecko-onchain
    description: "Search on-chain pools"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/trending"
    resource: coingecko-onchain
    description: "Trending pools across all networks"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/new-pools"
    resource: coingecko-onchain
    description: "New pools across all networks"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/categories"
    resource: coingecko-onchain
    description: "On-chain categories"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/pool"
    resource: coingecko-onchain
    description: "Pool data (price, transactions, volume)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/pool/info"
    resource: coingecko-onchain
    description: "Pool metadata"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/pool/ohlcv"
    resource: coingecko-onchain
    description: "Pool OHLCV chart data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/pool/trades"
    resource: coingecko-onchain
    description: "Pool trades (last 24h)"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/network/dexes"
    resource: coingecko-onchain
    description: "DEXes on a network"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/network/trending"
    resource: coingecko-onchain
    description: "Trending pools on a specific network"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/network/new-pools"
    resource: coingecko-onchain
    description: "New pools on a specific network"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/network/pools"
    resource: coingecko-onchain
    description: "Top pools on a specific network"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/coingecko/onchain/category/pools"
    resource: coingecko-onchain
    description: "Pools in a specific on-chain category"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/protocols"
    resource: defillama
    description: "All DeFi protocols with TVL"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/protocol"
    resource: defillama
    description: "Detailed data for a DeFi protocol"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/tvl"
    resource: defillama
    description: "Current TVL for a protocol"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/chains"
    resource: defillama
    description: "All chains with TVL"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/chain-tvl"
    resource: defillama
    description: "Historical TVL for a chain"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/coins/prices"
    resource: defillama
    description: "Current token prices by contract address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/coins/prices-historical"
    resource: defillama
    description: "Historical token prices at a timestamp"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/coins/batch-historical"
    resource: defillama
    description: "Historical prices for multiple tokens"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/coins/chart"
    resource: defillama
    description: "Token price chart data over time"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/coins/block"
    resource: defillama
    description: "Closest block number to a timestamp"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/stablecoins"
    resource: defillama
    description: "All stablecoins with mcap and peg data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/stablecoin"
    resource: defillama
    description: "Detailed stablecoin data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/stablecoin-charts"
    resource: defillama
    description: "Stablecoin market cap charts"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/stablecoin-chains"
    resource: defillama
    description: "Stablecoin distribution across chains"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/dex-overview"
    resource: defillama
    description: "DEX volume overview"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/dex-summary"
    resource: defillama
    description: "Volume summary for a specific DEX"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/options-overview"
    resource: defillama
    description: "Options volume overview"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/derivatives-overview"
    resource: defillama
    description: "Derivatives volume overview"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/fees-overview"
    resource: defillama
    description: "Fees and revenue overview"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/fees-summary"
    resource: defillama
    description: "Fees and revenue for a protocol"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/yields/pools"
    resource: defillama
    description: "All yield pools with APY data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/yields/chart"
    resource: defillama
    description: "Historical APY chart for a pool"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/yields/pools-borrow"
    resource: defillama
    description: "Borrow/lending pool rates"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/yields/perps"
    resource: defillama
    description: "Perpetual futures funding rates"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/yields/lsd-rates"
    resource: defillama
    description: "Liquid staking derivative rates"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/emissions"
    resource: defillama
    description: "Token emissions for all protocols"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/emission"
    resource: defillama
    description: "Token emissions for a specific protocol"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/defi-categories"
    resource: defillama
    description: "DeFi protocol categories"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/forks"
    resource: defillama
    description: "Protocol fork data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/oracles"
    resource: defillama
    description: "Oracle usage across DeFi"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/hacks"
    resource: defillama
    description: "DeFi hacks and exploits data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/raises"
    resource: defillama
    description: "Crypto fundraising rounds"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/etfs/overview"
    resource: defillama
    description: "Crypto ETF overview"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/etfs/history"
    resource: defillama
    description: "Crypto ETF historical flows"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/bridges"
    resource: defillama
    description: "All bridges with volume data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/bridge"
    resource: defillama
    description: "Detailed bridge data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/bridge-volume"
    resource: defillama
    description: "Bridge volume for a chain"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/bridge-transactions"
    resource: defillama
    description: "Bridge transactions by ID"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/treasuries"
    resource: defillama
    description: "Institutional treasury data"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/defillama/treasury"
    resource: defillama
    description: "Treasury data for an institution"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/token/token-balances"
    resource: alchemy
    description: "Token balances for an address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/token/token-metadata"
    resource: alchemy
    description: "Metadata for a token contract"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/token/token-allowance"
    resource: alchemy
    description: "Token allowance for owner/spender"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/transfers/asset-transfers"
    resource: alchemy
    description: "Asset transfers for an address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/prices/by-symbol"
    resource: alchemy
    description: "Token prices by symbol"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/prices/by-address"
    resource: alchemy
    description: "Token prices by contract address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/prices/historical"
    resource: alchemy
    description: "Historical token prices"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/portfolio/tokens"
    resource: alchemy
    description: "Portfolio token balances with values"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/portfolio/token-balances"
    resource: alchemy
    description: "Portfolio token balances"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/portfolio/nfts"
    resource: alchemy
    description: "Portfolio NFT balances"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/portfolio/nft-collections"
    resource: alchemy
    description: "Portfolio NFT collections"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/simulation/simulate-asset-changes"
    resource: alchemy
    description: "Simulate transaction asset changes"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/simulation/simulate-execution"
    resource: alchemy
    description: "Simulate transaction execution"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/utility/transaction-receipts"
    resource: alchemy
    description: "All transaction receipts for a block"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/alchemy/node/rpc"
    resource: alchemy
    description: "Generic JSON-RPC passthrough"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/account/balance"
    resource: etherscan
    description: "ETH balance for address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/account/balance-multi"
    resource: etherscan
    description: "ETH balance for up to 20 addresses"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/account/txlist"
    resource: etherscan
    description: "Normal transactions for address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/account/txlist-internal"
    resource: etherscan
    description: "Internal transactions for address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/account/tokentx"
    resource: etherscan
    description: "ERC-20 token transfers for address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/account/tokennfttx"
    resource: etherscan
    description: "ERC-721 token transfers for address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/account/token1155tx"
    resource: etherscan
    description: "ERC-1155 token transfers for address"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/contract/getabi"
    resource: etherscan
    description: "ABI for verified contract"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/contract/getsourcecode"
    resource: etherscan
    description: "Source code of verified contract"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/contract/getcontractcreation"
    resource: etherscan
    description: "Creator and tx hash for contract"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/transaction/getstatus"
    resource: etherscan
    description: "Contract execution status"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/transaction/gettxreceiptstatus"
    resource: etherscan
    description: "Transaction receipt status"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/block/getblockreward"
    resource: etherscan
    description: "Block and uncle rewards"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/logs/getLogs"
    resource: etherscan
    description: "Event logs by address and topics"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/token/tokensupply"
    resource: etherscan
    description: "Total supply of ERC-20 token"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/token/tokeninfo"
    resource: etherscan
    description: "Token name, symbol, decimals, holders"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/gas/gasestimate"
    resource: etherscan
    description: "Estimated confirmation time for gas price"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/gas/gasoracle"
    resource: etherscan
    description: "Safe, standard, and fast gas prices"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/stats/ethprice"
    resource: etherscan
    description: "ETH price in USD and BTC"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/stats/ethsupply"
    resource: etherscan
    description: "Total ETH supply"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/stats/nodecount"
    resource: etherscan
    description: "Ethereum node count"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/stats/chainsize"
    resource: etherscan
    description: "Historical chain size"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
  - method: POST
    path: "api/etherscan/stats/dailytx"
    resource: etherscan
    description: "Daily transaction count"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Unified crypto market data gateway aggregating four data sources: CoinGecko for market prices and on-chain DEX pool data, DefiLlama for DeFi protocol analytics and TVL tracking, Alchemy for Ethereum token balances and transaction simulation, and Etherscan for on-chain account and contract data. All endpoints are POST and priced at $0.01 per request.
