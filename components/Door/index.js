import { motion } from 'framer-motion'
import React from 'react'
import top from "../img/top.png"
import Image from "next/image"
import bottom from "../img/bottom.png"
import right from "../img/right.png"
import left from "../img/left.png"

export default function index() {
  return (
    <div className=' bg-transparent w-full h-screen overflow-hidden absolute z-10'>
      <motion.div 
      initial={{background:"#1b2536"}}
      animate={[{background:["#ffffff","#FFFFFF00"],transition:{delay:2,duration:5}}]}
      className='relative z-10 h-full'>
        <motion.div
        initial={{y:0}}
        animate={{y:-500,transition:{delay:3,duration:2,ease:"easeIn"}}} >
      <Image src={top} alt="top" className='w-[50%] absolute top-0 left-[26%] '/>
        </motion.div>
        <motion.div
        initial={{y:750}}
        animate={{y:1200,transition:{delay:3,duration:2,ease:"easeIn"}}} >
      <Image src={bottom} alt="top" className='w-[50%] absolute bottom-0 left-[25%]'/>
        </motion.div>
        <motion.div
        initial={{x:0}}
        animate={{x:500,transition:{delay:3,duration:2,ease:"easeIn"}}} >
      <Image src={right} alt="top" className='w-[40%] absolute right-0 top-[-5rem]'/>
        </motion.div>
        <motion.div
        initial={{x:0}}
        animate={{x:-500,transition:{delay:3,duration:2,ease:"easeIn"}}} >
      <Image src={left} alt="top" className='w-[40%] absolute left-0 top-[-5rem]'/>
        </motion.div>
      </motion.div>
    </div>
  )
}
