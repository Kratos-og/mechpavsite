import React from "react";
import { motion } from "framer-motion";
export default function index(props) {
  return (
    <div className="h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0,0, 1],
          transition: { delay: 0, repeat: Infinity, repeatDelay: 4 },
        }}
        className="w-[80%] m-auto "
      >
        <img src="assets/images/mint/mech_pavs.png" alt="HERO" />
      </motion.div>
      <div className="w-[15%] m-auto group cursor-pointer p-1 border-2 border-white rounded-full" onClick={()=>{props.enterHandler(true)}}>
        <div className="  py-5 px-10  rounded-full bg-white group-hover:hidden">
          <img src="assets/images/mint/enter_2.png" alt="" />
        </div>
        <div className=" py-5 px-10  rounded-full bg-white hidden group-hover:block ">
          <img src="assets/images/mint/enter_1.png" alt=""  className="pb-[0.2rem]"/>
        </div>
        <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-500">
          <div className="top-[51%] w-[10%] right-[42%] absolute">
            <img src="assets/images/mint/rocket.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
