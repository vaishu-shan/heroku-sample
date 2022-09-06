import React, { useState } from "react";
import "./main.css";
import LeftSidebar from "../Leftpannel/leftbar";
import Dashboard from "../Dashboard/dashboard";
import Farms from "../Farms/farm";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import FadeIn from 'react-fade-in';
import {useNavigate } from "react-router-dom";
import Icon1 from "../../assests/imgs/icon2.png"
import PaginatedItems from "../LiveFarms/livefarms";


const options = [
  'Live', 'Past'
];

const clientName = [
	'David', 'example1', 'client1', 'sample client ',
  ];

const defaultOption = options[0];

export default function Mainpannel() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function moveCreate() {
    navigate("/create-program");
}
const moveDetailpage= () =>{
  navigate("/detail-page")
}
  return (
    <>
      <div className="home-page">
        <LeftSidebar />
     
        <div className="main-pannel">
        <div className="main-panel-header">
          <FadeIn>
          <div class="wrap">
          
          </div>
          </FadeIn>
          <div className=" mt-5  ">
            <FadeIn>
            <div className="header ">
              <div className="xl-text bold-600" style={{textAlign:"left"}}>Hello David </div>
              <div className="small-text text-gray mt-3">Welcome back !</div>
            </div>
            </FadeIn>               
          </div>
          
         <FadeIn>
          <Dashboard />
          </FadeIn>
          </div>
          <FadeIn>
		  <div className="filter-section">
			<div className="filter1 cursor-pointer" >
            <Dropdown options={clientName} placeholder="Select client" />     
			</div>  
		  <div className="filter2 cursor-pointer" >
            <Dropdown options={options} placeholder="Live" />     
			</div>   
		  </div>
      </FadeIn>
        <FadeIn>
		<PaginatedItems itemsPerPage={4} />
          </FadeIn>
      
         

        </div>
        
      </div>
    </>
  );
}
