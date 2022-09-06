import React from "react";
import "./farm.css";
import Icon1 from "../../assests/imgs/icon2.png"
import { useNavigate } from "react-router-dom";

const feed = [
	{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
	{name:"Leroy Roy" , date:"01.08.2022 ", game_id:"#5747e57423", eth:"0.997"},
]

export default function Farms({}) {
const navigate = useNavigate();

  const moveDetailpage= () =>{
    navigate("/detail-page")
  }
  return (
    <>
        
  <section class="recent-winners">
		<div class="container">
				<div class="flex ">
					<div class="">
						<div class="section-heading">					 
							<h2 class="title-1">
									Live Programs
							</h2>
							 
						</div>
					</div>
				</div>
				<div class="flex wrap" >
					<div class="col-lg-6 cursor-pointer" onClick={moveDetailpage}>
						<div class="single-winer bg-img1" >
              <div class="bg-black"></div>
							<div class="top-area flex justify-between">
								<div class="left z-index-999">
									<h4 class="name text-white ">
											Leroy Roy 
									</h4>
									<p class="date text-white bold-500">
											01.08.2019
									</p>
								</div>
								<div class="right z-index-999">
									<p class="id text-white bold-500">#5747e75482</p>
								</div>
							</div>
							<div class="flex justify-between align-center bottom-area">
								<div class="left text-white z-index-999 bold-500">
										0.099 ETH
								</div>
								<div class="right z-index-999">
										<img src={Icon1} alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
				
		</div>
	</section>
    </>
  );
}
