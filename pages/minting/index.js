import React, { useState } from "react";
import Hero from "../../components/Minting/Hero";
import { motion } from "framer-motion";
import Init from "@/components/Minting/Init";

export default function Index() {
  const [enter, setEnter] = useState(false);
 
  return (
    <div className="h-screen bg-[url('/assets/images/mint/mesh.jpg')] bg-cover  bg-center">
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1206.56 47"
        fill="#ffffff"
        className={"pt-5 absolute"}
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
          fill={"transparent"}
        />
      </motion.svg>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute top-5 left-[47%] text-[0.6rem] font-black text-white border-x-4 border-[#48ffd7] px-5 
        border-opacity-40"
      >
        MECH PAVS
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute top-7 right-[2%] text-[0.6rem] font-black text-[#423F3E]"
      >
        PREPARE YOUR PAVS
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute top-7 left-[2%] text-[0.6rem] font-black text-[#423F3E] "
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
        border-opacity-40 "
      >
        MECH PAVS
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute bottom-7 right-[2%] text-[0.6rem] font-black text-[#423F3E] "
      >
        REACTOR READY
      </motion.p>
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute bottom-7 left-[2%] text-[0.6rem] font-black text-[#423F3E] "
      >
        GET READY TO MINT
      </motion.p>
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1206.56 47"
        fill="#4ac6adff"
        className={"rotate-180 absolute bottom-5"}
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
          fill={"transparent"}
        />
      </motion.svg>
    </div>
  );
}
