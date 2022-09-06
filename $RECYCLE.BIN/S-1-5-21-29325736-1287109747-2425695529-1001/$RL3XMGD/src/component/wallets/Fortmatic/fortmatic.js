import React from "react";
import "../style.css";
import FortmaticImg from "../../../assests/imgs/fortmatic.png";
import Fortmatic from "fortmatic";
import Web3 from "web3";

function FortmaticWallet(props) {
  const ftmhandler = () => {
    const fm = new Fortmatic("pk_live_9415C94725DB3C0A");
    window.web3 = new Web3(fm.getProvider());
    window.web3.currentProvider.enable();

    window.web3.eth.getAccounts((error, accounts) => {
      if (error) throw error;
      console.log(accounts);
    });
  };

  return (
    <>
      <div className=" wrapper-box">
        <div className=" provider-cont " onClick={() => ftmhandler()}>
          <div className=" w-icon ">
            <img src={FortmaticImg} alt="Fortmatic" width={40} height={40} />
          </div>
          <div className=" p-name ">Fortmatic</div>
        </div>
      </div>
    </>
  );
}

export default FortmaticWallet;

//   // Legacy dApp browsers which web3 is still being injected
//   if (typeof web3 !== 'undefined') {
//     // Use injected provider
//     // eslint-disable-next-line no-undef
//     window.web3 = new Web3(web3.currentProvider);
//   } else {
//     // Use Fortmatic provider
//     window.web3 = new Web3(fm.getProvider());
//   }
