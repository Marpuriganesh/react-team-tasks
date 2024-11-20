import { configureStore } from "@reduxjs/toolkit";
import stateReducers from "./stateSlice";

const store = configureStore({
  reducer: {
    state: stateReducers,
  },
});

export default store;
