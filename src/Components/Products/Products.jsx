import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <div className="products-layout">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
