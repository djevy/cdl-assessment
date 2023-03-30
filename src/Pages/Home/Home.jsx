import React, { useState } from "react";
import "./Home.css";
import Products from "../../Components/Products/Products";
import Cart from "../../Components/Cart/Cart";

const Home = ({ showCart, toggleCart }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { name: "A", price: 50, quantity: 0 },
    { name: "B", price: 30, quantity: 0 },
    { name: "C", price: 20, quantity: 0 },
    { name: "D", price: 15, quantity: 0 },
  ]);
  // If deals changed they could be updated with setDeals
  const [deals, setDeals] = useState([
    { name: "A", price: 130, quantity: 3 },
    { name: "B", price: 45, quantity: 2 },
  ]);
  return (
    <div className="home">
      <Cart
        showCart={showCart}
        cart={cart}
        toggleCart={toggleCart}
        deals={deals}
      />
      <Products
        products={products}
        setProducts={setProducts}
        setCart={setCart}
        cart={cart}
      />
    </div>
  );
};

export default Home;
