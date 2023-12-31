import Button from "@/components/UI/Button";
import Mouse from "@/components/UI/Svg/Mouse";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
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
      <div className="fixed pointer-events-none w-full left-0 xl:top-0 h-screen flex flex-col items-center xl:justify-center justify-start top-[20%] md:top-[10%] ">
        <div className="relative overflow-hidden mt-[6%] pl-8 xl:pl-0 xl:mx-28">
          <AnimatePresence>
            {isInView && (
              <>
                <div>
                  <motion.div
                    animate={{
                      left: "200%",
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
                    className="xl:-ml-3 xl:text-[208px] 2xl:text-[298px] font-bold tracking-wider whitespace-nowrap text-[3.3rem]"
                  >
                    MECH PAVS
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isInView && (
                    <div className="w-full relative flex flex-col-reverse md:flex-col z-40 text-[11px] tracking-widest pt-10 xl:pt-0 pb-1">
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
                      <div className="xl:w-1/4 flex flex-col -mt-10 relative w-full md:w-1/2">
                        <motion.div
                          initial={{ left: 0 }}
                          animate={{
                            left: "200%",
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
                          <div className="uppercase">
                            Welcome to Game-Ready Playable Avatars.  Minting NOW on Cardano and playable in the Pavia Metaverse!
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
                            className="pt-2 relative flex justify-center w-fit xl:w-full ml-7 md:ml-0"
                          >
                            <div className=" flex flex-row gap-8">
                              <Link href={"/minting"}>
                                <motion.div
                                  exit={{ display: "none" }}
                                  className="relative flex md:pt-4 mb-1 xl:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                                >
                                  <div className=" pointer-events-auto">
                                    <Button>Mint Now</Button>
                                  </div>
                                </motion.div>
                              </Link>
                              <Link href={"/unbox"}>
                                <motion.div
                                  exit={{ display: "none" }}
                                  className="relative flex md:pt-4 mb-1 xl:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                                >
                                  <div className=" pointer-events-auto">
                                    <WhiteButton>Unbox</WhiteButton>
                                  </div>
                                </motion.div>
                              </Link>
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

// import { motion } from "framer-motion";

const WhiteButton = (props) => {
    return (
        <div className="bg-black flex justify-center items-center">
            <button className=" w-36 h-14 relative flex justify-center group items-center">
                {/* Top & Bottom Border */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%", transition: { delay: 2.5, duration: 0.5 } }}
                    className="absolute bg-gray-500 h-[0.05rem] top-0"
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%", transition: { delay: 2.7, duration: 0.5 } }}
                    className="absolute bg-gray-500 h-[0.01rem] bottom-0"
                />
                {/* Top & Bottom Border */}

                {/* Right & Left Border */}
                <motion.svg
                    fill="none"
                    viewBox="0 0 3 74"
                    astro-icon="button-border"
                    className={
                        " absolute right-0 w-[0.15rem] h-full text-white rotate-180 group-hover:translate-x-0 translate-x-1 duration-200 ease-in-out"
                    }
                >
                    <motion.path
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.1, duration: 0.5, ease: "easeInOut" }}
                        fill="currentColor"
                        d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
                    ></motion.path>
                </motion.svg>

                <motion.svg
                    fill="none"
                    viewBox="0 0 3 74"
                    astro-icon="button-border"
                    className={
                        " absolute left-0 w-[0.15rem] h-full text-white -translate-x-1 group-hover:translate-x-0 duration-200 ease-in-out"
                    }
                >
                    <motion.path
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.1, duration: 0.5, ease: "easeInOut" }}
                        fill="currentColor"
                        d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
                    ></motion.path>
                </motion.svg>
                {/* Right & Left Border */}

                {/* Dot */}
                <motion.div
                    initial={{ rotate: 45 }}
                    animate={[
                        {
                            rotate: 0,
                            transition: { delay: 0.5, duration: 0.5, type: "spring" },
                        },
                        { paddingRight: "61%", transition: { delay: 1, duration: 0.5 } },
                    ]}
                    className=" bg-white p-2 absolute"
                />
                {/* Dot */}

                {/* text */}
                <motion.div
                    initial={{ display: "none", paddingRight: 0 }}
                    animate={{
                        paddingRight: "90%",
                        display: "block",
                        transition: { delay: 2, duration: 0.5 },
                    }}
                    className="bg-black absolute py-4 z-[1]"
                ></motion.div>
                <motion.div
                    initial={{ display: "none", y: 0 }}
                    animate={{ display: "block", transition: { delay: 2.5 } }}
                    className=" text-[#000000] uppercase absolute z-[2] text-xs w-full h-full hover:bg-transparent pt-5 bg-white"
                >
                    <motion.div 
                    className=" w-full h-4 overflow-hidden">
                        <div className="group-hover:-translate-y-3 duration-300 ease-in-out">
                            {props.children}
                        </div>
                        <div className=" text-white mb-3 group-hover:-translate-y-4 duration-300 ease-in-out">
                            {props.children}
                        </div>
                    </motion.div>
                </motion.div>
                {/* text */}
            </button>
        </div>
    );
}

export default Hero;
