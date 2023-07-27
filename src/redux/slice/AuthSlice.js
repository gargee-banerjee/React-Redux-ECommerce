import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: "",
  userEmail: "",
  userId: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const {userName,userEmail,userId}= action.payload;
      console.log(userName,userEmail,userId)
      state.isLoggedIn = true;
      state.userName = userName;
      state.userEmail = userEmail;
      state.userId = userId;
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
