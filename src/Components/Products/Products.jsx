import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ products, setCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="products-layout">
        {products.map((product, key) => (
          <Product key={key} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
