import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Index({ text }) {
  const variants = {
    initial: {
      x: 1,
      opacity: 1,
      rotate: 45,
    },
    animate: {
      rotate: 0,
      transition: {
        duration: 2,
        delay: 1,
        type: "spring",
        stiffness: 150,
        display: "none",
      },
    },
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <motion.svg
          className="w-[0.15rem] relative z-20"
          fill="none"
          viewBox="0 0 3 74"
          astro-icon="button-border"
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            fill="currentColor"
            d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
          ></motion.path>
        </motion.svg>

        <motion.div
          animate={{ paddingRight: 70 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="py-2 bg-white"
        ></motion.div>

        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="p-2 bg-white text-black absolute z-10"
        ></motion.div>

        <motion.div
          animate={{ paddingLeft: 70 }}
          transition={{ duration: 0.5, delay: 2,}}
          className="py-2 bg-white"
        ></motion.div>

        <motion.div
          initial={{ paddingLeft: 0, paddingRight: 0, display: "none"}}
          animate={{
            paddingLeft: 80,
            paddingRight: 80,
            background: "black",
            display: "flex",
          }}
          transition={{ duration: 1, delay: 3 }}
          className="uppercase text-[0.70rem] tracking-[0.1rem] absolute z-10"
        >
          {text}
        </motion.div>

        <motion.svg
          className="w-[0.15rem] rotate-180 relative z-20"
          fill="none"
          viewBox="0 0 3 74"
          astro-icon="button-border"
        >
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            fill="currentColor"
            d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
          ></motion.path>
        </motion.svg>
      </div>

      {/* <div className="flex">
         <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
      <div className="flex group">
        <div className="w-[0.15rem] group-hover:-translate-x-[0.15rem] duration-300 ease-in-out">
          <svg fill="none" viewBox="0 0 3 74" astro-icon="button-border">
            <path
              fill="currentColor"
              d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
            ></path>
          </svg>
        </div>
        <button
          className={`border-y-[0.1px] border-gray-600 p-4 hover:bg-white hover:text-black duration-300 ease-in-out group`}
        >
          <div className="uppercase text-[0.70rem] tracking-[0.1rem]">
            {text}
          </div>
        </button>
        <div className="w-[0.15rem] rotate-180 group-hover:translate-x-[0.15rem] duration-300 ease-in-out">
          <svg fill="none" viewBox="0 0 3 74" astro-icon="button-border">
            <path
              fill="currentColor"
              d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
            ></path>
          </svg>
        </div>
      </div>
    </div> */}
    </>
  );
}
