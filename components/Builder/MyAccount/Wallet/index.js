import { useState } from "react";
import SpinnerSm from "@/components/UI/SpinnerSm";
import axios from "axios";

const Wallet = props => {
    const [walletError, setWalletError] = useState("");
    const [loading, setLoading] = useState(false);

    const onContinue = async (wallet) => {
        try {
            if (!window.cardano) {
                setLoading(false);
                setWalletError(`No cardano wallets found.`);
                return;
            }
            if (!window.cardano[wallet.toLowerCase()]) {
                setLoading(false);
                setWalletError(`${wallet} wallet not found.`);
                return;
            }
            setLoading(true);
            const walletInstance = await window.cardano[wallet.toLowerCase()]?.enable();
            const addr = await walletInstance.getChangeAddress();
            const nonce = await getNonce(addr);
            console.log(nonce);
            const cose = await walletInstance.signData(addr, nonce);
            addNewWallet(addr, cose);
            setLoading(false);
        }
        catch (err) {
            setWalletError(err.message)
            setLoading(false)
        }
    }

    const getNonce = async (address) => {
        try {
            const res = (await axios.post(`${process.env.NEXT_PUBLIC_PAVIA_GAME_API}/v1/wallet/old/jwt`, {
                address
            }, {
                headers: {
                    Authorization: `Bearer ${props.bearer}`
                }
            })).data;
            return res.secretMessage;
        }
        catch (err) {
            console.log(err)
        }
    }

    const addNewWallet = async (address, cose) => {
        try {
            const res = (await axios.post(`${process.env.NEXT_PUBLIC_PAVIA_GAME_API}/v1/wallet/old/jwt/confirm`, {
                address,
                cose
            }, {
                headers: {
                    Authorization: `Bearer ${props.bearer}`
                }
            })).data;
            props.onWalletaddSuccess();
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="absolute text-sm w-[350px] ">
            {loading ?
                <div >
                    {/* <SpinnerSm /> */}
                </div>
                :
                <div className="bg-white p-7">
                    <div className="font-bold uppercase mb-4 max-lg:w-full max-lg:flex justify-center">Connect wallet</div>
                    {walletError && <div className="font-bold uppercase mb-4 max-lg:w-full max-lg:flex justify-center text-xs text-red-400">ERROR: {walletError}</div>}
                    <div className='py-4 w-full flex flex-col gap-4 h-[350px] overflow-y-auto overflow-x-hidden custom-scroll pr-3'>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('lace')}>
                            <img src='/assets/images/wallets/lace.svg' className='w-4' />
                            <div>Lace Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('eternl')}>
                            <img src='/assets/images/wallets/eternl.png' className='w-4' />
                            <div>Eternl Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('nami')}>
                            <img src='/assets/images/wallets/nami.svg' className='w-4' />
                            <div>Nami Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('flint')}>
                            <img src='/assets/images/wallets/flint.svg' className='w-4' />
                            <div>Flint Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('gero')}>
                            <img src='/assets/images/wallets/gero.ico' className='w-4' />
                            <div>Gero Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('typhoncip30')}>
                            <img src='/assets/images/wallets/typhon.png' className='w-4' />
                            <div>Typhon Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('vespr')}>
                            <img src='/assets/images/wallets/vespr.jpg' className='w-4' />
                            <div>Vespr Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2`} onClick={() => onContinue('begin')}>
                            <img src='/assets/images/wallets/begin.png' className='w-4' />
                            <div>Begin Wallet</div>
                        </div>
                        <div className={`flex items-center gap-2  px-3 cursor-pointer transition-all will-change-transform py-2 `} onClick={() => onContinue('nufi')}>
                            <img src='/assets/images/wallets/nufi.png' className='w-4' />
                            <div>Nufi Wallet</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Wallet;