import React from "react";
import "../assets/css/style.css";
import {BsInfoCircle} from "react-icons/all"
import { IconContext } from "react-icons";
import { Tooltip } from 'antd';

function StakingFarm(props) {
  return (
    <div>
      <section className="top-banner" style={{ background:"url(imgs/bg/banner1.png)",backgroundPositon: "top center", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
      <div className="top-banner-details">
        <h2 >NNT Token</h2>
        <h4 >Hold your NNT tokens for great benefits</h4>
        <p >Token address <a href="#">0x3a2927e68749dd6ad0a568d7c05b587863c0bc10</a> </p>
        </div>
      </section>
      <section class="get-start">
        <div class="container">
          <div class="row justify-content-center">
          <div class="tab-menu-area">
          <ul class="nav nav-lend mb-3" id="pills-tab" role="tablist">
            <li class="nav-item"> <a class="nav-link " id="pills-all-bets-tab" data-toggle="pill" href="#pills-all-bets" role="tab" aria-controls="pills-all-bets" aria-selected="true">All Tab</a> </li>
            <li class="nav-item"> <a class="nav-link" id="pills-my-bets-tab" data-toggle="pill" href="#pills-my-bets" role="tab" aria-controls="pills-my-bets" aria-selected="false">Tab 1</a> </li>
            <li class="nav-item"> <a class="nav-link" id="pills-my-jackpots-tab" data-toggle="pill" href="#pills-my-jackpots" role="tab" aria-controls="pills-my-jackpots" aria-selected="false">Tab 2</a> </li>
          </ul>
        </div>
            <div class="col-lg-8 col-md-10">
              <div class="section-heading">
                <h2 class="title-center">XCAD LP Staking Farm</h2>
                <p class="text">
                  Deposit Your XCAD-BUSD PancakeSwap Liquidity Pool Tokens to
                  Earn Extra Annual Percentage Yield
                </p>
                <p class="text-white ">
                  Current APY &nbsp;{" "}
               </p>
              </div>

              <div class="row">
                <div class="col-lg-12 mb-3">
                  <div class="single-winer p-3">
                    <h2 class="text-center">470%</h2>
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-4">
                  <div class="single-winer  p-2">
                    <div class="top-area">
                      <div class="top-area-cont text-center">
                        <h4 class="name">100 days</h4>
                        <p class="text-center mb-0">Program duration</p>
                      </div>
                      <div class="right">
                        <p class="id">
                        
                        <IconContext.Provider value={{ color: "white", size:"1em",className: "global-class-name" }}>
  <div className="cursor-pointer" style={{margin:"auto 2px"}}>
  <Tooltip title="show program duration">
  <BsInfoCircle/>
  </Tooltip> 
  </div>
</IconContext.Provider>  
                    
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-winer p-2">
                    <div class="top-area">
                      <div class="top-area-cont text-center">
                        <h4 class="name">Sep 16, 2022</h4>
                        <p class="text-center mb-0">Last day to earn APY</p>
                      </div>
                      <div class="right">
                        <p class="id">
                        <IconContext.Provider value={{ color: "white", size:"1em",className: "global-class-name" }}>
                        <div className="cursor-pointer" style={{margin:"auto 2px"}}>
  <Tooltip title="show last day to earn APY">
  <BsInfoCircle/>
  </Tooltip> 
  </div>
</IconContext.Provider>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-winer p-2">
                    <div class="top-area">
                      <div class="top-area-cont text-center">
                        <h4 class="name">20 days</h4>
                        <p class="text-center mb-0">Minimum staking time</p>
                      </div>
                      <div class="right">
                        <p class="id">
                        <IconContext.Provider value={{ color: "white", size:"1em",className: "global-class-name" }}>
                        <div className="cursor-pointer" style={{margin:"auto 2px"}}>
  <Tooltip title="show minimum staking time">
  <BsInfoCircle/>
  </Tooltip> 
  </div>
</IconContext.Provider>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 pt-2 pb-2">
                  <p class="text">
                    &bull; Tokens can be staked and withdrawn at any time during the program's duration
                  </p>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-lg-6">
                  <div class="text">
                    <h4 class="name" style={{textAlign:"left"}}>
                      <a href="#"> Amount</a>
                    </h4>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="text-right">
                    <h4 class="name" style={{textAlign:"right"}}> 
                      <a href="#">Deposit Max</a>
                    </h4>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12 mb-3">
                  <div class="single-winer p-3">
                    <div class="top-area">
                      <div class="text-center  mb-0">
                        <input
                          name="depositAmount"
                          placeholder="0"
                          id="deposit-amount-StakingToken"
                          class=""
                          type="number"
                          step="any"
                          value=""
                          style={{
                            background: "none",
                            border: "none",
                            fontSize: "22px",
                            color: "#CCC",
                          }}
                        />
                      </div>
                      <div class="right">
                        <h4 class="name mb-0"> XCAD-BUSD </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-lg-12 mb-3">
                  <div class="single-winer p-3">
                    <div class="text-center  mb-0">
                      <a href="#">Connect Wallet to Stake</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mb-3 mt-3">
                <div class="col-lg-6">
                  <div class="text" style={{textAlign:"left"}}>
                    <a href="#"> Add Liquidity to get XCAD-BUSD LP Tokens</a>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="text-right" style={{textAlign:"right"}}>
                    <a href="#">Pool Info on PancakeSwap</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StakingFarm;
