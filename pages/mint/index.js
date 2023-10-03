import { motion } from "framer-motion";

export default function index() {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center relative overflow-hidden bg-fixed"
      id="cont"
    >
      <div>
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            left: "100%",
            transition: { delay: 0.5, duration: 1 },
          }}
          className="w-full bg-black h-full absolute"
        ></motion.div>
        <motion.span
          initial={{ visibility: "hidden" }}
          animate={{
            visibility: "visible",
            transition: { delay: 0.5 },
          }}
          exit={{ visibility: "hidden" }}
          className=" lg:text-[8rem] 2xl:text-[200px] whitespace-nowrap font-bold tracking-wider text-[3rem]"
        >
          COMING SOON
        </motion.span>
      </div>
    </div>
  );
}
