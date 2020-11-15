import { useState, useEffect } from "react";
import axios from "../axios";

function ProductsApi() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get("/api/products");
    console.log(res);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return {
    products: [products, getProducts],
  };
}

export default ProductsApi;
