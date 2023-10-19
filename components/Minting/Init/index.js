import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Crate from "../Crate";
import Text from "../Text";
import Wallet from "../Wallet";
import Buy from "../Buy";
import Confirm from "../Confirm";
import Mint from "../Mint";

const Init = props => {
    const [walletDetails, setWalletDetails] = useState();
    const [confirmedQty, setConfirmedQty] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const [done, setDone] = useState(false)
    return (
        <div className="flex h-[90%] items-center justify-center px-10 gap-10 relative">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -500, transition: { duration: 1 } }}
                className="bg-black w-full h-1/2 absolute top-0 z-[1] "></motion.div>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: 500, transition: { duration: 1 } }}
                className="bg-black h-1/2 absolute bottom-0 z-[1] w-full"></motion.div>
            <div className="w-[25%] h-[85%] mt-5 border-2 border-[#423F3E] text-[0.65rem] font-black tracking-widest uppercase">
                <p className=" text-xs border-b-2 border-[#423F3E] p-5 text-[#14fecdff]">
                    {<Typewriter
                        words={["MECH PAVS", "MECH MINTING START . . . "]}
                        cursorStyle="_"
                        cursor
                        cursorColor="#14fecdff"
                        loop={1}
                    />}
                </p>
                <div className="px-2 py-2 h-[90%]">
                    <div className="px-3 py-2 overflow-auto custom-scroll h-full">
                        <p className="pt-3 text-gray-500 pb-1">
                            {activeIndex >= 0 ? <Text index={0} onDone={setActiveIndex} text={"> < STARTING . . . >"} speed={30} /> : null}
                        </p>
                        {activeIndex >= 1 && <Text index={1} onDone={setActiveIndex} text={"> WELCOME TO MECH PAV MINTING . . ."} speed={30} />}
                        <p className="pt-5 text-gray-500 pb-1">
                            {activeIndex >= 2 && <Text index={2} onDone={setActiveIndex} text={"> < INTRO >"} speed={30} />}</p>
                        {activeIndex >= 3 && <Text index={3} onDone={setActiveIndex} text={"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque a aut fugiat labore veritatis nesciunt tempore aperiam voluptatum magnam."} speed={20} />}
                        <p className="pt-5 text-gray-500 pb-1">
                            {activeIndex >= 4 && <Text index={4} onDone={setActiveIndex} text={"> < INFO >"} speed={30} />}</p>
                        {activeIndex >= 5 && <Text index={5} onDone={setActiveIndex} text={"> Waiting for User Input . . . "} speed={30} />}
                        {walletDetails && (
                            <div>
                                <p className="pb-5 text-[#14fecdff]">
                                    {activeIndex >= 6 && <Text index={6} onDone={setActiveIndex} text={`> ${walletDetails} Wallet connected successfully . . . `} speed={30} />}
                                </p>

                                <p className="text-gray-500 pb-1">
                                    {activeIndex >= 7 && <Text index={7} onDone={setActiveIndex} text={"> < MINT > "} speed={30} />}
                                </p>
                                <p className=" text-[#14fecdff]">
                                    {activeIndex >= 8 && <Text index={8} onDone={setActiveIndex} text={"> ALL SET FOR MECH MINTING . . . "} speed={30} />}
                                </p>
                                {activeIndex >= 9 && confirmedQty == 0 && <Buy onConfirm={setConfirmedQty} />}
                            </div>
                        )}
                        {confirmedQty > 0 && <>
                            <p className="text-gray-500 pb-1 pt-5">
                                {activeIndex >= 9 && <Text index={9} onDone={setActiveIndex} text={"> < INFO > "} speed={30} />}
                            </p>
                            <p className=" text-[#14fecdff]">
                                {activeIndex >= 10 && <Text index={10} onDone={setActiveIndex} text={`> you have selected ${confirmedQty}x Crates - ${confirmedQty * 450} ADA `} speed={30} />}
                            </p>
                            <p className="">
                                {activeIndex >= 10 && <Text index={10} onDone={setActiveIndex} text={`> Initiating Transaction . . .`} speed={30} />}
                            </p>
                            <div className="flex gap-2">&gt;
                                <motion.div
                                    initial={{ left: 0 }}
                                    animate={{
                                        rotate: [0, 45, 90, 180, 360],
                                        transition: { delay: 0, duration: 1, repeat: "Infinite" },
                                    }}
                                    className=""
                                >|</motion.div>
                            </div>

                            <p className="">
                                {activeIndex >= 10 && <Text index={10} onDone={setActiveIndex} text={`> Choosing a mech`} speed={30} />}
                            </p>
                            <div className="flex gap-2">&gt;
                                <motion.div
                                    initial={{ left: 0 }}
                                    animate={{
                                        rotate: [0, 45, 90, 180, 360],
                                        transition: { delay: 0, duration: 1, repeat: "Infinite" },
                                    }}
                                    className=""
                                >|</motion.div>
                            </div>
                            <p className="">
                                {activeIndex >= 10 && <Text index={10} onDone={setActiveIndex} text={`> Creating Transaction . . .`} speed={30} />}
                            </p>
                        </>}
                        {activeIndex >= 11 && confirmedQty > 0 && !confirm && <Confirm confirm={setConfirm} onConfirm={setConfirmedQty} />}
                        {confirm === "yes" && <>
                            <p className="text-gray-500 pb-1 pt-5">
                                {activeIndex >= 11 && <Text index={11} onDone={setActiveIndex} text={"> < INFO > "} speed={30} />}
                            </p>
                            <p className=" text-[#14fecdff]">
                                {activeIndex >= 12 && <Text index={12} onDone={setActiveIndex} text={`> confirmed . . . ! !`} speed={30} />}
                            </p>
                            {activeIndex >= 11 && !done && <Mint done={setDone} />}
                            {done && <>
                                <p className="text-gray-500 pb-1 pt-5">
                                    {activeIndex >= 13 && <Text index={13} onDone={setActiveIndex} text={"> < completed minting > "} speed={30} />}
                                </p>
                                <p className=" text-[#14fecdff]">
                                    {activeIndex >= 14 && <Text index={14} onDone={setActiveIndex} text={`> successfully minted YAYAAAA . . . ! ! `} speed={30} />}
                                </p>
                            </>}
                        </>}
                        <div>
                            {activeIndex >= 6 && !walletDetails && (
                                <Wallet onConnect={setWalletDetails} />
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 h-[85%] mt-5 border-2 relative border-[#423F3E] overflow-hidden">
                
              
            </div>

        </div>
    )
}

export default Init;