import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "./product/Product";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import Categories from "./categories/Categories";
import NotFound from "./utils/NotFound";
import DetailProduct from "./product/DetailProduct";

function Home() {
  return (
    <Switch>
      <Route path="/" exact>
        <Product />
      </Route>
      <Route path="/detail/:id" exact>
        <DetailProduct />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Home;
