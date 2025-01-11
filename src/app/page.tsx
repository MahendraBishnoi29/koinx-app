import Navbar from "@/components/navbar";

import CoinPage from "@/pages/home";
import { CoinData } from "@/types/api";
import NotFound from "./not-found";
import { getCoinData } from "./actions/coins";

export default async function Home({ params }: { params: { coinId: string } }) {
  const data = await getCoinData(params.coinId);

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
