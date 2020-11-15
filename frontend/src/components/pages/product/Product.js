import React, { useEffect } from "react";
import { useStateProviderValue } from "../../../StateProvider";
import ProductItem from "../utils/ProductItem";

function Product() {
  const [{ products }, dipatch] = useStateProviderValue();
  useEffect(() => {
    console.log(products, "s");
  }, [products]);
  return (
    <div className="products">
      {products.hasOwnProperty("length") ? (
        products.map((product) => {
          return <ProductItem key={product._id} />;
        })
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
}

export default Product;
