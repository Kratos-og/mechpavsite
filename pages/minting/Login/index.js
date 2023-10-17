import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function index(props) {
  return (
    <div>
      <div className="mx-5 border-2 border-[#423F3E] text-sm">
            <div className="flex justify-around pt-2">
            <button className="border-2 border-[#423F3E] rounded-full py-2 px-10 hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300">GOOGLE</button>
            <button className="border-2 border-[#423F3E] rounded-full py-2 px-10 hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300">DISCORD</button>
            </div>
            <div className="flex flex-col mx-5 pt-3">
              <input type="text" id="EMAIL ADDRESS" className="mb-5 border-2 border-[#423F3E] bg-black p-2 rounded-lg" placeholder="ENTER YOUR EMAIL"/>
              <input type="text" id="PASSWORD" className="bg-black border-2 border-[#423F3E] p-2 rounded-lg" placeholder="ENTER YOUR PASSWORD"/>
              <button className="border-2 border-[#423F3E] rounded-full py-1 px-10 mt-5 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300" onClick={()=>{props.IsLoginHandler(true)}}>submit</button>
              <p className="text-[0.65rem] py-2"><Typewriter words={["> ERROR: NULL"]} cursorStyle="_" cursorColor="#14fecdff" loop={1} typeSpeed={1} cursor/></p>
            </div>

          </div>
    </div>
  )
}
