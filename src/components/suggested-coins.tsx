import { Suspense } from "react";
import { getTrendingCoins } from "@/lib/api";
import { TrendingCoin } from "@/types/api";
import Image from "next/image";
import Error from "./error";
import Loading from "./loading";

function CryptoCard({ cryptoData }: { cryptoData: TrendingCoin["item"] }) {
  return (
    <div className="lg:w-[300px] rounded-2xl p-5 border-2 my-2 mr-2">
      <div className="flex items-center space-x-2">
        <Image
          src={cryptoData.large}
          alt={cryptoData.name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="text-[16px] font-normal">{cryptoData.name}</span>
        <span
          className={`text-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "green"
              : "red"
          }-500 bg-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "#0AB27D"
              : "#FF0000"
          }/10 text-xs font-normal pr-10`}
        >
          {cryptoData.data.price_change_percentage_24h.usd.toFixed(2)}%
        </span>
      </div>
      <div className="text-xl text-[#171717] font-medium mt-2">
        {cryptoData.data.price}
      </div>
      <Image
        src={
          cryptoData.sparkline ||
          "https://www.coingecko.com/coins/33566/sparkline.svg"
        }
        alt={`${cryptoData.name} price chart`}
        width={300}
        height={80}
        className="w-full h-20"
      />
    </div>
  );
}

async function TrendingCoinsSection() {
  const data = await getTrendingCoins();

  if ("error" in data) {
    return <Error message={data.error as string} />;
  }

  const cryptoData = data as TrendingCoin[];

  return (
    <>
      <div className="mt-4 flex justify-between overflow-x-scroll overflow-auto">
        {cryptoData.slice(0, 5).map((crypto, index) => (
          <CryptoCard key={index} cryptoData={crypto.item} />
        ))}
      </div>

      <div className="text-[#202020] text-2xl font-semibold mt-6">
        Trending Coins
      </div>
      <div className="mt-4 flex justify-between overflow-x-auto">
        {cryptoData.slice(1, 6).map((crypto) => (
          <CryptoCard key={crypto.item.id} cryptoData={crypto.item} />
        ))}
      </div>
    </>
  );
}

export default function SuggestedCoins() {
  return (
    <div className="bg-white h-max mt-10 lg:p-14 p-8">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <Suspense fallback={<Loading />}>
          <TrendingCoinsSection />
        </Suspense>
      </div>
    </div>
  );
}
