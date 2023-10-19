import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Buy() {
    const arr = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="w-full border-2 border-[#423F3E] mt-3 relative overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1] "
      ></motion.div>
      <div className="overflow-y-scroll h-[25vh] scroll-smooth custom-scroll" >
      <p className="text-gray-500 px-5 text-[0.74rem] pt-3">Step 2: Choose number of crates</p>
        {arr.map((unit)=>(<Button unit={unit} price={unit*450} key={unit}/>))}
        </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "
      ></motion.div>
    </div>
  );
}
