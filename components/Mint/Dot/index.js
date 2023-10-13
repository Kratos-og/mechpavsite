import React from "react";
import { motion } from "framer-motion";
export default function index(props) {
  return (
    <div className="flex gap-5 items-center">
      <div className="relative flex items-center">
        <div className="bg-[#1af8c4] rounded-full p-[0.2rem]"></div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 2.5, transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }}
          className="bg-[#1af8c4]/60 rounded-full absolute p-[0.2rem]"></motion.div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
