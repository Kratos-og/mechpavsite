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
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-end justify-center" style={{ opacity}}>
                <div className="w-1/2">

                <AnimatePresence>
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
                    className="text-[70px] 2xl:text-[298px] font-bold tracking-wider relative">EXPLORE THE LORE</motion.div>

            <AnimatePresence>
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
                    {/* <motion.div 
                initial={{paddingRight:"38.5rem"}}
                animate={{paddingRight: isInView ? "0rem" :"38.5rem",transition:{ delay:isInView ? "1" :"0", duration:0.5}}}
                className="bg-black pt-[9%] absolute right-[10%] top-[48%] z-50"></motion.div> */}
                    <motion.div 
                    initial={{ visibility:"hidden"}}
                    animate={{ visibility:isInView ? "visible" : "hidden", transition:{delay:0.5,duration:0.5}}}
                    className="w-full z-40 relative text-[11px] tracking-widest">
                        <div className="w-3/4 flex flex-col gap-4">
                            <div>LEARN MORE ABOUT THESE MYSTERIOUS PAVS AND WHERE THEY CAME FROM WHILE YOU EXPLORE THE PAST AND DISCOVER THE SECRETS.</div>
                            <div>READ THROUGH CHRONOLOGICAL EVENTS AND DISCOVER HOW PAVS AND MECHS COMBINED TO BECOME THE ULTIMATE FORCE.</div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div >
    )
}

export default Section;