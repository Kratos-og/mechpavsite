import React from "react";
import { motion } from "framer-motion";

export default function index() {
  return (
    <div className="w-full h-screen relative flex justify-center">
      <motion.svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 602.8 232.1"
        fill="#ffffff"
        className="w-[15rem] h-full -translate-x-[20rem]"
      >
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          class="st0"
          cx="493.5"
          cy="176.9"
          r="9.8"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
          }}
          d="M493.5,176.9V208H122c-38.7,0-70-31.3-70-70V26"
          strokeWidth={4}
          stroke={"white"}
          fill={"#ffffff00"}
        />
      </motion.svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0, 1, 0, 1],
          transition: { delay: 1.5, duration: 1, ease: "easeOut" },
        }}
        className="absolute top-[40%] left-[13%]"
      >
        ANIMATION 1
      </motion.div>

      <motion.svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 537.1 232.1"
        fill="#ffffff"
        className="absolute top-[20%] right-[20%] w-[15rem]"
      >
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          class="st0"
          cx="24.5"
          cy="196.5"
          r="9.8"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
          }}
          class="st1"
          d="M24.5,196.5v-112c0-38.7,31.3-70,70-70h424.4"
          strokeWidth={4}
          stroke={"white"}
          fill={"#ffffff00"}
        />
      </motion.svg>
      {/* Right & Left Border */}
      <div className="absolute flex w-[0.3rem] h-2 top-[20%] right-[16%] justify-center items-center">
        <motion.svg
          fill="none"
          viewBox="0 0 3 74"
          astro-icon="button-border"
          initial={{ x: 0 }}
          animate={{ x: -45, transition: { delay: 1, duration: 1 } }}
        >
          <motion.path
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
            fill="currentColor"
            d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
          ></motion.path>
        </motion.svg>

        <motion.svg
          fill="none"
          viewBox="0 0 3 74"
          astro-icon="button-border"
          className={"rotate-180"}
          initial={{ x: 0, rotate: 180 }}
          animate={{ x: 55, transition: { delay: 1, duration: 1 } }}
        >
          <motion.path
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
            fill="currentColor"
            d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
          ></motion.path>
        </motion.svg>
        {/* Right & Left Border */}
        {/* text */}

        {/* text */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0, 1, 0, 1],
          transition: { delay: 1.5, duration: 1, ease: "easeOut" },
        }}
        className=" absolute top-[19%] right-[12.5%]"
      >
        ANIMATION 2
      </motion.div>

      <motion.svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 537.1 232.1"
        fill="#ffffff"
        className="absolute bottom-[20%] w-[15rem] right-[20%]"
      >
        <motion.circle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          class="st0"
          cx="29.6"
          cy="35.1"
          r="9.8"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
          }}
          class="st1"
          d="M29.6,35.1h130.2c38.7,0,70,31.3,70,70v28.4c0,38.7,31.3,70,70,70H501"
          strokeWidth={4}
          stroke={"white"}
          fill={"#ffffff00"}
        />
      </motion.svg>
      <div className=" w-[6rem] h-5 absolute bottom-[20.5%] right-[13%] flex justify-center">
        <motion.div
          initial={{ paddingRight: 0 }}
          animate={{
            paddingRight: 80,
            transition: { delay: 1.5, duration: 1 },
          }}
          className="py-2 bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.5 } }}
          className="absolute z-[1]"
        >
          ANIMATION 3
        </motion.div>
        <motion.div
          initial={{ paddingRight: 0 }}
          animate={{
            paddingRight: 80,
            transition: { delay: 2.5, duration: 1 },
          }}
          className="py-3 bg-black absolute"
        ></motion.div>
      </div>
    </div>
  );
}
