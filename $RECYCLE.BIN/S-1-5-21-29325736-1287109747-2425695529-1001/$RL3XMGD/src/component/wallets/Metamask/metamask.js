import React, { useEffect, useState } from "react";
import "../style.css";
import Web3 from "web3";
import { ethers } from "ethers";
import MetaMaskLogo from "../../../assests/imgs/metamask.svg";

function MetamaskWallet(props) {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);
  // const [showConnectWallet, setShowConnectWallet] = useState(false);

  //metamask connect
  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // debugger;
        // setdata(ethers.utils.formatEther(balance));
        setBalance(ethers.utils.formatEther(balance));
      });
  };

  const accountChangeHandler = (account) => {
    setAddress(account);
    getbalance(account);
  };
  console.log(address, "address");
  console.log(balance, "balance");

  // swtich chain
  const web3 = new Web3(window.ethereum);
  const getNetworkId = async () => {
    const currentChainId = await web3.eth.net.getId();
    return currentChainId;
  };
  const swichNetwork = async (chainId) => {
    const currentChainId = await getNetworkId();
    if (currentChainId !== chainId) {
      try {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(chainId) }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          alert("add this chain id");
        }
      }
    }
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
  };

  useEffect(() => {
    window.ethereum.on("chainChanged", networkChanged);
    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);
  return (
    <>
      <div className=" wrapper-box">
        <div className=" provider-cont " onClick={() => btnhandler()}>
          <div className=" w-icon ">
            <img src={MetaMaskLogo} alt="MetaMask" width={35} height={35}/>
          </div>
          <div className=" p-name ">MetaMask</div>
        </div>
      </div>
    </>
  );
}

export default MetamaskWallet;
