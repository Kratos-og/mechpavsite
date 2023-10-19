import React from 'react'
import { motion } from "framer-motion";

export default function Mint(props) {
  return (
    <div className="w-full border-2 border-[#423F3E] mt-3 relative overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1] "
      ></motion.div>
        <p className="text-gray-500 px-5 text-[0.74rem] pt-3">Step 4: Initiate Minting</p>
        
        <div className="px-4 pb-3">
          <button className='border-2 border-[#423F3E] disabled:hover:bg-[#423F3E] rounded-full w-full mt-5 py-3 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300 text-sm ' onClick={()=>{props.done(true)}}>Continue</button>
        </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "
      ></motion.div>
    </div>
  )
}
