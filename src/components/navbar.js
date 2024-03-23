import React,{useState} from "react";
import Sidebar from "./sidebar";
export default function Navbar() {
    const [open,setOpen]=useState(false);
    function handleopen(){
        setOpen(!open);
    }
    return (
        <div className="p-5 bg-blue-950 text-gray-400">
            <div className="md:hidden" onClick={handleopen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className="md:flex gap-3 hidden items-center">
                <div className="hover:text-white">Dissccussion Fourm</div>
                <div className="hover:text-white">Market Stories</div>
                <div className="hover:text-white">Sentiments</div>
                <div className="hover:text-white">Market</div>
                <div className="hover:text-white">Sector</div>
            </div>
            {open?<Sidebar func={handleopen}/>:''}
        </div>
    );
}