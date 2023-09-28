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
    if (scroll == 0.8 && current > 0) {
      setCurrent(0);
    }
    if(scroll == 0.8){
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
          <div className="overflow-hidden absolute top-[25%]">
          <AnimatePresence>
            {inView && (
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1,transition:{delay:0.3,duration:0.5}}}
              className="text-2xl pb-5">
              Mech PAVs
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
                    className="flex flex-col gap-5 text-sm  pt-5 tracking-widest w-[50rem] "
                  >
                    <AnimatePresence>{inView && (
                      <AnimatedTextWord words={"Over the following years, PAVS would slowly adapt to human settlement. Acclimatizing to their culture and interacting more with humans on a day-to-day basis. Humans would eventually work closely alongside PAVS, allowing them to study and utilize their energy capabilities while they helped humanity consume and store power. This would inevitably lead to the invention of the Mech PAV, an energy-powered armored suit, that is powered by consuming energy from the PAV controlling it. Mech suits were designed to explore terrain normally unobtainable to humans such as dense forests and rocky mountains. Heavy and durable, these suits allowed PAVS to gather resources from different parts of Pavia, however not every PAV is Mech compatible and compatibility depends entirely on how much energy a PAV produces."} handleCurrent={handleCurrent} value={1}/>
                      )}</AnimatePresence>
                    <AnimatePresence>{inView &&  current==1 && (
                        <>
                      <div className="text-2xl">Catching Pavs</div>
                      <motion.div className=" h-[1.5px] bg-[#14fecd]" initial={{ width: 0 }} animate={{ width: inView ? '100%' : 0, transition: { delay: 0.2 } }}></motion.div>
                      </>
                      )}</AnimatePresence>
                  
                    <AnimatePresence>{inView && current == 1 && (
                      <Typewriter words={["In recent years PAVS have evolved to become illusive and harder to find, settling in dense parts of the forest and mountains well out of reach from humans, making them rarer to find. To counter this, humans would catch PAVS in an attempt to tame and befriend them"]} typeSpeed={5} loop={1}/>
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
                <img src={"/assets/images/mech_pav.png"} alt={"pavs"} className="rounded-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
