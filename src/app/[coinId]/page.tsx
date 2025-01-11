import { Suspense } from "react";

import { notFound } from "next/navigation";

import CoinPage from "@/pages/home";
import { CoinData } from "@/types/api";
import { getCoinData } from "../actions/coins";
import Loading from "@/components/ui/loading";

interface PageProps {
  params: {
    coinId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {
  const data = await getCoinData(params.coinId);

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
