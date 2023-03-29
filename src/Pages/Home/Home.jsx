import React, { useState } from "react";
import "./Home.css";
import Products from "../../Components/Products/Products";
import Cart from "../../Components/Cart/Cart";

const Home = ({ showCart }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { name: "A", price: 50, quantity: 0 },
    { name: "B", price: 30, quantity: 0 },
    { name: "C", price: 20, quantity: 0 },
    { name: "D", price: 15, quantity: 0 },
  ]);
  return (
    <div>
      <Cart showCart={showCart} cart={cart} />
      <Products products={products} setProducts={setProducts}/>
    </div>
  );
};

export default Home;
