import { motion, useTransform, useSpring, cubicBezier } from "framer-motion";

const Hero = props => {
    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0, 0.165],
        // Into these values:
        [1, 0]
    )
    const y = useTransform(
        props.progress,
        // Map x from these values:
        [0, 0.165],
        // Into these values:
        [0, -100],
        {
            ease: cubicBezier(0.17, 0.67, 0.83, 0.67)
        }
    )

    return (
        <div className="w-full h-screen snap-child-start overflow-x-hidden" id="hero">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-center justify-center" style={{ opacity, y }}>
                <div className="text-[208px] 2xl:text-[298px] font-bold tracking-wider">MECH PAVS</div>
                <div className="flex items-end justify-end w-full px-40">
                    <div className="w-60 h-7 border-opacity-20 border flex -mt-10">
                        <div className="w-4/5 px-3 flex items-center ">
                            <motion.div initial={{ width: '0%' }} animate={{ width: props.loadVal + '%', transition: { duration: 0.3 } }} className="h-0.5 bg-white"></motion.div>
                        </div>
                        <div className="border-l w-1/5 text-[9px] flex items-center justify-center">{props.loadVal}%</div>
                    </div>
                </div>
                <div className="w-full z-40 relative text-[11px] ml-[15%] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4 -mt-10">
                        <div>CARDANO&apos;S BIGGEST NFT MINT IS HAPPENING RIGHT HERE ON <b>OCTOBER 19TH</b>.</div>
                        <div>5 CLASSES, 5 PARTS, 5 SKINS AND OVER 1 MILLION COMBINATIONS. COLLECT AND BUILD INTERCHANGEABLE MECH PARTS TO BUILD A FULLY USEABLE AVATAR.</div>
                    </div>
                </div>
                {/* <div className="w-full ml-[15%]">
                    <div className="w-16 left-[10%]">
                        <Mouse />
                    </div>
                </div> */}
            </motion.div>
        </div >
    )
}

export default Hero;