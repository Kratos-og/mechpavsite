import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AnimatePresence, motion } from "framer-motion";
import axios from '@/components/Common/axios';
import Crate from "../Crate";
import Text from "../Text";
import Wallet from "../Wallet";
import Buy from "../Buy";
import Confirm from "../Confirm";
import Mint from "../Mint";
import Title from "./Title";
import Start from "./Start";
import Intro from "./Intro";
import Info from "./Info";
import WalletInfo from "./WalletInfo";
import MintStatus from "./MintStatus";
import CountDetails from "./CountDetails";
import CountConfirmed from "./CountConfirmed";

const Init = (props) => {
  const [walletDetails, setWalletDetails] = useState({});
  const [mintDetails, setMintDetails] = useState()
  const [err, setErr] = useState(null)
  const [confirmedQty, setConfirmedQty] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [done, setDone] = useState(false);
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    if (walletDetails.address) {
      getStatus();
    }
  }, [walletDetails]);

  const getStatus = async () => {
    try {
      const status = (await axios.post(`/drop/65363f7d79b53e832360b33d`, {
        addresses: walletDetails?.address
      })).data;
      if (err) {
        setErr(null)
      }
      setMintDetails(status);
    }
    catch (error) {
      setErr(error?.data?.message)
    }
  }

  useEffect(() => {
    const mainPanel = document.getElementById('mainPanel');
    if (activeIndex == 11) {
      mainPanel.scroll({
        behavior: 'smooth',
        top: document.getElementById('buyPanel')?.offsetTop - 150
      })
    }
  }, [activeIndex])

  const onMintInitiate = async () => {
    setDone(true);
    try {
      let data = (await axios.post(`/buy/65363f7d79b53e832360b33d`,
        {
          utxoStrings: walletDetails.utxos,
          number: +confirmedQty,
          addresses: walletDetails?.address
        }
      )).data;
      if (err) {
        setErr(null)
      }
      const sig = await signTransaction(data?.transactionBodyHex);
      const submit = await submitTransaction(sig, data?.transactionBodyHex);
      console.log(submit);
    }
    catch (error) {
      setErr(error?.data?.message);
      return;
    }
  }

  const signTransaction = async (txHex) => {
    try {
      const walletInstance = await window.cardano[walletDetails?.name?.toLowerCase()]?.enable();
      const sig = await walletInstance.signTx(txHex, true);
      return sig;
    }
    catch (error) {
      setLoading(false);
      setStep(steps[1]);
      console.log(error)
      setErr(error?.message);
      return;
    }
  };

  const submitTransaction = async (witnessSetHex, txHex) => {
    try {
      let data = (await axios.post(`/submit`,
        {
          witnessSetHex: witnessSetHex,
          transactionHex: txHex,
        }
      )).data;
      if (err) {
        setErr(null);
      }
      return data;
    }
    catch (error) {
      setErr(error?.data?.message);
    }
  };

  return (
    <div className="flex h-[90%] items-center justify-center px-10 gap-10 relative max-md:flex-col">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -500, transition: { duration: 1 } }}
        className="bg-black w-full h-1/2 absolute top-0 z-[1]"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 500, transition: { duration: 1 } }}
        className="bg-black h-1/2 absolute bottom-0 z-[1] w-full"
      ></motion.div>
      <motion.div
        initial={{ x: 500 }}
        animate={{
          x: 0,
          transition: { delay: 2, duration: 1, ease: "easeInOut" },
        }}
        onAnimationComplete={() => setAnimDone(true)}
        className="w-[25%] max-md:w-full h-[85%] mt-5 border-2 border-[#423F3E] text-[0.65rem] font-black tracking-widest bg-black uppercase"
      >
        <Title />
        <div className="px-2 py-2 h-[90%]">
          <div className="px-3 py-2 overflow-auto custom-scroll h-full" id="mainPanel">
            <Start activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <Intro activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <Info activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div>
              {activeIndex >= 6 && !walletDetails.address && (
                <Wallet onConnect={setWalletDetails} />
              )}
            </div>
            {walletDetails.address && (
              <div>
                <WalletInfo activeIndex={activeIndex} setActiveIndex={setActiveIndex} walletDetails={walletDetails} />
                <MintStatus mintDetails={mintDetails} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                {activeIndex >= 11 && confirmedQty == 0 && (
                  <div id="buyPanel">
                    <Buy onConfirm={setConfirmedQty} mintDetails={mintDetails} />
                  </div>
                )}
              </div>
            )}
            {confirmedQty > 0 && (
              <CountDetails activeIndex={activeIndex} setActiveIndex={setActiveIndex} confirmedQty={confirmedQty} mintDetails={mintDetails} />
            )}
            {activeIndex >= 14 && confirmedQty > 0 && !confirm && (
              <Confirm confirm={setConfirm} onCancel={setConfirmedQty} />
            )}
            {confirm && (
              <>
                <CountConfirmed activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <p className="">
                  {activeIndex >= 16 && (
                    <div className="flex">
                      <Text
                        index={16}
                        onDone={setActiveIndex}
                        text={`> Creating Transaction . . .`}
                        speed={30}
                      />
                      {activeIndex == 17 && !done && (
                        <motion.p
                          initial={{ rotateZ: 0 }}
                          animate={{
                            rotateZ: [0, 45, 90, 135, 180],
                            transition: { duration: 0.4, repeat: Infinity },
                          }}
                          className="ml-3"
                        >
                          |
                        </motion.p>
                      )}
                    </div>
                  )}
                </p>
                {activeIndex >= 17 && !done && <Mint done={onMintInitiate} />}
                {done &&
                  <div className="flex">
                    <Text
                      index={17}
                      onDone={setActiveIndex}
                      text={`> Awaiting Signature . . .`}
                      speed={30}
                    />
                    {activeIndex == 18 && (
                      <motion.p
                        initial={{ rotateZ: 0 }}
                        animate={{
                          rotateZ: [0, 45, 90, 135, 180],
                          transition: { duration: 0.4, repeat: Infinity },
                        }}
                        className="ml-3"
                      >
                        |
                      </motion.p>
                    )}
                  </div>}
              </>
            )}

          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3, ease: "circOut" } }}
        className="w-3/4 h-[85%] max-md:w-full mt-5 border-2 relative border-[#423F3E] overflow-hidden bg-black max-md:hidden"
      >
        <div class="grid h-[110%] w-full absolute z-30 opacity-40">
          <div class="grid-fade"></div>
          <div class="grid-lines"></div>
        </div>
        <div className="relative z-50 h-full w-full">
          {animDone && <Crate />}
        </div>
      </motion.div>
    </div>
  );
};

export default Init;
