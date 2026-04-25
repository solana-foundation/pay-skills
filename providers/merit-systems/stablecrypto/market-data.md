---
name: market-data
title: "StableCrypto"
description: "Access crypto market and on-chain data through CoinGecko, DefiLlama, Alchemy, and Etherscan. Covers prices, DEX pools, DeFi TVL, yields, bridges, treasuries, token balances, transactions, contracts, logs, gas, and Ethereum stats."
category: finance
use_case: "Use for crypto prices, market charts, DeFi analytics, TVL and yield research, DEX pool data, wallet token balances, Ethereum transfers, contract metadata, gas estimates, bridge volume, stablecoin supply, treasury holdings, and blockchain monitoring."
service_url: https://stablecrypto.dev
endpoints:
  - method: POST
    path: "api/coingecko/price"
    resource: coingecko
    description: "Get current spot prices for one or more coins in selected fiat or crypto currencies"
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
    description: "List coin market data with price, market cap, volume, rank, sorting, and pagination controls"
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
    description: "Get detailed coin metadata, market data, links, categories, supply, and price statistics for a coin"
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
    description: "Retrieve OHLC candlestick chart data for a cryptocurrency with open, high, low, and close prices over time"
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
    description: "Get a historical snapshot of coin metadata, price, market cap, and volume for a specific date"
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
    description: "Get currently trending coins, NFTs, and categories ranked by CoinGecko search activity"
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
    description: "Retrieve global cryptocurrency market statistics including total market cap, 24h volume, and BTC dominance"
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
    description: "List all coin categories with market cap, volume, top coins, and 24-hour change metrics"
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
    description: "Retrieve the biggest cryptocurrency gainers and losers over the last 24 hours with price change percentages"
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
    description: "Retrieve details for a cryptocurrency exchange including trust score, 24h trading volume, and supported pairs"
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
    description: "Retrieve all trading pair tickers for a specific exchange with bid/ask prices, volume, and spread data"
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
    description: "Retrieve historical trading volume chart data for a specific cryptocurrency exchange over a time range"
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
    description: "List all supported blockchain networks for on-chain DEX pool data including network IDs and display names"
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
    description: "Search on-chain DEX liquidity pools by token name, symbol, or address across all supported networks"
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
    description: "Get trending on-chain DEX liquidity pools across all supported networks with token and volume data"
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
    description: "List recently created DEX liquidity pools across all blockchain networks with initial volume and token pairs"
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
    description: "List all on-chain token categories used to classify DEX pools such as memecoins, stablecoins, and DeFi tokens"
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
    description: "Get price, liquidity, volume, transaction, and token-pair data for a specific DEX liquidity pool"
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
    description: "Retrieve metadata for a specific DEX pool including token pair details, DEX name, creation date, and fee tier"
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
    description: "Retrieve OHLCV candlestick chart data for a specific DEX pool with open, high, low, close, and volume over time"
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
    description: "Retrieve recent trades from a specific DEX pool over the last 24 hours with trade amounts, prices, and sides"
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
    description: "List all decentralized exchanges operating on a specific blockchain network with names and pool counts"
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
    description: "Get trending DEX liquidity pools on a specific blockchain network with token and volume data"
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
    description: "List recently created DEX liquidity pools on a specific blockchain network with token pairs and initial data"
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
    description: "List the highest-volume DEX liquidity pools on a specific blockchain network with TVL and trading volume"
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
    description: "List DEX liquidity pools in a specific on-chain category with token pairs, liquidity, and volume"
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
    description: "List all DeFi protocols tracked by DefiLlama with current total value locked, chain breakdown, and category"
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
    description: "Get detailed DefiLlama data for a DeFi protocol, including TVL history, chain breakdown, and category"
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
    description: "Retrieve the current total value locked for a specific DeFi protocol as a single aggregate USD figure"
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
    description: "List all blockchain networks tracked by DefiLlama with their current total value locked and protocol counts"
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
    description: "Retrieve historical total value locked data for a specific blockchain network over time as a time series"
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
    description: "Get current token prices by chain and contract address, including decimals and confidence metadata"
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
    description: "Get token prices by chain and contract address at a specific historical timestamp"
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
    description: "Get historical prices for multiple tokens in one request using contract addresses and timestamps"
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
    description: "Retrieve token price chart data as a time series for one or more tokens identified by contract address"
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
    description: "Resolve the closest block number for a chain at a given timestamp for historical on-chain queries"
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
    description: "List all tracked stablecoins with market cap, peg status, chain distribution, and supply metrics"
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
    description: "Retrieve detailed data for a specific stablecoin including market cap history, peg deviation, and chain breakdown"
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
    description: "Retrieve historical stablecoin market cap chart data showing aggregate supply trends across all stablecoins"
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
    description: "Get stablecoin supply distribution by blockchain network with chain-level market cap totals"
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
    description: "Retrieve an overview of decentralized exchange trading volumes across all tracked DEXes and chains"
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
    description: "Get volume summary and historical trading activity for a specific decentralized exchange"
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
    description: "Retrieve an overview of crypto options trading volume across all tracked options protocols and platforms"
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
    description: "Retrieve an overview of crypto derivatives trading volume across all tracked perpetuals and futures platforms"
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
    description: "Retrieve an overview of protocol fees and revenue generated across all tracked DeFi protocols and chains"
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
    description: "Retrieve detailed fee and revenue breakdown for a specific DeFi protocol with daily and cumulative totals"
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
    description: "List all DeFi yield farming pools with current APY, TVL, reward tokens, and underlying protocol information"
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
    description: "Retrieve historical APY and TVL chart data for a specific yield pool over time as a time series"
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
    description: "List DeFi borrow and lending pool interest rates with supply APY, borrow APY, and available liquidity"
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
    description: "Retrieve current perpetual futures funding rates across DeFi protocols to compare long/short costs"
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
    description: "Retrieve current liquid staking derivative yield rates comparing stETH, rETH, cbETH, and other LSD providers"
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
    description: "List token emission schedules across tracked protocols, including emission rates and unlock data"
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
    description: "Get token emission schedule details for a specific protocol, including upcoming unlocks and rates"
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
    description: "List all DeFi protocol categories such as lending, DEXes, bridges, and yield aggregators with protocol counts"
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
    description: "Retrieve fork relationship data showing which DeFi protocols are forks of others and their respective TVL"
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
    description: "Retrieve data on oracle provider usage across DeFi protocols showing which oracles each protocol relies on"
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
    description: "Retrieve a database of DeFi security incidents including hacks, exploits, and rug pulls with amounts lost"
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
    description: "Retrieve crypto project fundraising rounds including investors, amounts raised, valuations, and round stages"
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
    description: "Retrieve an overview of cryptocurrency ETF products including assets under management and daily net flows"
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
    description: "Retrieve historical inflow and outflow data for cryptocurrency ETFs as a time series for trend analysis"
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
    description: "List all cross-chain bridges tracked by DefiLlama with 24h volume, supported chains, and TVL data"
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
    description: "Retrieve detailed data for a specific cross-chain bridge including volume history, supported chains, and tokens"
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
    description: "Retrieve aggregate cross-chain bridge volume for a specific blockchain network with inflow and outflow data"
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
    description: "Retrieve individual cross-chain bridge transactions by bridge ID with source chain, destination chain, and amounts"
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
    description: "List institutional and DAO treasury holdings across all tracked entities with asset breakdowns and valuations"
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
    description: "Get treasury holdings for a specific DAO or institution, including assets, values, and chain breakdowns"
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
    description: "Retrieve all ERC-20 token balances held by a specific Ethereum address with token names and contract details"
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
    description: "Retrieve metadata for an ERC-20 token contract including name, symbol, decimals, and total supply"
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
    description: "Check an ERC-20 token allowance granted by an owner address to a spender contract or wallet"
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
    description: "Retrieve historical asset transfers for an Ethereum address including ETH, ERC-20, ERC-721, and ERC-1155"
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
    description: "Retrieve current token prices by ticker symbol with USD values, 24h change percentages, and market cap data"
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
    description: "Get current token prices by chain and contract address with USD values and market metadata"
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
    description: "Retrieve historical token price data at specific timestamps or over a date range for portfolio tracking"
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
    description: "Get a wallet's token portfolio with balances, USD values, token metadata, and price data"
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
    description: "Retrieve a wallet's full token balance portfolio with quantities and contract addresses across all holdings"
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
    description: "Retrieve all NFTs held by a wallet address with collection names, token IDs, metadata, and image URLs"
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
    description: "Retrieve NFT collections held by a wallet address grouped by collection with floor prices and item counts"
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
    description: "Simulate an Ethereum transaction and return expected token and native asset balance changes"
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
    description: "Simulate the full execution of an Ethereum transaction to preview gas usage, return values, and error traces"
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
    description: "Get all Ethereum transaction receipts in a block, including gas usage, logs, and status values"
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
    description: "Send a raw JSON-RPC call to an Ethereum node for any standard RPC method such as eth_call or eth_getBalance"
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
    description: "Retrieve the current ETH balance for a single Ethereum address returned in wei and ether denomination"
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
    description: "Get current ETH balances for up to 20 Ethereum addresses in one request"
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
    description: "Retrieve the list of normal (external) transactions for an Ethereum address with values, gas, and timestamps"
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
    description: "List internal Ethereum transactions for an address, including value transfers created by contract execution"
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
    description: "List ERC-20 token transfers involving an Ethereum address with token, amount, and transaction metadata"
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
    description: "List ERC-721 NFT transfers involving an Ethereum address with collection, token ID, and transaction metadata"
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
    description: "List ERC-1155 token transfers involving an Ethereum address with token IDs, amounts, and transaction metadata"
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
    description: "Retrieve the ABI (Application Binary Interface) JSON for a verified smart contract on Etherscan"
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
    description: "Get verified smart contract source code, compiler settings, ABI, and metadata from Etherscan"
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
    description: "Get the creator address and deployment transaction hash for one or more Ethereum contracts"
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
    description: "Retrieve the execution status of a smart contract transaction to check if it succeeded or failed with errors"
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
    description: "Retrieve the receipt status of an Ethereum transaction to confirm whether it was successfully mined or reverted"
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
    description: "Retrieve block reward and uncle reward details for a specific Ethereum block number with miner information"
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
    description: "Search Ethereum event logs by contract address, block range, and indexed topic filters"
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
    description: "Retrieve the total circulating supply of a specific ERC-20 token by its contract address on Ethereum"
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
    description: "Get ERC-20 token metadata such as name, symbol, decimals, total supply, and holder count"
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
    description: "Estimate Ethereum confirmation time for a supplied gas price in gwei"
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
    description: "Get Etherscan gas oracle estimates for safe, standard, and fast Ethereum transaction speeds"
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
    description: "Retrieve the current Ethereum price in both USD and BTC with last-updated timestamps from Etherscan"
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
    description: "Retrieve the total supply of ETH in circulation on the Ethereum network including issuance and burn data"
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
    description: "Retrieve the total number of active Ethereum nodes on the network for monitoring decentralization health"
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
    description: "Retrieve historical Ethereum blockchain size data over a date range for tracking storage growth trends"
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
    description: "Retrieve the daily Ethereum transaction count over a date range for monitoring network activity and usage"
    pricing:
      dimensions:
        - direction: usage
          unit: requests
          scale: 1
          tiers:
            - price_usd: 0.01
---

Unified crypto market data gateway aggregating four data sources: CoinGecko for market prices and on-chain DEX pool data, DefiLlama for DeFi protocol analytics and TVL tracking, Alchemy for Ethereum token balances and transaction simulation, and Etherscan for on-chain account and contract data. All endpoints are POST and priced at $0.01 per request.
