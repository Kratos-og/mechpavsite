import { useEffect, useRef } from "react";
import Hero from "../components/Home/Hero";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Model from "../components/Layout/Model";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

export default function Home() {
  const ref = useRef();
  let { scrollYProgress } = useScroll({
    container: ref,
    axis: "y"
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <div className="w-full h-screen relative snap-parent-y-mandatory" id="cont" ref={ref}>
   
      <Hero progress={scrollYProgress} />
      <Section2 progress={scrollYProgress} />
      <Section3 progress={scrollYProgress} />
      <Section4 progress={scrollYProgress} />
      <Model />
    </div>
  );
};
