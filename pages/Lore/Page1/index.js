import React, { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";

export default function Index(props) {
  const [scroll, setScroll] = useState(0);

  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2))
  });
  console.log(1 + scroll * 5);

  return (
    <div className="w-full h-screen ">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 + (scroll) * 5 }}
        className="fixed ">
        <img src={'/assets/img/space.png'} alt="space" className="w-screen object-cover" />
      </motion.div>
    </div>
  );
}
