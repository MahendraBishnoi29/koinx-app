import type { CoinData, CryptoPrice, TrendingCoin } from "@/types/api";

export async function getBitcoinPrice(): Promise<CryptoPrice | ApiError> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/bitcoin`
  );
  const data = await response.json();
  return data;
}

type ApiError = { message: string };

export async function getTrendingCoins(): Promise<TrendingCoin[] | ApiError> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/trending`
  );
  const data = await response.json();
  return data;
}

export async function getCoinData(id: string): Promise<CoinData | ApiError> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_COINGECKO_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coin data");
    }

    return response.json();
  } catch {
    return {
      message: "Failed to fetch coin data",
    };
  }
}
