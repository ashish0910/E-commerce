import React, { useEffect } from "react";
import { useStateProviderValue } from "../../../StateProvider";
import ProductItem from "../utils/ProductItem";
import "./Product.css";
import Loading from "../utils/Loading";

function Product() {
  const [{ products }, dipatch] = useStateProviderValue();
  useEffect(() => {}, [products]);
  return (
    <div>
      {products.hasOwnProperty("length") ? (
        <div className="products">
          {products.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Product;
