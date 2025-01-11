import type { Coin as CoinType, TransformedCoin } from "@/types";
import Coin from "./coin";
import { getTrendingCoins } from "@/app/actions/coins";

interface CoinProps {
  symbol: string;
  name: string;
  img: string;
  changePercentage: string;
}

async function fetchTrendingCoinsData() {
  const data = await getTrendingCoins();

  if (!Array.isArray(data)) return [];

  return data.slice(0, 3).map(
    (coin: CoinType): TransformedCoin => ({
      symbol: coin.item.symbol.toUpperCase(),
      name: coin.item.name,
      img: coin.item.large,
      changePercentage:
        coin.item.data.price_change_percentage_24h.usd.toFixed(2),
    })
  );
}

export default async function TrendingCoins() {
  const coinsData = await fetchTrendingCoinsData();

  return (
    <div className="lg:h-[225px] bg-white lg:ml-4 mt-4 rounded-lg px-8 pt-5">
      <div className="text-2xl font-semibold text-[#0F1629]">
        Trending Coins (24h)
      </div>
      <div className="mt-4">
        {coinsData.map((coin: CoinProps, index: number) => (
          <Coin
            key={index}
            symbol={coin.symbol}
            name={coin.name}
            img={coin.img}
            changePercentage={coin.changePercentage}
          />
        ))}
      </div>
    </div>
  );
}
