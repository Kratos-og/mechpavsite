import { motion } from "framer-motion";

const Pointer1 = props => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0, 1, 0, 1],
                    transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                }}
                className="text-[10px] "
            >
                <span>Apollo joint connectors. <br />Version 2</span>
            </motion.div>
            <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 602.8 232.1"
                fill="#ffffff"
                className="w-[15rem] h-full"
            >
                <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                    class="st0"
                    cx="570"
                    cy="176.9"
                    r="9.8"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M570,176.9V208H122c-38.7,0-70-31.3-70-70V26"
                    strokeWidth={4}
                    stroke={"white"}
                    fill={"transparent"}
                />
            </motion.svg>

        </div>
    )
}

export default Pointer1;