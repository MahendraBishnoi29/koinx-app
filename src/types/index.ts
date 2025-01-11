export interface Coin {
  item: {
    symbol: string;
    name: string;
    large: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

export interface TransformedCoin {
  symbol: string;
  name: string;
  img: string;
  changePercentage: string; // Since it's `.toFixed(2)`, it will be a string.
}

export interface CoinProps {
  symbol: string;
  name: string;
  img: string;
  changePercentage: string;
}
