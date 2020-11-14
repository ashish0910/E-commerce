import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "./product/Product";
import Login from "./auth/Login";
import Register from "./auth/Login";
import Cart from "./cart/Cart";
import Categories from "./categories/Categories";
import NotFound from "./utils/NotFound";

function Home() {
  return (
    <Switch>
      <Route path="/" exact>
        <Product />
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
