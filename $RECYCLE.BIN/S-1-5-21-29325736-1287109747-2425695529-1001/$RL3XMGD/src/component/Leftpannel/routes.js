import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./leftbar.css";
import { FiHome, FiUserPlus } from "react-icons/fi";
import { BiListUl } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { MdCreateNewFolder,MdOutlineCreate } from "react-icons/md";
import { IconContext } from "react-icons";
import FadeIn from "react-fade-in";
import { FaRegDotCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import Account from "../Account/Account";

function Routes(props) {
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
        <div>
              <div >
          {getCurrentPage()}
          <div className="flex column align-center left-cont">
            <FadeIn>
            <div className="routes">
              <Link to="/home">
                <div
                  className={
                    "side-card " + `${page === "home" ? "select" : ""}`
                  }
                >
                  {page === "home" ? (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "blue",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FiHome />
                        </div>
                      </IconContext.Provider>
                      <div
                        className="lb-text normal-text text-blue cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Home{" "}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <FiHome />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className=" lb-text normal-text text-black cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Home{" "}
                      </div>
                    </div>
                  )}
                </div>
              </Link>
              {client ? <>
                <Link to="/create-program">
                <div
                  className={
                    "side-card " +
                    `${page === "create-program" ? "select" : ""}`
                  }
                >
                  {page === "create-program" ? (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "blue",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <MdCreateNewFolder />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-blue cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Create Program{" "}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <MdCreateNewFolder />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-black cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Create Program{" "}
                      </div>
                    </div>
                  )}
                </div>
              </Link> </>: " "}
            
              <Link to="/reset-password">
                <div
                  className={
                    "side-card " +
                    `${page === "reset-password" ? "select" : ""}`
                  }
                >
                  {page === "reset-password" ? (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "blue",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <BiListUl />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-blue cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Reset Password{" "}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <BiListUl />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-black cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Reset Password{" "}
                      </div>
                    </div>
                  )}
                </div>
              </Link>

              {client ? <>
                <Link to="/add-network">
                <div
                  className={
                    "side-card " + `${page === "add-network" ? "select" : ""}`
                  }
                >
                  {page === "add-network" ? (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "blue",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <MdOutlineCreate />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-blue cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Add Network{" "}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <MdOutlineCreate />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-black cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        Add Network{" "}
                      </div>
                    </div>
                  )}
                </div>
              </Link>

             <Link to="/add-client">
              <div
                className={
                  "side-card " + `${page === "add-client" ? "select" : ""}`
                }
              >
                {page === "add-client" ? (
                  <div className="flex justify-start align-center cursor-pointer">
                    <IconContext.Provider
                      value={{
                        color: "blue",
                        size: "1.5em",
                        className: "global-class-name",
                      }}
                    >
                      <div>
                        <FiUserPlus />
                      </div>
                    </IconContext.Provider>{" "}
                    <div
                      className="lb-text normal-text text-blue cursor-pointer"
                      style={{ marginLeft: "15px" }}
                    >
                      {" "}
                      Add Client{" "}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-start align-center cursor-pointer">
                    <IconContext.Provider
                      value={{
                        color: "black",
                        size: "1.5em",
                        className: "global-class-name",
                      }}
                    >
                      <div>
                        <FiUserPlus />
                      </div>
                    </IconContext.Provider>{" "}
                    <div
                      className="lb-text normal-text text-black cursor-pointer"
                      style={{ marginLeft: "15px" }}
                    >
                      {" "}
                      Add Client{" "}
                    </div>
                  </div>
                )}
              </div>
            </Link> 
               </>: " " }      

               <Link to="/all-clients">
                <div
                  className={
                    "side-card " + `${page === "all-clients" ? "select" : ""}`
                  }
                >
                  {page === "all-clients" ? (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "blue",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <TbUsers />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-blue cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                       All clients{" "}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start align-center cursor-pointer">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "1.5em",
                          className: "global-class-name",
                        }}
                      >
                        <div>
                          <TbUsers />
                        </div>
                      </IconContext.Provider>{" "}
                      <div
                        className="lb-text normal-text text-black cursor-pointer"
                        style={{ marginLeft: "15px" }}
                      >
                        {" "}
                        All clients{" "}
                      </div>
                    </div>
                  )}
                </div>
              </Link>

            </div>
            </FadeIn>
            <FadeIn>
              <div className="route-connect-wallet">
        <Account/>
              </div>
    </FadeIn>
            <FadeIn>
            <div className="flex mt-30 align-center justify-center cursor-pointer log-out-btn" onClick={signout}>
              <IconContext.Provider
                value={{ color: "red", className: "global-class-name" }}>
                <div>
                  <FaRegDotCircle />
                </div>
              </IconContext.Provider>
              <div className="small-text bold-600 text-red center-align ml-3 mt-1">
                Log out
              </div>{" "}
            </div>
            <div className=" mt-30 cursor-pointer log-out-btn2" onClick={signout}>

            <IconContext.Provider
                value={{size:"1.3em", color: "red", className: "global-class-name" }}>
                <div className="tab-logout">
                <TbLogout/>
                </div>
              </IconContext.Provider>
            </div>
            </FadeIn>         
          </div>
        </div>
        </div>
    );
}

export default Routes;