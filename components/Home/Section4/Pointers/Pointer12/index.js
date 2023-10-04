import { motion } from "framer-motion";

const Pointer12 = props => {
    return (
        <div className="flex ml-20">
            <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 102.8 22.1"
                fill="#ffffff"
                className="w-[15rem]"
            >
                <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                    cx="60" cy="9"
                    r="1.5"
                />
                <motion.path
                    initial={{ pathLength: 0,pathOffset:1 }}
                    animate={{
                        pathLength: 1,pathOffset:0,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M92.2,9.2H60.1"
                    strokeWidth={0.5}
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
                className="text-[10px] mt-3 text-white"
            >
                <span>Pav Capsule Housing</span>
            </motion.div>
        </div>
    )
}

export default Pointer12;