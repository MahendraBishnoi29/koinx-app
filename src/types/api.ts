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
