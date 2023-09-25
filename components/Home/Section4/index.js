import { scroll, motion, useScroll, useTransform, useSpring, cubicBezier } from "framer-motion";

const Section = props => {
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0.825, 0.95],
        // Into these values:
        [0, 1]
    )
    const y = useTransform(
        props.progress,
        // Map x from these values:
        [0.825, 0.95],
        // Into these values:
        [-100, 0],
        {
            ease: cubicBezier(0.17, 0.67, 0.83, 0.67)
        }
    )
    return (
        <div className="w-full h-screen snap-child-start relative overflow-x-hidden">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col px-40 justify-center" style={{ opacity, y }}>
                <div className="text-[70px] 2xl:text-[100px] font-bold tracking-wider">MARKETPLACE</div>
                <div className="w-full z-40 relative text-[11px] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4">
                        <div>BROWSE THE COMPLETE COLLECTION OF PAVS.</div>
                        <div>USE THE CUSTOM FILTERS TO SEARCH BY EVENT, TRAITS AND MUCH MORE. SEARCH THE LATEST MARKETS WHILE YOU BUY, SELL AND TRADE YOUR PAVS.</div>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default Section;