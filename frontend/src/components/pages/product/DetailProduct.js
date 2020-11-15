import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useStateProviderValue } from "../../../StateProvider";
import ProductItem from "../utils/ProductItem";
import "./DetailProduct.css";

function DetailProduct() {
  const [{ products }, dipatch] = useStateProviderValue();
  const [detailProduct, setDetailProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    if (params.id && products.length) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);
  if (detailProduct.length === 0) return null;
  return (
    <div>
      <div className="detail">
        <img src={detailProduct.images.url} alt={detailProduct.title} />
        <div className="box-detail">
          <div className="row">
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
          </div>
          <span>₹ {detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <p>Sold: {detailProduct.sold}</p>
          <Link to="/cart" className="cart">
            Buy Now
          </Link>
        </div>
      </div>
      <div>
        <h2>Related products</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
