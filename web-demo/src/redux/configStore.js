// import { applyMiddleware, combineReducers, createStore } from "redux";
// import ProductsReducer from "./reducers/ProductsReducers";
import { CartReducers } from "./reducers/CartReducers";
// import reduxThunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
import { ProductsReducers } from "./reducers/ProductsReducers";

// const rootReducer = combineReducers({
//   // reducer con
//   ProductsReducer,
//   CartReducers,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(reduxThunk))
// );

const store = configureStore({
  reducer: {
    products: ProductsReducers.reducer,
    cart: CartReducers.reducer,
  },
});

export default store;
