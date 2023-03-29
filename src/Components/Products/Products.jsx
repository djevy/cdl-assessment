import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ products, setProducts }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="products-layout">
        {products.map((product, key) => (
          <Product key={key} products={products} product={product} setProducts={setProducts}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
