import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import StorageManager from "../../utils/StorageManager";
import IconShare from "./../../assets/img/icons/icon_share.png";
import JoinBtn from "../../assets/img/light-icons/join-btn.png";
import Prize from '../../assets/img/icons/prize.png'
import CoinIcon from "../../assets/img/light-icons/coins-icon.png"
import "./dashboard.scss";
import { Tooltip } from 'antd';

import {
	applyPolyfills,
	defineCustomElements,
} from "progress-ring-component/dist/loader";

export default function TournamentCard({ join = false, item }) {
	applyPolyfills().then(() => {
		defineCustomElements();
	});
	const navigate = useNavigate();
	console.log(item);
	const onJoin = () => {
		StorageManager.setGameInfo(item);
		console.log("user", item.user_name);
		navigate("/select-coin");
	};
	const onView = () => {
		StorageManager.setGameInfo(item);
		navigate("/live-gameplay");
	};
	return (
		<div className="tournament-card">
			<progress-ring percentage={item ? item.total_users_joined / item.user_count * 100 : 0} disable-digits="true" radius="50px">
				<p class="completed-count">{item ? item.total_users_joined : 0}/{item ? item.user_count : 0}<br />Players</p>
			</progress-ring>
			<div className="flex align-center" >
				<div className="flex column">
					<span className="small-text text-gray flex">
						<div class="iconography-margin">
							<div class="item-logo"></div>
						</div>
						{item.name}
					</span>
					<span style={{ marginBottom: "5px" }} className="medium-text bold text-black">
						<img src={Prize} alt="Prize" className="ml-2 prize-image" />
						{item ? item.prize_pool : 0} <span className="small-text text-gray">Prize pool </span>
					</span>
					<span className="small-text text-gray flex text-line">
						<div class="info-frame-active">
							<div class="iconography-margin">
								<div class="pool"></div>
							</div>
							<Tooltip title="pool information">
							Pool info
							</Tooltip>
						</div>
						<div class="info-frame">
							<div class="iconography-margin">
								<div class="winrate"></div>
							</div>
							33% winrate
						</div>
						{/* <div class="info-frame">
							<div class="iconography-margin">
								<div class="entry"></div>
							</div>
							Multi-entry
						</div> */}
					</span>
				</div>
			</div>
			<div>
			<span style={{marginBottom:"5px"}} className="small-text normal text-red">
						<Moment diff={new Date().toLocaleString()} unit="minutes" className="text-red">
							{ item ? item.game_scheduled_time : "2022-02-02" }
						</Moment> mins
			</span>
			</div>
			
			
			<div>
				<span className="text-gray small-text normal" style={{ textDecoration: "line-through"}}>120 credits</span>
			</div>

			<div className="flex align-center">

				{/* <div className="flex column align-center justify-between ml-5">
					<span style={{ marginBottom: "5px" }} className="medium-text bold text-black">
						{item ? item.entry_fee : 0} CF
					</span>
					<span className="small-text text-gray">
						Entry Fee
					</span>
				</div> */}
				<div className="flex align-center button-container">
					{
						join
							?
							// <div className="button-primary join" onClick={onJoin}>
							// 	Join game
							// </div>
							<button className='carousel-btn' > <div className='flex justify-between align-center' onClick={onJoin}>
							<img className='' width={16} height={16} src={CoinIcon} alt=""/> 
							<span className='text-white small-text bold'>{item ? item.entry_fee : 100}</span>
											   </div></button>
							:
							<div className="view-btn" onClick={onView}>
							<span className="view-span">	View </span>
							</div>
					}
				</div>
			</div>
		</div>
	);
}
