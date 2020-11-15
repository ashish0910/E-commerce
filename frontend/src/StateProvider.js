import React, { createContext, useReducer, useContext } from "react";
import ProductsApi from "./api/ProductsApi";

export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  ProductsApi();
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProviderValue = () => useContext(StateContext);
