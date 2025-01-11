export interface CryptoPrice {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}

export interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    large: string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: number;
      };
    };
    sparkline: string;
  };
}

export interface ApiError {
  error: string;
  code: number;
}

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      inr: number;
      usd: number;
    };
    price_change_percentage_24h: number;
    high_24h: {
      inr: number;
      usd: number;
    };
    low_24h: {
      inr: number;
      usd: number;
    };
    market_cap: {
      inr: number;
      usd: number;
    };
    market_cap_rank: number;
    total_volume: {
      inr: number;
      usd: number;
    };
    circulating_supply: number;
    total_supply: number;
  };
  image: {
    large: string;
    small: string;
    thumb: string;
  };
}

export interface ApiError {
  error: string;
  code: number;
}
