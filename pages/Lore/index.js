import React, { useRef } from "react";
import Image from "next/image";
import star from "../../public/assets/img/star.jpg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Page1 from "../../components/Lore/Page1"
import Page2 from "../../components/Lore/Page2";
import Page3 from "../../components/Lore/Page3";
import Page4 from "../../components/Lore/Page4";

export default function Lore() {
  const ref = useRef();
  let { scrollYProgress } = useScroll({
    target: ref,
    axis: "y",
  });
  

  return (
    <>
      <div className={`w-full h-full relative`} ref={ref}>
        <div className=" overflow-hidden fixed">
          <Image src={star} alt="star" />
        </div>
        <Page1 progress={scrollYProgress}/>
        <Page2 progress={scrollYProgress}/>
        <Page3 progress={scrollYProgress}/>
        <Page4 progress={scrollYProgress}/>
      </div>
    </>
  );
}
