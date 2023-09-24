import { scroll, motion, useScroll, useTransform, useSpring } from "framer-motion";

const Section = props => {
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0.125, 0.25],
        // Into these values:
        [0, 1]
    )
    const y = useTransform(
        props.progress,
        // Map x from these values:
        [0.125, 0.25],
        // Into these values:
        [0, 100]
    )
    const springY = useSpring(y)
    return (
        <div className="w-full h-screen snap-child-start relative z-20 overflow-x-hidden">
            <motion.div className="fixed w-full left-0 top-0 h-screen flex flex-col items-center justify-center" style={{ opacity, y }}>
                <div className="text-[208px] 2xl:text-[298px] font-bold tracking-wider">MECH PAVS</div>
                <div className="w-full z-40 relative text-[11px] ml-[15%] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4 -mt-10">
                        <div>CARDANO'S BIGGEST NFT MINT IS HAPPENING RIGHT HERE ON <b>OCTOBER 19TH</b>.</div>
                        <div>5 CLASSES, 5 PARTS, 5 SKINS AND OVER 1 MILLION COMBINATIONS. COLLECT AND BUILD INTERCHANGEABLE MECH PARTS TO BUILD A FULLY USEABLE AVATAR.</div>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default Section;