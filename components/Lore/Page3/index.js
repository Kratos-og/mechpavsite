import React, { useState } from "react";
import pav from "../../../public/assets/img/pav.png";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";

export default function Index(props) {
  const [scroll, setScroll] = useState(0);
  const [inView, setInView] = useState(false);
  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2));
    if (scroll >= 0.3 && scroll <= 0.7) {
      setInView(true);
    } else {
      setInView(false);
    }
  });
  return (
    <div className="w-full h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
          transition: { delay: 0, duration: 0.2 },
        }}
      >
        <div className="fixed top-0 text-[10rem] w-full font-bold  overflow-hidden">
          {/* <AnimatePresence>
            {inView && (
              <motion.p
                initial={{ y: 300 }}
                animate={{ y: 0, transition: { delay: 0, duration: 1 } }}
                className="w-full flex justify-center"
              >
                LORE
              </motion.p>
            )}
          </AnimatePresence> */}
        </div>
        <div className="flex">
          <div className="fixed top-[36%] mx-[5rem] flex overflow-hidden gap-10">
            <div className="overflow-hidden">
              <div className="text-2xl  border-b-2 border-[#14fecd] pb-5  ">
                OVERVIEW
              </div>

              <AnimatePresence>
                {inView && (
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 500 }}
                      animate={{
                        y: 0,
                        transition: { delay: 0, duration: 1 },
                      }}
                      className="flex flex-col gap-5 text-sm  pt-5 tracking-widest w-[50rem]"
                    >
                      <p>
                        Pavs are 4-legged creatures from the planet Pavia. They
                        are light-dependant animals that can create energy and
                        clean air by converting sunlight within their bodies.
                        They are composed of a variety of unknown elements
                        believed to be derived from nearby, meteors and
                        asteroids from local solar systems. Pavs are incredibly
                        resistant and even have the unique ability to regenerate
                        lost limbs, though this process has been found to be
                        slow.
                      </p>
                      <p>
                        Pavs are curious and inquisitive in nature and though
                        they are extremely loyal, generally avoid interactions
                        with humans. They are telepathic and have no vocal cords
                        to speak so communicate by producing grunts and whistles
                        from time to time,
                      </p>
                      <p>
                        They can often be found in rough terrains such as
                        mountains and forests and. although harmless at first
                        glance, they can be aggressive when threatened and have
                        been known to seriously injure humans due to their short
                        temperament.
                      </p>
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
                        className="w-[50rem] relative pr-[20rem] ">
              <Image src={pav} alt={"pavs"}></Image>
            </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
