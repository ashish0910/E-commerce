import React from "react";
import "./ProductItem.css";
import Button from "./Button";

function ProductItem({ product }) {
  return (
    <div className="product_card">
      <img src={product.images.url} alt={product.title} />

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>₹{product.price}</span>
        <p>{product.description}</p>
      </div>
      <Button product={product} />
    </div>
  );
}

export default ProductItem;
