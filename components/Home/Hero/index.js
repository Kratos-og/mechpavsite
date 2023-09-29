import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Mouse from "@/components/UI/Svg/Mouse";
import { useState } from "react";

const Hero = props => {
  const [isInView, setIsInView] = useState(true);
  useMotionValueEvent(props.progress, "change", (latest) => {
    if (latest.toFixed(2) == 0) {
      setIsInView(true)
    }
    else { setIsInView(false) }
  })
  return (
    <div className="w-full h-screen snap-child-start overflow-x-hidden" id="hero">
      <div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-center justify-center max-sm:justify-start max-sm:top-[20%]">
        <div className="lg:text-[208px] 2xl:text-[298px] font-bold tracking-wider relative overflow-hidden text-[3rem]">
          <AnimatePresence>
            {isInView && (
              <>
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ left: "100%", transition: { delay: 0.5, duration: 1 } }}
                  className="w-full bg-black h-full top-20 absolute"></motion.div>
                <motion.span
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible", transition: { delay: 0.5 } }}
                  exit={{ visibility: "hidden" }}>
                  MECH PAVS
                </motion.span>
              </>
            )}
          </AnimatePresence>
        </div>

        {props.init && props.loadVal !== 100 &&
          <motion.div className="flex items-end justify-end w-full px-40">
            <div className="w-60 h-7 border-opacity-20 border flex -mt-10">
              <div className="w-4/5 px-3 flex items-center ">
                <motion.div initial={{ width: '0%' }} animate={{ width: props.loadVal + '%', transition: { duration: 0.3 } }} className="h-0.5 bg-white"></motion.div>
              </div>
              <div className="border-l w-1/5 text-[9px] flex items-center justify-center">{props.loadVal?.toFixed(0)}%</div>
            </div>
          </motion.div>
        }
        <AnimatePresence>
          {isInView && (
            <div className="w-full relative z-40 text-[11px] ml-[15%] tracking-widest max-sm:pt-10">
              <div className="w-1/4 flex flex-col -mt-10 relative max-sm:w-1/2">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ left: "100%", transition: { delay: 0.8, duration: 1 } }}
                  onAnimationComplete={() => props.setInit(true)}
                  className=" w-full h-full absolute bg-black"></motion.div>
                <motion.div
                  initial={{ visibility: "hidden" }}
                  animate={{ visibility: "visible", transition: { delay: 0.5 } }}
                  className="flex flex-col gap-4 max-sm:text-[0.4rem] ">
                  <div>CARDANO&apos;S BIGGEST NFT MINT IS HAPPENING RIGHT HERE ON <b>OCTOBER 19TH</b>.</div>
                  <div>5 CLASSES, 5 PARTS, 5 SKINS AND OVER 1 MILLION COMBINATIONS. COLLECT AND BUILD INTERCHANGEABLE MECH PARTS TO BUILD A FULLY USEABLE AVATAR.</div>
                </motion.div>

              </div>
              <AnimatePresence>
                {props.init && props.loadVal == 100 && (
                  <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 5 }}
                    exit={{ display: "none" }}
                    className="w-[4rem] absolute mt-10 hidden lg:block 2xl:mt-40 left-20">
                    <Mouse />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default Hero;
