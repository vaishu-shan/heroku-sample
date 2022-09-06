import React from 'react';
import "../assets/css/style.css"
import HeroImg from "../assets/images/heroarea.png";
import Smartphone from "../assets/images/h-shapes/phone.png";
import Shapeman from "../assets/images/h-shapes/man222.png";
import Shaperipple from "../assets/images/h-shapes/ripple.png";
import Shaperipple2 from "../assets/images/h-shapes/ripple1.png";
import Bitcoin from "../assets/images/h-shapes/bitcoin1.png";
import Bitcoin2 from "../assets/images/h-shapes/bitcoin2.png";
import Bitcoin3 from "../assets/images/h-shapes/shape.png";
import AwardBg from "../assets/images/h-shapes/award/bg.png";
import Award from "../assets/images/h-shapes/award/award.png";
import GiftBg from "../assets/images/h-shapes/giftbox/bg.png";
import Gift from "../assets/images/h-shapes/giftbox/gift.png";
import ShieldBg from "../assets/images/h-shapes/shield/bg.png";
import Shield from "../assets/images/h-shapes/shield/shield.png";


function HeroArea(props) {
    return (
        <div>
            <div class="hero-area">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 d-flex align-self-center">
        <div class="left-content">
          <div class="content">
            <h1 class="title"> Discover The Best Farming Programs</h1>
            <p class="text">Explore new farms and increase your tokens yield with any of tokensfarm’s high performing LP and Staking Farms </p>
           {/* <div class="links"> <a href="#" class="mybtn1 link1">Get Started Now!</a> </div> */}
          </div>
          <div class="top-area">
            <div class="row">
              <div class="col-lg-4 mb-3">
                <div class="info-box" style={{background:"rgb(37, 47, 90,0.3)", borderRadius:"10px", padding:"10px"}}>
                  <p class="mb-0"> Total Value Locked </p>
                  <h4 class="title"> $43M </h4>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                <div class="info-box" style={{background:"rgb(37, 47, 90,0.3)", borderRadius:"10px", padding:"10px"}}>
                  <p class="mb-0"> Total Transactions </p>
                  <h4 class="title"> 101K </h4>
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                <div class="info-box" style={{background:"rgb(37, 47, 90,0.3)", borderRadius:"10px", padding:"10px"}}>
                  <p class="mb-0"> Farms </p>
                  <h4 class="title"> 91 </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="hero-img2 d-block d-md-none"> <img src={HeroImg} alt=""/> </div>
        <div class="hero-img d-none d-md-block"> 
        <img class="img-fluid full-image" src={HeroImg} alt=""/> 
        <img class="shape phone" src={Smartphone} alt=""/> 
        <img class="shape man" src={Shapeman} alt=""/> 
        <img class="shape ripple" src={Shaperipple} alt=""/>
        <img class="shape ripple2" src={Shaperipple2} alt=""/>
         <img class="shape bitcoin1" src={Bitcoin} alt=""/> 
         <img class="shape bitcoin2" src={Bitcoin2} alt=""/> 
         <img class="shape shape-icon" src={Bitcoin3} alt=""/> 
         <img class="shape award-bg" src={AwardBg} alt=""/> 
         <img class="shape award" src={Award} alt=""/> 
         <img class="shape gift-bg" src={GiftBg} alt=""/> 
         <img class="shape gift" src={Gift} alt=""/> 
         <img class="shape shield-bg" src={ShieldBg} alt=""/>
          <img class="shape shield" src={Shield} alt=""/> </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default HeroArea;