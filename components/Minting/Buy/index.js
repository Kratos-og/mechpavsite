import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Buy(props) {
  const availableToMint = props.mintDetails?.availableToUser;
  const price = props.mintDetails?.price / 1e6;
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (selected > 0) {
      const mainPanel = document.getElementById('mainPanel');
      mainPanel.scroll({
        behavior: 'smooth',
        top: document.getElementById('confirmBtn').offsetTop - 90
      })
    }
  }, [selected])
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
              <div>{price * (unit + 1)} ADA</div>
            </div>))}
        </div>
        <div className="px-4 pb-3" id="confirmBtn">
          <button disabled={selected == 0} onClick={() => props.onConfirm(selected)} className='text-pavia-green group font-light w-full mt-5 py-7 uppercase text-sm relative newButton'>
            <div className='frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
              <div className="lines"></div>
              <div className="angles"></div>
              <div className='bg-gray-900 w-full h-full flex justify-center items-center'>
                <p>Confirm</p>
              </div>
            </div>
          </button>
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
