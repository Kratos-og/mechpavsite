
import { useRef, useState } from "react";
import axios from '@/components/Common/axios';
import Scene from "@/components/Unboxing/Scene";
import { Canvas } from "@react-three/fiber";
import Slides from "@/components/Unboxing/Slides";
import SpinnerSm from "@/components/UI/SpinnerSm";
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion'
import Success from "@/components/Unboxing/Success";

const Unbox = props => {
    const [assets, setAssets] = useState([]);
    const [selected, setSelected] = useState([]);
    const [walletDetails, setWalletDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const interval = useRef(null);
    const [nftData, setNftData] = useState(null);
    const [mintSuccess, setMintSuccess] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [mintStatus, setMintStatus] = useState();

    const Wallet = dynamic(
        () => import('../../components/Unboxing/Wallet'),
        { ssr: false }
    );
    const onCrateSelect = (crateId) => {
        setSelected([...selected, crateId]);
    }

    const onCrateRemoved = (crateId) => {
        let modSelected = selected.filter(item => item != crateId);
        setSelected(modSelected)
    }

    const onMintInitiate = async () => {
        try {
            setLoading(true);
            setConfirmation(false);
            let data = (await axios.post(`/buy/653a351e79b53e832360b35b`,
                {
                    utxoStrings: walletDetails.utxos,
                    addresses: walletDetails?.address,
                    number: selected.length,
                    options: {
                        cratesToBurn: selected
                    }
                }
            )).data;
            const sig = await signTransaction(data?.transactionBodyHex);
            if (sig) {
                let submit = await submitTransaction(sig, data?.transactionBodyHex);
                if (submit) {
                    initStatusCheck();
                }
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false);
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
            console.log(error)
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
            return data;
        }
        catch (error) {
        }
    };

    const initStatusCheck = () => {
        interval.current = setInterval(async () => {
            try {
                const status = (await axios.post(`/drop/653a351e79b53e832360b35b`, {
                    addresses: walletDetails?.address,
                    utxoStrings: walletDetails.utxos,
                })).data;
                setStatus(status.state);
                if (status.state && status.state == 'None') {
                    clearInterval(interval.current);
                    getNftData();
                }
                else if (status.state && status.transactionId) {
                    window['transactionId'] = status.transactionId;
                }
            }
            catch (error) {
                setErr(error?.data?.message);
            }
        }, 10000)
    }

    const getNftData = async () => {
        try {
            const data = (await axios.get(`/tokens/${window['transactionId']}`)).data;
            if (data.tokens) {
                setNftData(data.tokens);
                setMintSuccess(true);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const setStatus = (status) => {
        switch (status) {
            case "Pending payment":
                setMintStatus("Awaiting Payment");
                break;
            case "Minting":
                setMintStatus("Minting mech parts");
                break;
            case "Sending Nfts":
                setMintStatus("Mech parts ready!");
                break;
            case "None":
                setMintStatus("Mech parts sent! Fetching details");
                break;
            default:
                setMintStatus(null);
        }
    }

    return (
        <div className="w-full h-screen relative overflow-hidden flex items-center justify-center ">
            <div className="absolute top-16 left-20 max-md:left-16">
                <div className="text-[40px] font-bold uppercase tracking-wider max-lg:text-2xl max-lg:mt-12 mt-2">Unbox Mech Crates</div>
                {walletDetails && <div className="text-sm font-semibold uppercase tracking-wider">Crates Owned: <span className="text-pavia-green">{assets.length}</span></div>}
            </div>
            <Canvas>
                <Scene walletDetails={walletDetails} assets={assets} />
            </Canvas>
            {!walletDetails && <Wallet setAssets={setAssets} onConnect={setWalletDetails} />}
            {assets.length && walletDetails ?
                <>
                    {!confirmation ?
                        <>
                            <div className="absolute -mt-40 z-50 w-full flex items-center justify-center">
                                {!loading ? <Slides assets={assets} onAdd={onCrateSelect} selected={selected} onRemove={onCrateRemoved} confirmation={confirmation} />
                                    : <div className="flex flex-col justify-center items-center gap-1">
                                        <SpinnerSm />
                                        {mintStatus && <div className="text-sm font-medium">Status: <span className="text-pavia-green">{mintStatus}</span></div>}
                                    </div>}

                            </div>
                            <div className="absolute bottom-0 w-full h-20 bg-white/40 flex items-center justify-between px-10 max-md:text-xs">
                                <div className="uppercase tracking-wider font-semibold text-sm">Selected Crates: <span className="text-pavia-green">{selected.length}</span></div>
                                {
                                    !loading ? <button onClick={() => setConfirmation(true)} disabled={!selected.length} className="uppercase px-10 max-md:px-2 disabled:text-white py-3 disabled:bg-gray-700 disabled:cursor-not-allowed bg-white cursor-pointer text-black tracking-widest font-medium max-md:text-sm">
                                        Unbox Crates
                                    </button> :
                                        <div><SpinnerSm /></div>
                                }
                            </div>
                        </>
                        :
                        <div className="flex absolute flex-col gap-6 border-2 bg-white text-black p-6 w-[350px]">
                            <div className="text-2xl font-bold uppercase tracking-wider">Unbox Confirm</div>
                            <div className="text-sm">You have selected <span className="font-medium">{selected.length}x {selected.length == 1 ? 'Crate' : 'Crates'}</span> to be unboxed. Do you want to continue? </div>
                            <div className="flex flex-col gap-2 justify-around">
                                <button onClick={() => setConfirmation(false)} className="bg-gray-600/75 hover:bg-gray-600/60 transition-all text-white px-4 py-3">CANCEL</button>
                                <button onClick={onMintInitiate} className="bg-pavia-green text-white font-bold px-4 py-3">CONFIRM</button>
                            </div>
                        </div>}
                </>
                : null
            }

            <AnimatePresence>
                {
                    mintSuccess &&
                    <motion.div className="w-screen h-screen bg-white absolute z-50" initial={{ y: '100%' }} animate={{ y: 0, transition: { delay: 2, duration: 0.25 } }}>
                        <Success nftData={nftData} selected={selected} />
                    </motion.div>
                }
            </AnimatePresence>
        </div >
    )
}

export default Unbox;