import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    incrementAction: (state, actions) => {
      console.log(actions.type)
      state.value += actions.payload;
    },
    decrementAction: (state, actions) => {
      state.value -= actions.payload;
    },
  },
});
export const { incrementAction, decrementAction } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
export const useCurrentCount = () => {
  const currentCount = useSelector((state) => state?.counter?.value);
  return currentCount;
};
