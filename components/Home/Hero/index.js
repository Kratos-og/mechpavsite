import { scroll, motion, useScroll, useTransform, useSpring, cubicBezier, useMotionValueEvent } from "framer-motion";
import Mouse from "../../UI/Svg/Mouse";
import { useEffect, useRef, useState } from "react";
import Pointer from "./Pointers";
import Pointer1 from "./Pointers/Pointer1";

const Hero = props => {
    const [isInView,setIsInView] = useState(true);

    useMotionValueEvent(props.progress, "change", (latest) => {
        if(latest.toFixed(2) == 0){
                setIsInView(true)
            }
            else{setIsInView(false)}
      })

    const opacity = useTransform(
        props.progress,
        // Map x from these values:
        [0, 0.165],
        // Into these values:
        [1, 0]
    )
    console.log(isInView)

    return (
        <div className="w-full h-screen snap-child-start overflow-x-hidden" id="hero">
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-center justify-center" 
            style={{opacity}}>
                <motion.div 
                initial={{paddingRight:"85rem"}}
                animate={{paddingRight:"0",transition:{ delay:3, duration:1}}}
                className="bg-black pt-[11%] absolute right-[5%] top-[34%]"></motion.div>
                
                <div className="text-[208px] 2xl:text-[298px] font-bold tracking-wider">MECH PAVS</div>
                <motion.p 
                initial={{paddingRight:"0rem",opacity:0}}
                animate={{paddingRight: !isInView ? "85rem" : "0rem",opacity:1,transition:{ delay:0, duration:0.25}}}
                className="bg-black pt-[11%] absolute left-[5%] top-[34%]"></motion.p>
                    <motion.div 
                initial={{paddingRight:"25rem"}}
                animate={{paddingRight:"0rem",transition:{ delay:3.5, duration:1}}}
                className="bg-black pt-[8%] absolute right-[67%] top-[61%] z-50"></motion.div>
                <div className="w-full z-40 relative text-[11px] ml-[15%] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4 -mt-10">
                        <div>CARDANO&apos;S BIGGEST NFT MINT IS HAPPENING RIGHT HERE ON <b>OCTOBER 19TH</b>.</div>
                        <div>5 CLASSES, 5 PARTS, 5 SKINS AND OVER 1 MILLION COMBINATIONS. COLLECT AND BUILD INTERCHANGEABLE MECH PARTS TO BUILD A FULLY USEABLE AVATAR.</div>
                    </div>
                </div>
                <motion.p 
                initial={{paddingRight:"0rem"}}
                animate={{paddingRight: isInView ? "0rem" : "25rem",transition:{ delay:0, duration:0.25}}}
                className={`absolute left-[7%] top-[61%] z-50 pt-[8%] bg-black`}></motion.p>
               
            </motion.div>
        </div >
    )
}

export default Hero;