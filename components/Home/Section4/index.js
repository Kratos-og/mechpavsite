import { scroll, motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Section = props => {
    const [isInView,setIsInView] = useState(false);

    useMotionValueEvent(props.progress, "change", (latest) => {
        if(latest.toFixed(2) >= 0.95){
                setIsInView(true)
            }
            else{setIsInView(false)}
      })
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0.825, 0.95],
        // Into these values:
        [0, 1]
    )

    return (
        <div className="w-full h-screen snap-child-start relative overflow-x-hidden">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col px-40 justify-center" style={{ opacity }}>
            <AnimatePresence>
                {isInView && (<motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "35rem" :"0rem",transition:{ delay:0.1, duration:0.4}}]}
                // exit={[{paddingRight:"28rem",transition:{delay:0.1,duration:0.5}}]}
                className="bg-white pt-[4%] absolute left-[10%] top-[38%]"></motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                    {isInView && (<motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "35rem" :"0rem",transition:{ delay:0.5, duration:0.3}}]}
                // exit={{paddingRight:"28rem", transition: {delay:0.1,duration:1}}}
                className="bg-black pt-[4%] absolute left-[10%] top-[38%]"></motion.div>)}
            </AnimatePresence>
                <motion.div 
                initial={{ visibility:"hidden"}}
                animate={{ visibility:isInView ? "visible" : "hidden", transition:{delay:0.4,duration:1}}}
                className="text-[70px] 2xl:text-[298px] font-bold tracking-wider relative">MARKETPLACE</motion.div>

            <AnimatePresence>
                    {isInView && (<motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "20rem" :"0rem",transition:{ delay:0.3, duration:0.4}}]}
                className="bg-white pt-[8%] absolute left-[10%] top-[49%]"></motion.div>)}
            </AnimatePresence>
                
            <AnimatePresence>
                    {isInView && ( <motion.div 
                initial={{paddingRight:"0rem"}}
                animate={[{paddingRight: isInView ? "28rem" :"0rem",transition:{ delay:0.8, duration:0.3}}]}
                className="bg-black pt-[8%] absolute left-[10%] top-[49%]"></motion.div>)}
            </AnimatePresence>

                <motion.div 
                initial={{ visibility:"hidden"}}
                animate={{ visibility:isInView ? "visible" : "hidden", transition:{delay:0.6,duration:1}}}
                className="w-full z-40 relative text-[11px] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4">
                        <div>BROWSE THE COMPLETE COLLECTION OF PAVS.</div>
                        <div>USE THE CUSTOM FILTERS TO SEARCH BY EVENT, TRAITS AND MUCH MORE. SEARCH THE LATEST MARKETS WHILE YOU BUY, SELL AND TRADE YOUR PAVS.</div>
                    </div>
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Section;