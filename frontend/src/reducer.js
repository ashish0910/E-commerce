export const initialState = {
  check: "very well",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
