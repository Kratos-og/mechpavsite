import Builder from '@/components/Builder'
import React, { useState } from 'react'

export default function BuilderPage() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>    {isLogin ? <Builder /> :
      <div className="h-screen flex justify-center items-center bg-transparent">
        <div className='absolute w-[80%] top-0'>
          <img src="assets/images/builder/group.png" alt="mech" />
        </div>
        <div className='border-2 border-gray-600 rounded-lg absolute bg-white/10'>
          <div className='flex flex-col p-10 gap-5 justify-center items-center'>
            <p className='font-black text-5xl text-white'>MECH BUILDER</p>
            <button className='w-96 h-20 mt-5 py-7 text-sm newButton relative text-pavia-green group font-light' onClick={() => setIsLogin(true)}>
              <div className='frame  w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
                <div className="lines"></div>
                <div className="angles"></div>
                <div className='bg-gray-900 w-full h-full flex justify-center items-center'>
                  <p className='text-xl'>LOGIN</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    }
    </>

  )
}
BuilderPage.DisplayName = 'Builder';
