import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import EthIcon from "../assets/images/icon2.png";
import LogoIcon from "../assets/images/logo-nunu.png"

function LiveFarms(props) {
  const navigate = useNavigate();

  const onStakingFarm = () => {
    navigate("/staking-farm");
  };
  return (
    <div>
      <section class="recent-winners">
        <div class="container">
          <div class="row ">
            <div className="filter-section">
              <div className="filter">Filter</div>
              <div className="search">
                <p>Search</p>
                <input placeholder="Search farms" />
              </div>
              <div className="sort-by">
                <p>Sort</p>
                <select>
                  <option value="apy">APY</option>
                  <option value="newest">Newest</option>
                  <option value="days-left">Days Left</option>
                </select>
              </div>
            </div>
            <div class="col-lg-8 col-md-10">
              <div class="section-heading">
                <h2 class="title">Live Farms</h2>
              </div>
            </div>
          </div>
          <div class="recent-winners-cards row">
            <div class="col-lg-6 mb-3">
              <div
                class="single-winer"
                style={{
                  background: "url(imgs/bg/banner1.png)",
                  backgroundPositon: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                onClick={onStakingFarm}
              >
                <div className="card-glass"></div>
                <div class="top-area">
                  <div class="left">
                   <img src={LogoIcon} alt="logo-img" width={120} height={50}/>
                  </div>
                  <div class="right">
					<img src={EthIcon} alt="eth" width={35} height={40}/>
					<div className="farm-type">LP Farm</div>
                  </div>
                </div>
				<div class="bottom-area">				
                  <div class="left-sub">NNT token</div>
                  <div class="right">
                    <div class="days-lefts">APY 562.85%</div>
                  </div>
                </div>
                <div class="bottom-area">				
                  <div class="left">NUNU spirits</div>
                  <div class="right">
                    <div class="days-lefts">122 Days Left</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-3">
              <div
                class="single-winer"
                style={{
                  background: "url(imgs/bg/banner2.png)",
                  backgroundPositon: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                onClick={onStakingFarm}
              >
                <div className="card-glass"></div>
                <div class="top-area">
                  <div class="left">
                   <img src={LogoIcon} alt="logo-img" width={120} height={50}/>
                  </div>
                  <div class="right">
					<img src={EthIcon} alt="eth" width={35} height={40}/>
					<div className="farm-type">LP Farm</div>
                  </div>
                </div>
				<div class="bottom-area">				
                  <div class="left-sub">PGK token</div>
                  <div class="right">
                    <div class="days-lefts">APY 972.25%</div>
                  </div>
                </div>
                <div class="bottom-area">				
                  <div class="left">Penguin Karts</div>
                  <div class="right">
                    <div class="days-lefts">82 Days Left</div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div class="row">
          <div class="col-lg-8 col-md-10">
              <div class="section-heading">
                <h2 class="title">Past Farms</h2>
              </div>
            </div>
          </div>
          <div class="recent-winners-cards row">
            <div class="col-lg-6 mb-3">
              <div
                class="single-winer"
                style={{
                  background: "url(imgs/bg/banner1.png)",
                  backgroundPositon: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                onClick={onStakingFarm}
              >
                <div className="card-glass"></div>
                <div class="top-area">
                  <div class="left">
                   <img src={LogoIcon} alt="logo-img" width={120} height={50}/>
                  </div>
                  <div class="right">
					<img src={EthIcon} alt="eth" width={35} height={40}/>
					<div className="farm-type">LP Farm</div>
                  </div>
                </div>
				<div class="bottom-area">				
                  <div class="left-sub">NNT token</div>
                  <div class="right">
                    <div class="days-lefts">APY 562.85%</div>
                  </div>
                </div>
                <div class="bottom-area">				
                  <div class="left">NUNU spirits</div>
                  <div class="right">
                    <div class="days-lefts">122 Days Left</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-3">
              <div
                class="single-winer"
                style={{
                  background: "url(imgs/bg/banner2.png)",
                  backgroundPositon: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                onClick={onStakingFarm}
              >
                <div className="card-glass"></div>
                <div class="top-area">
                  <div class="left">
                   <img src={LogoIcon} alt="logo-img" width={120} height={50}/>
                  </div>
                  <div class="right">
					<img src={EthIcon} alt="eth" width={35} height={40}/>
					<div className="farm-type">LP Farm</div>
                  </div>
                </div>
				<div class="bottom-area">				
                  <div class="left-sub">PGK token</div>
                  <div class="right">
                    <div class="days-lefts">APY 972.25%</div>
                  </div>
                </div>
                <div class="bottom-area">				
                  <div class="left">Penguin Karts</div>
                  <div class="right">
                    <div class="days-lefts">82 Days Left</div>
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

export default LiveFarms;
