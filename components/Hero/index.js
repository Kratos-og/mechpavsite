import React from "react";
import Button from "./Button";
import Mouse from "./Mouse";
import { delay, motion } from "framer-motion";

export default function index() {
  return (
    <motion.div 
    initial={{display:"none"}}
    animate={{display:"flex"}}
    transition={{delay:5}}
    className="flex items-center h-screen w-full px-[10rem] absolute z-[1] bg-black">
      <div className="w-full">
        <div className="text-[18rem] font-extrabold leading-none flex justify-center">
          <p>MECHPAVS</p>
        </div>
        <div className="tracking-[0.2rem] text-sm">
          <div>
            CARDANO&apos;S BIGGEST NFT MINT IS HAPPENING RIGHT HERE ON <span className="font-bold">OCTOBER 19<sup>th</sup></span>
          </div>
          <div className=" text-xs pt-2 tracking-[0.1rem]">5 CLASSES, 5 PARTS,5 SKINS AND OVER 1 MILLION COMBINATIONS COLLECT 
          AND BUILD INTERCHANGEABLE MECH PARTS TO BUILD A FULLY USABLE AVATAR.</div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="pt-20">
            <Button text={"join with us"} />
          </div>
          <div className="w-16 translate-y-14">
            <Mouse />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
