"use client";

import { TrendingCoin } from "@/types/api";
import { Suspense, useEffect, useRef, useState } from "react";
import CryptoCard from "../crypto/crypto-card";
import Error from "../ui/error";
import Loading from "../ui/loading";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { getTrendingCoins } from "@/app/actions/coins";

function TrendingCoinsSection() {
  const youMayLikeRef = useRef<HTMLDivElement>(null!);
  const trendingCoinsRef = useRef<HTMLDivElement>(null!);

  const [cryptoData, setCryptoData] = useState<TrendingCoin[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getTrendingCoins();

      if ("error" in data) {
        setError(data.error as string);
      } else {
        setCryptoData(data as TrendingCoin[]);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <Error message={error} />;
  }

  if (!cryptoData) {
    return <Loading />;
  }

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* You May Also Like Section */}
      <div className="relative mt-4">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll(youMayLikeRef, "left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-md"
        >
          <MdChevronLeft className="h-5 w-5" />
        </button>

        {/* Crypto Cards Container */}
        <div
          ref={youMayLikeRef}
          className="flex justify-between overflow-x-auto overflow-hidden scrollbar-hide"
        >
          {cryptoData.slice(0, 5).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll(youMayLikeRef, "right")}
          className="absolute right-0 top-1/2 transform h-[34px] w-[34px] -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-md"
        >
          <MdChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="text-[#202020] text-2xl font-semibold mt-6">
        Trending Coins
      </div>

      {/* Trending Coins Section */}
      <div className="relative mt-4">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleScroll(trendingCoinsRef, "left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-md"
        >
          <MdChevronLeft className="h-5 w-5" />
        </button>

        {/* Crypto Cards Container */}
        <div
          ref={trendingCoinsRef}
          className="flex justify-between overflow-x-auto overflow-hidden scrollbar-hide"
        >
          {cryptoData.slice(1, 6).map((crypto) => (
            <CryptoCard key={crypto.item.id} cryptoData={crypto.item} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleScroll(trendingCoinsRef, "right")}
          className="absolute right-0 top-1/2 transform h-[34px] w-[34px] -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-md"
        >
          <MdChevronRight className="h-5 w-5" />
        </button>
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
