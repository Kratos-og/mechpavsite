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
import Third_Part from "../../components/Lore/Third_Part";
import Locked from "../../components/Lore/Locked";
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
console.log(scroll)

  return (
    <div className="bg-[url('/assets/images/star.jpg')] bg-fixed relative" id="cont">
      <motion.img
        initial={{ scale: 1 }}
        animate={[{ scale: 5, transition: { delay: 1, duration: 1.5 } }, { display: "none", transition: { delay: 2 } }]}
        src={"/assets/images/spacewindow.png"}
        alt="spacewindow"
        className="top-0 fixed w-screen h-screen z-30 object-cover"
      />
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: 100, display: "none", transition: { delay: 1, duration: 1.5 } }}
        className="h-screen w-screen">
        <div className="flex justify-center items-center h-screen w-screen flex-col absolute">
          <p className="text-9xl font-bold pt-16">LORE</p>
        </div>
      </motion.div>

      <div className="w-screen h-screen snap-parent-y-mandatory">
        <motion.div
          initial={{ opacity: 0, y: 50, display: "none" }}
          animate={{ opacity: 1, y: [50, 0], display: "block", transition: { delay: 1.5, duration: 0.5 } }}
        >
          <First_Part progress={scrollYProgress}/>
          <Second_Part />
          {/* <Third_Part /> */}
          <Locked/>
        </motion.div>

      </div>
    </div>
  );
};

Lore.DisplayName = "Lore";

export default Lore;
