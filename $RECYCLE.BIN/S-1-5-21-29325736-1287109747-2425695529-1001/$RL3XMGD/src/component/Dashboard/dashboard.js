import React from 'react';
import "./dashboard.css"
import {FiEye} from "react-icons/fi"
import {AiOutlineCompass} from "react-icons/ai"
import {MdOutlineHomeRepairService} from "react-icons/md"
import { IconContext } from "react-icons";


const Dashboard = () => {
    return ( <>
    <div className='dash-container flex justify-between align-center'>
    <div className='flex column align-center'  style={{width:"200px"}}>

            <div className='small-text mb-3'>Total Value Locked</div>
            <div className='xl-text bold-600 mb-3'>$43</div>
            {/* <div className='small-text'>per day</div> */}
    </div>
     <div className='flex column align-center' style={{width:"200px"}} >
 
            <div className='small-text mb-3'>Total Transaction</div>
            <div className='xl-text bold-600 mb-3'>101K</div>
            {/* <div className='small-text'>per minute</div> */}
    </div>
    <div className='flex column align-center'  style={{width:"200px"}}>

            <div className='small-text mb-3'>Programs</div>
            <div className='xl-text bold-600 mb-3'>91</div>
            {/* <div className='small-text'>per day</div> */}
    </div>
    </div>
    </> );
}
 
export default Dashboard;