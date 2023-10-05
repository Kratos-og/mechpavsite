import {
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import Button from "../../UI/Button";
import Link from "next/link";

const Section = (props) => {
  const [isInView, setIsInView] = useState(false);

  useMotionValueEvent(props.progress, "change", (latest) => {
    if (latest.toFixed(2) == 0.33) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });

  return (
    <div className="w-full h-screen snap-child-start relative overflow-hidden">
      <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col lg:px-40 lg:justify-center px-10 justify-start pt-[6rem] lg:pt-0">
        <div className="relative w-fit overflow-hidden">
          <AnimatePresence>
            {isInView && (
              <>
                <motion.p
                  initial={{ visibility: "hidden" }}
                  animate={{
                    visibility: isInView ? "visible" : "hidden",
                    transition: { delay: 0.4, duration: 1 },
                  }}
                  exit={{
                    visibility: "hidden",
                    transition: { delay: 0.1, duration: 0.1 },
                  }}
                  className="lg:text-[70px] 2xl:text-[90px] font-bold overflow-hidden tracking-wider w-fit relative -ml-[3px] text-[2rem]"
                >
                  <span>MECH MINT</span>
                </motion.p>
                <motion.div
                  initial={{ paddingRight: "0rem", width: 0 }}
                  animate={[
                    {
                      paddingRight: isInView ? "100%" : "0rem",
                      transition: { delay: 0, duration: 0.4 },
                    },
                    {
                      left: isInView ? "100%" : "0rem",
                      transition: { delay: 0.4, duration: 0.4 },
                    },
                  ]}
                  exit={[
                    {
                      left: "0",
                      paddingRight: 0,
                      transition: { delay: 0, duration: 0 },
                    },
                    { width: "100%", transition: { delay: 0, duration: 0.1 } },
                    { x: "100%", transition: { delay: 0.1, duration: 0.1 } },
                  ]}
                  className="bg-white absolute h-3/5 lg:top-5 top-3"
                ></motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="relative lg:w-1/4 overflow-hidden w-full md:w-1/2">
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
                  <div className="flex flex-col gap-4">
                    <div>
                      PURCHASE A MECH CRATE NFT AND UNBOX LATER TO REVEAL 5 RANDOMLY SELECTED PARTS, GUARANTEED TO FORM A COMPLETE MECH.
                    </div>
                    <div>
                      BUILD YOUR MECH TO USE AS AN AVATAR TO EXPLORE PAVIA AND ENJOY A FUTURE OF EXCLUSIVE MECH UTILITY.
                      COLLECT, BUILD AND INTERCHANGE NFT MECH PARTS USING OUR CUSTOM ONLINE MECH BUILDER.

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
                    { width: "100%", transition: { delay: 0, duration: 0.1 } },
                    { x: "100%", transition: { delay: 0.1, duration: 0.1 } },
                  ]}
                  className="bg-white absolute h-full top-0"
                ></motion.div>
              </div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isInView && (
              <Link href={"/mint"}>
                <motion.div
                  exit={{ display: "none" }}
                  className="relative flex md:pt-4 mb-1 lg:ml-1 max-md:scale-75 max-md:ml-[-2.5rem]"
                >
                  <div className=" pointer-events-auto">
                    <Button>LEARN MORE</Button>
                  </div>
                </motion.div>
              </Link>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Section;
