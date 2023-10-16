import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button";

export default function index() {
  return (
    <div className="h-screen" id="cont">
      <motion.p 
      initial={{opacity:1}}
      animate={{opacity:[0,1,0,1,0,1], transition:{delay:0,repeat:Infinity, repeatDelay:2}}}
      className="uppercase font-extrabold absolute top-1 left-[45%] text-lg w-44"><img src="assets/images/mint/mech_pavs.png" alt="mech_pav"/></motion.p>
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1206.56 47"
        fill="#ffffff"
      >
        <motion.polyline
          initial={{ pathLength: 0 }}
          animate={{
              pathLength: 1,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
          }}
          class="cls-1"
          points="0 2 411.5 2.5 437.5 26.5 770.5 27.5 798.5 2.5 1206.56 2"
          strokeWidth={2}
          stroke={"#7D7C7C"}
          fill={"transparent"}
        />
      </motion.svg>
          <div className="mx-20 pt-2">
            <div className="border-2 border-[#7D7C7C] rounded-xl h-[80vh] flex justify-end flex-col w-full items-center">
              <div className="p-1 flex border-2 border-white rounded-full m-10 group w-[40%]">
                <div className="bg-gray-50 p-5 flex justify-center rounded-full group-hover:hidden">
              <img src="assets/images/mint/wallet_1.png" alt="wallet"  className="w-[50%]"/>
                </div>
                <div className="bg-gray-50 p-5 justify-center rounded-full hidden group-hover:flex">
              <img src="assets/images/mint/wallet_2.png" alt="wallet"  className="w-[50%] pb-[0.15rem]"/>
                </div>
              </div>
            </div>
          </div>
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1206.56 47"
        fill="#ffffff"
        className={"rotate-180 absolute bottom-0 "}
      >
        <motion.polyline
          initial={{ pathLength: 0 }}
          animate={{
              pathLength: 1,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
          }}
          class="cls-1"
          points="0 2 411.5 2.5 437.5 26.5 770.5 27.5 798.5 2.5 1206.56 2"
          strokeWidth={2}
          stroke={"#7D7C7C"}
          fill={"transparent"}
        />
      </motion.svg>
    </div>
  );
}
