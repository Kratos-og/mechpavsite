import { useState } from "react";
import { TransactionUnspentOutput } from "@emurgo/cardano-serialization-lib-browser";
import SpinnerSm from "@/components/UI/SpinnerSm";

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
            const utxos = await walletInstance.getUtxos();
            const usedAddr = await walletInstance.getUsedAddresses();
            const unUsedAddr = await walletInstance.getUnusedAddresses();
            let resUtxos = utxos;
            if (wallet == 'eternl') {
                let collateral = await walletInstance.getCollateral();
                resUtxos = [...utxos, ...collateral]
            }
            const validTokens = getValidTokens(resUtxos, ["29cd56a575e5c1dc3a03ff687f0651d728b28fee52a932b508242b4a"]);
            props.onConnect({ name: wallet, address: [...usedAddr, ...unUsedAddr], utxos: resUtxos });
            props.setAssets(validTokens);
            setLoading(false);
        }
        catch (err) {
            setWalletError(err.message)
            setLoading(false)
        }
    }

    const getValidTokens = (utxos, policies) => {
        const totalAmount = combineAmounts(utxos);
        const tokens = [];
        for (const policy of policies) {
            const policyStuff = totalAmount.multiasset?.[policy];
            if (policyStuff) {
                for (const name in policyStuff) {
                    tokens.push(`${policy}.${name}`)
                }
            }
        }
        return tokens;
    }

    const combineAmounts = (utxos) => {
        const jsUtxos = utxos.map(x => utxoToJsObject(TransactionUnspentOutput.from_hex(x)));
        const amounts = jsUtxos.map(x => x.output.amount);
        let totalCoin = 0;
        const assets = {};

        for (const amount of amounts) {
            totalCoin += parseInt(amount.coin);
            if (amount.multiasset) {
                for (const policy in amount.multiasset) {
                    if (!assets[policy]) {
                        assets[policy] = {}
                    }
                    for (const token in amount.multiasset[policy]) {
                        if (!assets[policy][token]) {
                            assets[policy][token] = amount.multiasset[policy][token]
                        }
                        else {
                            assets[policy][token] =
                                (parseInt(assets[policy][token]) + parseInt(amount.multiasset[policy][token])).toString()
                        }
                    }
                }
            }
        }

        return {
            coin: totalCoin.toString(),
            multiasset: assets
        }
    }

    const utxoToJsObject = (utxo) => {
        return {
            input: utxo.input()?.to_js_value(),
            output: JSON.parse(utxo.output().to_json())
        }
    }

    return (
        <div className="absolute text-black text-sm  w-[350px] ">

            {loading ?
                <div className="flex justify-center scale-150">
                    <SpinnerSm />
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