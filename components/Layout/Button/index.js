import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Index({ text }) {
  const variants = {
    initial: {
      opacity: 1,
      rotate: 45,
    },
    animate: {
      rotate: 0,
      transition: {
        duration: 2,
        delay: 0.5,
        type: "spring",
        stiffness: 150,
        display: "none",
      },
    },
  };

  return (
    <>
      <div className="w-48 h-16 flex items-center justify-center relative">
        {/* left border */}
        <motion.svg
          className="w-[0.15rem] absolute left-0 top-0 z-20"
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
        {/* left border */}

        {/* top & bottom borders */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 4 }} className="absolute top-0 w-full h-[0.1rem] bg-white opacity-25" ></motion.div>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 4.25 }} className="absolute bottom-0 w-full h-[0.1rem] bg-white opacity-25" ></motion.div>
        {/* top & bottom borders */}


        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={[
            { opacity: 1, transition: { delay: 1, duration: 0.5 } },
            { rotate: 0, transition: { delay: 1.5, duration: 2, type: "spring", stiffness: 150, } },
            { display: 'none', transition: { delay: 2.5 } }
          ]}
          className="w-2 h-2 bg-white relative m-auto z-10 ease"
        ></motion.div>


        {/* text */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={[{ scaleX: 10, opacity: 1 }, { scaleX: 0 }]}
          transition={{
            duration: 1, delay: 2.5,
          }}
          className=" bg-white absolute w-2 h-2 m-auto z-20 origin-right"
        ></motion.div>
        {/*  <motion.div
          initial={{ opacity: 0 }}
          animate={{ scaleX: 10, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className=" bg-white absolute w-2 h-2 m-auto z-20 origin-left"
        ></motion.div> */}
        {/* <motion.div
          initial={{ paddingLeft: 0, paddingRight: 0, display: "none" }}
          animate={{
            paddingLeft: 80,
            paddingRight: 80,
            background: "black",
            display: "flex",
          }}
          transition={{ duration: 1, delay: 3 }}
          className="uppercase text-[0.70rem] tracking-[0.1rem] absolute z-10 w-full"
        >
          {text}
        </motion.div> */}
        {/* <motion.div
          animate={{ paddingLeft: 70 }}
          transition={{ duration: 0.5, delay: 2, }}
          className="py-2 bg-white"
        ></motion.div> */}

        {/* text */}

        {/* right border */}
        <motion.svg
          className="w-[0.15rem] rotate-180 absolute right-0 top-0 z-20"
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
        {/* right border */}
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
