import React, { useState } from 'react'
import { animate, motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { AiFillCloseSquare } from 'react-icons/ai'
import SpinnerSm from '@/components/UI/SpinnerSm';

export default function MyAccount(props) {
  const [loading, setLoading] = useState(false);
  const [walletError, setWalletError] = useState("")

  const onWalletSelect = async (wallet) => {
    try {
      setLoading(true)
      const walletInstance = await window.cardano[wallet.toLowerCase()]?.enable();
      setLoading(false);
    }
    catch (err) {
      setWalletError(err.message)
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {props.activeTab == 2 &&
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0, transition: { delay: 0, duration: 1, ease: "easeInOut" } }}
          exit={{ x: -1500, transition: { delay: 0, duration: 1, ease: "easeInOut" } }}
          className='absolute w-screen h-screen bg-white text-black p-20 top-0'>
          <div className='text-[60px] uppercase tracking-wider font-bold'>My Account</div>
        </motion.div>}
    </AnimatePresence>
  )
}
