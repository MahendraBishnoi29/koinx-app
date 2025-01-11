import About from "@/components/crypto/about";
import BreadCrumb from "@/components/ui/breadcrumb";
import Crypto from "@/components/crypto/crypto";
import GetStartedBanner from "@/components/ui/get-started-banner";
import PerformanceSection from "@/components/crypto/performance-section";
import PerformanceTabs from "@/components/crypto/performance-tabs";
import SentimentSection from "@/components/crypto/sentiment";
import SuggestedCoins from "@/components/coins/suggested-coins";
import TeamCard from "@/components/team-cards";
import Tokenomics from "@/components/tokenomics";
import TrendingCoins from "@/components/coins/trending-coins";
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
