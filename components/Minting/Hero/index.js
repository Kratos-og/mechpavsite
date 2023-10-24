import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function Hero(props) {
  const [loadDone, setLoadDone] = useState(false);

  useEffect(() => {
    try {
      let model = useLoader(
        GLTFLoader,
        `/assets/models/Mech_Crate.glb`,
        null,
        (e) => {
          let progress = (e.loaded / (42.6 * 1024 * 1024)) * 100
          if (progress >= 100) {
            setTimeout(() => {
              setLoadDone(true)
            }, 2000)
          }
        }
      );
    }
    catch (err) {

    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <motion.div
        className="overflow-hidden relative flex items-center justify-center">
        <div className="border-2 border-[#423F3E] p-10 bg-black"></div>
        <div className="border-2 border-[#798777] p-8 bg-black absolute rotate-45 top-[-60%] left-[-60%] z-10"></div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: loadDone && 0, transition: { duration: 3, delay: 0, ease: "easeInOut" } }}
          onAnimationComplete={() => loadDone && props.enterHandler(true)}
          className="p-[2.49rem] absolute bg-[#9DB2BF] top-[0.1rem] left-[0.1rem]"></motion.div>
        <div className="absolute z-30 w-[3rem]">
          <img src="assets/images/mint/pav.png" alt="pav" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1],
          transition: { delay: 0.5, repeat: Infinity, repeatDelay: 2 },
        }}
        className="text-[0.6rem] pt-2">LOADING . . .</motion.p>
    </div >
  );
}
