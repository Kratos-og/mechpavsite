import { motion } from "framer-motion";

const Pointer9 = props => {
    return (
        <div className="flex items-end gap-5 ml-72 mt-20">
            <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 333.5 265.7"
                fill="#ffffff"
                className="w-[15rem]"
            >
                <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                    cx="25.3" cy="26.7"
                    r="5"
                />
                <motion.path
                    initial={{ pathLength: 0 ,pathOffset:1}}
                    animate={{
                        pathLength: 1,pathOffset:0,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M286.5,256.4H90.2c-38.7,0-62-30.3-62-69L25.3,26.7"
                    strokeWidth={2}
                    stroke={"white"}
                    fill={"transparent"}
                />
            </motion.svg>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0, 1, 0, 1],
                    transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                }}
                className="text-[10px] -ml-5 text-[#14fecd]"
            >
                <span>Mass Amplifier</span>
            </motion.div>
        </div>
    )
}

export default Pointer9;