import React, { createContext, useReducer, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProviderValue = () => useContext(StateContext);
