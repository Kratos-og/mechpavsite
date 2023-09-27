import React,{useState} from "react";
import { AnimatePresence, motion,useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import space from "../../../public/assets/img/space.png";
import Mouse from "../../Layout/Model/mouse"

export default function Index(props) {
  const [scroll,setScroll] = useState(0);
  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2))
  });
  return (
    <div className="w-full h-screen ">
      <motion.div
      initial={{scale:1}}
      animate={{scale: 1 + scroll * 5}}
      className="fixed ">
        <Image src={space} alt="space" className="w-[200vh] -translate-y-3 translate-x-10" />
      </motion.div>
      <AnimatePresence>
        {scroll == 0 && (
          <motion.div 
          initial={{y:100}}
      animate={{y: 0, transition:{delay:0,duration:0.5, ease:"easeInOut"} }}
      exit={{opacity:0}}
      className="relative w-[3rem] top-[70%] left-[65%]">
      <Mouse/>
      </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
