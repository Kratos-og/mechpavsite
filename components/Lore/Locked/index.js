import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb";

export default function index() {
  return (
    <div className='w-screen h-screen container text-center snap-child-start m-auto px-10 flex flex-col items-center justify-center mt-14 lg:mt-40'>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [30, 0, 15, 0, 10, 0, 5, 0], transition: { delay: 0.5, duration: 0.5 } }}
        className="text-black lg:text-[4rem] max-md:text-[2rem] pb-5 w-full items-center flex justify-center">
        <div className="bg-white rounded-full p-4">
          <TbLockExclamation />
        </div>
      </motion.div>
      <motion.span
        initial={{ visibility: "hidden" }}
        animate={{
          visibility: "visible",
          transition: { delay: 0.5 },
        }}
        exit={{ visibility: "hidden" }}
        className="font-bold tracking-wider text-[2rem] lg:text-[3rem]"
      >
        MORE LORE UNLOCKED THIS WEEK
      </motion.span>
    </div >
  )
}
