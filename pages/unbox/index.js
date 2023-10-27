import Crate from "@/components/Unboxing/Crate";
import Wallet from "@/components/Unboxing/Wallet";
import { useState } from "react";
import axios from '@/components/Common/axios';

const Unbox = props => {
    const [assets, setAssets] = useState([]);
    const [selected, setSelected] = useState([]);
    const [walletDetails, setWalletDetails] = useState(null);

    const onCrateSelect = (crateId) => {
        setSelected([...selected, crateId]);
    }

    const onMintInitiate = async () => {
        try {
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

                }
            }
        }
        catch (error) {
            console.log(error)
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

    return (
        <div className="w-full min-h-screen p-20">
            <div className="w-full relative border flex items-center justify-center border-gray-700 h-[600px]">
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
            </div>

        </div>
    )
}

export default Unbox;