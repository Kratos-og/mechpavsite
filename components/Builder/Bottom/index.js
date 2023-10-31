import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Index(props) {
  const router = useRouter();

  const openLoadouts = () => router.push('/builder/loadouts');

  return (
    <div className="h-8 absolute bottom-0 w-full z-30 lg:bg-gradient-to-r from-[#000] via-white/25">
      <div className="absolute top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent max-lg:hidden"></div>
      <div className="relative z-20 w-full flex items-center h-full px-10">
        <div onClick={() => props.setActiveTab(0)} className={`skew-x-[20deg] transition-all border-x-2 ${props.activeTab == 0 ? ' border-pavia-green active-shadow' : ' border-white/25 hover:active-shadow'} h-full flex items-center justify-center text-xs cursor-pointer px-5`}>
          <button className={` h-full uppercase tracking-wider skew-x-[-20deg]`}>
            Loadout
          </button>
        </div>
        <div onClick={openLoadouts} className={`skew-x-[20deg] transition-all border-r-2 ${props.activeTab == 3 ? ' border-pavia-green active-shadow' : ' border-white/25 hover:active-shadow'} h-full flex items-center justify-center text-xs cursor-pointer px-5`}>
          <button className={` h-full uppercase tracking-wider skew-x-[-20deg]`}>
            My Loadouts
          </button>
        </div>
        <div onClick={() => props.setActiveTab(2)} className={`skew-x-[20deg] transition-all border-r-2 ${props.activeTab == 2 ? ' border-pavia-green active-shadow' : ' border-white/25 hover:active-shadow'} h-full flex items-center justify-center text-xs cursor-pointer px-5`}>
          <button className={` h-full uppercase tracking-wider skew-x-[-20deg]`}>
            MY Account
          </button>
        </div>
        <div onClick={() => props.setActiveTab(1)} className={`skew-x-[20deg] transition-all border-r-2 ${props.activeTab == 1 ? ' border-pavia-green active-shadow' : ' border-white/25 hover:active-shadow'} h-full flex items-center justify-center text-xs cursor-pointer px-5`}>
          <button className={` h-full uppercase tracking-wider skew-x-[-20deg]`}>
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
