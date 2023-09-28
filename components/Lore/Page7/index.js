import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import AnimatedTextWord from "../../UI/AnimatedTextWord";

export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  const [current,setCurrent] = useState(0);
  const [inView,setInView] = useState(Boolean)
  const handleCurrent = (data)=>{
    setCurrent(data)
  };

  useEffect(() => {
    if (scroll == 1 && current > 0) {
      setCurrent(0);
    }
    if(scroll == 1){
      setInView(true)
    }else{setInView(false)}
  }, [scroll])
  console.log(inView)
  return (
    <div className="w-full h-screen snap-child-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
          transition: { delay: 0, duration: 0.2 },
        }}
      >
        <div className="fixed top-10 mx-[5rem] flex overflow-hidden items-center h-screen pointer-events-none gap-10 z-30 w-full">
          <div className="overflow-hidden absolute top-[27%] left-[32%] pt-16">
          <AnimatePresence>
            {inView && (
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1,transition:{delay:0.3,duration:0.5}}}
              className="text-2xl pb-5">
              The Crimson Lake
            </motion.div>
              )}
              </AnimatePresence>
            <motion.div className=" h-[1.5px] bg-[#14fecd]" initial={{ width: 0 }} animate={{ width: inView ? '100%' : 0, transition: { delay: 0.2 } }}></motion.div>
            <AnimatePresence>
              { inView && (
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 500 }}
                    animate={{
                      y: 0,
                      transition: { delay: 0, duration: 1 },
                    }}
                    className="flex flex-col gap-5 text-sm  pt-5 tracking-widest w-[25rem] "
                  >
                    <AnimatePresence>{inView && (
                      <AnimatedTextWord words={"The Crimson Lake is located in the center of the Pavia forest and is known for its distinctive red water surrounded by trees with red leaves. Not much is known about the Crimson Lake but it is said to have special but dangerous powers for those who drink it. Early settlers on Pavia do not know if it was there before or after Pavs arrived."} handleCurrent={handleCurrent} value={1}/>
                      )}</AnimatePresence>
                    
                      
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {inView && (
                <>
              <motion.div
                initial={{ y: 500 }}
                animate={{
                    y: 25,
                    transition: { delay: 0, duration: 1 },
                }}
                className="absolute right-[10%] w-[30%]">
                <img src={"/assets/images/crimson_lake.png"} alt={"pavs"} className="rounded-lg" />
              </motion.div>
              <motion.div
                initial={{ y: 500 }}
                animate={{
                  y: 25,
                  transition: { delay: 0, duration: 1 },
                }}
                className="absolute left-0 w-[30%]">
                <img src={"/assets/images/lake.jpg"} alt={"pavs"} className="rounded-lg" />
              </motion.div>
                    </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
