import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { AiFillCloseSquare } from "react-icons/ai";
import SpinnerSm from "@/components/UI/SpinnerSm";
import { minifyAddress } from "@/components/Common/utils";

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
    <li key={index} className="lg:mt-2 mt-1 list-disc max-md:text-xs">
      {minifyAddress(address, 12)}
    </li>
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
              <div className="text-7xl tracking-widest font-bold text-black lg:pt-5 max-lg:text-2xl pb-10">
                MY ACCOUNT
              </div>
              <div className="text-black flex w-full max-lg:h-[85%] justify-between text-sm max-lg:flex-col break-words">
                <div>
                  <div className="uppercase tracking-wider font-semibold">Linked wallets</div>
                  {wallets}
                  {!addWallet && (
                    <button
                      className="lg:w-52 w-52 mt-10 lg:py-9 py-7 text-sm newButton relative text-black group font-light "
                      onClick={() => setAddWallet(true)}
                    >
                      <div className="frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300">
                        <div className="lines"></div>
                        <div className="angles"></div>
                        <div className="bg-black/5 h-full w-full flex justify-center items-center gap-3">
                          <div>Add Wallet</div>
                        </div>
                      </div>
                    </button>
                  )}
                </div>
                {addWallet && (
                  <>

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
