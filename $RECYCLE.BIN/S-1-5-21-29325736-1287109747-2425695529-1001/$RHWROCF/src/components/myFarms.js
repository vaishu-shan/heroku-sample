import React from 'react';
import WalletVector from "../assets/images/wallet/light-wallet.png"
import LiveFarms from './liveFarms';

function MyFarms(props) {
    const wallet = false;
    return (
        <div >
        <section className='my-farms'>
        <div class="container">
        <div className="section-heading">
            <div className="sub-title" style={{textAlign:"left"}}>My Farms</div>
          </div>
            {wallet ? <>
            <LiveFarms/>
            </> : <>
          <div className='without-wallet'>
            <img src={WalletVector} alt=" " width={85} height={85}/>
            <h4 style={{paddingTop:"15px"}}>Connect your wallet to see list of your farms</h4>
            <p style={{paddingTop:"10px",fontSize:"18px"}}>We will show all the farms for an address,<br/> no matter what chain you connected to</p>
            <div style={{paddingTop:"10px"}}>
                {/*  onClick={showModal} */}
              <a href="#" class="mybtn1"  data-toggle="modal" data-target="#signin"> Connect Wallet</a> 
              </div>
          </div>
            </>}
            </div>
        </section>
        </div>
    );
}

export default MyFarms;