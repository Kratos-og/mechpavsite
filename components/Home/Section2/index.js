import { scroll, motion, useScroll, useTransform, useSpring, cubicBezier } from "framer-motion";

const Section = props => {
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0.165, 0.33, 0.495],
        // Into these values:
        [0, 1, 0]
    )
    const y = useTransform(
        props.progress,
        // Map x from these values:
        [0.165, 0.33, 0.495],
        // Into these values:
        [-100, 0, -100],
        {
            ease: cubicBezier(0.17, 0.67, 0.83, 0.67)
        }
    )

    return (
        <div className="w-full h-screen snap-child-start relative overflow-hidden">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col px-40 justify-center" style={{ opacity, y }}>
                <div className="text-[70px] 2xl:text-[100px] font-bold tracking-wider">MECH MINT</div>
                <div className="w-full z-40 relative text-[11px] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4">
                        <div>BUY A MECH CRATE AND RECEIVE 5 RANDOM PARTS THAT ASSEMBLE A COMPLETE MECH.</div>
                        <div>BUILD YOUR MECH TO USE AS AN AVATAR TO EXPLORE PAVIA. COLLECT, BUILD, AND INTERCHANGE MECH PARTS USING OUR UNIQUE MECH BUILDER.</div>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default Section;