import React, { useRef, useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import Web3 from "web3";

export default function Metamask() {
  const [buttonText, setButtonText] = React.useState("Install MetaMask");
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();

  React.useEffect(() => {
    const getUserData = window.localStorage.getItem("USER_WALLETS");
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
    !getUserData ? null : setAccounts(getUserData);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("USER_WALLETS", accounts);
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(accounts);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText("Connect Wallet");
        setDisabled(false);
      }
    }
  }, [accounts]);

  let connectMetaMask = async () => {
    if (
      window.ethereum &&
      window.ethereum?.isMetaMask &&
      MetaMaskOnboarding.isMetaMaskInstalled()
    ) {
      await window.ethereum.enable();
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      setButtonText("Installation in progress . . . !");
      onboarding.current.startOnboarding();
    }
  };

  async function disconnectWallet(){
    window.localStorage.removeItem("USER_WALLETS");
    setButtonText("Connect Wallet");
    setDisabled(false)
  }

  return (
    <div className="pointer-events-auto text-[0.7rem] absolute top-5 right-5 ">
<div className="flex justify-center items-center gap-4">
        <button
          className="bg-red-600 p-3 rounded-md disabled:opacity-80"
          onClick={connectMetaMask}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
        <button className="w-6 ">
          {isDisabled && <img src="assets\images\wallets\disconnect.png" alt="disconnected_img" onClick={disconnectWallet}/>}
        </button>
      </div>
    </div>
  );
}
