import React, { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent } from 'framer-motion'
import Mouse from '../../Layout/Model/mouse';

export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);

  return (
    <div className="w-full h-screen snap-child-start relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: scroll >= 0.2 ? '-40%' : 0, transition: { delay: 0, duration: 0.4 } }}
        className=" w-full h-screen flex flex-col text-[10rem] top-20 fixed justify-center items-center font-bold  pointer-events-none">
        <span>LORE</span>
        <AnimatePresence>
          {scroll <= 0.2 ? <motion.div exit={{ opacity: 0 }} className='w-16 '>
            <Mouse />
          </motion.div> : null}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
