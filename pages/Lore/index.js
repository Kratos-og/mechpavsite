import React, { useRef, useState } from "react";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useAnimate,
  useTransform,
  useMotionValue,
  scroll,
  animate,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Page2 from "../../components/Lore/Page2";
import Page3 from "../../components/Lore/Page3";
import Page4 from "../../components/Lore/Page4";
import Page5 from "../../components/Lore/Page5";
import Page6 from "../../components/Lore/Page6";
import Page7 from "../../components/Lore/Page7";
import First_Part from "../../components/Lore/First_Part";
import Second_Part from "../../components/Lore/Second_Part";
import { TbLockExclamation } from "react-icons/tb";
import Mouse from "@/components/UI/Svg/Mouse";

const Lore = () => {
  const ref = useRef();
  let { scrollYProgress } = useScroll({
    container: ref,
    axis: "y",
  });
  const [scroll, setScroll] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest.toFixed(2));
  });


  return (
    <div className="bg-[url('/assets/images/star.jpg')] bg-fixed relative" id="cont">
      <motion.img
          initial={{scale:1}}
          animate={[{ scale: 5, transition: { delay:1.5,duration: 2 } },{display:"none",transition:{delay:3.5}}]}
          src={"/assets/images/spacewindow.png"}
          alt="spacewindow"
          className="top-0 fixed w-screen h-screen z-30 object-cover"
        />
      <motion.div 
      initial={{opacity:1,y:0}}
      animate={{opacity:0,y:100,display:"none",transition:{delay:1.5,duration:2}}}
      className="h-screen w-screen">
        <div className="flex justify-center items-center h-screen w-screen flex-col absolute">
          <p className="text-9xl font-bold pt-16">LORE</p>
          <div className="w-16">
          <Mouse />
          </div>
        </div>
      </motion.div>

      <div className="w-screen h-screen">

            <motion.div
            initial={{opacity:0,y:50,display:"none"}}
            animate={{opacity:1,y:[50,0],display:"block",transition:{delay:2,duration:0.5}}}
            >
              <First_Part />
              <Second_Part/>
            </motion.div>

      </div>
    </div>
  );
};

Lore.DisplayName = "Lore";

export default Lore;
