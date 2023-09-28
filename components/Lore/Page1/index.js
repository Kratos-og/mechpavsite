import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";

export default function Index(props) {
  useMotionValueEvent(props.progress, "change", (latest) => {
    setScroll(latest.toFixed(2))
  });
  return (
    <div className="w-full h-screen snap-child-start overflow-x-hidden">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 + scroll * 10, transition: { duration: 1} }}
        className="fixed top-0 w-full pointer-events-none">
        <img src={'/assets/images/spacewindow.png'} alt="space" className=" top-0 w-screen  pointer-events-none" />
      </motion.div>
    </div>
  );
}
