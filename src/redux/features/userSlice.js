import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { firstName: "Kazim", lastName: "Mammad" },
  },
  reducers: {
    login: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
