import { motion } from "framer-motion";

const Pointer4 = props => {
    return (
        <div className="-ml-48 -mt-20 text-center flex flex-col items-start">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0, 1, 0, 1],
                    transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                }}
                className="text-[10px] -ml-7 text-white"
            >
                <span>thrusters <br />(opened position)</span>
            </motion.div>
            <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 602.8 222.1"
                fill="#ffffff"
                className="w-[15rem]"
            >
                <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                    cx="493.5" cy="169.5"
                    r="7"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M493.5,169.5H99.4c-38.7,0-70-31.3-70-70V64.2"
                    strokeWidth={4}
                    stroke={"white"}
                    fill={"transparent"}
                />
            </motion.svg>

        </div>
    )
}

export default Pointer4;