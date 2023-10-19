import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Buy(props) {
  const availableToMint = 10;
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-full border-2 border-[#423F3E] mt-3 relative overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -500, transition: { duration: 2 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1] "
      ></motion.div>
      <div className="" >
        <p className="text-gray-500 px-5 text-[0.74rem] pt-3">Step 2: Choose number of crates</p>
        <div className="flex flex-col gap-6 p-5 pb-0">
          {[...Array(availableToMint)].map((_, unit) => (
            <div key={unit} onClick={() => setSelected(unit + 1)} className={`flex justify-between text-[10px] cursor-pointer hover:text-pavia-green hover:scale-105 transition-all ${selected == unit + 1 ? 'text-pavia-green scale-105' : ''}`}>
              <div className="flex items-center gap-2">
                <div className="lowercase">{unit + 1}x</div>
                <div>Crates</div>
              </div>
              <div>{450 * (unit + 1)} ADA</div>
            </div>))}
        </div>
        <div className="px-4 pb-3">
          <button disabled={selected == 0} onClick={() => props.onConfirm(selected)} className='border-2 border-[#423F3E] disabled:hover:bg-[#423F3E] rounded-full w-full mt-5 py-3 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300 text-sm '>Confirm</button>
        </div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 2 } }}
        className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "
      ></motion.div>
    </div>
  );
}
