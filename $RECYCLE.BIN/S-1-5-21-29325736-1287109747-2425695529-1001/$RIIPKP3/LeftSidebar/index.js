import React from "react";
import { Link } from "react-router-dom";
import Aeternity from "./../../assets/img/light-icons/Aeternity.png";
import "./left_sidebar.scss";

export default function LeftSidebar() {
  let page = "";
  const getCurrentPage = () => {
    switch (window.location.pathname) {
      case "/dashboard":
        page = "dashboard";
        break;
      case "/settings":
        page = "settings";
        break;
      case "/activity":
        page = "activity";
        break;
      case "/notifications":
        page = "notifications";
        break;
      case "/reward":
        page = "reward";
        break;
      default:
        page = undefined;
    }
  };
  return (
    <>
      <div className="left-sidebar">
        <div className="prof-cont">
          <img src={Aeternity} alt=" " />
          <div className="medium-text text-white mt-2">@vaishnavi</div>
          <div className="medium-text text-white mt-2">Gds***n68</div>
          <div className="medium-text text-white mt-2">vaishnavi@email.com</div>
        </div>

        <div className="routes">
          <Link to="/dashboard">
            <div
              className={
                "side-card mt-2" + `${page === "dashboard" ? "select" : ""}`
              }
            >
              {page === "dashboard" ? (
                <div className="flex justify-start align-center">
                  <div
                    className="lb-text large-text  text-blue"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Dashboard{" "}
                  </div>
                </div>
              ) : (
                <div className="flex justify-start align-center">
                  <div
                    className=" lb-text large-text  text-white"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Dashboard{" "}
                  </div>
                </div>
              )}
            </div>
          </Link>
          <Link to="/reward">
            <div
              className={"side-card mt-2" + `${page === "reward" ? "select" : ""}`}
            >
              {page === "reward" ? (
                <div className="flex justify-start align-center">
                  <div
                    className="lb-text large-text  text-blue"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Wallet {" "}
                  </div>
                </div>
              ) : (
                <div className="flex justify-start align-center">
                  <div
                    className="lb-text large-text  text-white"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Wallet {" "}
                  </div>
                </div>
              )}
            </div>
          </Link>
          {/* <Link to="/notifications">
            <div
              className={
                "side-card " + `${page === "notifications" ? "select" : ""}`
              }
            >
              {page === "notifications" ? (
                <div className="flex justify-start align-center">
                  <div
                    className="lb-text medium-text  text-blue"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Discover{" "}
                  </div>
                </div>
              ) : (
                <div className="flex justify-start align-center">
                  <div
                    className="lb-text medium-text  text-white"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Discover{" "}
                  </div>
                </div>
              )}
            </div>
          </Link> */}
          <Link to="/settings">
            <div
              className={
                "side-card mt-2" + `${page === "settings" ? "select" : ""}`
              }
            >
              {page === "settings" ? (
                <div className="flex justify-start align-center">
                  <div
                    className="lb-text large-text  text-blue"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Settings{" "}
                  </div>
                </div>
              ) : (
                <div className="flex justify-start align-center">
                  <div
                    className="lb-text large-text  text-white"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Settings{" "}
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>

        <div className="log-out" >
          <div
            className="text-black medium-text bold"
           
          >
            {" "}
            Log out{" "}
          </div>
        </div>
      </div>
    </>
  );
}
