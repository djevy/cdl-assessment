import React, { useState } from "react";
import "./Product.css";

const Product = ({ products, product, setProducts, setCart }) => {
  const [productCount, setProductCount] = useState(0);
  const productIncrease = () => {
    setProductCount(productCount + 1);
  };
  const productDecrease = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const handleAddProducts = (productName) => {
    // Find the product with the given name
    const currentIndex = products.findIndex(
      (item) => item.name === productName
    );

    // Update the product quantity
    const updatedProduct = Object.assign({}, products[currentIndex]);
    updatedProduct.quantity = productCount;

    // Update the products list
    products[currentIndex] = updatedProduct;
    setProducts(products);
    setCart(products.slice());
  };

  return (
    <div className="product">
      <p>{product.name}</p>
      <p>£{(product.price / 100).toFixed(2)}</p>
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
      <button
        onClick={() => handleAddProducts(product.name)}
        className="button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
