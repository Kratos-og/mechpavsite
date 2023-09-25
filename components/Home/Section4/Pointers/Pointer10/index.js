import { motion } from "framer-motion";

const Pointer10 = props => {
    return (
        <div className="flex -ml-40 -mt-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0, 1, 0, 1],
                    transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                }}
                className="text-[10px]"
            >
                <span>Apollo joint <br />connectors. <br />Version 2</span>
            </motion.div>
            <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 284.5 363.7"
                fill="#ffffff"
                className="w-[15rem]"
            >
                <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                    cx="208" cy="180.9"
                    r="5"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M39,17l104.3,0.1c38.7,0,62,30.3,62,69l2.8,100.7"
                    strokeWidth={2}
                    stroke={"white"}
                    fill={"transparent"}
                />
            </motion.svg>
        </div>
    )
}

export default Pointer10;