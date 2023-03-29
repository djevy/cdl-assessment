import React from "react";
import "./Home.css";
import Products from "../../Components/Products/Products";
import Cart from "../../Components/Cart/Cart";

const Home = ({showCart}) => {
  return (
    <div>
      <Cart showCart={showCart}/>
      <Products />
    </div>
  );
};

export default Home;
