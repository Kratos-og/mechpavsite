
import { useRef, useState } from "react";
import axios from '@/components/Common/axios';
import Scene from "@/components/Unboxing/Scene";
import { Canvas } from "@react-three/fiber";
import Slides from "@/components/Unboxing/Slides";
import SpinnerSm from "@/components/UI/SpinnerSm";
import dynamic from 'next/dynamic';

const Unbox = props => {
    const [assets, setAssets] = useState([]);
    const [selected, setSelected] = useState([]);
    const [walletDetails, setWalletDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const interval = useRef(null);
    const [nftData, setNftData] = useState(null);
    const [mintSuccess, setMintSuccess] = useState(false);
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
                const status = (await axios.post(`/drop/65363f7d79b53e832360b33d`, {
                    addresses: walletDetails?.address,
                    utxoStrings: walletDetails.utxos,
                })).data;
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

    return (
        <div className="w-full h-screen relative flex items-center justify-center ">
            <div className="absolute top-16 left-20">
                <div className="text-[40px] font-bold uppercase tracking-wider">Unbox Mech Crates</div>
                {walletDetails && <div className="text-sm font-semibold uppercase tracking-wider">Crates Owned: <span className="text-pavia-green">{assets.length}</span></div>}
            </div>
            {/* <div className="w-full relative border flex items-center justify-center border-gray-700 h-[600px]">
                <div className="cursor-pointer absolute w-[95%] left-7 font-bold -top-6 p-5 border bg-white text-black uppercase">Mech Crates Unboxing</div>
                {
                    !assets.length ? <Wallet setAssets={setAssets} onConnect={setWalletDetails} /> :
                        <div className="w-full h-full">
                            <div className="flex flex-wrap gap-5 w-full h-full overflow-y-auto custom-scroll mt-5 items-center">
                                {assets.map((item, i) => <Crate item={item} onClick={() => onCrateSelect(item)} />)}
                            </div>
                            <button onClick={onMintInitiate} disabled={!selected.length} className="absolute disabled:border-gray-600 disabled:hover:bg-black disabled:hover:text-gray-600 disabled:hover:cursor-not-allowed disabled:text-gray-600 font-bold bottom-5 right-5 px-8 py-3 border cursor-pointer hover:bg-white hover:text-black transition-all">
                                Continue <span className="ml-2">&rarr;</span>
                            </button>
                        </div>
                }
            </div> */}
            <Canvas>
                <Scene walletDetails={walletDetails} assets={assets} />
            </Canvas>
            {!walletDetails && <Wallet setAssets={setAssets} onConnect={setWalletDetails} />}
            {assets.length && walletDetails &&
                <>
                    <div className="absolute -mt-40 z-50 w-full flex items-center justify-center">
                        <Slides assets={assets} onAdd={onCrateSelect} selected={selected} onRemove={onCrateRemoved} />
                    </div>
                    <div className="absolute bottom-0 w-full h-20 bg-white/40 flex items-center justify-between px-10">
                        <div className="uppercase tracking-wider font-semibold text-sm">Selected Crates: <span className="text-pavia-green">{selected.length}</span></div>
                        {
                            !loading ? <button onClick={onMintInitiate} disabled={!selected.length} className="uppercase px-10 disabled:text-white py-3 disabled:bg-gray-700 disabled:cursor-not-allowed bg-white cursor-pointer text-black tracking-widest font-medium">
                                Unbox Crates
                            </button> :
                                <SpinnerSm />
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Unbox;