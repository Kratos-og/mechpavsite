import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import AnimatedTextWord from "../../UI/AnimatedTextWord";

export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  let inView = scroll == 1;
  const [current, setCurrent] = useState(0);
  const handleCurrent = (data) => {
    setCurrent(data)
  };

  useEffect(() => {
    if (scroll == 1 && current > 0) {
      setCurrent(0);
    }
  }, [scroll]);

  return (
    <div className="w-full h-screen snap-child-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
          transition: { delay: 0, duration: 0.2 },
        }}
      >
        <div className="fixed top-0 lg:mx-[5rem] px-6 flex overflow-hidden lg:py-40 max-md:mt-28 h-screen pointer-events-none lg:gap-10 z-30 w-full max-md:flex-wrap max-md:flex-col ">
          <AnimatePresence>
            {inView && (
              <motion.div
                initial={{ y: 500 }}
                animate={{
                  y: 25,
                  transition: { delay: 0, duration: 1 },
                }}
                className="lg:w-[22%] w-full">
                <img src={"/assets/images/crimson_lake.png"} alt={"pavs"} className="rounded-lg h-[80%] lg:h-full object-cover w-full" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="lg:w-[40%] flex justify-center items-center flex-col">
            <AnimatePresence>
              {inView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
                  className="lg:text-2xl lg:pb-5">
                  The Crimson Lake
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div className=" h-[1.5px] bg-[#14fecd]" initial={{ width: 0 }} animate={{ width: inView ? '100%' : 0, transition: { delay: 0.2 } }}></motion.div>
            <AnimatePresence>
              {inView && (
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 500 }}
                    animate={{
                      y: 0,
                      transition: { delay: 0, duration: 1 },
                    }}
                    className="flex flex-col lg:gap-5 text-[10px] max-md:leading-4 lg:text-sm tracking-widest pt-2"
                  >
                    <AnimatePresence>{inView && (
                      <AnimatedTextWord words={"The Crimson Lake is located in the center of the Pavia forest and is known for its distinctive red water surrounded by trees with red leaves. Not much is known about the Crimson Lake but it is said to have special but dangerous powers for those who drink it. Early settlers on Pavia do not know if it was there before or after Pavs arrived."} handleCurrent={handleCurrent} value={1} />
                    )}</AnimatePresence>


                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {inView && (
              <motion.div
                initial={{ y: 500 }}
                animate={{
                  y: 25,
                  transition: { delay: 0, duration: 1 },
                }}
                className="lg:w-[22%] w-full">
                <img src={"/assets/images/lake.jpg"} alt={"pavs"} className="rounded-lg h-[80%] lg:h-full object-cover w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
