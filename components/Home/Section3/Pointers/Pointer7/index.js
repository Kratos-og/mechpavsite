import { motion } from "framer-motion";

const Pointer7 = props => {
    return (
        <div className="flex -mt-28 -ml-[19rem]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0, 1, 0, 1],
                    transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                }}
                className="text-[10px] text-[#14fecd]"
            >
                Visual Relay
            </motion.div>
            <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 537.1 232.1"
                fill="#ffffff"
                className="w-[15rem]"
            >
                <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                    cx="516" cy="217.5"
                    r="7"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M516,217.5V93.9c0-38.7-31.3-70-70-70H29.4"
                    strokeWidth={4}
                    stroke={"white"}
                    fill={"#ffffff00"}
                />
            </motion.svg>
        </div>
    )
}

export default Pointer7;