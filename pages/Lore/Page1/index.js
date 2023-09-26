import React,{useState} from "react";
import { motion,useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import space from "../../../public/assets/img/space.png";

export default function Index(props) {
  const [scroll,setScroll] = useState();
  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2))
  });
  console.log(scroll)
  return (
    <div className="w-full h-screen ">

      <motion.div
      initial={{scale:1}}
      animate={{scale: 1 + scroll * 5}}
      className="fixed ">
        <Image src={space} alt="space" className="w-[200vh] -translate-y-3 translate-x-10" />
      </motion.div>

    </div>
  );
}
