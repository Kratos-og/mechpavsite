import React, { useEffect } from 'react'
import { motion } from "framer-motion";

export default function Mint(props) {
  useEffect(() => {
    const mainPanel = document.getElementById('mainPanel');
    mainPanel.scroll({
      behavior: 'smooth',
      top: document.getElementById('btnCtn').offsetTop + 100
    })
  }, [])
  return (
    <div className="w-full border-2 border-[#423F3E] mt-3 relative overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1] "
      ></motion.div>
      <p className="text-gray-500 px-5 text-[0.74rem] pt-3">Step 4: Initiate Minting</p>

      <div className="px-4 pb-3">
        <button id='btnCtn' className=' w-full mt-5 py-7 uppercase text-sm newButton relative text-pavia-green group font-light' onClick={props.done}>
          <div className='frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
            <div className="lines"></div>
            <div className="angles"></div>
            <div className='bg-teal-900 w-full h-full flex justify-center items-center'>
              <p>Continue</p>
            </div>
          </div>
        </button>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "
      ></motion.div>
    </div >
  )
}
