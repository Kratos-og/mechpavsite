import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent } from 'framer-motion'
import Mouse from '@/components/UI/Svg/Mouse';
import { TbLockExclamation } from "react-icons/tb"

export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  const [inView, setInView] = useState(Boolean);
  useEffect(() => {
    if (scroll >= 0.2) {
      setInView(true)
    } else { setInView(false) }
  }, [scroll])
  return (
    <div className="w-full h-screen snap-child-start relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0 }}
        animate={{ opacity: 1, y: inView ? '-20%' : 0, scale: 0.7, transition: { delay: 0, duration: 0.4 } }}
        className=" w-full h-screen flex flex-col lg:text-[10rem] lg:top-20 fixed justify-center items-center font-bold  pointer-events-none pb-[10%] text-[5rem] top-6">
        <span>LORE</span>
        <AnimatePresence>
          {!inView ? <motion.div exit={{ opacity: 0 }} className='w-16 absolute bottom-[35%] max-sm:hidden'>
            <Mouse />
          </motion.div> : null}
        </AnimatePresence>
        <motion.span
          initial={{ visibility: "hidden" }}
          animate={{
            visibility: "visible",
            transition: { delay: 0.5 },
          }}
          exit={{ visibility: "hidden" }}
          className="lg:-ml-3 mt-40 font-bold tracking-wider text-[3rem] flex flex-col items-center"
        >
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: [30, 0, 15, 0, 10, 0, 5, 0], transition: { delay: 0.5, duration: 0.5 } }}
            className="text-[#14fecd] lg:text-[6rem] max-md:text-[5rem] pb-5">
            <TbLockExclamation />
          </motion.div>
          LOCKED
        </motion.span>
      </motion.div>
    </div>
  )
}
