import React, { useState } from "react";

export default function Index(props) {
  return (
    <div className="h-8 absolute bottom-0 w-full z-30 lg:bg-gradient-to-r from-[#000] via-white/25">
      <div className="absolute top-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent max-lg:hidden"></div>
      <div className="relative z-20 w-full flex gap-5 items-center h-full px-10">
        <button className={`text-xs cursor-pointer border-x px-5 h-full`}>
          LOADOUT
        </button>
        <button className={`text-xs cursor-pointer border-x px-5`}>
          MY WALLET
        </button>
      </div>
    </div>
  );
}
