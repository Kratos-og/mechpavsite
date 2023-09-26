import { scroll, motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const Section = props => {
    const [isInView, setIsInView] = useState(false);

    useMotionValueEvent(props.progress, "change", (latest) => {
        if (latest.toFixed(2) == 0.33) {
            setIsInView(true)
        }
        else { setIsInView(false) }
    })
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0.165, 0.33, 0.495],
        // Into these values:
        [0, 1, 0]
    )

    return (
        <div className="w-full h-screen snap-child-start relative overflow-hidden">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col px-40 justify-center">
                <div className="relative w-fit overflow-hidden">
                    <AnimatePresence>
                        {isInView && (
                            <>
                                <motion.p
                                    initial={{ visibility: "hidden" }}
                                    animate={{ visibility: isInView ? "visible" : "hidden", transition: { delay: 0.4, duration: 1 } }}
                                    exit={{ visibility: "hidden", transition: { delay: 0.1, duration: 0.1 } }}
                                    className="text-[70px] 2xl:text-[298px] font-bold overflow-hidden tracking-wider w-fit relative">
                                    <span>MECH MINT</span>
                                </motion.p>
                                <motion.div
                                    initial={{ paddingRight: "0rem", width: 0 }}
                                    animate={
                                        [
                                            { paddingRight: isInView ? "28rem" : "0rem", transition: { delay: 0, duration: 0.4 } },
                                            { left: isInView ? "100%" : "0rem", transition: { delay: 0.4, duration: 0.4 } }
                                        ]
                                    }
                                    exit={
                                        [
                                            { left: "0", paddingRight: 0, transition: { delay: 0, duration: 0 } },
                                            { width: "100%", transition: { delay: 0, duration: 0.1 } },
                                            { x: "100%", transition: { delay: 0.1, duration: 0.1 } },
                                        ]
                                    }
                                    className="bg-white absolute h-3/5 top-5"></motion.div>

                            </>
                        )}

                    </AnimatePresence>
                </div>

                <div className="relative w-1/4 overflow-hidden">
                    <AnimatePresence>
                        {isInView && (
                            <>
                                <motion.div
                                    initial={{ visibility: "hidden" }}
                                    animate={{ visibility: isInView ? "visible" : "hidden", transition: { delay: 0.4, duration: 0 } }}
                                    exit={{ visibility: "hidden", transition: { delay: 0.1, duration: 0.1 } }}
                                    className="z-40 relative text-[11px] tracking-widest">
                                    <div className="flex flex-col gap-4">
                                        <div>BUY A MECH CRATE AND RECEIVE 5 RANDOM PARTS THAT ASSEMBLE A COMPLETE MECH.</div>
                                        <div>BUILD YOUR MECH TO USE AS AN AVATAR TO EXPLORE PAVIA. COLLECT, BUILD, AND INTERCHANGE MECH PARTS USING OUR UNIQUE MECH BUILDER.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ paddingRight: "0rem", width: 0 }}
                                    animate={
                                        [
                                            { paddingRight: isInView ? "28rem" : "0rem", transition: { delay: 0.2, duration: 0.3 } },
                                            { left: isInView ? "100%" : "0rem", transition: { delay: 0.3, duration: 0.5 } }
                                        ]
                                    }
                                    exit={
                                        [
                                            { left: "0", paddingRight: 0, transition: { delay: 0, duration: 0 } },
                                            { width: "100%", transition: { delay: 0, duration: 0.1 } },
                                            { x: "100%", transition: { delay: 0.1, duration: 0.1 } },
                                        ]
                                    }
                                    className="bg-white absolute h-full top-0"></motion.div>
                            </>
                        )}

                    </AnimatePresence>
                </div>
            </motion.div>
        </div >
    )
}

export default Section;