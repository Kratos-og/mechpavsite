import React from 'react'

export default function BoxText(props) {
  return (
    <>
      <div className="flex gap-5 justify-evenly">
                  <div>TYPE</div>
                  <div>:</div>
                  <div className="font-bold text-lg capitalize">{props.name}</div>
                </div>
                <div className="flex gap-5 justify-evenly">
                <div>Class</div>
                  <div>:</div>
                  <div className="font-bold text-lg capitalize">{props.class}</div>
                </div>
                <div className="flex gap-5 justify-evenly">
                <div>Skin</div>
                  <div>:</div>
                  <div className="font-bold text-lg capitalize">{props.skin}</div>
                </div>
                <div className="flex gap-5 justify-evenly items-center">
                <div>Variants</div>
                  <div>:</div>
                  <div className="font-bold text-lg capitalize">{props.variants}</div>
                </div>
    </>
  )
}
