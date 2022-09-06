import React,{useEffect, useState} from 'react';
import "./login.css"
import {Link, useNavigate} from "react-router-dom";
import { Input, Modal } from "antd";
import MetamaskWallet from '../wallets/Metamask/metamask';
import Trustwallet from '../wallets/Trustwallet/trustwallet';
import FortmaticWallet from '../wallets/Fortmatic/fortmatic';
import PortisWallet from '../wallets/Portis/portis';
import CoinbaseWallet from '../wallets/Coinbase/coinbase';
import CloverWallet from '../wallets/Clover/clover';
import Account from "../Account/Account";

export default function LoginPage ({props}) {
   const [isPassword, setIsPassword] = useState(false);
   const [showConnectWallet, setShowConnectWallet] = useState(false);
   const [address, setAddress] = useState("");
   const [balance, setBalance] = useState(null);
   const [isWallet, setIsWallet] = useState(false);
    const navigate = useNavigate();

    function moveHome () {
        navigate("/home");
    }
    const showModal= () => {
      setIsPassword(true);
    };
    const handleOk = () => {
      setIsPassword(false);
    };
    const handleCancel = () => {
      setIsPassword(false);
    };
  
    const clearLocal = () => {
      localStorage.clear();
      sessionStorage.clear();
    };
    const WalletConnect = async () => {
      clearLocal();
      setShowConnectWallet(true);
    };

     //ownership
  const showModal1 = () => {
    setIsWallet(true);
  };
  const handleOk1 = () => {
    setIsWallet(false);
  };
  const handleCancel1 = () => {
    setIsWallet(false);
  };
  
return(
    <>
    <div className='body'>
    <div class="wrapper">
         <div class="title">
            Admin Login
         </div>
         <p className='description'>
            Hey, connect your wallet first and enter your details to get sign in to your account.</p>

{/* <button className='connect-wallet-button bold-500' onClick={showModal1}>Connect Wallet</button> */}
          <Account/>
          <Modal
            title="Connect Wallet"
            visible={isWallet}
            onOk={handleOk1}
            onCancel={handleCancel1}>
              <div className="flex wrap justify-center wallet-cont">
                  <MetamaskWallet />

                  <Trustwallet />

                  <FortmaticWallet />

                  <PortisWallet />

                  <CoinbaseWallet />

                  <CloverWallet />
                </div>
          </Modal>
         <div className='underline'></div>
         <form action="#">
            <div class="field">
               <input type="text" required/>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div>
               <div class="pass-link" onClick={showModal}>
          
          <a> Forget password?</a>
          
       </div>
               <Modal
            title="Enter your email address "
            visible={isPassword}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Submit"
          >
             <Input placeholder="Enter your email address to get verification link" />
            </Modal>
            </div>

            <div class="field">
               <input type="submit" value="Login" onClick={moveHome}/>
            </div>           
         </form>
      </div>
      </div>
    </>
);
}