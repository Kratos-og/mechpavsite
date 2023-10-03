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
  console.log(scroll);

  return (
    <div className="bg-[url('/assets/images/star.jpg')] bg-fixed relative" id="cont">
      <div className="h-screen w-screen">
        <div className="flex justify-center items-center absolute top-0 h-screen w-screen flex-col">
          <p className="text-9xl font-bold pt-16">LORE</p>
          <div className="w-16">
          <Mouse />
          </div>
        </div>

        <motion.img
          animate={{ scale: 1 + scroll * 5, transition: { duration: 0.5 } }}
          src={"/assets/images/spacewindow.png"}
          alt="spacewindow"
          className="top-0 fixed w-screen h-screen z-30 object-cover"
        />
      </div>

      <div className="w-screen h-screen overflow-hidden">
        <AnimatePresence>
          {scroll >= 0.7 && (
            <motion.div
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0,transition:{delay:0.1,duration:0.5}}}
            >
              <First_Part />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

Lore.DisplayName = "Lore";

export default Lore;
