import {
    motion,
  } from "framer-motion";
const WhiteButton = (props) => {
    return (
        <div className="bg-black flex justify-center items-center">
            <button className=" w-36 h-14 relative flex justify-center group items-center">
                {/* Top & Bottom Border */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%", transition: { delay: 2.5, duration: 0.5 } }}
                    className="absolute bg-gray-500 h-[0.05rem] top-0"
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%", transition: { delay: 2.7, duration: 0.5 } }}
                    className="absolute bg-gray-500 h-[0.01rem] bottom-0"
                />
                {/* Top & Bottom Border */}

                {/* Right & Left Border */}
                <motion.svg
                    fill="none"
                    viewBox="0 0 3 74"
                    astro-icon="button-border"
                    className={
                        " absolute right-0 w-[0.15rem] h-full text-white rotate-180 group-hover:translate-x-0 translate-x-1 duration-200 ease-in-out"
                    }
                >
                    <motion.path
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.1, duration: 0.5, ease: "easeInOut" }}
                        fill="currentColor"
                        d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
                    ></motion.path>
                </motion.svg>

                <motion.svg
                    fill="none"
                    viewBox="0 0 3 74"
                    astro-icon="button-border"
                    className={
                        " absolute left-0 w-[0.15rem] h-full text-white -translate-x-1 group-hover:translate-x-0 duration-200 ease-in-out"
                    }
                >
                    <motion.path
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.1, duration: 0.5, ease: "easeInOut" }}
                        fill="currentColor"
                        d="M3 74V55.5 74Zm0 0V55.5 74Zm0 0V55.5 74ZM0 0h3v19.5L1 22v30l2 3.5V74l-3-.189V0Z"
                    ></motion.path>
                </motion.svg>
                {/* Right & Left Border */}

                {/* Dot */}
                <motion.div
                    initial={{ rotate: 45 }}
                    animate={[
                        {
                            rotate: 0,
                            transition: { delay: 0.5, duration: 0.5, type: "spring" },
                        },
                        { paddingRight: "61%", transition: { delay: 1, duration: 0.5 } },
                    ]}
                    className=" bg-white p-2 absolute"
                />
                {/* Dot */}

                {/* text */}
                <motion.div
                    initial={{ display: "none", paddingRight: 0 }}
                    animate={{
                        paddingRight: "90%",
                        display: "block",
                        transition: { delay: 2, duration: 0.5 },
                    }}
                    className="bg-black absolute py-4 z-[1]"
                ></motion.div>
                <motion.div
                    initial={{ display: "none", y: 0 }}
                    animate={{ display: "block", transition: { delay: 2.5 } }}
                    className=" text-[#000000] uppercase absolute z-[2] text-xs w-full h-full hover:bg-transparent pt-5 bg-white"
                >
                    <motion.div
                        className=" w-full h-4 overflow-hidden">
                        <div className="group-hover:-translate-y-3 duration-300 ease-in-out">
                            {props.children}
                        </div>
                        <div className=" text-white mb-3 group-hover:-translate-y-4 duration-300 ease-in-out">
                            {props.children}
                        </div>
                    </motion.div>
                </motion.div>
                {/* text */}
            </button>
        </div>
    );
}

export default WhiteButton;