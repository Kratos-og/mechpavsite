import React, { useRef } from "react";
import Image from "next/image";
import star from "../../public/assets/img/star.jpg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default function Lore() {
  const ref = useRef();
  let { scrollYProgress } = useScroll({
    container: ref,
    axis: "y",
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <>
      <div className="w-screen h-screen  relative " ref={ref}>
        <div className="absolute z-0 overflow-hidden">
          <Image src={star} alt="star" />
        </div>
        <Page1 />
        <Page2 />
      </div>
    </>
  );
}
