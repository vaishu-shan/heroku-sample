import React from 'react';
import "./dashboard.css"
import {FiEye} from "react-icons/fi"
import {AiOutlineCompass} from "react-icons/ai"
import {MdOutlineHomeRepairService} from "react-icons/md"
import { IconContext } from "react-icons";


const DetailDashboard = () => {
    return ( <>
    <div className='detail-dash-container flex justify-between align-center'>
    <div className='flex column align-center' style={{width:"200px"}} >
            <div className='small-text mb-3'>APY</div>
            <div className='xl-text bold-600 mb-3'>$43M</div>
            {/* <div className='small-text'>per day</div> */}
    </div>
     <div className='flex column align-center' style={{width:"200px",padding:"5px 0"}} >  
            <div className='small-text mb-3'>Token Staked</div>
            <div className='xl-text bold-600 mb-3'>101K</div>
            {/* <div className='small-text'>per minute</div> */}
    </div>
    <div className='flex column align-center' style={{width:"200px"}}>

            <div className='small-text mb-3'>All Time High</div>
            <div className='xl-text bold-600 mb-3'>$43M</div>
            {/* <div className='small-text'>per day</div> */}
    </div>
    <div className='flex column align-center' style={{width:"200px"}}>

            <div className='small-text mb-3'>Reward Distribution</div>
            <div className='xl-text bold-600 mb-3'>101K</div>
            {/* <div className='small-text'>per day</div> */}
    </div>
    <div className='flex column align-center'  style={{width:"200px"}}>
  
            <div className='small-text mb-3'>Reward Liquidity</div>
            <div className='xl-text bold-600 mb-3'>915</div>
            {/* <div className='small-text'>per day</div> */}
    </div>
    </div>
    </> );
}
 
export default DetailDashboard;