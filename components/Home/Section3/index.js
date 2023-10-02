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
      <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-end justify-center">
        <div className="w-1/2">
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
                    <span>EXPLORE THE LORE</span>
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
                    className="bg-white absolute h-3/5 top-5"
                  ></motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className="relative w-2/3 overflow-hidden">
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
                        LEARN MORE ABOUT THESE MYSTERIOUS PAVS AND WHERE THEY
                        CAME FROM WHILE YOU EXPLORE THE PAST AND DISCOVER THE
                        SECRETS.
                      </div>
                      <div>
                        READ THROUGH CHRONOLOGICAL EVENTS AND DISCOVER HOW PAVS
                        AND MECHS COMBINED TO BECOME THE ULTIMATE FORCE.
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
                <Link href={"/lore"}>
                  <motion.div
                    exit={{ display: "none" }}
                    className="relative flex lg:pt-5 max-md:scale-75 mb-1"
                  >
                    <Button>LEARN MORE</Button>
                  </motion.div>
                </Link>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section;
