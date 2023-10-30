import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { AiFillCloseSquare } from "react-icons/ai";
import SpinnerSm from "@/components/UI/SpinnerSm";

export default function MyAccount(props) {
  const [loading, setLoading] = useState(false);
  const [walletError, setWalletError] = useState("");
  const [addWallet, setAddWallet] = useState(false);
  const WalletAddresses = [
    "addr1qxzt0ckzjztfn3mv0hyzapet52rscfx22upwldfu4ezgf2raqxk5aasq2rgpjzq28msl0ezpz5wcuvhykcsl0lcwqsws299f9c",
    "addr1qxzt0ckzjztfn3mv0hyzapet52rscfx22upwldfu4ezgf2raqxk5aasq2rgpjzq28msl0ezpz5wcuvhykcsl0lcwqsws299f9c",
    "addr1qxzt0ckzjztfn3mv0hyzapet52rscfx22upwldfu4ezgf2raqxk5aasq2rgpjzq28msl0ezpz5wcuvhykcsl0lcwqsws299f9c",
    "addr1qxzt0ckzjztfn3mv0hyzapet52rscfx22upwldfu4ezgf2raqxk5aasq2rgpjzq28msl0ezpz5wcuvhykcsl0lcwqsws299f9c",
    "addr1qxzt0ckzjztfn3mv0hyzapet52rscfx22upwldfu4ezgf2raqxk5aasq2rgpjzq28msl0ezpz5wcuvhykcsl0lcwqsws299f9c",
  ];

  const onWalletSelect = async (wallet) => {
    try {
      setLoading(true);
      const walletInstance = await window.cardano[
        wallet.toLowerCase()
      ]?.enable();
      setLoading(false);
    } catch (err) {
      setWalletError(err.message);
      setLoading(false);
    }
  };
  const wallets = WalletAddresses.map((address, index) => (
    <div key={index} className="lg:mt-8 mt-2 max-md:text-xs">
      {address}
    </div>
  ));

  return (
    <AnimatePresence>
      {props.activeTab == 2 && (
        <>
          <motion.div
            initial={{ x: -1500 }}
            animate={{
              x: 1600,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
            }}
            className="w-screen absolute top-0 h-screen bg-black z-10"
          ></motion.div>
          <motion.div
            initial={{ x: -1500 }}
            animate={{
              x: 0,
              transition: { delay: 0, duration: 1, ease: "easeInOut" },
            }}
            exit={{
              x: -1500,
              transition: { delay: 0, duration: 0, ease: "easeInOut" },
            }}
            className="absolute w-screen h-screen bg-white top-0"
          >
            <div className="w-full h-full lg:p-20 p-10">
              <div className="text-7xl tracking-widest font-black text-black  lg:pt-5 max-lg:text-2xl pb-10">
                MY WALLETS
              </div>
              <div className="text-black flex w-full max-lg:h-[85%] justify-between text-sm max-lg:flex-col break-words">
                <div>
                  {wallets}
                  {!addWallet && (
                    <button
                      className="lg:w-[40%] w-[80%] mt-10 lg:py-9 py-7 text-sm newButton relative text-black group 
              font-light "
                      onClick={() => setAddWallet(true)}
                    >
                      <div className="frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300">
                        <div className="lines"></div>
                        <div className="angles"></div>
                        <div className="bg-black/5 w-full h-full flex justify-center items-center gap-3">
                          <div>Add Wallet</div>
                        </div>
                      </div>
                    </button>
                  )}
                </div>
                {addWallet && (
                  <>
                    <div className="flex flex-col justify-center items-center w-full gap-1 ">
                      <button
                        className=" w-[80%] lg:py-9 py-7 text-sm newButton relative text-black group font-light"
                        onClick={() => onWalletSelect("lace")}
                      >
                        <div className="frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300">
                          <div className="lines"></div>
                          <div className="angles"></div>
                          <div className="bg-black/5 w-full h-full flex justify-center items-center gap-3">
                            <img
                              src="/assets/images/wallets/lace.svg"
                              className="w-4"
                            />
                            <div>Lace Wallet</div>
                          </div>
                        </div>
                      </button>
                      <button
                        className="w-[80%] mt-5 lg:py-9 py-7 text-sm newButton relative text-black group font-light"
                        onClick={() => onWalletSelect("eternl")}
                      >
                        <div className="frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300">
                          <div className="lines"></div>
                          <div className="angles"></div>
                          <div className="bg-black/5 w-full h-full flex justify-center items-center gap-3">
                            <img
                              src="/assets/images/wallets/eternl.png"
                              className="w-4"
                            />
                            <div>Eternl Wallet</div>
                          </div>
                        </div>
                      </button>
                      <button
                        className=" w-[80%] mt-5 lg:py-9 py-7 text-sm newButton relative text-black group font-light"
                        onClick={() => onWalletSelect("nami")}
                      >
                        <div className="frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300 ">
                          <div className="lines"></div>
                          <div className="angles"></div>
                          <div className="bg-black/5 w-full h-full flex justify-center items-center gap-3">
                            <img
                              src="/assets/images/wallets/nami.svg"
                              className="w-4"
                            />
                            <div>Nami Wallet</div>
                          </div>
                        </div>
                      </button>
                      <button
                        className="w-[80%] mt-5 lg:py-9 py-7 text-sm newButton relative text-black group font-light"
                        onClick={() => onWalletSelect("flint")}
                      >
                        <div className="frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300">
                          <div className="lines"></div>
                          <div className="angles"></div>
                          <div className="bg-black/5 w-full h-full flex justify-center items-center gap-3">
                            <img
                              src="/assets/images/wallets/flint.svg"
                              className="w-4"
                            />
                            <div>Flint Wallet</div>
                          </div>
                        </div>
                      </button>
                      <button
                        className="w-[80%] mt-5 lg:py-9 py-7 text-sm newButton relative text-black group font-light"
                        onClick={() => onWalletSelect("typhon")}
                      >
                        <div className="frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300">
                          <div className="lines"></div>
                          <div className="angles"></div>
                          <div className="bg-black/5 w-full h-full flex justify-center items-center gap-3">
                            <img
                              src="/assets/images/wallets/typhon.png"
                              className="w-4"
                            />
                            <div>Typhon Wallet</div>
                          </div>
                        </div>
                      </button>
                      {loading && (
                        <p className="text-black bg-black px-2 py-1 rounded-full absolute z-30 top-[20%] right-[20%] max-lg:top-[10%] max-lg:right-[15%]">
                          <SpinnerSm />
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>

              <button
                className="absolute top-5 right-5 text-black text-4xl"
                onClick={props.setActiveTab}
              >
                <AiFillCloseSquare></AiFillCloseSquare>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
