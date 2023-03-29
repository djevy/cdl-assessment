import React from "react";
import "./Cart.css";

const Cart = ({ showCart }) => {
  return (
    <div className={showCart ? "cart show" : "cart"}>
      <h3>Shopping Cart</h3>
      <div className="cart-products"></div>
      <button className="button" id="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
