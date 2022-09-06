import React, { useEffect, useState } from 'react';
import MetamaskImg from "../../assests/imgs/Connect-Metmask.png";
import Web3 from "web3";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import "./metamask.css"

function Metamask(props) {
    const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();
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

	const signout = () => {
		localStorage.clear();
		setLoggedIn(false);
		navigate("/");
	};
    return (
        <div>            
            <div className="flex cursor-pointer" onClick={btnhandler} style={{borderBottom:"2px solid lightgray",display:"block", margin:"auto",width:"90%"}}>
              {/* <img src={MetamaskImg} alt="metamask" width={310} style={{display:"block", margin:"10px auto 30px"}}/> */}
              <div class="field">
               <button className="connect-btn cursor-pointer" style={{display:"block", margin:"10px auto 30px"}}>Connect Wallet</button>
            </div>
            </div>
       
        </div>
    );
}

export default Metamask;