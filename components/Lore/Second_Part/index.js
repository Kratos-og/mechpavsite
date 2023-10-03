import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb";

export default function index() {
  return (
    <div className='h-1/2 w-screen lg:px-40 px-10 flex flex-col justify-center max-md:mt-14'>
        <div className='bg-white/30 rounded-3xl h-full w-full'>
        <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: [30, 0, 15, 0, 10, 0, 5, 0], transition: { delay: 0.5, duration: 0.5 } }}
            className="text-[#ffffff] lg:text-[10rem] max-md:text-[5rem] pb-5 w-full h-full items-center flex justify-center pt-5">
            <TbLockExclamation />
          </motion.div>
        </div>
    </div>
  )
}
