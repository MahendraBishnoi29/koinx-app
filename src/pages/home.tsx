import About from "@/components/about";
import BreadCrumb from "@/components/breadcrumb";
import Crypto from "@/components/crypto";
import GetStartedBanner from "@/components/get-started-banner";
import PerformanceSection from "@/components/performance-section";
import PerformanceTabs from "@/components/performance-tabs";
import SentimentSection from "@/components/sentiment";
import SuggestedCoins from "@/components/suggested-coins";
import TeamCard from "@/components/team-cards";
import Tokenomics from "@/components/tokenomics";
import TrendingCoins from "@/components/trending-coins";
import { CoinData } from "@/types/api";

interface CoinPageProps {
  coinData: CoinData;
}

function CoinPage({ coinData }: CoinPageProps) {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <BreadCrumb coinName={coinData.name} coinId={coinData.id} />

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
          <Crypto coinData={coinData} />
          <PerformanceTabs />
          <PerformanceSection />
          <SentimentSection />
          <About />
          <Tokenomics />
          <TeamCard />
        </div>
        <div className="lg:w-[28%] lg:mr-14 mx-4">
          <GetStartedBanner />
          <TrendingCoins />
        </div>
      </div>
      <SuggestedCoins />
    </div>
  );
}

export default CoinPage;
