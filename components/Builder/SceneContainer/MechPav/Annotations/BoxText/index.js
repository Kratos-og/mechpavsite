import React from 'react'

export default function BoxText(props) {
  return (
    <>
      <div className="flex gap-5 whitespace-nowrap">
        <div className='w-16'>Type</div>
        <div className="font-bold text-lg capitalize">{props.name}</div>
      </div>
      <div className="flex gap-5 whitespace-nowrap">
        <div className='w-16'>Class</div>
        <div className="font-bold text-lg capitalize">{props.class}</div>
      </div>
      <div className="flex gap-5 whitespace-nowrap">
        <div className='w-16'>Skin</div>
        <div className="font-bold text-lg capitalize">{props.skin}</div>
      </div>
      {/* <div className="flex gap-5 items-center whitespace-nowrap">
        <div className='w-16'>Variant</div>
        <div className="font-bold text-lg capitalize">{props.variants}</div>
      </div> */}
    </>
  )
}
