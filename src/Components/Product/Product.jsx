import React, { useState } from "react";
import "./Product.css";

const Product = ({product}) => {
  const [productCount, setProductCount] = useState(0);
  const productIncrease = () => {
    setProductCount(productCount + 1);
  };
  const productDecrease = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  return (
    <div className="product">
      <p>{product.product}</p>
      <p>£{(product.price/100).toFixed(2)}</p>
      <div className="product-add">
        <span
          onClick={productDecrease}
          className="material-symbols-outlined product-num-change"
        >
          remove
        </span>
        <span className="product-count">{productCount}</span>
        <span
          onClick={productIncrease}
          className="material-symbols-outlined product-num-change"
        >
          add
        </span>
      </div>
      <button className="button">Add to Cart</button>
    </div>
  );
};

export default Product;
