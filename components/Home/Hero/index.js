import { scroll, motion, useScroll, useTransform, useSpring, cubicBezier } from "framer-motion";
import Mouse from "../../UI/Svg/Mouse";
import { useEffect, useRef } from "react";
import Pointer from "./Pointers";
import Pointer1 from "./Pointers/Pointer1";

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
    const springY = useSpring(y, { damping: 10 })
    return (
        <div className="w-full h-screen snap-child-start overflow-x-hidden" id="hero">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-center justify-center" style={{ opacity, y }}>
                <div className="text-[208px] 2xl:text-[298px] font-bold tracking-wider">MECH PAVS</div>
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