import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/components/headers/Header";
import { useStateProviderValue } from "./StateProvider";
import Home from "./components/pages/Home";
import ProductsApi from "./api/ProductsApi";
import { INIT } from "./actions";

function App() {
  ProductsApi();

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Home></Home>
      </div>
    </BrowserRouter>
  );
}

export default App;
