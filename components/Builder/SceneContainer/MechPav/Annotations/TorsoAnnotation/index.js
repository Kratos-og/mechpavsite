import { Html } from "@react-three/drei";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const TorsoAnnotations = (props) => {
  const [display, setDisplay] = useState(false);
  console.log(display);
  return (
    <Html
      position={[0, 7.5, 0]}
      style={{
        transition: "all 0.5s",
        opacity: 1,
        transform: `scale(4)`,
      }}
      distanceFactor={5}
      scale={10}
    >
      <div
        className="w-5 h-5 rounded-full bg-white"
        onMouseEnter={() => {
          setDisplay(true);
        }}
        onMouseLeave={() => {
          setDisplay(false);
        }}
      >
        <motion.div 
        initial={{scale:0}}
        animate={{scale:1,transition:{repeat:Infinity , ease:"easeInOut", repeatDelay:0.5}}}
        className="w-8 h-8 rounded-full bg-white/70 absolute -top-1.5 -left-1.5"></motion.div>
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
                <circle class="st0" cx="516" cy="217.5" r="9.8" fill="#ffffff"/>
                <motion.path
                     initial={{ pathLength: 0 ,pathOffset:1}}
                     animate={{
                       pathLength: 1, pathOffset:0,
                       transition: { delay: 0, duration: 0.5 },
                     }}
                  class="st1"
                  d="M516,217.5V93.9c0-38.7-31.3-70-70-70H29.4"
                  stroke="#ffffff"
                  fillOpacity={0}
                  strokeWidth={5}
                />
              </motion.svg>
              <motion.div initial={{opacity:0}} animate={{opacity:[0,1,0,0,1,0,1],transition:{delay:0.5,duration:0.5}}} className="px-20 bg-white/20 border-2 border-white ml-[170px] mb-[25%] rounded-md">
                <div className="relative">
                    <div className="flex items-center justify-center gap-4">
                <p className="text-[10px]">Type</p>: <p className="font-bold">Torso</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">

                <span className="text-[10px]">Class</span>: <span className="font-bold">Defender</span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                <span className="text-[10px]">Skin</span>: <span className="font-bold">Commando</span>
                    </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* <div className="w-5 h-5 rounded-full bg-white hover:bg-transparent overflow-hidden hover:border relative ripple cursor-pointer text-xs hover:w-auto hover:h-auto hover:px-4 hover:py-2 hover:rounded-none transition-all group flex items-center justify-center">
                <div className="absolute w-full h-full bg-white/30 top-0 left-0"></div>
                <div className="opacity-0 whitespace-nowrap group-hover:delay-200 group-hover:opacity-100">
                    <span className="text-[10px]">Type</span>: <span className="font-bold">Torso</span>
                </div>
                <div className="opacity-0 whitespace-nowrap group-hover:opacity-100">
                    <span className="text-[10px]">Class</span>: <span className="font-bold">Defender</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    <span className="text-[10px]">Skin</span>: <span className="font-bold">Commando</span>
                </div>
            </div> */}
    </Html>
  );
};

export default TorsoAnnotations;
