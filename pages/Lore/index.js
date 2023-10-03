import React, { useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent, useAnimate, useTransform, useMotionValue, scroll, animate, useSpring } from "framer-motion";
import Page2 from "../../components/Lore/Page2";
import Page3 from "../../components/Lore/Page3";
import Page4 from "../../components/Lore/Page4";
import Page5 from "../../components/Lore/Page5";
import Page6 from "../../components/Lore/Page6";
import Page7 from "../../components/Lore/Page7";
import { TbLockExclamation } from "react-icons/tb"

const Lore = () => {
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
    // <div
    //   className="h-screen w-screen flex justify-center items-center relative overflow-hidden"
    //   id="cont"
    // >
    //   <div>
    //     <motion.div
    //       initial={{ width: "100%" }}
    //       animate={{
    //         left: "100%",
    //         transition: { delay: 0.5, duration: 1 },
    //       }}
    //       className="w-[10rem] bg-black h-full top-20 absolute"
    //     ></motion.div>
    //     <motion.span
    //       initial={{ visibility: "hidden" }}
    //       animate={{
    //         visibility: "visible",
    //         transition: { delay: 0.5 },
    //       }}
    //       exit={{ visibility: "hidden" }}
    //       className="lg:-ml-3 lg:text-[8rem] 2xl:text-[200px] font-bold tracking-wider text-[3rem] flex flex-col items-center"
    //     >
    //       <motion.div
    //         initial={{ x: 0, y: 0 }}
    //         animate={{ x: [30, 0, 15, 0, 10, 0, 5, 0], transition: { delay: 0.5, duration: 0.5 } }}
    //         className="text-[#14fecd] lg:text-[10rem] max-md:text-[5rem] pb-5">
    //         <TbLockExclamation />
    //       </motion.div>
    //       LOCKED
    //     </motion.span>
    //   </div>
    // </div>
    <div className={`w-full h-screen relative snap-parent-y-mandatory`} ref={ref} id="cont">
      <motion.div
        className="fixed h-screen snap-child-start top-0 w-full pointer-events-none -z-10">
        <img src={'/assets/images/star.jpg'} alt="space" className="top-0 fixed w-[98%] h-screen z-20" />
        <motion.img
          animate={{ scale: 1 + scroll * 20, transition: { duration: 0.5 } }}
          src={'/assets/images/spacewindow.png'} alt="spacewindow" className="top-0 fixed w-[99%] h-screen z-30 object-cover" />
      </motion.div>
      <Page2 progress={scrollYProgress} />
        {/* <Page3 progress={scrollYProgress} />
        <Page4 progress={scrollYProgress} />
        <Page5 progress={scrollYProgress} />
        <Page6 progress={scrollYProgress} />
        <Page7 progress={scrollYProgress} /> */}
    </div>
  );
}

Lore.DisplayName = 'Lore';

export default Lore;