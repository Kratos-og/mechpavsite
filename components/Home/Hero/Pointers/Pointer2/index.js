import { motion } from "framer-motion";

const Pointer2 = props => {
    return (
        <div className="flex ml-72 -mt-20 items-start">
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
                    className="st0"
                    cx="24.5"
                    cy="196.5"
                    r="7"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    className="st1"
                    d="M24.5,196.5v-112c0-38.7,31.3-70,70-70h424.4"
                    strokeWidth={4}
                    stroke={"white"}
                    fill={"#ffffff00"}
                />
            </motion.svg>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0, 1, 0, 1],
                    transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                }}
                className="text-[10px] text-white"
            >
                Power Charge Indicators
            </motion.div>
        </div>
    )
}

export default Pointer2;