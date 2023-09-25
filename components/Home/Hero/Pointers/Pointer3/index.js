import { motion } from "framer-motion";

const Pointer3 = props => {
    return (
        <div className="flex ml-[24rem] mt-20 items-end">
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
                    cx="29.6"
                    cy="35.1"
                    r="7"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M29.6,35.1h130.2c38.7,0,70,31.3,70,70v28.4c0,38.7,31.3,70,70,70H501"
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
                className="text-[10px] "
            >
                Communication uplink <br /> to Plaza portal
            </motion.div>
        </div>
    )
}

export default Pointer3;