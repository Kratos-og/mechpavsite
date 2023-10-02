import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "../../UI/Button";

const Section = (props) => {
  const [isInView, setIsInView] = useState(false);

  useMotionValueEvent(props.progress, "change", (latest) => {
    if (latest.toFixed(2) >= 0.95) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  });

  return (
    <div className="w-full h-screen snap-child-start relative overflow-x-hidden">
      <motion.div className="fixed pointer-events-none w-full left-0 lg:top-0 h-screen flex flex-col lg:px-40 px-10 lg:justify-center top-[8rem]">
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
                  className="text-[70px] 2xl:text-[90px] font-bold overflow-hidden tracking-wider w-fit relative max-md:text-[2rem]"
                >
                  <span>MARKETPLACE</span>
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
                  className="bg-white absolute h-3/5 top-5"
                ></motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <div className="relative lg:w-1/4 w-[50%] overflow-hidden">
          <AnimatePresence>
            {isInView && (
              <>
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
                      <div>BROWSE THE COMPLETE COLLECTION OF PAVS.</div>
                      <div>
                        USE THE CUSTOM FILTERS TO SEARCH BY EVENT, TRAITS AND
                        MUCH MORE. SEARCH THE LATEST MARKETS WHILE YOU BUY, SELL
                        AND TRADE YOUR PAVS.
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
                <AnimatePresence>
                  {isInView && (
                    <Link href="/pavs">
                      <motion.div
                        exit={{ display: "none" }}
                        className="relative flex lg:pt-5 max-md:scale-75 mb-1"
                      >
                        <Button>LEARN MORE</Button>
                      </motion.div>
                    </Link>
                  )}
                </AnimatePresence>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Section;
