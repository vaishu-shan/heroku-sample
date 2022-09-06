import React, { useState } from "react";
import "../../assets/css/style.css";
import "./navbar.css";
import Ethereum from "../../assets/images/etherum.png";
import Binance from "../../assets/images/binanace.png";
import DropdownIcon from "../../assets/images/dropdown-icon.png";
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Menu, Dropdown, Input, Modal, Space } from "antd";
import Account from "../Account/Account";
import {
  BsThreeDots,
  BsFillChatSquareTextFill,
  HiOutlineChevronLeft,
} from "react-icons/all";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [isWallet, setIsWallet] = useState(false);
  let page = "";
  const getCurrentPage = () => {
    switch (window.location.pathname) {
      case "/":
        page = "/";
        break;
      case "/my-farms":
        page = "my-farms";
        break;
      case "/staking-farm":
        page = "staking-farm";
        break;
      default:
        page = undefined;
    }
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <img
          src={Binance}
          alt=" "
          height={30}
          width={30}
          style={{ marginRight: "10px" }}
        />
        <a style={{ fontSize: "20px" }}>Binance</a>
      </Menu.Item>

      <Menu.Item>
        <img
          src={Ethereum}
          alt=" "
          height={30}
          width={30}
          style={{ marginRight: "10px" }}
        />
        <a style={{ fontSize: "20px" }}>Ethereum</a>
      </Menu.Item>
    </Menu>
  );

  const Info = (
    <Menu
      items={[
        {
          label: "About",
          key: "0",
        },
        {
          label: "Help Center",
          key: "1",
        },
        {
          label: "Security",
          key: "3",
        },
        {
          label: "Twitter",
          key: "4",
        },
        {
          label: "Telegram",
          key: "5",
        },
        {
          label: "YouTube",
          key: "6",
        },
        {
          label: "App Status",
          key: "7",
        },
        {
          label: "Terms of Service",
          key: "8",
        },
      ]}
    />
  );

  const showModal = () => {
    setIsWallet(true);
  };
  const handleOk = () => {
    setIsWallet(false);
  };
  const handleCancel = () => {
    setIsWallet(false);
  };
  return (
    <>
      <div>
        {getCurrentPage()}
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar-nav" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <div className="section-2">
              <NavLink exact to="*" className="nav-logo">
                <div className="backndlogo">
                  {page === "staking-farm" ? <>
                  <Link to="/">
                   <IconContext.Provider
                    value={{
                      size: "1.2em",
                      color: "white",
                      style: { marginRight: "10px", marginBottom: "5px" },
                      className: "global-class-name",
                    }}
                  >
                    <div>
                      <HiOutlineChevronLeft />
                    </div>
                  </IconContext.Provider>
                  </Link>
                  </>
                  :""}
                 
                  StakingApp
                </div>
              </NavLink>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                Explore
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/my-farms"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                  My Farms
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/how-it-works"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    How It Works
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="section-3">
              <button className="chain-btn">
                <Dropdown overlay={menu} placement="bottomCenter">
                  <div className="dropdown-content">
                    <img src={Ethereum} alt="etherum" height={30} width={30} />
                    <a className="ant-dropdown-link">Etherum</a>
                    <img
                      src={DropdownIcon}
                      alt="etherum"
                      height={15}
                      width={15}
                      style={{ marginLeft: "10px" }}
                      onClick={(e) => e.preventDefault()}
                    />
                  </div>
                </Dropdown>
              </button>

         

             
              <div className="connect-wallet-btn" onClick={showModal}>
              <Account/>
              </div>

              <Dropdown overlay={Info} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <IconContext.Provider
                      value={{
                        color: "white",
                        size: "2em",
                        className: "info-dot",
                      }}
                    >
                      <div style={{ margin: "auto 5px" }}>
                        <BsThreeDots />
                      </div>
                    </IconContext.Provider>
                  </Space>
                </a>
              </Dropdown>
            </div>


            <div className="nav-icon" onClick={handleClick}>
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "white",
                  style: { marginRight: "10px" },
                  className: "global-class-name",
                }}
              >
                <div>{click ? <GrClose /> : <GiHamburgerMenu />}</div>
              </IconContext.Provider>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>

        <div className="mob-footer">
          <IconContext.Provider
            value={{
              color: "white",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <div style={{ margin: "auto 5px" }}>
              <BsFillChatSquareTextFill />
            </div>
          </IconContext.Provider>
          <div className="connect-wallet-mob" onClick={showModal}>
          <Account/>
          </div>

          <Dropdown overlay={Info} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "2em",
                    className: "global-class-name",
                  }}
                >
                  <div style={{ margin: "auto 5px" }}>
                    <BsThreeDots />
                  </div>
                </IconContext.Provider>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default Navbar;
