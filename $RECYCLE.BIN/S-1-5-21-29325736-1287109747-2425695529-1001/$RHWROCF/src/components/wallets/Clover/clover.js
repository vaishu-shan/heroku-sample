import React from "react";
import "../wallet.css";
import CloverImg from "../../../assets/images/wallet/clover.png";
import Web3 from "web3";

function CloverWallet(props) {
  const cloverhandle = async () => {
    const web3 = new Web3("https://rpc.clover.finance");
    const account = await web3.eth.getAccounts();
    var acc = account[0];
    const balance = await web3.eth.getBalance(acc);    
    console.log(account[0]);
    console.log(balance);
  };
  return (
    <>
      <div className="wrapper-box">
        <div className=" provider-cont " onClick={() => cloverhandle()}>
          <div className=" w-icon ">
            <img src={CloverImg} alt="Clover" width={50} height={50}/>
          </div>
          <div className=" p-name ">Clover</div>
        </div>
      </div>
    </>
  );
}

export default CloverWallet;
