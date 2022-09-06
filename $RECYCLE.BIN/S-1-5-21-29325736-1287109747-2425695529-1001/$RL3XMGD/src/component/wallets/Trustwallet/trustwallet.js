import React from "react";
import "../style.css";
import WalletConnectLogo from "../../../assests/imgs/walletconnect.svg";
import { useMoralis } from "react-moralis";

function Trustwallet(props) {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const authWalletConnect = async () => {
    if (!isAuthenticated) {
      await authenticate({
        provider: "walletconnect",
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      })
        .then(function (user) {
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className=" wrapper-box ">
        <div className=" provider-cont " onClick={() => authWalletConnect()}>
          <div className=" w-icon ">
            <img src={WalletConnectLogo} alt="WalletConnect" width={40} height={40}/>
          </div>
          <div className=" p-name ">WalletConnect</div>
        </div>
      </div>
    </>
  );
}

export default Trustwallet;
