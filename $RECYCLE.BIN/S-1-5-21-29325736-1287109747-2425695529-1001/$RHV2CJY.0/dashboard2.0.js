import React from 'react'
import {useEffect, useState} from "react";
import "./dashboard.scss"
import APIManager from "../../utils/APIManager";
import WalletIcon from "../../assets/img/light-icons/Wallet-icon.png"
import RightArrow from "../../assets/img/light-icons/Rightarrow-icon.png"
import CoinIcon from "../../assets/img/light-icons/coins-icon.png"
import LogoIcon from "../../assets/img/light-icons/logo-icon.png"
import NotificationIcon from "../../assets/img/light-icons/notification-white.png"
import PinsIcon from "../../assets/img/light-icons/pins-icon.png"
import StopwatchIcon from "../../assets/img/light-icons/watch-purple.png"
import BadgeIcon from "../../assets/img/light-icons/badge-purple.png"
import TournamentCard from "./card";
import FeaturedCarousel from './FeaturedCarousel/featured';
import CoverflowCarousel from './TopCarousel';

export default function DashboardPhase2 (){
    const [filter, setFilter] = useState(2);
    const [tournaments, setTournaments] = useState([]);
    useEffect(() => {
        console.log("tournaments",tournaments)
		const fetchData = async () => { 
			if (filter === 1) {
				const joinedGames = await APIManager.RestApiGetCall("participant/game_by_status?status=0&status=1");
				setTournaments(joinedGames);
			} else if (filter === 2) {
				const upcomingGames = await APIManager.RestApiGetCall("game_by_status?status=0");
				setTournaments(upcomingGames);
			} else if (filter === 3) {
				const endedGames = await APIManager.RestApiGetCall("participant/game_by_status?status=3");
				setTournaments(endedGames);
			}
		};

		fetchData();
	}, [filter]);
    return(
    <>
    <div className='dash-container'>
        <div className='flex align-center'>
 <div className='top-wallet flex justify-between align-center'>
<img className='' width={16} height={16} src={WalletIcon} alt="WalletIcon"/>
<img className='' width={16} height={16} src={LogoIcon} alt=""/>
<div className='small-text bold text-white '>1550.32</div>
<img className='' width={16} height={16} src={CoinIcon} alt=""/>
<div className='small-text bold text-white '>13980.09</div>
<img className='' width={16} height={16} src={RightArrow} alt=""/>
        </div>
        <img className='notify-dash' src={NotificationIcon} width={16} height={16} alt="notification"/>
        </div>
     <CoverflowCarousel/>

        <div className='featured-game'>
            <div className='text-gray font-28 bold title '>Featured Games</div>
            <div className='underline'></div>
          <FeaturedCarousel tournaments={tournaments} />
            
        </div>

        <div className='game-pool'>
            <div className='text-gray font-28 bold title '>Game Pools</div>
            <div className="text-gray font-14 bold title">
                Join a game pool to start competing
            </div>

            <div className="horizontal-line" />

            <div className="flex align-center chip-container">
                <span className={"chip " + (filter === 1 ? "selected" : "")} onClick={() => {setTournaments([]);setFilter(1)}}>
                    <img src={PinsIcon} width={12} height={16} alt=" " />
                    <span className='ml-2'>Joined</span>
                </span>
                <span className={"chip ml-2 " + (filter === 2 ? "selected" : "")} onClick={() => {setTournaments([]);setFilter(2)}}>
                <img src={StopwatchIcon} width={13} height={16} alt=" " />
                    <span className='ml-2'>Upcoming</span>
                </span>
                <span className={"chip ml-2 " + (filter === 3 ? "selected" : "")} onClick={() =>{setTournaments([]);setFilter(3)}}>
                <img src={BadgeIcon} width={13} height={16} alt=" " />
                    <span className='ml-2'>Ended</span>
                </span>
            </div>
            <div className="horizontal-line" />
            { filter === 2 ?
				
            <div className="tournament-card-container">
                {
                    tournaments.map((item, index) =>(
                        <TournamentCard key={index} join={true} item={item} /> 
                    ))
                } 
            </div>
                : 
            <div className="tournament-card-container">
                {
                    tournaments.map((item, index) =>(
                        <TournamentCard key={index} join={false} item={item} /> 
                    ))
                } 
            </div>  
                }
        </div>
    </div>
    
    </>
    );
}
