import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="50" />
        <h2>Khushboo keep</h2>
      </div>
    </>
  );
};

export default Header;
