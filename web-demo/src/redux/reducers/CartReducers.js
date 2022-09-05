// import { ADD_TO_CART, DELETE_TO_CART } from "../constants/CartConstants";
// const initialState = {
//   CartList: [],
// };

import { createSlice, current } from "@reduxjs/toolkit";

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       //   console.log(state.CartList);
//       console.log(action.data.articles[0].code);
//       const index = state.CartList.findIndex(
//         (item) => item.articles[0].code === action.data.articles[0].code
//       );
//       //   console.log(index);
//       if (index === -1) {
//         const pd = { ...action.data, quantityCart: 1 };
//         state.CartList.push(pd);
//       } else {
//         state.CartList[index].quantityCart += 1;
//       }
//       return { ...state };
//     case DELETE_TO_CART:
//       return { ...state };
//     default:
//       return state;
//   }
// };
const initialState = {
  cart: {
    cartList: [],
    total: 0,
  },
};
export const CartReducers = createSlice({
  name: "CartReducers",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.cartList.length !== 0) {
        const index = state.cart.cartList.findIndex(
          (item) => item.id === action.payload.id
        );
        console.log(index);
        if (index === -1) {
          const pd = { ...action.payload, qtyCart: 1 };
          state.cart.cartList.push(pd);
        } else {
          state.cart.cartList[index].qtyCart += 1;
        }
      } else {
        const pd = { ...action.payload, qtyCart: 1 };
        state.cart.cartList.push(pd);
      }
      state.cart.total += 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      alert("item has been added to the cart !!");
    },
    getCartLocal: (state, action) => {
      state.cart = action.payload;
    },
    deleteCart: (state, action) => {
      const index = state.cart.cartList.findIndex(
        (item) => item.id === action.payload
      );
      const qty = current(state.cart.cartList[index]).qtyCart;
      state.cart.total -= qty;
      state.cart.cartList.splice(index, 1);
      state.cart.cartList.length === 0
        ? localStorage.removeItem("cart")
        : localStorage.setItem("cart", JSON.stringify(state.cart));
      alert("Item has been deleted !!");
    },
    changeQtyCart: (state, action) => {
      if (action.payload.bool) {
        state.cart.cartList.map((item) =>
          item.id === action.payload.id ? (item.qtyCart += 1) : item
        );
        state.cart.total += 1;
      }
      if (!action.payload.bool) {
        state.cart.cartList.map(
          (item) => {
            if (item.id === action.payload.id) {
              if (item.qtyCart > 1) {
                item.qtyCart -= 1;
                state.cart.total -= 1;
              }
            }
            return item;
          }
          // item.id === action.payload.id
          //   ? item.qtyCart > 1
          //     ? (item.qtyCart -= 1)
          //     : item
          //   : item
        );
        // state.cart.total -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
