import { ADD_TO_CART } from "../constants/CartConstants";

export const addToCart = (pd) => {
  console.log(pd.articles[0].code);
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      data: pd,
    });
  };
};
