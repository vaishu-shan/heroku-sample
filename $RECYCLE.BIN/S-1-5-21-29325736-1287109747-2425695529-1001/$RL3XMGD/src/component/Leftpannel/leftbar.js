import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./leftbar.css";
import { FiHome, FiUserPlus } from "react-icons/fi";
import { BiListUl } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { MdCreateNewFolder,MdOutlineCreate } from "react-icons/md";
import {isMobile} from 'mobile-device-detect';
import { IconContext } from "react-icons";
import FadeIn from "react-fade-in";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Routes from "./routes";

export default function LeftSidebar() {
  const [showMenu, setShowMenu] = useState(false); 
  const client = true;
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  let page = "";
  const getCurrentPage = () => {
    switch (window.location.pathname) {
      case "/home":
        page = "home";
        break;
      case "/add-network":
        page = "add-network";
        break;
      case "/add-client":
        page = "add-client";
        break;
      case "/reset-password":
        page = "reset-password";
        break;
      case "/create-program":
        page = "create-program";
        break;
        case "/detail-page":
          page= "detail-page";
          break;
          case "/all-clients":
          page= "all-clients";
          break;
      default:
        page = undefined;
    }
  };
  const signout = () => {
		localStorage.clear();
		setLoggedIn(false);
		navigate("/");
	};
  const moveProfile = () => {
		navigate("/profile-view");
	};
  return (
    <>

<IconContext.Provider value={{ size:"1em",color: "black",style:{marginRight:"10px"}, className: "global-class-name" }}>
  <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
  {showMenu ? <GrClose/> : <GiHamburgerMenu/>}
  </div>
</IconContext.Provider>

<ul className={`nav-menu ${showMenu && "active"}`}>
<div  className=" overall left-sidebar">
      <Routes/>
</div>
</ul>

<div  className=" overall left-sidebar-expanded">
      <Routes/>
</div>

    </>
  );
}
