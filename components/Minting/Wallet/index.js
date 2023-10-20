
import SpinnerSm from '@/components/UI/SpinnerSm';
import React, { useEffect, useState } from 'react';
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import Text from '../Text';

export default function Wallet(props) {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [walletError, setWalletError] = useState("")

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        const mainPanel = document.getElementById('mainPanel');
        mainPanel.scroll({
          behavior: 'smooth',
          top: document.getElementById('walletPanel').offsetTop + 100
        })
      }, 100)

    }
  }, [start])

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
      
        <p className='text-gray-500 px-5 text-xs'>
          Step 1: Connect Wallet</p>
        {loading && <SpinnerSm />}
      </div>
      <div className='w-full px-5'>
        {!start ? <button className=' w-full mt-5 py-7 text-sm newButton relative text-pavia-green group font-light' onClick={() => setStart(true)}>
          <div className='frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
          <div className="lines"></div>
          <div className="angles"></div>
          <div className='bg-gray-900 w-full h-full flex justify-center items-center'>
            <p>CONNECT</p>
          </div>
          </div>
          
          </button>
          :
          <div className='py-4 flex flex-col gap-4' id='walletPanel'>
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
