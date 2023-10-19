import React from "react";
import { motion } from "framer-motion";

export default function Wallet(props) {
  return (
    <div className="border-2 border-[#423F3E] mx-5 uppercase mt-2 py-5 relative overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1] "
      ></motion.div>
      <p className="text-gray-500 px-5 text-xs">Step 1: Connect Wallet</p>
      <div className="w-full px-5">
        <button
          className="border-2 border-[#423F3E] rounded-full w-full mt-5 py-3 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300 text-sm "
          onClick={() => {
            props.onConnect("NAMI");
          }}
        >
          CONNECT
        </button>
        {/* <p className="text-[0.65rem] py-4"><Typewriter words={["> ERROR: NULL"]} cursorStyle="_" cursorColor="#14fecdff" loop={1} typeSpeed={1} cursor /></p> */}
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "
      ></motion.div>
    </div>
  );
}
