import React, { useState } from 'react'
import { motion, useMotionValueEvent } from 'framer-motion'

export default function Index(props) {
  const [scroll,setScroll] = useState(0);
  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2))
  });
  return (
    <div className="w-full h-screen">
    <motion.div 
    initial={{opacity:0,y:0}}
    animate={{opacity: scroll<=0.7 ? 1 : 0 ,y: scroll>=0.2 ? -200 : 0, transition:{delay:0,duration:0.2}}}
    className="fixed  w-full h-full text-[10rem] top-0 flex justify-center items-center font-bold">LORE</motion.div>
    </div>
  )
}
