import { useState, useRef } from "react";
import Hero from "../components/Home/Hero";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Model from "../components/Layout/Model";
import { useScroll, useMotionValueEvent, useMotionValue, useTransform, motion } from "framer-motion";

export default function Home() {
  const [modelLoad, setModelLoad] = useState(0);
  const ref = useRef();
  let { scrollYProgress } = useScroll({
    container: ref,
    axis: "y"
  });
  return (
    <div className="w-full h-screen relative snap-parent-y-mandatory overflow-x-hidden" id="cont" ref={ref}>
      <Hero progress={scrollYProgress} loadVal={modelLoad} />
      <Section2 progress={scrollYProgress} />
      <Section3 progress={scrollYProgress} />
      <Section4 progress={scrollYProgress} />
      <Model progress={scrollYProgress} setModelLoad={setModelLoad} />
      {modelLoad >= 97.5 &&
        <>
          <motion.div
            initial={{ paddingRight: 0 }}
            animate={[{
              paddingRight: ['0%', '100%'],
              transition: { delay: 0, duration: 0.5, ease: 'easeIn' },
            }, {
              left: ['0%', '100%'],
              transition: { delay: 0.75, duration: 0.5, ease: 'easeIn' },
            }]
            }
            onAnimationEnd={() => console.log('done')}
            className="bg-black absolute top-0 left-0 h-screen"
          ></motion.div>
        </>
      }
    </div>
  );
};


