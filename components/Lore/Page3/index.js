import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import AnimatedTextWord from "../../UI/AnimatedTextWord";

export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  let inView = scroll == 0.2;
  const [current, setCurrent] = useState(0);

  const handleCurrent = (data) => {
    setCurrent(data)
  };

  useEffect(() => {
    if (scroll == 0.20 && current > 0) {
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
        <div className="fixed top-0 mx-[5rem] flex overflow-hidden mt-60 h-screen pointer-events-none gap-10 z-30 w-full">
          <div className="overflow-hidden w-1/2">
            <AnimatePresence>
              {inView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
                  className="text-2xl pb-5">
                  OVERVIEW
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
                    className="flex flex-col gap-5 text-sm  pt-5 tracking-widest "
                  >
                    <AnimatePresence>{inView && (
                      <AnimatedTextWord words={"Pavs are 4-legged creatures from the planet Pavia. They are light-dependant animals that can create energy and clean air by converting sunlight within their bodies. They are composed of a variety of unknown elements believed to be derived from nearby, meteors and asteroids from local solar systems. Pavs are incredibly resistant and even have the unique ability to regenerate lost limbs, though this process has been found to be slow."} handleCurrent={handleCurrent} value={1} />
                    )}</AnimatePresence>
                    <AnimatePresence>{inView && current >= 1 && (
                      <AnimatedTextWord words={"Pavs are curious and inquisitive in nature and though they are extremely loyal, generally avoid interactions with humans. They are telepathic and have no vocal cords to speak so communicate by producing grunts and whistles from time to time,"} value={2} handleCurrent={handleCurrent} />
                    )}</AnimatePresence>

                    <AnimatePresence>{inView && current == 2 && (
                      <Typewriter words={["They can often be found in rough terrains such as mountains and forests and. although harmless at first glance, they can be aggressive when threatened and have been known to seriously injure humans due to their short temperament."]} typeSpeed={5} loop={1} />
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
                className="absolute right-[10%] w-[35%]">
                <img src={"/assets/images/pav.png"} alt={"pavs"} className="rounded-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
