import React from 'react'
import "./widget.scss"
import PolygonIcon from "./../../assets/img/light-icons/polygon-img.png";

export default function Widget() {
    return(
        <>
        <div className="right-sidebar">
			<div className='large-text bold text-white'>Widget</div>	
            <div className='small-text normal text-white' style={{marginTop:"10px"}}>Use widgets to your advantage!</div>

            <div className='trending-coin' style={{marginTop:"50px"}}>
                <div className='text-white medium-text bold'>Trending Coin</div>
                <div className='flex justify-between align-center'style={{marginTop:"10px"}}>
                    <div className='flex justify-between align-center'>
                    <img src={PolygonIcon} style={{margin:"0 5px"}} width={35} height={35} alt=" "/>
                    <div className='text-white small-text'>ETH </div>
                    </div>
                    <div className='flex column justify-between  align-center' >
                    <div className='text-white small-text' style={{margin:"2px auto"}} >$ 2061 </div>
                    <div className='text-red  small-text'>-3.81 </div>

                    </div>
                </div>                
                <div className='flex justify-between align-center'style={{marginTop:"10px"}}>
                    <div className='flex justify-between align-center'>
                    <img src={PolygonIcon} style={{margin:"0 5px"}} width={35} height={35} alt=" "/>
                    <div className='text-white small-text'>ETH </div>
                    </div>
                    <div className='flex column justify-between  align-center' >
                    <div className='text-white small-text' style={{margin:"2px auto"}} >$ 2061 </div>
                    <div className='text-red  small-text'>-3.81 </div>

                    </div>
                </div>
                
                <div className='flex justify-between align-center'style={{marginTop:"15px"}}>
                    <div className='flex justify-between align-center'>
                    <img src={PolygonIcon} style={{margin:"0 5px"}} width={35} height={35} alt=" "/>
                    <div className='text-white small-text'>ETH </div>
                    </div>
                    <div className='flex column justify-between  align-center' >
                    <div className='text-white small-text' style={{margin:"2px auto"}} >$ 2061 </div>
                    <div className='text-red  small-text'>-3.81 </div>

                    </div>
                </div>
                
            </div>

            <div className='trending-coin' style={{marginTop:"50px"}}>
                <div className='text-white medium-text bold' style={{marginBottom:"15px"}}>Learn to Play</div>
                <div style={{margin:"15px auto"}}>
                <div className='small-text bold text-white'>
                 ️‍🔥 What is Proof-of-work?
                </div>
                <div className='small-text normal text-white'>
                ~3 min. read
                </div>
                </div>
                <div style={{margin:"15px auto"}}>
                <div className='small-text bold text-white'>
                 ️‍🔥 What is Proof-of-work?
                </div>
                <div className='small-text normal text-white'>
                ~3 min. read
                </div>
                </div>              
                <div style={{margin:"15px auto"}}>
                <div className='small-text bold text-white'>
                 ️‍🔥 What is Proof-of-work?
                </div>
                <div className='small-text normal text-white'>
                ~3 min. read
                </div>
                </div>
            </div>
		</div>
        </>
    );
}