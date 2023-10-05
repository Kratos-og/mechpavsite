import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb"
export default function index() {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center relative overflow-hidden bg-fixed px-10"
      id="cont"
    >
      <div className="text-center">
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            left: "100%",
            transition: { delay: 0.5, duration: 1 },
          }}
          className="w-full bg-black h-full absolute"
        ></motion.div>
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
          className="lg:text-[4rem] 2xl:text-[200px] font-bold tracking-wider text-[2rem]"
        >
          MINT DETAILS COMING SOON
        </motion.span>
      </div>
    </div>
  );
}
