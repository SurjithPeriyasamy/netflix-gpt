import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetail: null,
    isUserIconOpen: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.userDetail = action.payload;
    },
    removeUser: (state, action) => {
      state.userDetail = null;
    },
    toggleUserIcon: (state, action) => {
      state.isUserIconOpen = !state.isUserIconOpen;
    },
    closeUserIcon: (state, action) => {
      state.isUserIconOpen = false;
    },
  },
});

export const { addUser, removeUser, toggleUserIcon, closeUserIcon } =
  userSlice.actions;

export default userSlice.reducer;
