import { Suspense } from "react";

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Loading from "@/components/loading";
import CoinPage from "@/pages/home";
import { CoinData } from "@/types/api";
import { getCoinData } from "../actions/coins";

interface PageProps {
  params: {
    coinId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const data = await getCoinData(params.coinId);

  if ("error" in data) {
    notFound();
  }

  // Type assertion since we've already checked for error
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
