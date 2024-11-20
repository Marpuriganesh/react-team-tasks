import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  useRedux: null,
  user: null,
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setUseRedux: (state, action) => {
      state.useRedux = action.payload.useRedux;
    },
    setReduxUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUseRedux, setReduxUser } = stateSlice.actions;

const stateReducers = stateSlice.reducer;

export default stateReducers;
