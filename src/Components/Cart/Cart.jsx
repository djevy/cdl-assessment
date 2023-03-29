import React from "react";
import "./Cart.css";

const Cart = ({ showCart, cart }) => {
  return (
    <div className={showCart ? "cart show" : "cart"}>
      <h3>Shopping Cart</h3>
      <div className="cart-products">
        {cart.map((item, key) => {
          if (item.quantity > 0) {
            return (
              <div key={key} className="cart-item">
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>£{((item.price * item.quantity) / 100).toFixed(2)}</p>
              </div>
            );
          }
          return <div key={key}></div>;
        })}
      </div>
      <div className="total">Total: </div>
      <button className="button" id="checkout-button">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
