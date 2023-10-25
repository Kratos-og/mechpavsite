import React, { useState } from "react";
import { GiRobotGrab } from "react-icons/gi";
import { BiLogoYoutube } from "react-icons/bi";
import { GiRobotHelmet } from "react-icons/gi";

export default function Index(props) {
  const [clickOne, setClickOne] = useState(true);
  const [clickTwo, setClickTwo] = useState(false);
  return (
    <div className="">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1151.3 75"
        className="absolute left-0 bottom-0 w-[25%] z-[1]"
      >
        <polygon
          class="cls-1"
          points="0.5 74.5 1150 74.5 1068.45 0.5 0.5 0.5 0.5 74.5"
          fill="#423F3E"
        />
      </svg>

      <div className="bg-gradient-to-r from-black via-[#191717] to-[#423F3E] w-screen h-6 absolute bottom-0"></div>
      <div className="relative ml-[7%]">
        <div className="absolute bottom-5 left-0 ">
          <button
            className={`text-xs cursor-pointer flex gap-5 items-center ${clickOne && 'text-orange-500'} absolute z-[2] left-3`}
            onClick={() => {
              setClickOne(true);
              setClickTwo(false);
            }}
          >
            LOADOUT
          </button>
          {clickOne && (
            <div className="px-10 py-2  absolute z-[1] skew-x-[40deg] bg-gradient-to-t from-black/80 border-b-2 border-orange-500"></div>
          )}
        </div>
        <div className="absolute bottom-5 left-24">
          <button
            className={`text-xs cursor-pointer rounded-[0.3rem] px-2 flex gap-5 items-center z-[2] absolute left-2 ${clickTwo && 'text-orange-500'}`}
            onClick={() => {
              setClickTwo(true);
              setClickOne(false);
            }}
          >
            WALLET
          </button>
          {clickTwo && (
            <div className="px-10 py-2  absolute z-[1] skew-x-[40deg] bg-gradient-to-t from-black/80 border-b-2 border-orange-500"></div>
          )}
        </div>
      </div>
    </div>
  );
}
