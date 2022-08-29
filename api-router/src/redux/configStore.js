import { applyMiddleware, combineReducers, createStore } from "redux";
import TodoListReducer from "./reducers/TodoListReducer";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  // reducer khai báo tại đây

  TodoListReducer,
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
