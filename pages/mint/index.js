import { motion } from "framer-motion";

export default function index() {
  return (
    <div
      className="h-[35rem] w-screen flex justify-center items-center relative overflow-hidden pt-28 bg-[url('/assets/images/star.jpg')] bg-fixed"
      id="cont"
    >
      <div>
        <motion.div
          initial={{ width: "100%" }}
          animate={{
            left: "100%",
            transition: { delay: 0.5, duration: 1 },
          }}
          className="w-full bg-black h-full top-20 absolute"
        ></motion.div>
        <motion.span
          initial={{ visibility: "hidden" }}
          animate={{
            visibility: "visible",
            transition: { delay: 0.5 },
          }}
          exit={{ visibility: "hidden" }}
          className="lg:-ml-3 lg:text-[8rem] 2xl:text-[298px] font-bold tracking-wider text-[3rem]"
        >
          COMING SOON
        </motion.span>
      </div>
    </div>
  );
}
