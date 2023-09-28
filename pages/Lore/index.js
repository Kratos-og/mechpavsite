import React, { useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent, useAnimate, useTransform, useMotionValue, scroll, animate, useSpring } from "framer-motion";
import Page2 from "../../components/Lore/Page2";
import Page3 from "../../components/Lore/Page3";
import Page4 from "../../components/Lore/Page4";
import Page5 from "../../components/Lore/Page5";
import Page6 from "../../components/Lore/Page6";
import Page7 from "../../components/Lore/Page7";

export default function Lore() {
  const ref = useRef();
  let { scrollYProgress } = useScroll({
    container: ref,
    axis: "y",
  });
  const [scroll, setScroll] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest.toFixed(2))
  });
  console.log(scroll)
  return (
    <div className={`w-full h-screen relative snap-parent-y-mandatory`} ref={ref}>
      <motion.div
        className="fixed h-screen snap-child-start top-0 w-full pointer-events-none -z-10">
        <img src={'/assets/images/star.jpg'} alt="space" className="top-0 fixed w-[98%] z-20 h-full" />
        <motion.img
          animate={{ scale: 1 + scroll * 20, transition: { duration: 0.5 } }}
          src={'/assets/images/spacewindow.png'} alt="spacewindow" className="top-0 fixed w-[99%] h-full z-30 object-cover" />
      </motion.div>
      <Page2 progress={scrollYProgress} />
      <Page3 progress={scrollYProgress} />
      <Page4 progress={scrollYProgress} />
      <Page5 progress={scrollYProgress} />
      <Page6 progress={scrollYProgress} />
      <Page7 progress={scrollYProgress} />
    </div>
  );
}
