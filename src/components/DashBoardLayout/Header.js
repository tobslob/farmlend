import React from "react";
import { useLocation } from "react-router-dom";

function TopHeader() {
  const route = useLocation();
  const formatedPathName = route.pathname.replace("/", "");
  const logOut = () => {
    localStorage.removeItem("appUserToken");
    window.location.href = "/";
  };
  const headerTextOptions = {
    products: "Products",
    organizations: "Organizations",
    orders: "Orders",
  };

  return (
    <div className="header-container">
      <div className="welcome-text">
        <p>{headerTextOptions[formatedPathName] || "Products"} </p>
      </div>

      <div className="right-con">
        <div style={{ cursor: "pointer", color: "#4f4bf5", 
        fontSize: "18px", fontWeight: 700, margin: "0 0 10px"}} onClick={logOut}>
         Logout
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
