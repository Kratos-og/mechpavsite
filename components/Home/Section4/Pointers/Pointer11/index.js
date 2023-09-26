import { motion } from "framer-motion";

const Pointer11 = props => {
    return (
        <div className="flex ml-44 -mt-28">
            <motion.svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 544.8 257.2"
                fill="#ffffff"
                className="w-[15rem]"
            >
                <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
                    cx="44" cy="220.7"
                    r="5"
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: 1,
                        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                    }}
                    d="M488.9,24.4l-375.6-1c-38.9,0.3-70.1,32.3-69.5,71.2l0,122.9"
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
                className="text-[10px]"
            >
                <span>Power Charge <br /> Indicators</span>
            </motion.div>
        </div>
    )
}

export default Pointer11;