import React from "react";
import { motion } from "framer-motion";

export default function Confirm({ confirm, onCancel }) {
  return (
    <div className="w-full border-2 border-[#423F3E] mt-3 relative overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1] "
      ></motion.div>
      <p className="text-gray-500 px-5 text-[0.74rem] pt-3">Step 3: Confirm</p>
      <div className='py-4 flex flex-col gap-1 px-5'>
        <div className='flex items-center gap-2 hover:text-pavia-green cursor-pointer hover:translate-x-5 transition-all will-change-transform py-2' onClick={() => confirm(true)}>
          <div>| &gt;</div>
          <div>YES</div>
        </div>
        <div className='flex items-center gap-2 hover:text-pavia-green cursor-pointer hover:translate-x-5 transition-all will-change-transform py-2' onClick={() => { onCancel(0) }} >
          <div>| &gt;</div>
          <div>NO</div>
        </div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "
      ></motion.div>
    </div>
  );
}
