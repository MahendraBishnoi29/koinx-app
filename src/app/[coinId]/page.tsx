import Loading from "@/components/ui/loading";
import Navbar from "@/components/ui/navbar";
import CoinPage from "@/pages/home";
import { CoinData } from "@/types/api";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCoinData } from "../actions/coins";

type Params = Promise<{ coinId: string }>;

export default async function Page({ params }: { params: Params }) {
  const { coinId } = await params;
  const data = await getCoinData(coinId);

  if ("error" in data) {
    notFound();
  }

  const coinData = data as CoinData;

  return (
    <main>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <CoinPage coinData={coinData} />
      </Suspense>
    </main>
  );
}
