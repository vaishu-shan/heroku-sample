import React from "react";
import CoinbaseImg from "../../../assests/imgs/coinbase.png";
import "../style.css";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { useWeb3React } from "@web3-react/core";

const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "coinbase-demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

function CoinbaseWallet(props) {
  const { activate } = useWeb3React();

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  return (
    <>
      <div className=" wrapper-box">
        <div
          className=" provider-cont "
          onClick={() => {
            activate(walletlink);
            setProvider("coinbaseWallet");
          }}
        >
          <div className=" w-icon ">
            <img src={CoinbaseImg} alt="Coinbase" width={40} height={40}/>
          </div>
          <div className=" p-name ">Coinbase</div>
        </div>
      </div>
    </>
  );
}

export default CoinbaseWallet;

// activate(walletlink);
// setProvider("coinbaseWallet");


  // Use eth_requestAccounts
  // window.ethereum.request({ method: 'eth_requestAccounts' }).then(response => {
  //     const accounts = response;
  //     console.log(`User's address is ${accounts[0]}`)

  // Optionally, have the default account set for web3.js
  //     window.web3.eth.defaultAccount = accounts[0]
  //   })

  // Alternatively, you can use ethereum.enable()
  //   window.ethereum.enable().then((accounts) => {
  //     console.log(`User's address is ${accounts[0]}`)
  //     window.web3.eth.defaultAccount = accounts[0]
  //   })