import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero(props) {
  useEffect(() => {
    setTimeout(() => {
      props.enterHandler(true);
    }, 5000);
  });
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <motion.div
        className="overflow-hidden relative">
        <div className="border-2 border-[#423F3E] p-10 bg-black"></div>
        <div className="border-2 border-[#423F3E] p-8 bg-black absolute rotate-45 top-[-60%] left-[-60%] z-10"></div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0, transition: { duration: 3, delay: 1, ease: "easeInOut" } }}
          className="p-[2.49rem] absolute bg-[#9DB2BF] top-[0.1rem] left-[0.1rem]"></motion.div>
        <div className="absolute top-1 z-30 left-3 w-[4rem]">
          <img src="assets/images/mint/pav.png" alt="pav" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0.5, repeat: Infinity, repeatDelay: 2 },
        }}
        className="text-[0.6rem] pt-2">LOADING . . .</motion.p>
    </div>
  );
}
