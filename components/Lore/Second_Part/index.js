import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb";

export default function index() {
  return (
    <div className='w-screen h-screen container snap-child-start m-auto px-10 flex flex-col items-center justify-center mt-14 lg:mt-40'>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [30, 0, 15, 0, 10, 0, 5, 0], transition: { delay: 0.5, duration: 0.5 } }}
        className="text-[#ffffff] lg:text-[10rem] max-md:text-[5rem] pb-5  items-center flex justify-center pt-5">
        <TbLockExclamation />
      </motion.div>
      <motion.span
        initial={{ visibility: "hidden" }}
        animate={{
          visibility: "visible",
          transition: { delay: 0.5 },
        }}
        exit={{ visibility: "hidden" }}
        className="font-bold tracking-wider text-[3rem]"
      >
        LOCKED
      </motion.span>
    </div >
  )
}
