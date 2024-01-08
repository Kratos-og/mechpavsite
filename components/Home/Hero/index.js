import Button from "@/components/UI/Button";
import Mouse from "@/components/UI/Svg/Mouse";
import WhiteButton from "@/components/UI/WhiteButton";
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
                    0xPAVIA
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
                      <div className="xl:w-1/2 flex flex-col -mt-10 relative w-full md:w-1/2">
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
                            WELCOME TO 0xPAVIA THE PAVIA METAVERSE EXPANSION AND YOUR CHANCE TO OWN 0XLAND AND 0XMECHS WHICH FORM PART OF THE EXCITING PAVIA GAMING METAVERSE.
                          </div>
                          <div>
                            COLLECT ONE OF 20 VARIETIES OF 0xPAVS WHICH ARE REQUIRED TO PILOT YOUR 0xMECH, FORMED OF INTERCHANGEABLE PARTS. YOUR MECH COMES WITH SPECIAL ABILITIES AND IS PLAYABLE IN THE METAVERSE IN PLACE OF YOUR REGULAR AVATAR.
                          </div>
                          <div>
                            IN 2021 PAVIA SOLD ALL CARDANO BASED LANDS AND WAS 13X OVER SUBSCRIBED. THE CARDANO CONTINENT IS FULL OF OVER 16,000 LAND OWNERS, MANY OF WHOM OWN CARDANO PAVS & MECHS. DID SOMEONE SAY CROSS-CHAIN BATTLE?
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
                              <a href={"https://app.uniswap.org/"} target="_blank">
                                <motion.div
                                  exit={{ display: "none" }}
                                  className="relative flex md:pt-4 mb-1 xl:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                                >
                                  <div className=" pointer-events-auto">
                                    <Button>BUY $PAVIA</Button>
                                  </div>
                                </motion.div>
                              </a>
                              <Link href={"/minting"}>
                                <motion.div
                                  exit={{ display: "none" }}
                                  className="relative flex md:pt-4 mb-1 xl:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                                >
                                  <div className=" pointer-events-auto">
                                    <Button>MINT 0xLAND</Button>
                                  </div>
                                </motion.div>
                              </Link>
                              <Link href={"/unbox"}>
                                <motion.div
                                  exit={{ display: "none" }}
                                  className="relative flex md:pt-4 mb-1 xl:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                                >
                                  <div className=" pointer-events-auto">
                                    <WhiteButton>MINT 0xPAVS & MECHS</WhiteButton>
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

export default Hero;
