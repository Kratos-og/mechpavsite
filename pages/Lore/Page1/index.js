import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import space from "../../../public/assets/img/space.png";

export default function index() {
  return (
    <div className='overflow-hidden w-full h-full'>
      <motion.div
          initial={{ scale: 1, y: 0 }}
          animate={{
            scale: 10,
            y: -3000,
            transition: { delay: 2, duration: 4 },
          }}
        >
          <Image
            src={space}
            alt="star"
            className="absolute w-[90rem] translate-x-10 -translate-y-14"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3, duration: 1 } }}
          className="text-[15rem] font-bold flex justify-center absolute items-center w-full h-full"
        >
          LORE
        </motion.div>
    </div>
  )
}
