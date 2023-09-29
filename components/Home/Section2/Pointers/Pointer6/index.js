import { motion } from "framer-motion";

const Pointer6 = props => {
    return (
        <div className="flex flex-col items-start -ml-72 -mt-32">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0, 1, 0, 1],
                    transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                }}
                className="text-[9px] text-[#14fecd]"
            >
                <div className="pb-4 text-center">MARV TECHNICAL SPECIFICATIONS</div>
                <div className="flex gap-10">
                    <span className="w-24">HEIGHT:</span> <span>2.225m</span>
                </div>
                <div className="flex gap-10">
                    <span className="w-24">WIDTH:</span> <span>1.083m</span>
                </div>
                <div className="flex gap-10">
                    <span className="w-24">WEIGHT:</span> <span>115kg</span>
                </div>
                <div className="flex gap-10">
                    <span className="w-24">POWER OUTPUT:</span> <span>942mw (megawatts)</span>
                </div>
                <div className="flex gap-10">
                    <span className="w-24">POWERPLANT:</span> <span>MFR-09 (micro fusion)</span>
                </div>
                <div className="flex gap-10">
                    <span className="w-24">MAX SPEED:</span> <span>25mph</span>
                </div>
                <div className="flex gap-10">
                    <span className="w-24">HAND STRENGTH:</span> <span>350n (newtons)</span>
                </div>
                <div className="flex gap-10">
                    <span className="w-24">AMOUR MATERIAL:</span> <span>Titanium Alloy</span>
                </div>
            </motion.div>
            <div className=" text-center flex">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.5, 0, 1, 0, 1],
                        transition: { delay: 1.5, duration: 1, ease: "easeOut" },
                    }}
                    className="text-[10px] mt-4 text-[#14fecd]"
                >
                    <span>Maglock Cylinder <br /> Knee Joint</span>
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
                        cx="493.5" cy="57.2"
                        r="7"
                    />
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: 1,
                            transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
                        }}
                        d="M489.2,57.2H25.1"
                        strokeWidth={4}
                        stroke={"white"}
                        fill={"transparent"}
                    />
                </motion.svg>
            </div>
        </div>
    )
}

export default Pointer6;