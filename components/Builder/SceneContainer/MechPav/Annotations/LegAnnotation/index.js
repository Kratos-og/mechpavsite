import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import BoxText from "../BoxText";
import data from "@/components/Builder/Controls/Options/data";

const LegAnnotation = (props) => {
  const [display, setDisplay] = useState(false);
  return (
    <Html
      position={[2.5, 2, 0]}
      style={{
        transition: "all 0.5s",
        opacity: 1,
        transform: `scale(4)`,
      }}
      distanceFactor={4}
      scale={10}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white rotate-180 ${props.selected!=="undefined" ? 'absolute ':'hidden'}`}
        onMouseEnter={() => {
          setDisplay(true);
        }}
        onMouseLeave={() => {
          setDisplay(false);
        }}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{
            scale: 1,
            transition: {
              repeat: Infinity,
              ease: "easeInOut",
              duration:0.5,
              repeatDelay: 0.5,
            },
          }}
          className="w-7 h-7 rounded-full bg-pavia-green/50 absolute -top-1.5 -left-1.5 z-[-1]"
        >
        </motion.div>
        <AnimatePresence>
          {display && (
            <>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100px"
                height="108.8px"
                viewBox="0 0 537.1 108.8"
                className="rotate-180 absolute -left-[6rem] -bottom-11"
              >
                <circle
                  class="st0"
                  cx="493.5"
                  cy="57.2"
                  r="9.8"
                  fill="#ffffff"
                />
                <motion.path
                  initial={{ pathLength: 0, pathOffset: 1 }}
                  animate={{
                    pathLength: 1,
                    pathOffset: 0,
                    transition: { delay: 0, duration: 0.5 },
                  }}
                  class="st1"
                  d="M489.2,57.2H25.1"
                  stroke="#ffffff"
                  strokeWidth={10}
                />
              </svg>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0, 0, 1, 0, 1],
                  transition: { delay: 0.5, duration: 0.5 },
                }}
                className="px-7 py-4 bg-black/20 border-2 border-white  rounded-md absolute -left-[22rem] -bottom-8 rotate-180"
              >
                <BoxText
                  name={"Legs"}
                  class={data.legs[props.selected]?.type.name}
                  skin={data.legs[props.selected]?.skin.FE_Name}
                  variants={data.legs[props.selected]?.skin.BE_Name}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
};

export default LegAnnotation;
