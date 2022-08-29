import { applyMiddleware, combineReducers, createStore } from "redux";
import ProductsReducer from "./reducers/ProductsReducers";
import CartReducers from "./reducers/CartReducers";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  // reducer con
  ProductsReducer,
  CartReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
