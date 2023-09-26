import { scroll, motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Section = props => {
    const [isInView,setIsInView] = useState(false);

    useMotionValueEvent(props.progress, "change", (latest) => {
        if(latest.toFixed(2) == 0.67){
                setIsInView(true)
            }
            else{setIsInView(false)}
      })
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0.495, 0.66, 0.825],
        // Into these values:
        [0, 1, 0]
    )
   

    return (
        <div className="w-full h-screen snap-child-start relative overflow-x-hidden">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-end justify-center" >
                <div className="w-1/2">

                {/* <AnimatePresence>
                {isInView && (<motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "43rem" :"0rem",transition:{ delay:0.1, duration:0.4}}]}
                // exit={[{paddingRight:"28rem",transition:{delay:0.1,duration:0.5}}]}
                className="bg-white pt-[4%] absolute left-[50%] top-[40%]"></motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                    {isInView && (<motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "43rem" :"0rem",transition:{ delay:0.5, duration:0.3}}]}
                // exit={{paddingRight:"28rem", transition: {delay:0.1,duration:1}}}
                className="bg-black pt-[4%] absolute left-[50%] top-[40%]"></motion.div>)}
            </AnimatePresence>

                    <motion.div 
                    initial={{ visibility:"hidden"}}
                    animate={{ visibility:isInView ? "visible" : "hidden", transition:{delay:0.5,duration:1}}}
                    className="text-[70px] 2xl:text-[298px] font-bold tracking-wider relative">EXPLORE THE LORE</motion.div> */}

<div className="relative w-fit overflow-hidden">
                    <AnimatePresence>
                        {isInView && (
                            <>
                                <motion.p
                                    initial={{ visibility: "hidden" }}
                                    animate={{ visibility: isInView ? "visible" : "hidden", transition: { delay: 0.6, duration: 0 } }}
                                    exit={{ visibility: "hidden", transition: { delay: 0.1, duration: 0.1 } }}
                                    className="text-[70px] 2xl:text-[298px] font-bold overflow-hidden tracking-wider w-fit relative">
                                    <span>EXPLORE THE LORE</span>
                                </motion.p>
                                <motion.div
                                    initial={{ paddingRight: "0rem", width: 0 }}
                                    animate={
                                        [
                                            { paddingRight: isInView ? "43rem" : "0rem", transition: { delay: 0, duration: 0.6 } },
                                            { left: isInView ? "100%" : "0rem", transition: { delay: 0.6, duration: 0.4 } }
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

            {/* <AnimatePresence>
                    {isInView && (<motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "36rem" :"0rem",transition:{ delay:0.3, duration:0.4}}]}
                className="bg-white pt-[8%] absolute left-[50%] top-[49%]"></motion.div>)}
            </AnimatePresence>
                
            <AnimatePresence>
                    {isInView && ( <motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "36rem" :"0rem",transition:{ delay:0.8, duration:0.3}}]}
                className="bg-black pt-[8%] absolute left-[50%] top-[49%]"></motion.div>)}
            </AnimatePresence>
                    <motion.div 
                    initial={{ visibility:"hidden"}}
                    animate={{ visibility:isInView ? "visible" : "hidden", transition:{delay:0.5,duration:0.5}}}
                    className="w-full z-40 relative text-[11px] tracking-widest">
                        <div className="w-3/4 flex flex-col gap-4">
                            <div>LEARN MORE ABOUT THESE MYSTERIOUS PAVS AND WHERE THEY CAME FROM WHILE YOU EXPLORE THE PAST AND DISCOVER THE SECRETS.</div>
                            <div>READ THROUGH CHRONOLOGICAL EVENTS AND DISCOVER HOW PAVS AND MECHS COMBINED TO BECOME THE ULTIMATE FORCE.</div>
                        </div>
                    </motion.div> */}

<div className="relative w-1/4 overflow-hidden">
                    <AnimatePresence>
                        {isInView && (
                            <>
                                <motion.div
                                    initial={{ visibility: "hidden" }}
                                    animate={{ visibility: isInView ? "visible" : "hidden", transition: { delay: 0.4, duration: 0 } }}
                                    exit={{ visibility: "hidden", transition: { delay: 0.1, duration: 0.1 } }}
                                    className="z-40 relative text-[11px] tracking-widest">
                                    <div className="flex flex-col gap-4 w-full">
                                        <div>LEARN MORE ABOUT THESE MYSTERIOUS PAVS AND WHERE THEY CAME FROM WHILE YOU EXPLORE THE PAST AND DISCOVER THE SECRETS.</div>
                                        <div>READ THROUGH CHRONOLOGICAL EVENTS AND DISCOVER HOW PAVS AND MECHS COMBINED TO BECOME THE ULTIMATE FORCE.</div>
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
                </div>
            </motion.div>
        </div >
    )
}

export default Section;