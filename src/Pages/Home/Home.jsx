import React, { useState } from "react";
import "./Home.css";
import Products from "../../Components/Products/Products";
import Cart from "../../Components/Cart/Cart";

const Home = ({ showCart }) => {
  const [cart, setCart] = useState([]);
  const products = [
    { product: "A", price: 50, quantity: 0 },
    { product: "B", price: 30, quantity: 0 },
    { product: "C", price: 20, quantity: 0 },
    { product: "D", price: 15, quantity: 0 },
  ];
  return (
    <div>
      <Cart showCart={showCart} cart={cart} />
      <Products products={products} setCart={setCart} />
    </div>
  );
};

export default Home;
