import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4YjU5MjUxLTAwODEtNDA0Mi1hMTZiLTE5MmJkMDkwNzU2YyIsImlzQWRtaW4iOnRydWUsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwibmFtZSI6IkFkbWluIiwiZ2VuZGVyIjoibWFsZSIsImpvYlRpdGxlIjoiIiwicGhvbmVOdW1iZXIiOiIrMjUxMTExMTExMTExMSIsImlhdCI6MTcxNTM0NTk5OSwiZXhwIjoxNzE1MzQ5NTk5fQ.Wv7mnkb2HJyKjWGD3FfA-8bDaQaKn8CxOk6kxA1dyWM",
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  isAuthenticated: false,
  loading: true,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
