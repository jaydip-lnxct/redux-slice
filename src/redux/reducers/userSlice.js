import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: [],
  },

  reducers: {
    userActions: (state, actions) => {
      state.userData = actions.payload;
    },
  },
});
export const { userActions } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
export const useUserState = () => {
  const allUsers = useSelector((state) => state?.users?.userData);
  return allUsers;
};
