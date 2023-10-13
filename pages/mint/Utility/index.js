import React from 'react'
import { FaPlus } from "react-icons/fa"
import { motion } from 'framer-motion'

export default function index(props) {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="text-bold text-[#1af8c4]">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90, transition: { repeat: Infinity, duration: 1, ease: 'easeInOut', repeatDelay: 0.5 } }}
          >
            <FaPlus />
          </motion.div>
        </div>
        {props.children}
      </div>
    </div>
  )
}
