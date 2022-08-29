import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./example/counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
