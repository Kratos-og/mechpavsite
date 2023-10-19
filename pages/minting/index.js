import React, { useState } from "react";
import Hero from "../../components/Minting/Hero";
import { motion } from "framer-motion";
import Init from "@/components/Minting/Init";

const Minting = () => {
  const [enter, setEnter] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <div class="grid h-[110%] w-full absolute">
        <div class="grid-fade"></div>
        <div class="grid-lines"></div>
      </div>
      <div className="relative bg-black h-6">
        <div className="max-md:hidden">
        <motion.svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1206.56 47"
          fill="#ffffff"
          className={"pt-5 absolute z-10 "}
        >

          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
            }}
            points="0 2 411.5 2.5 437.5 26.5 770.5 27.5 798.5 2.5 1206.56 2"
            strokeWidth={1}
            stroke={"#423F3E"}
            fill={"black"}
          />
        </motion.svg>
        </div>

        <div className="hidden max-md:block"><motion.svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1206.56 47"
          fill="#ffffff"
          className={"pt-5 absolute z-10 "}
        >

          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
            }}
            points="0 2 411.5 2.5 437.5 26.5 770.5 27.5 798.5 2.5 1206.56 2"
            strokeWidth={7}
            stroke={"#423F3E"}
            fill={"black"}
          />
        </motion.svg></div>
      </div>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute top-5 left-[47%] text-[0.6rem] font-black text-white border-x-4 border-[#48ffd7] px-5 
        border-opacity-40 z-10 max-md:text-[0.5rem] max-md:top-2 max-md:left-[40%]"
      >
        MECH PAVS
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute top-7 right-[2%] text-[0.6rem] font-black text-[#798777] z-10 max-md:text-[0.4rem]"
      >
        PREPARE YOUR PAVS
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute top-7 left-[2%] text-[0.6rem] font-black text-[#798777] z-10 max-md:text-[0.4rem]"
      >
        #PAVSNOTPETS
      </motion.p>
      {enter ? <Init /> : <Hero enterHandler={setEnter} />}
      {/* <Page /> */}
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute bottom-5 left-[47%] text-[0.6rem] font-black text-white border-x-4 border-[#48ffd7] px-5 
        border-opacity-40 z-50 max-md:text-[0.4rem] max-md:bottom-2 max-md:left-[40%]"
      >
        MECH PAVS
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute bottom-7 right-[2%] text-[0.6rem] font-black text-[#798777] z-10 max-md:text-[0.4rem]"
      >
        REACTOR READY
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute bottom-7 left-[2%] text-[0.6rem] font-black text-[#798777] z-10 max-md:text-[0.4rem]"
      >
        GET READY TO MINT
      </motion.p>
      <div className="bg-black h-6 absolute bottom-0 w-full">
        <div className="max-md:hidden">
        <motion.svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1206.56 47"
          fill="#4ac6adff"
          className={"rotate-180 absolute bottom-5 z-10"}
        >
          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
            }}
            class="cls-1"
            points="0 2 411.5 2.5 437.5 26.5 770.5 27.5 798.5 2.5 1206.56 2"
            strokeWidth={1}
            stroke={"#423F3E"}
            fill={"black"}
          />
        </motion.svg>
        </div>
        <div className="hidden max-md:block">
        <motion.svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1206.56 47"
          fill="#4ac6adff"
          className={"rotate-180 absolute bottom-5 z-10"}
        >
          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
            }}
            class="cls-1"
            points="0 2 411.5 2.5 437.5 26.5 770.5 27.5 798.5 2.5 1206.56 2"
            strokeWidth={7}
            stroke={"#423F3E"}
            fill={"black"}
          />
        </motion.svg>
        </div>
      </div >
    </div>
  );
}

Minting.DisplayName = 'Minting';

export default Minting;
