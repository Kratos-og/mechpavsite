import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import AnimatedTextWord from "../../UI/AnimatedTextWord";

export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  let inView = scroll == 0.6;
  const [current, setCurrent] = useState(0);
  const handleCurrent = (data) => {
    setCurrent(data)
  };

  useEffect(() => {
    if (scroll == 0.60 && current > 0) {
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
        <div className="fixed lg:top-10 lg:px-20 top-0 px-5 flex overflow-hidden lg:mt-40 mt-24 lg:gap-20 h-screen pointer-events-none z-30 w-screen max-md:flex-col gap-10">

          <AnimatePresence>
            {inView && (
              <motion.div
                initial={{ y: 500 }}
                animate={{
                  y: 25,
                  transition: { delay: 0, duration: 1 },
                }}
                className="lg:w-2/5 max-md:h-[20%]">
                <img src={"/assets/images/the_vita.png"} alt={"pavs"} className="rounded-lg max-md:h-full object-cover w-full" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="overflow-hidden lg:w-3/5 w-full">
            <AnimatePresence>
              {inView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
                  className="lg:text-2xl lg:pb-5">
                  The Pillar of Vita
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
                    className="flex flex-col lg:gap-5 gap-2 text-sm lg:pt-5 max-md:pt-2 tracking-widest max-md:text-[10px] max-md:leading-4"
                  >
                    <AnimatePresence>{inView && (
                      <AnimatedTextWord words={"Thought to have been created between 20BP - 30BP, the Pilla of Vita (translated to the Pillar Of life) was believed to be a sacred shrine built by the PAVS. Discovered in 50AK, a human recon team discovered a large altar built from colossal pieces of stone amongst the jungle on the Planet's surface. The stones were tall and each was engraved with different markings and symbols. Whilst the origins of these sacred stones and how they were moved are unknown, researchers concluded that PAVS would use this area as a place of worship."} handleCurrent={handleCurrent} value={1} />
                    )}</AnimatePresence>
                    <AnimatePresence>{inView && current == 1 && (
                      <>
                        <div className="lg:text-2xl text-base tracking-normal">Relationship with humans</div>
                        <motion.div className="h-[1.5px] bg-[#14fecd]" initial={{ width: 0 }} animate={{ width: inView ? '100%' : 0, transition: { delay: 0.2 } }}></motion.div>
                      </>
                    )}</AnimatePresence>

                    <AnimatePresence>{inView && current == 1 && (
                      <Typewriter words={["In the year 61AK humans would colonize Pavia, discovering thousands of different types of PAVS, many of which had unique abilities and traits. Humans would later come to accept PAVS as an integral part of the planet's ecosystem and in the year 62AK the people of Pavia passed a law stating that no human could harm a PAV making them a protected species throughout the planet. Although they are independent and free-thinking animals, humans primarily kept their distance from PAVS as their behavior could be irrational and unpredictable, staying clear of mountains and jungle areas where PAVS presided."]} typeSpeed={5} loop={1} />
                    )}</AnimatePresence>

                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
