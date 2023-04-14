import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser(state) {
      state.id = null;
    },
    UpdateId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { removeUser, UpdateId } = userSlice.actions;
export default userSlice.reducer;
