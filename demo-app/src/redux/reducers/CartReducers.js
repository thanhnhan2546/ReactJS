import { ADD_TO_CART, DELETE_TO_CART } from "../constants/CartConstants";
const initialState = {
  CartList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //   console.log(state.CartList);
      console.log(action.data.articles[0].code);
      const index = state.CartList.findIndex(
        (item) => item.articles[0].code === action.data.articles[0].code
      );
      //   console.log(index);
      if (index === -1) {
        const pd = { ...action.data, quantityCart: 1 };
        state.CartList.push(pd);
      } else {
        state.CartList[index].quantityCart += 1;
      }
      return { ...state };
    case DELETE_TO_CART:
      return { ...state };
    default:
      return state;
  }
};
