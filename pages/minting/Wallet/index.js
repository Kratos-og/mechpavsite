import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function index(props) {
  return (
    <div className=' border-2 border-[#423F3E] mx-5 uppercase mt-2'>
        <p className='text-gray-500 flex justify-center pt-5 text-xs'>wallet connection</p>
        <div className='w-full px-5'>
        <button className='border-2 border-[#423F3E] rounded-full w-full mt-5 py-3 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300 text-sm ' onClick={()=>{props.WalletConnectionHandler(true)}}>CONNECT</button>
        <p className="text-[0.65rem] py-4"><Typewriter words={["> ERROR: NULL"]} cursorStyle="_" cursorColor="#14fecdff" loop={1} typeSpeed={1} cursor/></p>
        </div>
    </div>
  )
}
