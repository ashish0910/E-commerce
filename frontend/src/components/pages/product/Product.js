import React, { useEffect } from "react";
import { useStateProviderValue } from "../../../StateProvider";
import ProductItem from "../utils/ProductItem";
import "./Product.css";

function Product() {
  const [{ products }, dipatch] = useStateProviderValue();
  useEffect(() => {}, [products]);
  return (
    <div className="products">
      {products.hasOwnProperty("length") ? (
        products.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
}

export default Product;
