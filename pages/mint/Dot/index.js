import React from "react";
import { motion } from "framer-motion";
export default function index(props) {
  return (
    <div className="flex gap-5 items-center">
      <div className="relative">
        <div className="bg-[#1af8c4] rounded-full p-[0.3rem]"></div>
        <motion.div 
        initial={{scale:0}}
        animate={{scale:2.5,transition:{repeat:Infinity,duration:0.8,ease:"easeInOut"}}}
        className="bg-[#1af8c4]/60 rounded-full absolute p-[0.3rem] bottom-[0.01rem]"></motion.div>
      </div>
      <p>{props.children}</p>
    </div>
  );
}
