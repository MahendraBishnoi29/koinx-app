import Navbar from "@/components/ui/navbar";
import CoinPage from "@/pages/home";
import { CoinData } from "@/types/api";
import NotFound from "./not-found";
import { getCoinData } from "./actions/coins";

type Params = Promise<{ coinId: string }>;

export default async function Home({ params }: { params: Params }) {
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
