import { createSlice } from "@reduxjs/toolkit";
// import service from "./serviceApi";
// import { actionStructre, serializeError } from "utils";
// import SecureLS from "secure-ls";

// const ls = new SecureLS();
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: null,
    error: null,
    success: null,
    users: [
        {
            id: 1,
            firstName: "Demo",
            lastName: "App"
        }
    ],
    singleUser: null
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    success: (state, { payload }) => {
      state.loading = null;
      state.error = null;
      state.success = payload;
    },
    addUser: (state, { payload }) => {
        state.users.push(payload)
    },
    deleteUser: (state, { payload }) => {
        state.users = state.users.filter(x => x.id !== payload.id)
    },
    editUser: (state, { payload }) => {
        state.singleUser = payload
    },
    updateUser: (state, { payload }) => {
        // console.log(payload, "payload")
        state.users = state.users.filter(x => x.id !== payload.id)
        state.users.push(payload)
    },
    clearUser: (state, { payload }) => {
        state.singleUser = null
    },
  },
});

export const {
  loading,
  success,
  error,
  clear,
  addUser,
  deleteUser,
  editUser,
  updateUser,
  clearUser
} = loginSlice.actions;



export default loginSlice.reducer;
