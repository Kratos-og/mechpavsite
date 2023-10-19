import { Typewriter, useTypewriter } from "react-simple-typewriter";
import Wallet from "../Wallet";
import { useEffect, useState } from "react";
import Text from "../Text"
import Crate from "../Crate";

const Init = props => {
    const [walletDetails, setWalletDetails] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)
    const [typing, setTyping] = useState({
        text1: false,
        text2: false,
        text3: false,
        text4: false,
        text5: false,
        text6: false,
    })


    return (
        <div className="flex h-[88vh] pt-20 px-10 justify-evenly gap-10">
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
                <div className="px-5 py-2">
                    <p className="pt-5 text-gray-500">
                        {activeIndex >= 0 ? <Text index={0} onDone={setActiveIndex} text={"> < STARTING . . . >"} speed={50}/> : null}
                    </p>
                    {activeIndex >= 1 && <Text index={1} onDone={setActiveIndex} text={"> WELCOME TO MECH PAV MINTING . . ."} speed={50} />}
                    <p className="pt-5 text-gray-500">
                        {activeIndex >= 2 && <Text index={2} onDone={setActiveIndex} text={"> < INTRO >"} speed={50} />}</p>
                    {activeIndex >= 3 && <Text index={3} onDone={setActiveIndex} text={"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque a aut fugiat labore veritatis nesciunt tempore aperiam voluptatum magnam."} speed={30} />}
                    <p className="pt-5 text-gray-500">
                        {activeIndex >= 4 && <Text index={4} onDone={setActiveIndex} text={"> < INFO >"} speed={50} />}</p>
                    {activeIndex >= 5 && <Text index={5} onDone={setActiveIndex} text={"> Waiting for User Input . . . "} speed={50} />}
                    {walletDetails && (
                        <div>
                            <p className="pb-5 text-[#14fecdff]">
                                <Typewriter
                                    words={["> Wallet connection successful . . . "]}
                                    cursorStyle="_"
                                    cursorColor="#14fecdff"
                                    loop={1}
                                    typeSpeed={1}
                                />
                            </p>

                            <p className="text-gray-500 pb-2">
                                <Typewriter
                                    words={["> < DONE >"]}
                                    cursorStyle="_"
                                    cursorColor="#14fecdff"
                                    loop={1}
                                />
                            </p>
                            <p className=" text-[#14fecdff]">
                                <Typewriter
                                    words={["> ALL SET FOR MECH MINTING . . . "]}
                                    cursorStyle="_"
                                    cursorColor="#14fecdff"
                                    loop={1}
                                    typeSpeed={1}
                                />
                            </p>
                            <div className="w-full px-3 border-2 border-[#423F3E] mt-3">
                                <button className="border-2 border-[#423F3E] rounded-full w-full mt-3 py-2 uppercase hover:bg-[#14fecdff] hover:text-black ease-in-out duration-300 text-sm ">
                                    NEXT
                                </button>
                                <p className="text-[0.65rem] py-3">
                                    <Typewriter
                                        words={["> ERROR: NULL"]}
                                        cursorStyle="_"
                                        cursorColor="#14fecdff"
                                        loop={1}
                                        typeSpeed={1}
                                        cursor
                                    />
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {!walletDetails && (
                        <Wallet onConnect={setWalletDetails} />
                    )
                    }
                </div>
            </div>
            <div className="w-3/4 border-2 border-[#423F3E] relative overflow-hidden">
                <div className="z-10 relative h-full w-full">
                    <Crate />
                </div>

            </div>
        </div>
    )
}

export default Init;