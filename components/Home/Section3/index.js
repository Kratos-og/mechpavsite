import {
  scroll,
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import Button from "../../UI/Button";
import Link from "next/link";
import WhiteButton from "@/components/UI/WhiteButton";

const Section = (props) => {
  const [isInView, setIsInView] = useState(false);

  useMotionValueEvent(props.progress, "change", (latest) => {
    if (latest.toFixed(2) == 0.67) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });

  return (
    <div className="w-full h-screen snap-child-start relative overflow-x-hidden">
      <motion.div className="fixed pointer-events-none w-full lg:left-8 left-0 lg:top-0 top-24 h-screen flex flex-col items-end lg:justify-center">
        <div className="w-full lg:w-1/2 pl-10 lg:pl-0">
          <div className="relative w-fit overflow-hidden">
            <AnimatePresence>
              {isInView && (
                <>
                  <motion.p
                    initial={{ visibility: "hidden" }}
                    animate={{
                      visibility: isInView ? "visible" : "hidden",
                      transition: { delay: 0.4, duration: 0 },
                    }}
                    exit={{
                      visibility: "hidden",
                      transition: { delay: 0.1, duration: 0.1 },
                    }}
                    className="text-[70px] 2xl:text-[90px] font-bold overflow-hidden tracking-wider w-fit relative lg:-ml-[5px] max-md:text-[2rem]"
                  >
                    <span>0xMECH MINT</span>
                  </motion.p>
                  <motion.div
                    initial={{ paddingRight: "0rem", width: 0 }}
                    animate={[
                      {
                        paddingRight: isInView ? "100%" : "0rem",
                        transition: { delay: 0, duration: 0.1 },
                      },
                      {
                        left: isInView ? "100%" : "0rem",
                        transition: { delay: 0.3, duration: 0.5 },
                      },
                    ]}
                    exit={[
                      {
                        left: "0",
                        paddingRight: 0,
                        transition: { delay: 0, duration: 0 },
                      },
                      {
                        width: "100%",
                        transition: { delay: 0, duration: 0.1 },
                      },
                      { x: "100%", transition: { delay: 0.1, duration: 0.1 } },
                    ]}
                    className="bg-white absolute h-3/5 lg:top-5 top-3"
                  ></motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className="relative lg:w-2/3 overflow-hidden max-md:mr-5">
            <AnimatePresence>
              {isInView && (
                <div className="relative">
                  <motion.div
                    initial={{ visibility: "hidden" }}
                    animate={{
                      visibility: isInView ? "visible" : "hidden",
                      transition: { delay: 0.4, duration: 0 },
                    }}
                    exit={{
                      visibility: "hidden",
                      transition: { delay: 0.1, duration: 0.1 },
                    }}
                    className="z-40 relative lg:text-[11px] tracking-widest text-[0.5rem]"
                  >
                    <div className="flex flex-col gap-4 w-full">
                      <div>
                        ALL 5 CLASSES OF 0xMECHS REQUIRE A PILOT WHICH IS A 0xPAV, THESE IN-GAME CREATURES COME IN 20 VARIETIES WITH VARYING RARITY AND TRAITS.
                      </div>
                      <div>
                        MINT A 0xMECH CRATE NFT WHICH WILL UNBOX AT A LATER DATE TO REVEAL 5 RANDOMLY SELECTED PARTS WHICH ARE GUARANTEED TO FORM A COMPLETE 0xMECH.
                      </div>
                      <div>
                        ONCE BUILT WITH A 0xPAV PILOT ADDED YOUR 0XMECH CAN BE UTILISED AS YOUR AVATAR TO EXPLORE THE PAVIA PLAYGROUND WHILST WE FINALISE THE FULL GAME BUID. ALL 0xMECH PARTS ARE INTERCHANGEABLE AND TRADABLE ON SECONDARY MARKETS ALLOWING OWNERS TO COLLECT & ASSEMBLE A COMPLETE CLASS.
                      </div>
                      <div>
                        WAVE 1 STRICTLY LIMITED TO 5K 0xPAVS and 5K 0xMECH CRATES.
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ paddingRight: "0rem", width: 0 }}
                    animate={[
                      {
                        paddingRight: isInView ? "100%" : "0rem",
                        transition: { delay: 0.2, duration: 0.3 },
                      },
                      {
                        left: isInView ? "100%" : "0rem",
                        transition: { delay: 0.3, duration: 0.5 },
                      },
                    ]}
                    exit={[
                      {
                        left: "0",
                        paddingRight: 0,
                        transition: { delay: 0, duration: 0 },
                      },
                      {
                        width: "100%",
                        transition: { delay: 0, duration: 0.1 },
                      },
                      { x: "100%", transition: { delay: 0.1, duration: 0.1 } },
                    ]}
                    className="bg-white absolute h-full top-0"
                  ></motion.div>
                </div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isInView && (
                <div className="flex items-center gap-5 max-md:justify-center max-md:gap-9 max-md:pt-3">
                  <Link href={"/mint"}>
                    <motion.div
                      exit={{ display: "none" }}
                      className="relative flex md:pt-4 mb-1 xl:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                    >
                      <div className=" pointer-events-auto">
                        <Button>MINT 0xPAVS</Button>
                      </div>
                    </motion.div>
                  </Link>
                  <Link href={"/unbox"}>
                    <motion.div
                      exit={{ display: "none" }}
                      className="relative flex md:pt-4 mb-1 xl:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                    >
                      <div className=" pointer-events-auto">
                        <WhiteButton>MINT 0xMECHS</WhiteButton>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section;
