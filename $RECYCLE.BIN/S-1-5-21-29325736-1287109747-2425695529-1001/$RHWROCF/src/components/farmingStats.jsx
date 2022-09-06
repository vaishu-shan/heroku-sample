import React from 'react';
import "../assets/css/style.css"
import {BsInfoCircle} from "react-icons/all"
import { IconContext } from "react-icons";
import { Tooltip } from 'antd';
import StatsTable from './Statstable';

function FarmingStats(props) {
    return (
        <div>
            <section class="activities"> <img class="shape shape1" src="assets/images/people/shape1.png" alt=""/> <img class="shape shape2" src="assets/images/people/shape2.png" alt=""/> <img class="shape shape3" src="assets/images/people/shape3.png" alt=""/>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10">
        <div class="section-heading">
          <h2 class="title-center" style={{textAlign:"center"}}> LP Farming Stats </h2>
          <p class="text">Learn about the XCAD LP Staking Farm, and track its results.</p>
        </div>
      </div>
    </div>
    <div class="farm-cards mb-3">
                <div class="">
                  <div class="single-winer-stats  ">
                    <div class="top-area">
                      <div class="text-center">
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
                <div class="">
                  <div class="single-winer-stats">
                    <div class="top-area">
                      <div class=" text-center">
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
                <div class="">
                  <div class="single-winer-stats">
                    <div class="top-area">
                      <div class="text-center">
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
                <div class="">
                  <div class="single-winer-stats ">
                    <div class="top-area">
                      <div class=" text-center">
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
   {/* table */}
    <StatsTable/>
  </div>


  
</section>

<section className='prev-farms'>
  <div className='container'>
  <div class="section-heading">
          <h2 class="title-center"> Previous NNT LP Farming Programs </h2>
        </div>

        <div className='ended-farm-container-section'>
          <div className='ended-farm-container'>
            v1 NNT PancakeSwap LP Farm
          </div>
          <div className='ended-farm-container'>
            v0 NNT Uniswap LP Farm
          </div>
          <div className='ended-farm-container'>
            v5 NNT PancakeSwap LP Farm
          </div>
          <div className='ended-farm-container'>
            v1 NNT PancakeSwap LP Farm
          </div>
          <div className='ended-farm-container'>
            v0 NNT Uniswap LP Farm
          </div>
          <div className='ended-farm-container'>
            v5 NNT PancakeSwap LP Farm
          </div>
        </div>
  </div>

</section>
        </div>
    );
}

export default FarmingStats;