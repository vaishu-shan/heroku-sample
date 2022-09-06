import React from 'react'
import Slider from "react-slick";
import "./featured.scss";
import FCarousel1 from "../../../assets/img/light-icons/f-car1.png"
import FCarousel2 from "../../../assets/img/light-icons/f-car2.png"
import Stopwatch from "../../../assets/img/light-icons/stopwatch.png"
import Trophy from "../../../assets/img/light-icons/emoji_trophy.png"
import CoinIcon from "../../../assets/img/light-icons/coins-icon.png"
import LeftArrow from "../../../assets/img/light-icons/left-arrow.png"
import RightArrow from "../../../assets/img/light-icons/right-arrow.png"
import { useNavigate } from "react-router-dom";
import StorageManager from "../../../utils/StorageManager";
import styled from 'styled-components';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={`nextarrow + ${className}`} src={RightArrow} alt=""   style={{ ...style, display: "block",borderRadius:"39px",padding:"10px 15px",width:"40px", height:"40px" }}
        onClick={onClick}/>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return ( 
        <img className={`prevarrow + ${className}`}  src={LeftArrow} alt=""   style={{ ...style, display: "block" ,borderRadius:"39px",padding:"10px 15px",width:"40px", height:"40px" }}
        onClick={onClick}/>
    );
  }

  

export default function FeaturedCarousel ({tournaments}) {
  const navigate = useNavigate();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1.5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const onJoin = () => {
        // StorageManager.setGameInfo(item);
        // console.log("user", item.user_name);
        navigate("/select-coin");
      };
    return(
        <>
        <Slider {...settings}>
        {
                    tournaments.map((item, index) =>(
                      <div className='carousel-card'>
                        <div className='timmer'>
                      <img className='car1' src={FCarousel1} alt=" " />
                      <div className='flex align-center timmer-tag'>
                          <img className="ml-2" width={12} height={12} src={Stopwatch} alt="stopwatch"/>
                          <div className='small-text text-white ml-2'>2hr 20m left</div>
                      </div>
                        </div>
                      <div className='card-points flex align-center'>
                          <div className='flex column '  style={{margin:"auto 10px"}}>
                              <div className='flex align-center'>
                                  <div className='medium-text bold text-gray'>{item ? item.prize_pool : 0} </div>
                                  <img style={{margin:"auto 5px"}} width={20} height={20} src={Trophy} alt=""/>
                              </div>
                           <div className='small-text text-gray'>Prize Pool</div>
                          </div>
                          <div className='flex column ' style={{margin:"auto 10px"}}>
                                  <div className='medium-text text-gray'>{item ? item.total_users_joined : 0}/{item ? item.user_count : 0}</div>
                                 
                           <div className='small-text text-gray'>Spots</div>
                          </div>
                          <button className='carousel-btn'onClick={onJoin}> <div className='flex justify-between align-center'>
           <img className='' width={16} height={16} src={CoinIcon} alt=""/> 
           <span className='text-white small-text bold'>{item ? item.entry_fee : 100}</span>
                              </div></button>
                      </div>
                     </div>
                    ))
                }         
        </Slider>
        </>
    )
}