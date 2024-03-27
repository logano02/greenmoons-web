import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    lastName: "",
    avatar: "",
  },
  reducers: {
    saveUser: (state, action) => {
      state.email = action.payload.data.email;
      state.name = action.payload.data.first_name;
      state.lastName = action.payload.data.last_name;
      state.avatar = action.payload.data.avatar;
    },
  },
});
export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
