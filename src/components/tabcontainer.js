
import React,{ useState } from "react";
import DisscussionData from "@/data/disscussion_data";
import MarketData from "@/data/marketstories_data";
import MarketCard from "./market_card";
import DisscussionCard from "./disscussion_card";

export default function Tabcontent(props) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div>
            <div className="flex mt-3 gap-2 px-2">
                <button
                    className={activeTab === 0 ? 'border-blue-200 text-white bg-blue-950 border-2 py-2 px-5 rounded-full text-[12px] w-[50%]' : 'text-blue-950 bg-white border-2 border-blue-950 py-2 px-5 rounded-full text-[12px] w-[50%]'}
                    onClick={() => handleTabClick(0)}
                >
                    Disscussion Fourm
                </button>
                <button
                    className={activeTab === 1 ? 'border-blue-200 text-white bg-blue-950 border-2 py-2 px-5 rounded-full text-[12px] w-[50%]' : 'text-blue-950 bg-white border-2 border-blue-950 py-2 px-5 rounded-full text-[12px] w-[50%]'}
                    onClick={() => handleTabClick(1)}
                >
                    Market Stories
                </button>
            </div>
            <div className="">
                {activeTab === 0 && (
                    <div className="">
                        {DisscussionData.map((data,index) => {
                            return (
                                <DisscussionCard Data={data} key={index}/>
                            );
                        })}
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="">
                        {MarketData.map((data,index) => {
                            return (
                                <MarketCard Data={data} key={index} />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}