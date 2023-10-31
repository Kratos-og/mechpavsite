import { Html } from "@react-three/drei";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import BoxText from "../BoxText";
import data from "@/components/Builder/Controls/Options/data";

const TorsoAnnotations = (props) => {
  const [display, setDisplay] = useState(false);
  return (
    <Html
      position={[0, 7.5, 0]}
      style={{
        transition: "all 0.5s",
        opacity: 1,
        transform: `scale(4)`,
      }}
      distanceFactor={4}
      scale={10}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white ${props.selected !== "undefined" ? "absolute" : "hidden"
          }`}
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
              duration: 0.5,
              repeatDelay: 0.7,
            },
          }}
          className="w-7 h-7 rounded-full bg-pavia-green/60 absolute -top-1.5 -left-1.5 z-[-1]"
        ></motion.div>
        <AnimatePresence>
          {display && (
            <>
              <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="200px"
                height="90px"
                viewBox="0 0 537.1 236"
              >
                <circle
                  class="st0"
                  cx="516"
                  cy="217.5"
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
                  d="M516,217.5V93.9c0-38.7-31.3-70-70-70H29.4"
                  stroke="#ffffff"
                  fillOpacity={0}
                  strokeWidth={5}
                />
              </motion.svg>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0, 0, 1, 0, 1],
                  transition: { delay: 0.5, duration: 0.5 },
                }}
                className="px-10 bg-black/20 border-2 border-white ml-[170px] mb-[25%] rounded-md absolute"
              >
                <BoxText
                  name={"torso"}
                  class={data.torso[props.selected]?.type.name}
                  skin={data.torso[props.selected]?.skin.FE_Name}
                  variants={data.torso[props.selected]?.skin.BE_Name}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Html>
  );
};

export default TorsoAnnotations;
