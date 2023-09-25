import { scroll, motion, useScroll, useTransform, useSpring } from "framer-motion";

const Section = props => {
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0.495, 0.66, 0.825],
        // Into these values:
        [0, 1, 0]
    )
    const y = useTransform(
        props.progress,
        // Map x from these values:
        [0.495, 0.66, 0.825],
        // Into these values:
        [-100, 0, -100],
    )
    const springY = useSpring(y)
    return (
        <div className="w-full h-screen snap-child-start relative overflow-x-hidden">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-center justify-center" style={{ opacity, y }}>
                <div className="text-[70px] 2xl:text-[298px] font-bold tracking-wider">EXPLORE THE LORE</div>
                <div className="w-full z-40 relative text-[11px] ml-[15%] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4 -mt-10">
                        <div>LEARN MORE ABOUT THESE MYSTERIOUS PAVS AND WHERE THEY CAME FROM WHILE YOU EXPLORE THE PAST AND DISCOVER THE SECRETS.</div>
                        <div>READ THROUGH CHRONOLOGICAL EVENTS AND DISCOVER HOW PAVS AND MECHS COMBINED TO BECOME THE ULTIMATE FORCE.</div>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default Section;