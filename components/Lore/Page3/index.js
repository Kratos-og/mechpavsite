import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";

export default function Index(props) {
  let scroll = props.progress.get()?.toFixed(2);
  return (
    <div className="w-full h-screen snap-child-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: scroll >= 0.5 && scroll <= 0.7 ? 1 : 0,
          transition: { delay: 0, duration: 0.2 },
        }}
      >
        <div className="fixed top-10 mx-[5rem] flex overflow-hidden items-center h-screen pointer-events-none gap-10 z-30">
          <div className="overflow-hidden">
            <div className="text-2xl pb-5  ">
              OVERVIEW
            </div>
            <motion.div className=" h-[1.5px] bg-[#14fecd]" initial={{ width: 0 }} animate={{ width: scroll >= 0.5 && scroll <= 0.7 ? '100%' : 0, transition: { delay: 0.2 } }}></motion.div>
            <AnimatePresence>
              {scroll >= 0.5 && scroll <= 0.7 && (
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
            {scroll >= 0.5 && scroll <= 0.7 && (
              <motion.div
                initial={{ y: 500 }}
                animate={{
                  y: 25,
                  transition: { delay: 0, duration: 1 },
                }}
                className="w-[50rem] relative pr-[20rem] ">
                <img src={"/assets/img/pav.png"} alt={"pavs"} className="rounded-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
