import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-head">
        <p className="home">Home</p>
        <p className="about">About Us</p>
        <p className="vision">Vision</p>
        <p className="what">What we offer</p>
        <button className="reachus">Reach Us</button>
      </div>
    </>
  );
}

export default Navbar;
