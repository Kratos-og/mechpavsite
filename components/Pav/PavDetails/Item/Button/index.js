import { motion } from "framer-motion";

const Button = (props) => {
    return (
        <div className="bg-black flex justify-center items-center">
            <button className=" w-[30rem] h-[6rem] relative flex group justify-center items-center">
                {/* Top & Bottom Border */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%", transition: { delay: 2.5, duration: 0.5 } }}
                    className="absolute bg-gray-500 h-[0.01rem] top-0 group-hover:hidden"
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%", transition: { delay: 2.7, duration: 0.5 } }}
                    className="absolute bg-gray-500 h-[0.01rem] bottom-0 group-hover:hidden"
                />
                {/* Top & Bottom Border */}

                {/* Right & Left Border */}
                <motion.svg
                    fill="none"
                    viewBox="0 0 3 74"
                    astro-icon="button-border"
                    className={
                        " absolute right-0 w-[0.35rem] h-full text-white rotate-180 group-hover:translate-x-2 duration-200 ease-in-out"
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
                        " absolute left-0 w-[0.35rem] h-full text-white group-hover:-translate-x-2 duration-200 ease-in-out"
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
                        { paddingRight: "85%", transition: { delay: 1, duration: 0.5 } },
                    ]}
                    className="bg-white p-5 absolute"
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
                    className="bg-black absolute py-8 z-[1]"
                ></motion.div>
                <motion.div
                    initial={{ display: "none", y: 0 }}
                    animate={{ display: "block", transition: { delay: 2.5 } }}
                    className=" text-white uppercase absolute z-[2] w-full h-full hover:bg-white/80 hover:backdrop-saturate-200 pt-2"
                >
                    <motion.div className="w-full h-full overflow-hidden pb-5">
                        <div className="group-hover:text-black text-left  duration-300 ease-in-out">
                            {props.children}
                        </div>
                        {/* <div className="text-black mb-3 group-hover:-translate-y-[5rem] duration-300 ease-in-out">
                            {props.children}
                        </div> */}
                    </motion.div>
                </motion.div>
                {/* text */}
            </button>
        </div>
    );
}

export default Button;