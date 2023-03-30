import React from "react";
import "./Cart.css";

const Cart = ({ showCart, cart, toggleCart, deals }) => {
  let oldTotal = 0;
  let dealPrice = 0;
  let notDeals = 0;
  cart.forEach((product) => {
    oldTotal += product.price * product.quantity;
  });

  // Apply deals to products with deals
  deals.forEach((deal) => {
    const product = cart.find((p) => p.name === deal.name);
    if (product) {
      const numDeals = Math.floor(product.quantity / deal.quantity);
      const notDealPrice = product.quantity % deal.quantity;
      dealPrice += numDeals * deal.price + notDealPrice * product.price;
      console.log("dealPrice: " + dealPrice);
    }
  });
  // Add items without deals
  const uniqueProducts = cart.filter(
    (product) => !deals.find((deal) => deal.name === product.name)
  );
  uniqueProducts.forEach((product) => {
    notDeals += product.price * product.quantity;
  });

  // Calculate new total
  const newTotal = dealPrice + notDeals;

  return (
    <div className={showCart ? "cart show" : "cart"}>
      <span
        onClick={toggleCart}
        className="material-symbols-outlined close-button"
      >
        close
      </span>
      <h3>Shopping Cart</h3>
      <div className="cart-products">
        {cart.map((item, key) => {
          if (item.quantity > 0) {
            return (
              <div key={key} className="cart-item">
                <p>{item.name}</p>
                <p>x{item.quantity}</p>
                <p>£{((item.price * item.quantity) / 100).toFixed(2)}</p>
              </div>
            );
          }
          return <div key={key}></div>;
        })}
      </div>
      <div className="total">Total: £{(oldTotal / 100).toFixed(2)}</div>
      {oldTotal !== newTotal ? (
        <div className="total">
          Total after deals: £{(newTotal / 100).toFixed(2)}
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
