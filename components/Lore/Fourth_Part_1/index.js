import { motion } from "framer-motion";
import { TbLockExclamation } from "react-icons/tb";

export default function index() {
  return (
    <div className="w-screen container m-auto snap-child-start px-10 flex flex-col justify-center items-center min-h-screen max-md:pt-16">
      <motion.div>
        <div className=" flex lg:gap-10 gap-2 text-9xl font-bold w-full justify-center max-md:text-6xl max-lg:mb-10">
         TIMELINE
        </div>

            <div className="flex w-full justify-center pb-5">
              <img
                src="assets/images/Timeline.png"
                alt="PAV"
                className="w-[70%] max-lg:w-screen"
              />
            </div>
          <div className="w-full">
            <div className="lg:gap-3 gap-2 lg:text-sm text-xs text-justify">
              <p>
              *This is a timeline of PAVS history-a chronological record of events relevant to Pavia. This timeline uses the dates, which are expressed in terms of years before (BP) and after (AP) the Moonforce Landing on planet Pavia
              </p>
          </div>
          {/* <p className="snap-child-end xl:hidden"></p> */}
        </div>
      </motion.div>
    </div>
  );
}
