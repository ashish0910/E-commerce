import ProductsApi from "./api/ProductsApi";

export const initialState = {
  token: [],
  products: {},
  user: {},
  categories: {},
};

console.log("init state", initialState);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "init":
      return {
        ...action.state,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default reducer;
