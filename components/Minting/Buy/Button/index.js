import React from 'react'

export default function Button({unit, price}) {
  return (
    <div className='px-5'>
      <button className="border-2 border-[#423F3E] rounded-full w-full mt-3 py-1 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300 text-sm">
        <div className="flex justify-between px-5">
            <p>{unit}X</p>
            <p>{price} ADA</p>
        </div>
      </button>
    </div>
  )
}
