import React, { useState } from "react";
import Hero from "../../components/Minting/Hero";
import { motion } from "framer-motion";
import Init from "@/components/Minting/Init";

const Minting = () => {
  const [enter, setEnter] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <img src="/assets/images/mint/mesh.jpg" className="absolute -top-20" />
      <div className="relative bg-black h-[2.5%] ">
        <div className="max-md:hidden">
          <motion.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1206.56 47"
            fill="#000"
            className={"pt-5 absolute z-10 w-[102%] -rotate-180"}
          >
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { delay: 0, duration: 1, ease: "easeInOut" },
              }}
              points="1280.5 34.94 831 34.94 800 0.94 0.5 0.5 0.5 34.94"
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
        className="absolute top-[3%] right-[5%] text-[0.7rem] font-black text-white border-x-4 border-[#48ffd7] px-5 
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
        className="absolute top-7 left-[2%] text-[0.6rem] font-black text-[#798777] z-10 max-md:text-[0.4rem]"
      >
        #PAVSNOTPETS
      </motion.p>
      {enter ? <Init /> : <Hero enterHandler={setEnter} />}
      {/* <Init />  */}
      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 2 },
        }}
        className="absolute bottom-[3%] left-[5%] text-[0.7rem] font-black text-white border-x-4 border-[#48ffd7] px-5
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
      <div className="bg-black h-[2.5%] absolute bottom-0 w-full">
        <div className="max-md:hidden">
          <motion.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1206.56 47"
            fill="#4ac6adff"
            className={" absolute bottom-0 z-10 -left-2 w-[101%]"}
          >
            <motion.polyline
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { delay: 0, duration: 1, ease: "easeInOut" },
              }}
              class="cls-1"
              points="1280.5 34.94 831 34.94 800 0.94 0.5 0.5 0.5 34.94"
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
