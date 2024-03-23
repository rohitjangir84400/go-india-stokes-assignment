import DisscussionCard from "@/components/disscussion_card";
import DisscussionData from "@/data/disscussion_data";
import MarketData from "@/data/marketstories_data";
import MarketCard from "@/components/market_card";
import Navbar from "@/components/navbar";
import Tabcontent from "@/components/tabcontainer";

export default function Home() {

  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className=" md:flex gap-5 hidden">
        <div className="basis-2/3">
          <div className="flex justify-center text-2xl py-5"><div className="border border-red-600 text-red-600 p-5 rounded-full">Disscussion Fourm</div></div>
          <div>
            {DisscussionData.map((data, index) => {
              return (
                <DisscussionCard Data={data} key={index} />
              );
            })}
          </div>
        </div>
        <div className="basis-1/3 p-2">
        <div className="flex justify-center text-2xl py-5"><div className="border border-red-600 text-red-600 p-5 rounded-full">Market Stories</div></div>
          <div>
            {MarketData.map((data, index) => {
              return (
                <MarketCard Data={data} key={index} />
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <Tabcontent/>
      </div>
    </div>
  );
}
