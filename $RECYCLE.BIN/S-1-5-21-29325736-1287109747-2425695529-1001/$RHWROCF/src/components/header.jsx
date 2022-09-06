import React, { useState } from 'react';
import "../assets/css/style.css"
import LogoImg from "../assets/images/logo.png"
import { Input, Modal } from "antd";
import MetamaskWallet from './wallets/Metamask/metamask';
import Trustwallet from './wallets/Trustwallet/trustwallet';
import FortmaticWallet from './wallets/Fortmatic/fortmatic';
import PortisWallet from './wallets/Portis/portis';
import CoinbaseWallet from './wallets/Coinbase/coinbase';
import CloverWallet from './wallets/Clover/clover';


function HeaderArea(props) {
  
  const [showMenu, setShowMenu] = useState(false)
  const [isWallet, setIsWallet] = useState(false);
  const showModal = () => {
    setIsWallet(true);
  };
  const handleOk = () => {
    setIsWallet(false);
  };
  const handleCancel= () => {
    setIsWallet(false);
  };
    return (
        <>
          <header class="header">

  <div class="mainmenu-area">
    {/* <div class="container"> */}
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light"> <a class="navbar-brand" href="index.html"> <h2>Staking App</h2> </a>
          <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  
            <div class="collapse navbar-collapse fixed-height justify-content-between"  id="main_menu">
           
           
              <ul class="navbar-nav ml-auto " >              
                <li class="nav-item dropdown"> <a class="nav-link active" href="*"> Explore</a></li>
                <li class="nav-item"> <a class="nav-link" href="/my-farms">My Farms</a></li>
                <li class="nav-item"><a class="nav-link" href="#">How It Works </a></li>
               </ul>
 
               <ul class="navbar-nav ml-auto ">
                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ETHEREUM </a>
                  <ul class="dropdown-menu" >
                    <h6 style={{padding:"10px 10px 0px 10px", color:"#036"}}>Select a Chain</h6>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Ethereum</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>BNB Chain</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Polygon</a></li>
                    <li><a class="dropdown-item" href="bonus.html"> <i class="fa fa-angle-double-right"></i>Fantom Opera</a></li>
                    <li><a class="dropdown-item" href="cart.html"> <i class="fa fa-angle-double-right"></i>Avalanche</a></li>
                    <li><a class="dropdown-item" href="faq.html"> <i class="fa fa-angle-double-right"></i>Faq</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information </a>
                  <ul class="dropdown-menu" >
                    <li><a class="dropdown-item" href="about.html"> <i class="fa fa-angle-double-right"></i>About</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Help Center</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Security</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Twitter</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Telegram</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Youtube</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>App Status</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="fa fa-angle-double-right"></i>Terms of Service</a></li>
                  </ul>
                </li>
                <li>
                <div  onClick={showModal}>
                {/*  onClick={showModal} */}
              <a href="#" class="mybtn1"  data-toggle="modal" data-target="#signin"> Connect Wallet</a>
               </div>
                </li>
              </ul>
              
              </div>
              <Modal
            title="Connect Wallet"
            visible={isWallet}
            onOk={handleOk}
            onCancel={handleCancel}>
              <div className="wallet-cont">
                  <MetamaskWallet />

                  <Trustwallet />

                  <FortmaticWallet />

                  <PortisWallet />

                  <CoinbaseWallet />

                  <CloverWallet />
                </div>
          </Modal>
          </nav>
        </div>
      </div>
    </div>
  {/* </div> */}

</header>  
        </>
    );
}

export default HeaderArea;