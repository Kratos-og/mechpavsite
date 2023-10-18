import { Typewriter } from "react-simple-typewriter";
import Wallet from "../Wallet";
import { useState } from "react";

const Init = props => {
    const [walletDetails, setWalletDetails] = useState(false);
    return (
        <div className="flex h-[88vh] pt-20 justify-evenly">
            <div className="w-[25%] border-2 border-[#423F3E] text-[0.65rem] font-black tracking-widest uppercase">
                <p className=" text-xs border-b-2 border-[#423F3E] p-5 text-[#14fecdff]">
                    <Typewriter
                        words={["MECH PAVS", "MECH MINTING START . . . "]}
                        cursorStyle="_"
                        cursor
                        cursorColor="#14fecdff"
                        loop={1}
                    />
                </p>
                <div className="px-5 py-2">
                    <p className="text-gray-500 pb-2">
                        <Typewriter
                            words={["> < STARTING . . . >"]}
                            cursorStyle="_"
                            cursorColor="#14fecdff"
                            loop={1}
                        />
                    </p>
                    <p className="pb-5">
                        <Typewriter
                            words={["> WELLCOME TO MECH PAVS . . ."]}
                            cursorStyle="_"
                            cursorColor="#14fecdff"
                            loop={1}

                        />
                    </p>
                    <p className="text-gray-500 pb-2">
                        <Typewriter
                            words={["> < INTRO >"]}
                            cursorStyle="_"
                            cursorColor="#14fecdff"
                            loop={1}
                        />
                    </p>
                    <p className="pb-5">
                        <Typewriter
                            words={[
                                "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque a aut fugiat labore veritatis nesciunt tempore aperiam voluptatum magnam.",
                            ]}
                            cursorStyle="_"
                            cursorColor="#14fecdff"
                            loop={1}
                            typeSpeed={1}
                        />
                    </p>
                    <p className="text-gray-500 pb-2">
                        <Typewriter
                            words={["> < INFO >"]}
                            cursorStyle="_"
                            cursorColor="#14fecdff"
                            loop={1}
                        />
                    </p>
                    <p className="">
                        <Typewriter
                            words={["> Waiting for User Input . . . "]}
                            cursorStyle="_"
                            cursorColor="#14fecdff"
                            loop={1}
                            typeSpeed={1}
                        />
                    </p>
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
        </div>
    )
}

export default Init;