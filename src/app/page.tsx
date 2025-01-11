/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "@/components/ui/navbar";
import CoinPage from "@/pages/home";
import { CoinData } from "@/types/api";
import NotFound from "./not-found";
import { getCoinData } from "./actions/coins";

type Props = {
  params: Promise<{ coinId: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ params, searchParams }: Props) {
  const { coinId } = await params;
  const data = await getCoinData(coinId);

  if ("error" in data) {
    NotFound();
  }
  const coinData = data as CoinData;

  return (
    <div>
      <Navbar />
      <CoinPage coinData={coinData} />
    </div>
  );
}
