import { useState, useEffect } from "react";
import axios from "../axios";
import { useStateProviderValue } from "../StateProvider";
import { SET_PRODUCTS } from "../actions";

function ProductsApi() {
  const [{}, dispatch] = useStateProviderValue();
  const getProducts = async () => {
    const res = await axios.get("/api/products");
    dispatch({
      type: SET_PRODUCTS,
      products: res.data.products,
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
}

export default ProductsApi;
