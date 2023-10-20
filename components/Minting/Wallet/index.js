
import SpinnerSm from '@/components/UI/SpinnerSm';
import React, { useEffect, useState } from 'react';
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import Text from '../Text';

export default function Wallet(props) {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [walletError, setWalletError] = useState("")

  const onWalletSelect = async (wallet) => {
    try {
      setLoading(true)
      const walletInstance = await window.cardano[wallet.toLowerCase()]?.enable();
      setLoading(false);
      props.onConnect(wallet);
    }
    catch (err) {
      setWalletError(err.message)
      setLoading(false)
    }
  }
  return (
    <div className='border-2 border-[#423F3E] uppercase mt-2 py-4 relative overflow-hidden'>
      <div className='flex items-center py-1'>
        <p className='text-gray-500 px-5 text-xs'>Step 1: Connect Wallet</p>
        {loading && <SpinnerSm />}
      </div>
      <div className='w-full px-5'>
        {!start ? <button className='border-2 border-[#423F3E] rounded-full w-full mt-5 py-3 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300 text-sm ' onClick={() => setStart(true)}>CONNECT</button>
          :
          <div className='py-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2 hover:text-pavia-green cursor-pointer hover:translate-x-5 transition-all will-change-transform py-2' onClick={() => onWalletSelect('lace')}>
              <div>| &gt;</div>
              <img src='/assets/images/wallets/lace.svg' className='w-4' />
              <div>Lace Wallet</div>
            </div>
            <div className='flex items-center gap-2 hover:text-pavia-green cursor-pointer hover:translate-x-5 transition-all will-change-transform py-2' onClick={() => onWalletSelect('eternl')}>
              <div>| &gt;</div>
              <img src='/assets/images/wallets/eternl.png' className='w-4' />
              <div>Eternl Wallet</div>
            </div>
            <div className='flex items-center gap-2 hover:text-pavia-green cursor-pointer hover:translate-x-5 transition-all will-change-transform py-2' onClick={() => onWalletSelect('nami')}>
              <div>| &gt;</div>
              <img src='/assets/images/wallets/nami.svg' className='w-4' />
              <div>Nami Wallet</div>
            </div>
            <div className='flex items-center gap-2 hover:text-pavia-green cursor-pointer hover:translate-x-5 transition-all will-change-transform py-2' onClick={() => onWalletSelect('flint')}>
              <div>| &gt;</div>
              <img src='/assets/images/wallets/flint.svg' className='w-4' />
              <div>Flint Wallet</div>
            </div>
            <div className='flex items-center gap-2 hover:text-pavia-green cursor-pointer hover:translate-x-5 transition-all will-change-transform py-2' onClick={() => onWalletSelect('typhon')}>
              <div>| &gt;</div>
              <img src='/assets/images/wallets/typhon.png' className='w-4' />
              <div>Typhon Wallet</div>
            </div>
          </div>
        }
        {walletError && walletError.toLowerCase().startsWith("user") &&
          <div className='text-red-600'>
            <Typewriter
              words={[`> ERROR : ${walletError} !`]}
              cursorStyle="_"
              cursor
              cursorColor="#14fecdff"
              loop={1}
            />
          </div>}
        {walletError && walletError.toLowerCase().startsWith("cannot") &&
          <div className='text-red-600'>
            <Text
              text={`> ERROR : ${walletError.match(/'\w+'/).toString().replaceAll("'", "")} WALLET NOT FOUND!`}
              speed={30}
            />
          </div>}

      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 7 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1] "
      ></motion.div>
    </div>
  );
}
