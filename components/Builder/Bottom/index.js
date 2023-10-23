import React from "react";
import {GiRobotGrab} from "react-icons/gi"
import {BiLogoYoutube} from "react-icons/bi"
import {GiRobotHelmet} from "react-icons/gi"

export default function Index(props) {
  document.addEventListener('keydown', handleKeyPress);
  function handleKeyPress(event) {
    if (event.key === 'u') {
      props.setShowMenu(true); 
  }
  if (event.key === 'x') {
    props.setShowMenu(false);
}
if(event.key === 'z'){
  props.setShowSettings(true);
}
}
  return (
    <div className="">

      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 698.77 64"
        className="w-[35%] absolute -bottom-0 -left-1 z-[1]"
      >
        <polygon
          class="cls-1"
          points="697.5 63.5 0.5 63.5 0.5 0.5 630.17 0.5 697.5 63.5"
          stroke=" blurred-bg"
          strokeWidth={3}
          fillOpacity={1}
        />
      </svg>
      <div className="blurred-bg w-screen h-14 absolute bottom-0"></div>
      
      <div className="flex absolute bottom-3 left-10 gap-6 z-[2]">
        <button className="text-sm text-white border-2 border-[#CDDEFF] cursor-pointer rounded-[0.3rem]  px-2 flex gap-5 items-center" onClick={()=>{props.setShowMenu(true)}}>LOADOUT 
        <p className="bg-white/20 text-pavia-green text-xs p-1 rounded-[0.3rem]">[U]</p></button>
        <button className="text-sm text-white border-2 border-[#CDDEFF] cursor-pointer rounded-[0.3rem] px-2 flex gap-5 items-center" onClick={()=>{props.setShowSettings(true)}}>SAVED LOADOUT <p className="bg-white/20 text-pavia-green text-xs p-1 rounded-[0.3rem]">[Z]</p></button>
      </div>
      
    </div>
  );
}
