import type { CryptoPrice, TrendingCoin } from "@/types/api";

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
