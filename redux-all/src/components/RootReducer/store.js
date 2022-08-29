import { applyMiddleware, createStore } from "redux";
import { configStore } from "./configStore";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Không redux-thunk
// export const store = createStore(
//   configStore,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// Sử dụng redux-thunk
// code này có thể sử dụng cho code không redux thunk mà vẫn không bị lỗi
export const store = createStore(
  configStore,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
