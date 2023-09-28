import { scroll, motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Button from "../../UI/Button"
import Link from "next/link";

const Section = props => {
    const [isInView, setIsInView] = useState(false);

    useMotionValueEvent(props.progress, "change", (latest) => {
        if (latest.toFixed(2) >= 0.95) {
            setIsInView(true)
        }
        else { setIsInView(false) }
    })

    return (
        <div className="w-full h-screen snap-child-start relative overflow-x-hidden">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col px-40 justify-center">
                <div className="relative w-fit overflow-hidden">
                    <AnimatePresence>
                        {isInView && (
                            <>
                                <motion.p
                                    initial={{ visibility: "hidden" }}
                                    animate={{ visibility: isInView ? "visible" : "hidden", transition: { delay: 0.4, duration: 1 } }}
                                    exit={{ visibility: "hidden", transition: { delay: 0.1, duration: 0.1 } }}
                                    className="text-[70px] 2xl:text-[90px] font-bold overflow-hidden tracking-wider w-fit relative">
                                    <span>MARKETPLACE</span>
                                </motion.p>
                                <motion.div
                                    initial={{ paddingRight: "0rem", width: 0 }}
                                    animate={
                                        [
                                            { paddingRight: isInView ? "100%" : "0rem", transition: { delay: 0, duration: 0.4 } },
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
                                        <div>BROWSE THE COMPLETE COLLECTION OF PAVS.</div>
                                        <div>USE THE CUSTOM FILTERS TO SEARCH BY EVENT, TRAITS AND MUCH MORE. SEARCH THE LATEST MARKETS WHILE YOU BUY, SELL AND TRADE YOUR PAVS.</div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ paddingRight: "0rem", width: 0 }}
                                    animate={
                                        [
                                            { paddingRight: isInView ? "100%" : "0rem", transition: { delay: 0.2, duration: 0.3 } },
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
            <AnimatePresence>
                {isInView && (
                    <Link href="/pavs">
                        <motion.div
                            exit={{ display: "none" }}
                            className="absolute flex top-[70%] left-[15%]">
                            <Button>LEARN MORE</Button>
                        </motion.div>
                    </Link>
                )}
            </AnimatePresence>
        </div >
    )
}

export default Section;