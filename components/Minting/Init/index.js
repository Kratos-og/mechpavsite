import { Typewriter,useTypewriter } from "react-simple-typewriter";
import Wallet from "../Wallet";
import { useState } from "react";
import Text from "../Text"

const Init = props => {
    const [walletDetails, setWalletDetails] = useState(false);
    const [typing,setTyping] = useState({
        text1:false,
        text2:false,
        text3:false,
        text4:false,
        text5:false,
        text6:false,
    })
    const text2Handler = (data)=>{
        setTyping();
        console.log(data)
    }
    const text3Handler = (data)=>{
        setTyping({...typing, text3:true});
    }
    const text4Handler = (data)=>{
        setTyping({...typing, text4:true});
    }
    const text5Handler = (data)=>{
        setTyping({...typing, text5:true});
    }
    const text6Handler = (data)=>{
        setTyping({...typing, text6:true});
    }
    
    const [text1] = useTypewriter({
        words: ['> < STARTING . . . >'],
        loop: 1,
        onLoopDone: ()=>{setTyping()}  
      })
      console.log(typing)
    return (
        <div className="flex h-[88vh] pt-20 justify-evenly">
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
                    <p className="text-gray-500 pb-2">
                        {text1}
                    </p>
                    {typing.text1 && <Text text={"> WELCOME TO MECH PAV MINTING . . ."} speed={80} textHandler={text2Handler}/>}
                    <p className="pt-5 text-gray-500">
                    {typing.text2 && <Text text={"> < INTRO >"} speed={80} textHandler={text3Handler}/>}</p>
                    {typing.text3 && <Text text={"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque a aut fugiat labore veritatis nesciunt tempore aperiam voluptatum magnam."} speed={80} textHandler={text4Handler}/>}
                    <p className="pt-5 text-gray-500">
                    {typing.text4 && <Text text={"> < INFO >"} speed={80} textHandler={text5Handler}/>}</p>
                    {typing.text5 && <Text text={"> Waiting for User Input . . . "} speed={80} textHandler={text6Handler}/>}
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
            <div className="w-[70%] border-2 border-[#423F3E] bg-black"></div>
        </div>
    )
}

export default Init;