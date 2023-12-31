import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import AnimatedTextWord from "../../UI/AnimatedTextWord";
import { Typewriter } from 'react-simple-typewriter'


export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  let inView = scroll == 0.4;
  const [current, setCurrent] = useState(0)
  const handleCurrent = (data) => {
    setCurrent(data)
  }

  useEffect(() => {
    if (scroll !== 1 && current > 0) {
      setCurrent(0);
    }
  }, [scroll])

  return (
    <div className="w-full h-screen snap-child-start py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
          transition: { delay: 0, duration: 0.2 },
        }}
      >
        <div className="fixed top-10 lg:mx-[5rem] mx-6 flex flex-col overflow-hidden justify-start mt-20 lg:mt-32 h-screen pointer-events-none gap-10 z-30">

          <AnimatePresence>
            {inView && (
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{
                    y: 0,
                    transition: { delay: 0, duration: 1 },
                  }}
                  className="flex flex-col gap-2 lg:gap-5 text-sm  lg:pt-5 tracking-widest"
                >
                  <p className="italic border-b-2 border-[#14fecd] lg:pb-3">ORIGINS</p>
                  
                  <div className="max-md:text-[10px] max-md:leading-4 flex flex-col gap-2">
                  <AnimatePresence>
                    {inView && (
                      <AnimatedTextWord handleCurrent={handleCurrent} words={"Pavs were first discovered when Pavia Corp was exploring the planet Pavia on an expedition mission. The team would discover large numbers of creatures roaming the land in dense terrains such as forests and mountains and though their origins are unknown, many are believed to have been brought here by the unknown crashed spacecraft first discovered by the Horizon in QAP."} value={1} />
                      )}
                  </AnimatePresence>
                  <AnimatePresence>{inView && current >= 1 && (
                    <AnimatedTextWord handleCurrent={handleCurrent} words={"Small in size, Pavia Corp believed that Pavs were light-dependant creatures that could convert sunlight into energy and clean air. They would act as air purifiers when congregated in large numbers over long periods of time on planets with unbreathable air and could counterbalance certain properties within atmospheres on planets to make them habitable for humans to populate. It has been said that some Pavs even have the ability to change the weather. Pavs were known to be tough and could survive in space as well as on harsh planet terrains. Though their true molecular composition is unknown, they are considered to be comprised of various elements from hearby meteors, stars, and asteroids."} value={2} />
                    )}</AnimatePresence>
                    </div>


                  {current == 2 && <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1, duration: .5 } }}
                    className="italic border-b-2 border-[#14fecd] lg:pt-14 lg:pb-3">SETTLEMENT ON PAVIA</motion.p>}
                  <div className="lg:py-1">
                    <AnimatePresence>{inView && current == 2 && (
                      <div className="max-md:text-[10px] max-md:leading-4">
                      <Typewriter words={["It is believed that since the crash that brought them here, Pavs would spread across the land, multiplying and evolving into different. forms. Over the next 40 years, their bodies would produce enough energy and oxygen to transform the atmosphere into breathable air, and in the few years leading up to the Horizon landing the lands across Pavia would grow grass; trees, and plants and eventually form rivers and oceans, becoming habitable for humanity. In the year 2AP, the first Pavs would be discovered by humans and it is said that the very first Pav ever spotted was golden."]} typeSpeed={0} loop={1} />
                      </div>
                    )}</AnimatePresence>

                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>


        </div>
      </motion.div>
    </div>
  );
}
