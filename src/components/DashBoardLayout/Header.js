import React from "react";
import { useLocation } from "react-router-dom";
import { BellFilled } from "@ant-design/icons";

function TopHeader() {
  const route = useLocation();
  const formatedPathName = route.pathname.replace("/", "");
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
        <div className="nots" style={{ cursor: "pointer" }}>
          <BellFilled
            className="bell"
            style={{
              fontSize: "1.5em",
              color: "#3B86FF",
              width: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
