import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Crate from "../Crate";
import Text from "../Text";
import Wallet from "../Wallet";
import Buy from "../Buy";

const Init = props => {
    const [walletDetails, setWalletDetails] = useState();
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="flex h-[88vh] pt-20 px-10 justify-evenly gap-10">
            <motion.div 
            initial={{y:0}}
            animate={{y:-500,transition:{duration:1}}}
            className="bg-black w-full h-1/2 absolute top-0 z-[1] "></motion.div>
            <div className="w-[25%] border-2 border-[#423F3E] text-[0.65rem] font-black tracking-widest uppercase">
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
                        {activeIndex >= 0 ? <Text index={0} onDone={setActiveIndex} text={"> < STARTING . . . >"} speed={30}/> : null}
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
                            {activeIndex >= 6 && <Text index={6} onDone={setActiveIndex} text={`> ${walletDetails} Wallet connection successful . . . `} speed={30} />}
                            </p>

                            <p className="text-gray-500 pb-1">
                            {activeIndex >= 7 && <Text index={7} onDone={setActiveIndex} text={"> < MINT > "} speed={30} />}
                            </p>
                            <p className=" text-[#14fecdff]">
                            {activeIndex >= 8 && <Text index={8} onDone={setActiveIndex} text={"> ALL SET FOR MECH MINTING . . . "} speed={30} />}
                            </p>
                            {activeIndex >= 9 && <Buy/>}
                        </div>
                    )}
                    <div>
                    {activeIndex >= 6 && !walletDetails && (  
                        <Wallet onConnect={setWalletDetails} />
                    )
                    }
                </div>
                </div>
                
                </div>
            </div>
            <div className="w-3/4 border-2 border-[#423F3E] relative overflow-hidden">
                <div className="z-10 relative h-full w-full">
                    <Crate />
                </div>

            </div>
            <motion.div 
            initial={{y:0}}
            animate={{y:500,transition:{duration:1}}}
            className="bg-black w-full h-1/2 absolute bottom-0 z-[1] "></motion.div>
        </div>
    )
}

export default Init;