import React from "react";
import "./Navbar.css";

const Navbar = ({toggleCart}) => {
  return (
    <div id="navbar">
        <h1 className="app-title">CDL Assessment</h1>
      <div className="cart-icon"><span className="material-symbols-outlined" onClick={toggleCart}>shopping_cart</span></div>
    </div>
  );
};

export default Navbar;
