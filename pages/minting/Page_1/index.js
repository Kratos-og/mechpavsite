import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Login from "../Login";
import Wallet from "../../../components/Minting/Wallet";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);
  const [walletConnection, setWalletConnection] = useState(false);
  const IsLoginHandler = (data) => {
    setIsLogin(data);
  };
  const WalletConnectionHandler = (data) => {
    setWalletConnection(data);
  };
  return (
    <div className="h-screen " id="cont">
      <div className="flex h-[88vh] pt-20 justify-evenly">
        <div className="w-[25%] border-2 border-[#423F3E] text-[0.65rem] font-black tracking-widest uppercase">
          <p className=" text-xs border-b-2 border-[#423F3E] p-5 text-[#14fecdff]">
            <Typewriter
              words={["MECH PAVS", "MECH MINTING STARTED . . . "]}
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
                words={["> Waiting for User . . . "]}
                cursorStyle="_"
                cursorColor="#14fecdff"
                loop={1}
                typeSpeed={1}
              />
            </p>
            {isLogin && (
              <div>
                <p className="pb-5 text-[#14fecdff]">
                  <Typewriter
                    words={["> login successful . . ."]}
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
                    words={["> Waiting for wallet connection . . . "]}
                    cursorStyle="_"
                    cursorColor="#14fecdff"
                    loop={1}
                    typeSpeed={1}
                  />
                </p>
                {walletConnection && (
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
            )}
          </div>
          {/* login */}
          {isLogin ? (
            walletConnection ? null : (
              <Wallet WalletConnectionHandler={WalletConnectionHandler} />
            )
          ) : (
            <Login IsLoginHandler={IsLoginHandler} />
          )}
        </div>
      </div>
    </div>
  );
}
