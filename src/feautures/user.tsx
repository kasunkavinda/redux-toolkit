import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", email: "" };
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
