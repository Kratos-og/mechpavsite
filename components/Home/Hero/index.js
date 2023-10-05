import Mouse from "@/components/UI/Svg/Mouse";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Hero = (props) => {
  const [isInView, setIsInView] = useState(true);
  useMotionValueEvent(props.progress, "change", (latest) => {
    if (latest.toFixed(2) == 0) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });
  return (
    <div
      className="w-full h-screen snap-child-start overflow-x-hidden"
      id="hero"
    >
      <div className="fixed pointer-events-none w-full left-0 lg:top-0 h-screen flex flex-col items-center lg:justify-center justify-start top-[20%] md:top-[10%] ">
        <div className="relative overflow-hidden mt-[6%] pl-8 lg:pl-0 lg:mx-28">
          <AnimatePresence>
            {isInView && (
              <>
                <div>
                  <motion.div
                    animate={{
                      left: "100%",
                      transition: { delay: 0.5, duration: 1 },
                    }}
                    className="w-full bg-black h-full top-20 absolute"
                  ></motion.div>
                  <motion.span
                    initial={{ visibility: "hidden" }}
                    animate={{
                      visibility: "visible",
                      transition: { delay: 0.5 },
                    }}
                    exit={{ visibility: "hidden" }}
                    className="lg:-ml-3 lg:text-[208px] 2xl:text-[298px] font-bold tracking-wider text-[3.3rem]"
                  >
                    MECH PAVS
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isInView && (
                    <div className="w-full relative flex flex-col-reverse md:flex-col z-40 text-[11px] tracking-widest pt-10 lg:pt-0 pb-1">
                      {props.init && props.loadVal != 100 && (
                        <motion.div className="flex items-end justify-start md:justify-end w-full mt-5 md:mt-0">
                          <div className="w-60 h-7 border-opacity-20 border flex md:-mt-10">
                            <div className="w-4/5 px-3 flex items-center ">
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{
                                  width: props.loadVal + "%",
                                  transition: { duration: 0.3 },
                                }}
                                className="h-0.5 bg-white"
                              ></motion.div>
                            </div>
                            <div className="border-l w-1/5 text-[9px] flex items-center justify-center">
                              {props.loadVal?.toFixed(0)}%
                            </div>
                          </div>
                        </motion.div>
                      )}
                      <div className="lg:w-1/4 flex flex-col -mt-10 relative w-full md:w-1/2">
                        <motion.div
                          animate={{
                            left: "100%",
                            transition: { delay: 0.8, duration: 1 },
                          }}
                          onAnimationComplete={() => props.setInit(true)}
                          className=" w-full h-full absolute bg-black"
                        ></motion.div>
                        <motion.div
                          initial={{ visibility: "hidden" }}
                          animate={{
                            visibility: "visible",
                            transition: { delay: 0.5 },
                          }}
                          className="flex flex-col gap-4 max-sm:text-[0.4rem] w-2/3 md:w-full"
                        >
                          <div>
                            CARDANO&apos;S BIGGEST NFT MINT IS HAPPENING RIGHT HERE IN <b>OCTOBER &apos;23</b> (DATE AND TIME TO BE CONFIRMED)
                          </div>
                          <div>
                            5 CLASSES, 5 INTERCHANGEABLE MECH PARTS, MULTIPLE SKIN VARIATIONS AND OVER 9 MILLION COMBINATIONS.
                            COLLECT, TRADE AND BUILD WITH INTERCHANGEABLE NFT MECH PARTS TO CREATE YOUR OWN UNIQUE GAME-READY AVATAR.
                          </div>
                        </motion.div>
                        <AnimatePresence>

                          <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: props.init && props.loadVal && 5, opacity: props.init && props.loadVal && 1, transition: { delay: 1 } }}
                            exit={{ display: "none" }}
                            className="pt-2 relative flex justify-center w-fit lg:w-full"
                          >
                            <div className="w-16 mb-1">
                              <Mouse />
                            </div>
                          </motion.div>

                        </AnimatePresence>
                      </div>

                    </div>
                  )}
                </AnimatePresence>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
