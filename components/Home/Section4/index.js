import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "../../UI/Button";
import Footer from "@/components/Layout/Footer";
import WhiteButton from "@/components/UI/WhiteButton";

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
      <motion.div className="fixed pointer-events-none w-full left-0 lg:top-0 h-screen flex flex-col lg:px-40 px-10 lg:justify-center top-[6rem]">
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
                  <span>TRADE</span>
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
        <div className="relative lg:w-1/4 w-full overflow-hidden">
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
                      <div>0xLAND, 0xPAVS AND 0xMECHS (VIA CRATES INITIALLY) ARE FULLY TRADABLE GAMING ASSETS. SCROLL UP TO PURCHASE WHILST MINTS ARE LIVE, OTHERWISE YOU CAN BUY 0x PAVIA ASSETS AT THE FOLLOWING LOCATIONS.</div>
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
                  )}
                </AnimatePresence>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="absolute bottom-0 m-auto w-full flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Section;
