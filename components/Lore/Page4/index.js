import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import AnimatedTextWord from "../../UI/AnimatedTextWord";
import { Typewriter } from 'react-simple-typewriter'


export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  const [current,setCurrent] = useState(0)
  const handleCurrent = (data)=>{
    setCurrent(data)
  }
  return (
    <div className="w-full h-screen snap-child-start py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: scroll == 1 ? 1 : 0,
          transition: { delay: 0, duration: 0.2 },
        }}
      >
        <div className="fixed top-10 mx-[5rem] flex flex-col overflow-hidden justify-center h-screen pointer-events-none gap-10 z-30">

          <AnimatePresence>
            {scroll == 1 && (
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{
                    y: 0,
                    transition: { delay: 0, duration: 1 },
                  }}
                  className="flex flex-col gap-5 text-sm  pt-5 tracking-widest"
                >
                  <p className="italic border-b-2 border-[#14fecd] pb-3">ORIGINS</p>
                  <AnimatePresence>
                  {scroll == 1 && (
                    <AnimatedTextWord handleCurrent={handleCurrent} words={"Pavs were first discovered when Pavia Corp was exploring the planet Pavia on an expedition mission. The team would discover large numbers of creatures roaming the land in dense terrains such as forests and mountains and though their origins are unknown, many are believed to have been brought here by the unknown crashed spacecraft first discovered by the Horizon in QAP."} value={1}/>
                  )}
                  </AnimatePresence>
                  <AnimatePresence>{scroll==1 && current>=1 && (
                    <AnimatedTextWord handleCurrent={handleCurrent} words={"Small in size, Pavia Corp believed that Pavs were light-dependant creatures that could convert sunlight into energy and clean air. They would act as air purifiers when congregated in large numbers over long periods of time on planets with unbreathable air and could counterbalance certain properties within atmospheres on planets to make them habitable for humans to populate. It has been said that some Pavs even have the ability to change the weather. Pavs were known to be tough and could survive in space as well as on harsh planet terrains. Though their true molecular composition is unknown, they are considered to be comprised of various elements from hearby meteors, stars, and asteroids."} value={2}/>
                  )}</AnimatePresence>


                  <p className="italic border-b-2 border-[#14fecd] pt-14 pb-3">SETTLEMENT ON PAVIA</p>
                  <div className="py-4">
                  <AnimatePresence>{scroll==1 && current == 2 && (
                    <Typewriter words={["It is believed that since the crash that brought them here, Pavs would spread across the land, multiplying and evolving into different. forms. Over the next 40 years, their bodies would produce enough energy and oxygen to transform the atmosphere into breathable air, and in the few years leading up to the Horizon landing the lands across Payia would grow grass; trees, and plants and eventually form rivers and oceans, becoming habitable for humanity. In the year 2AP, the first Pavs would be discovered by humans and it is said that the very first Pav ever spotted was golden."]} typeSpeed={1} loop={1}/>
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
