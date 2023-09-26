import { motion, useTransform, useMotionValueEvent, cubicBezier, AnimatePresence } from "framer-motion";
import { useState } from 'react'
const Hero = props => {
    const [isInView, setIsInView] = useState(true);

    useMotionValueEvent(props.progress, "change", (latest) => {
        if (latest.toFixed(2) == 0) {
            setIsInView(true)
        }
        else { setIsInView(false) }
    })

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
            <motion.div className="fixed pointer-events-none w-full left-0 top-0 h-screen flex flex-col items-center justify-center"
                style={{ opacity }}>
                <motion.div
                    initial={{ paddingRight: "85rem" }}
                    animate={{ paddingRight: "0", transition: { delay: 0, duration: 1 } }}
                    className="bg-black pt-[11%] absolute right-[5%] top-[34%]"></motion.div>

                <div className="text-[208px] 2xl:text-[298px] font-bold tracking-wider">MECH PAVS</div>
                <motion.p
                    initial={{ paddingRight: "0rem", opacity: 0 }}
                    animate={{ paddingRight: !isInView ? "85rem" : "0rem", opacity: 1, transition: { delay: 0, duration: 0.25 } }}
                    className="bg-black pt-[11%] absolute left-[5%] top-[34%]"></motion.p>
                {props.init && props.loadVal !== 100 &&
                    <AnimatePresence>
                        <motion.div exit={{ opacity: 0, transition: { duration: 0.5 } }} className="flex items-end justify-end w-full px-40">
                            <div className="w-60 h-7 border-opacity-20 border flex -mt-10">
                                <div className="w-4/5 px-3 flex items-center ">
                                    <motion.div initial={{ width: '0%' }} animate={{ width: props.loadVal + '%', transition: { duration: 0.3 } }} className="h-0.5 bg-white"></motion.div>
                                </div>
                                <div className="border-l w-1/5 text-[9px] flex items-center justify-center">{props.loadVal}%</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                }
                <motion.div
                    initial={{ paddingRight: "25rem" }}
                    animate={{ paddingRight: "0rem", transition: { delay: 0.5, duration: 1 } }}
                    onAnimationComplete={() => props.setInit(true)}
                    className="bg-black pt-[8%] absolute right-[67%] top-[61%] z-50"></motion.div>
                <div className="w-full z-40 relative text-[11px] ml-[15%] tracking-widest">
                    <div className="w-1/4 flex flex-col gap-4 -mt-10">
                        <div>CARDANO&apos;S BIGGEST NFT MINT IS HAPPENING RIGHT HERE ON <b>OCTOBER 19TH</b>.</div>
                        <div>5 CLASSES, 5 PARTS, 5 SKINS AND OVER 1 MILLION COMBINATIONS. COLLECT AND BUILD INTERCHANGEABLE MECH PARTS TO BUILD A FULLY USEABLE AVATAR.</div>
                    </div>
                </div>
                <motion.p
                    initial={{ paddingRight: "0rem" }}
                    animate={{ paddingRight: isInView ? "0rem" : "25rem", transition: { delay: 0, duration: 0.25 } }}
                    className={`absolute left-[7%] top-[61%] z-50 pt-[8%] bg-black`}></motion.p>

            </motion.div>
        </div >
    )
}

export default Hero;