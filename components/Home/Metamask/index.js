import React from 'react'
import MetaMaskOnboarding from '@metamask/onboarding';

export default function Metamask() {
    const [buttonText, setButtonText] = React.useState('Install MetaMask');
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const onboarding = React.useRef();

    React.useEffect(() => {
        if (!onboarding.current) {
          onboarding.current = new MetaMaskOnboarding();
        }
      }, []);

      React.useEffect(() => {
        console.log("first")
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
          if (accounts.length > 0) {
            setButtonText(accounts)
            setDisabled(true);
            onboarding.current.stopOnboarding();
          } else {
            setButtonText('Connect Wallet')
            setDisabled(false);
          }
        }
      }, [accounts]);

    let connectMetaMask = async() => {
        if(window.ethereum && window.ethereum?.isMetaMask && MetaMaskOnboarding.isMetaMaskInstalled()){
            await window.ethereum.enable();
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((newAccounts) => setAccounts(newAccounts));
        }else{
            setButtonText('Installation in progress . . . !')
            onboarding.current.startOnboarding();
        }
    }
  return (
    <div className='pointer-events-auto text-[0.7rem] absolute top-5 right-5 '>
        <div className='flex justify-center items-center gap-4'> 
        <button className='bg-red-600 p-3 rounded-md disabled:opacity-40' onClick={connectMetaMask} disabled={isDisabled}>{buttonText}</button>
      <div className='w-6 '>
      {isDisabled ? <img src="assets\images\wallets\connect.png" alt="connected_img" />:<img src="assets\images\wallets\disconnect.png" alt="disconnected_img" />}
      </div>
        </div>
      
    </div>
  )
}
