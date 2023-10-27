import { useState } from "react";
import { TransactionUnspentOutput } from "@emurgo/cardano-serialization-lib-browser";
import { Lucid, C } from "lucid-cardano";

const Wallet = props => {
    const [walletError, setWalletError] = useState("");
    const [loading, setLoading] = useState(false);
    const [wallet, setWallet] = useState(null);

    const onWalletSelect = async (wallet) => {
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
            const validTokens = getValidTokens(utxos, ["29cd56a575e5c1dc3a03ff687f0651d728b28fee52a932b508242b4a"]);
            console.log(validTokens)
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
        <div className="">
            <div className="font-bold uppercase mb-4">Connect wallet to continue</div>
            <div className='py-4 flex flex-col gap-4 h-[350px] overflow-y-auto overflow-x-hidden custom-scroll pr-3'>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('lace')}>
                    <img src='/assets/images/wallets/lace.svg' className='w-4' />
                    <div>Lace Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('eternl')}>
                    <img src='/assets/images/wallets/eternl.png' className='w-4' />
                    <div>Eternl Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('nami')}>
                    <img src='/assets/images/wallets/nami.svg' className='w-4' />
                    <div>Nami Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('flint')}>
                    <img src='/assets/images/wallets/flint.svg' className='w-4' />
                    <div>Flint Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('gero')}>
                    <img src='/assets/images/wallets/gero.ico' className='w-4' />
                    <div>Gero Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('typhoncip30')}>
                    <img src='/assets/images/wallets/typhon.png' className='w-4' />
                    <div>Typhon Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('vespr')}>
                    <img src='/assets/images/wallets/vespr.jpg' className='w-4' />
                    <div>Vespr Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('begin')}>
                    <img src='/assets/images/wallets/begin.png' className='w-4' />
                    <div>Begin Wallet</div>
                </div>
                <div className='flex items-center gap-2 hover:bg-white hover:text-black px-3 cursor-pointer transition-all will-change-transform py-2' onClick={() => onWalletSelect('nufi')}>
                    <img src='/assets/images/wallets/nufi.png' className='w-4' />
                    <div>Nufi Wallet</div>
                </div>
            </div>
        </div>
    )
}

export default Wallet;