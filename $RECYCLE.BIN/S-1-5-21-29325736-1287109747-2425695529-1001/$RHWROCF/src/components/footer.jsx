import React from 'react';
import "../assets/css/style.css"
import {BsTelegram,AiFillTwitterCircle,SiYoutubemusic,AiFillMediumCircle} from "react-icons/all"
import { IconContext } from "react-icons";
function Footer(props) {
    return (
        <div>         
           <footer class="footer" id="footer">
  <div class="copy-bg">
    <div class="container">
      <div class=" flex-column ">
      <div class="left-area-email">
            <p>hello@stakingapp.com </p>
            <div className='social-links'> 
            
<IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
  <div style={{margin:"auto 5px"}}>
    <BsTelegram />
  </div>
</IconContext.Provider>
<IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
  <div style={{margin:"auto 5px"}}>
    <AiFillTwitterCircle />
  </div>
</IconContext.Provider>

<IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
  <div style={{margin:"auto 5px"}}>
    <SiYoutubemusic />
  </div>
</IconContext.Provider>

<IconContext.Provider value={{ color: "white", size:"2em",className: "global-class-name" }}>
  <div style={{margin:"auto 5px"}}>
    <AiFillMediumCircle />
  </div>
</IconContext.Provider>
</div>
          </div>
        {/* col-lg-7  copright-area-links col-lg-5*/}
        <div className='footer-section'>
        <div class=""> 
          <ul class="footer-list">
            <li> <a href="#">Create a Farm</a> </li>
            <li> <a href="#">App Status</a> </li>
            <li> <a href="#">Terms of service</a> </li>
            <li> <a href="#">Privacy Policy</a> </li>
            <li> <a href="#">Audit #1</a> </li>
          </ul>
        </div>

        <div class="left-area">
            <p>Copyright © 2022 All Rights Reserved By <a href="#">TokensFarm</a> </p>
          </div>
          </div>
      </div>
    </div>
  </div>
</footer> 
        </div>
    );
}

export default Footer;